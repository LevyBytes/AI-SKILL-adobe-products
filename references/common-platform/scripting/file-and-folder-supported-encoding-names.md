# File- and Folder-supported encoding names

This basic set of encoding names is supported by the File object. Some character encoders are built in; for most others, File asks the operating system.

Installed language packs can affect whether particular encodings are available. Names for the same encoding appear on one line. Before an encoding name is matched, underlines are changed to dashes.

For Unicode values above 65535, the File object represents the character as a Unicode surrogate pair, which is two characters in the 0xD700-0xDFFF range.

Built-in encodings are:

```text
US-ASCII, ASCII, ISO646-US, ISO-646.IRV:1991, ISO-IR-6,
ANSI-X3.4-1968, CP367, IBM367, US, ISO646.1991-IRV
UCS-2, UCS2, ISO-10646-UCS-2
UCS2LE, UCS-2LE, ISO-10646-UCS-2LE
UCS2BE, UCS-2BE, ISO-10646-UCS-2BE
UCS-4, UCS4, ISO-10646-UCS-4
UCS4LE, UCS-4LE, ISO-10646-UCS-4LE
UCS4BE, UCS-4BE, ISO-10646-UCS-4BE
UTF-8, UTF8, UNICODE-1-1-UTF-8, UNICODE-2-0-UTF-8, X-UNICODE-2-0-UTF-8
UTF16, UTF-16, ISO-10646-UTF-16
UTF16LE, UTF-16LE, ISO-10646-UTF-16LE
UTF16BE, UTF-16BE, ISO-10646-UTF-16BE
CP1252, WINDOWS-1252, MS-ANSI
ISO-8859-1, ISO-8859-1, ISO-8859-1:1987, ISO-IR-100, LATIN1
MACINTOSH, X-MAC-ROMAN
BINARY
```

ASCII raises errors for characters greater than 127. BINARY converts between bytes and Unicode characters by using the lower 8 bits, which makes it convenient for reading and writing binary data.
