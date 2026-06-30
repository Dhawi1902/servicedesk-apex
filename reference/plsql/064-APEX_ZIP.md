<!-- Source: https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html -->
<!-- Oracle APEX 26.1 API Reference -->

## 64  APEX_ZIP

This package allows to compress and to uncompress files and store them in a ZIP file.

- [Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.Data-Types.html#GUID-30834CEE-92B3-4A75-BCED-E219B54796E6)
- [ADD_FILE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.ADD_FILE-Procedure-2.html#GUID-C079D220-7C17-4EB8-8D57-B7D2B77DB974)
- [FINISH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.FINISH-Procedure.html#GUID-6CD58D8F-7A23-4133-956B-A901E7E82EBE)
- [GET_DIR_ENTRIES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_DIR_ENTRIES-Function.html#GUID-9AE91D64-2EF6-468B-BD5B-DE218EF282FA)
- [GET_FILE_CONTENT Function Signature 1 (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-1.html#GUID-20FBFBA8-6F1A-4D6D-961D-114CC48AD336)
- [GET_FILE_CONTENT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-2.html#GUID-FD9C60C0-1DC1-4B5D-9A5F-FA36BE4DC916)
- [GET_FILES Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILES-Function.html#GUID-04C49D54-E547-42CC-8A70-E400D14FB5D6)

------------------------------------------------------------------------

## 64.1 Data Types

The `APEX_ZIP` package uses the following data types.

t_dir_entries

An easily accessible directory of all the files in the archive that is indexed by the full name of the file including its path.

```
type t_dir_entries is table of t_dir_entry index by VARCHAR2(32767);
```

t_dir_entry

A file in the archive with precomputed metadata.

```
type t_dir_entry is record (
    file_name           VARCHAR2(32767),
    uncompressed_length NUMBER,
    is_directory        BOOLEAN );
```

| Attribute | Description |
|:---|:---|
| `file_name` | Name of the compressed file including the directory path. |
| `uncompressed_length` | The size of the decompressed file in bytes. |
| `is_directory` | `TRUE` if the entry represents a file system directory. |

t_files

Caution:

This data type is deprecated. It will be removed in a future release. Use `t_dir_entries` instead.

Collection of file names and paths.

```
type t_files is table of varchar2(32767) index by binary_integer;
```

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)

------------------------------------------------------------------------

## 64.2 ADD_FILE Procedure

This procedure adds a single file to a zip file. You can call this procedure multiple times to add multiple files to the same zip file.

Tip:

After all files are added, you must call the `APEX_ZIP.FINISH` procedure.

Syntax

```
APEX_ZIP.ADD_FILE (
    p_zipped_blob IN OUT NOCOPY BLOB,
    p_file_name   IN VARCHAR2,
    p_content     IN BLOB )
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_zipped_blob` | BLOB containing the zip file. |
| `p_file_name` | File name, including path, of the file to be added to the zip file. |
| `p_content` | BLOB containing the file. |

Example

This example reads multiple files from a table and puts them into a single zip file.

```
DECLARE
    l_zip_file blob;
BEGIN
    FOR l_file in ( SELECT file_name,
                           file_content
                      FROM my_files )
    LOOP
        apex_zip.add_file (
            p_zipped_blob => l_zip_file,
            p_file_name   => l_file.file_name,
            p_content     => l_file.file_content );
    END LOOP;

    apex_zip.finish (
        p_zipped_blob => l_zip_file );

END;
```

See Also:

[FINISH Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.FINISH-Procedure.html#GUID-6CD58D8F-7A23-4133-956B-A901E7E82EBE)

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)

------------------------------------------------------------------------

## 64.3 FINISH Procedure

This procedure completes the creation of a zip file after adding files with `APEX_ZIP.ADD_FILE`.

Syntax

```
APEX_ZIP.FINISH (
    p_zipped_blob IN OUT NOCOPY BLOB )
```

Parameters

| Parameter       | Description                   |
|:----------------|:------------------------------|
| `p_zipped_blob` | BLOB containing the zip file. |

Example

See [ADD_FILE Procedure](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.ADD_FILE-Procedure-2.html#GUID-C079D220-7C17-4EB8-8D57-B7D2B77DB974).

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)

------------------------------------------------------------------------

## 64.4 GET_DIR_ENTRIES Function

This function returns a table of directory entries containing information about each file in the provided ZIP file. The returned table of records is indexed by the file names (including the path).

Syntax

```
APEX_ZIP.GET_DIR_ENTRIES (
    p_zipped_blob IN BLOB,
    p_only_files  IN BOOLEAN  DEFAULT TRUE,
    p_encoding    IN VARCHAR2 DEFAULT NULL )
    RETURN t_dir_entries;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_zipped_blob` | The BLOB containing the ZIP file. |
| `p_only_files` | Only return files, not directories, in the directory listing. |
| `p_encoding` | The encoding used to compress the file. |

Returns

A table of directory entries.

Example

The following example reads a ZIP file from a table, extracts it, and stores all files of the ZIP file into `my_files`.

```
DECLARE
    l_zip_file      blob;
    l_unzipped_file blob;
    l_dir           apex_zip.t_dir_entries;
    l_file_path     varchar2(32767);
BEGIN
    SELECT file_content
      INTO l_zip_file
      FROM my_zip_files
     WHERE file_name = 'my_file.zip';

    l_dir := apex_zip.get_dir_entries (
                   p_zipped_blob => l_zip_file );

    l_file_path := l_dir.first;
    WHILE l_file_path IS NOT NULL LOOP
        l_unzipped_file := apex_zip.get_file_content (
                               p_zipped_blob => l_zip_file,
                               p_dir_entry   => l_dir(l_file_path) );

        INSERT INTO my_files ( file_name, file_content )
        values ( l_file_path, l_unzipped_file );

        l_file_path := l_dir.next(l_file_path);
    END LOOP;
END;
```

See Also:

- [GET_FILE_CONTENT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-2.html#GUID-FD9C60C0-1DC1-4B5D-9A5F-FA36BE4DC916)
- [GET_FILES Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILES-Function.html#GUID-04C49D54-E547-42CC-8A70-E400D14FB5D6)

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)

------------------------------------------------------------------------

## 64.5 GET_FILE_CONTENT Function Signature 1 (Deprecated)

Caution:

This API is deprecated and will be removed in a future release.

Use [GET_FILE_CONTENT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-2.html#GUID-FD9C60C0-1DC1-4B5D-9A5F-FA36BE4DC916) instead.

This function returns the BLOB of a file contained in a provided zip file.

Syntax

```
APEX_ZIP.GET_FILE_CONTENT (
    p_zipped_blob IN BLOB,
    p_file_name   IN VARCHAR2,
    p_encoding    IN VARCHAR2 DEFAULT NULL )
RETURN BLOB;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_zipped_blob` | This is the BLOB containing the zip file. |
| `p_file_name` | File name, including path, of a file located in the zip file. |
| `p_encoding` | Encoding used to zip the file. |

Returns

| Return | Description                                  |
|:-------|:---------------------------------------------|
| BLOB   | BLOB of the file specified in `p_file_name`. |

Example

See [GET_FILES Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILES-Function.html#GUID-04C49D54-E547-42CC-8A70-E400D14FB5D6).

See Also:

[GET_FILE_CONTENT Function Signature 2](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILE_CONTENT-Function-Signature-2.html#GUID-FD9C60C0-1DC1-4B5D-9A5F-FA36BE4DC916)

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)

------------------------------------------------------------------------

## 64.6 GET_FILE_CONTENT Function Signature 2

This function returns the BLOB of a file contained in a provided zip file.

Syntax

```
APEX_ZIP.GET_FILE_CONTENT (
    p_zipped_blob   IN BLOB,
    p_dir_entry     IN t_dir_entry )
    RETURN BLOB;
```

Parameters

| Parameter       | Description                                       |
|:----------------|:--------------------------------------------------|
| `p_zipped_blob` | The BLOB containing the zip file.                 |
| `p_dir_entry`   | The directory entry describing the required file. |

Returns

| Return | Description                                             |
|:-------|:--------------------------------------------------------|
| BLOB   | BLOB of the file specified in the `p_dir_entry` record. |

Example

See [GET_FILES Function (Deprecated)](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_FILES-Function.html#GUID-04C49D54-E547-42CC-8A70-E400D14FB5D6).

See Also:

[GET_DIR_ENTRIES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_DIR_ENTRIES-Function.html#GUID-9AE91D64-2EF6-468B-BD5B-DE218EF282FA)

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)

------------------------------------------------------------------------

## 64.7 GET_FILES Function (Deprecated)

Caution:

This API is deprecated and will be removed in a future release.

Use [GET_DIR_ENTRIES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_DIR_ENTRIES-Function.html#GUID-9AE91D64-2EF6-468B-BD5B-DE218EF282FA) instead.

This function returns an array of file names, including the path, of a provided zip file that contains a BLOB.

Syntax

```
APEX_ZIP.GET_FILES (
    p_zipped_blob IN BLOB,
    p_only_files  IN BOOLEAN DEFAULT TRUE,
    p_encoding    IN VARCHAR2 DEFAULT NULL )
RETURN t_files;
```

Parameters

| Parameter | Description |
|:---|:---|
| `p_zipped_blob` | This is the zip file containing the BLOB. |
| `p_only_files` | If set to `TRUE`, empty directory entries are not included in the returned array. Otherwise, set to `FALSE` to include empty directory entries. |
| `p_encoding` | This is the encoding used to zip the file. |

Returns

| Return | Description |
|:---|:---|
| t_files | A table of file names and path. See "[Data Types](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.Data-Types.html#GUID-30834CEE-92B3-4A75-BCED-E219B54796E6)" for more details. |

Example

This example demonstrates reading a zip file from a table, extracting it and storing all files of the zip file into `my_files`.

```
declare
    l_zip_file      blob;
    l_unzipped_file blob;
    l_files         apex_zip.t_files;
begin
    select file_content
        into l_zip_file
        from my_zip_files
    where file_name = 'my_file.zip';

    l_files := apex_zip.get_files (
            p_zipped_blob => l_zip_file );

    for i in 1 .. l_files.count loop
        l_unzipped_file := apex_zip.get_file_content (
            p_zipped_blob => l_zip_file,
            p_file_name   => l_files(i) );

        insert into my_files ( file_name, file_content )
        values ( l_files(i), l_unzipped_file );
    end loop;
end;
```

See Also:

[GET_DIR_ENTRIES Function](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.GET_DIR_ENTRIES-Function.html#GUID-9AE91D64-2EF6-468B-BD5B-DE218EF282FA)

**Parent topic:** [APEX_ZIP](https://docs.oracle.com/en/database/oracle/apex/26.1/aeapi/APEX_ZIP.html#GUID-270BFF3A-5FB1-4089-894E-978608F9BD87)
