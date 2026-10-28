# File- and Folder-supported encoding names - Additional encodings

In Windows, encodings are code pages with numeric identifiers. The usual Western Windows character set, for example, is code page 1252. Select a Windows code page by prefixing its number with "CP" or "WINDOWS"; for example, "CP1252" selects code page 1252. The File object also includes many built-in encoding names tied to predefined code page numbers. If a code page is absent, that encoding cannot be selected.

In Mac OS, encoders can be selected by name instead of by code page number. The File object queries Mac OS for the encoder. Where Mac OS character sets match Windows code pages, Mac OS also recognizes those Windows code page numbers.

On UNIX, the installed iconv library determines how many encoders are available.
