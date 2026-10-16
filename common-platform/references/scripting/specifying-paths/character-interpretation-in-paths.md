# Character interpretation in paths

Platforms interpret pathnames differently:

- Windows and Mac OS compare path names without case sensitivity; UNIX treats case as significant.
- Windows accepts both slash (/) and backslash (\) as path element separators. Because backslash is also the escape character, write double backslash (\\) when you mean that character.
- Mac OS accepts both slash (/) and colon (:) as path element separators.

When a path name begins with two slashes, or with two backslashes on Windows, the first element names a remote server. For example, //myhost/mydir/myfile refers to /mydir/myfile on the server myhost.

URI notation supports special characters in pathnames, but each one must be written as escape character (%) followed by a hexadecimal character code. Here, special characters are characters that are not alphanumeric and are not one of:

Reference data, output or notation; not an executable JavaScript program.

```text
/ - - . ! ~ * ' ( )
```

For example, a space becomes %20, so "my file" is written as "my%20file". Likewise, ä becomes %E4, so "Bräun" is written as "Br%E4un".

The global JavaScript functions encodeURI and decodeURI use this same encoding scheme.
