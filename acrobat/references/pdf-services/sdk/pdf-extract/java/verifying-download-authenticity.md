# Verifying download authenticity

You might want to validate that the installer is genuine for security purposes. If so:

1.  After installing the package, navigate to the `.jar.sha1` file.
2.  Calculate the hash with any 3rd party utility.
3.  Find and open PDF Services sha1 file. Note: if you're using Maven, look in the .m2 directory.
4.  Verify the hash you generated matches the value in the .sha1 file.

Published package digest/integrity value for the version described here.

```text
5d49322ced35a8195378a7ed297b4fb721780736
```
