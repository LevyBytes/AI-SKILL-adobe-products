# Windows drives

In Windows, volume names map to drive letters. Normally, URI path /c/temp/file becomes Windows path C:\temp\file.

If the first path component matches an existing drive name, that component is always treated as the drive.

A root folder can have the same name as a drive; for example, Windows can contain C:\C. A path beginning with /c still targets drive C:, so to reach that folder by name, include both the drive and folder names, such as /c/c for C:\C.

On the current drive, a root folder whose name matches another drive letter is treated as a folder. If D:\C exists and the current drive is D:, then URI path /c/temp/file translates to Windows path D:\c\temp\file. To access drive C in that situation, use Windows path name conventions.

Remote volumes use a uniform naming convention (UNC) path name in the form //servername/sharename. These path names remain portable because Mac OS X and UNIX ignore repeated slash characters. For Windows local volumes, UNC names are not valid. The examples below assume current drive D:

| URI path name | Windows path name |
| --- | --- |
| /c/dir/file | c:\\dir\\file |
| /remote/dir/file | D:\\remote\\dir\\file |
| /root/dir/file | D:\\root\\dir\\file |
| ~/dir/file | C:\\Users\\jdoe\\dir\\file |
