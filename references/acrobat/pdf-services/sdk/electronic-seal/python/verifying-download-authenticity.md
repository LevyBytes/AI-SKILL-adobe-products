# Verifying download authenticity

Should you want to be sure the installer is genuine, here's how to check:

1.  After downloading the package zip, run following command

Replace `/path/to/downloads` with the directory containing the downloaded archive.

```bash
pip hash "/path/to/downloads"/pdfservices-sdk-4.1.0.tar.gz
```

2.  Above command will return the hash of downloaded package.
3.  Verify the hash matches the value published here.

Published package digest/integrity value for the version described here.

```text
ec24e0ddb8da9a968e8b8aa94203f48afb496dc99e505f6debcf0c2d51307cd2
```
