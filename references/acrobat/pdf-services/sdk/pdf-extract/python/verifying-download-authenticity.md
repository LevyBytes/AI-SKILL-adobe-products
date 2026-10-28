# Verifying download authenticity

You might want to validate that the installer is genuine for security purposes. If so:

1.  After downloading the package zip, run following command

Replace `/path/to/downloads` with the directory containing the downloaded archive.

```bash
pip hash "/path/to/downloads"/pdfservices-sdk-4.2.0.tar.gz
```

1.  Above command will return the hash of downloaded package.
2.  Verify the hash matches the value published here.

Published package digest/integrity value for the version described here.

```text
378afa7d3b22683264a1817393932a649b98e4d4b3913816f839de240f7132d5
```
