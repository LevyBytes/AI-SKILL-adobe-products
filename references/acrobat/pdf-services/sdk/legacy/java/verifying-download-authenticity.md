# Verifying download authenticity

If you want to be sure the installer is genuine, here is how to check it:

1.  Once the package is installed, browse to the `.jar.sha1` file.
2.  Compute the hash using whatever third-party utility you like.
3.  Track down the PDF Services sha1 file and open it. Maven users will find it under the .m2 directory.
4.  Make sure the hash you generated agrees with what sits in the .sha1 file.

Published package digest/integrity value for the version described here.

```text
c0bc2ec0eb15dd43d014bd885b3833539f103cf2
```
