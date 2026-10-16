# Verifying download authenticity

If you'd like to be sure the installer is genuine — a sensible security precaution — here's how:

1.  With the package installed, head to the `.jar.sha1` file.
2.  Use whatever third-party tool you like to compute the hash.
3.  Track down the PDF Services sha1 file and open it (under the .m2 directory if Maven is in play).
4.  Make sure your generated hash and the .sha1 file's value are identical.

Published package digest/integrity value for the version described here.

```text
5d49322ced35a8195378a7ed297b4fb721780736
```
