# UNIX encodings

On UNIX, the File object checks for iconv library availability and uses whichever encodings are present there. For a special UNIX encoding, install an iconv encoding module that converts between UTF-16, the File object's internal format, and the desired encoding.
