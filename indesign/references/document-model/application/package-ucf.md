# packageUCF

> **packageUCF**( File **sourceFolder**, File **ucfFile**, String **mimeMediaType** )
>
> Builds a UCF file from a folder.

### Parameters

| Type | Name | Description |
| --- | --- | --- |
| File | sourceFolder | Folder used as the package input for an IDML file. The method does not validate the folder against the IDML spec; the caller must ensure the files are organized correctly. |
| File | ucfFile | Destination UCF file; an existing file at that path is replaced. |
| String | mimeMediaType | MIME media type; the default identifies the package as IDML. (Optional) |
