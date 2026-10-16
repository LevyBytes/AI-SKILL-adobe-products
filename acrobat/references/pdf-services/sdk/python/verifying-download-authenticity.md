# Verifying download authenticity

To be sure the installer is genuine — a prudent check — go about it this way:

1.  Once the package zip is downloaded, run the following command

Replace `/path/to/downloads` with the directory containing the downloaded archive.

```bash
pip hash "/path/to/downloads"/pdfservices-sdk-4.2.0.tar.gz
```

2.  That command prints out the downloaded package's hash.
3.  Check that this hash agrees with the value posted here.

Published package digest/integrity value for the version described here.

```text
378afa7d3b22683264a1817393932a649b98e4d4b3913816f839de240f7132d5
```
