# Using File and Folder objects - Unicode I/O

During file I/O, Adobe applications translate 8-bit character encodings into Unicode. By default, the conversion assumes the system encoding, such as code page 1252 on Windows or Mac Roman on Mac OS. A File object's encoding property reports the current encoding. Scripts can set encoding to the desired encoding name, and File then asks the operating system for the matching encoder for later I/O. The name is one of the standard Internet encoding names used for HTML, such as ASCII, X-SJIS, or ISO-8859-1. For the full list, see File- and Folder-supported encoding names.

BINARY is a special encoder for binary I/O. It expands each 8-bit character it reads into a Unicode character from 0 through 255. When writing binary files through this encoder, only the lower 8 bits of each Unicode character are written. For example, writing Unicode character 1000, or 0x3E8, actually writes character 232, or 0xE8.

Some common file formats, including UCS-2, UCS-4, UTF-8, and UTF-16, begin their data with a byte order mark (BOM) character (\uFEFF). File.open reads the first few bytes looking for that character. If it finds one, the matching encoding is selected automatically and the character is skipped. If the file begins without a BOM, open() reads the first 2 KB and checks whether the data could be valid UTF-8; when it can, encoding is set to UTF-8.

For 16-bit Unicode output in UTF-16 format, set encoding to UCS-2. This encoding uses the byte-order format supported by the host platform.

When writing UTF-8 encoding or 16-bit Unicode, write the BOM character "\uFEFF" as the first character of the file.
