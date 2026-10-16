# Custom projects

Maven ships with the samples, but nothing stops you from swapping in whatever toolchain and workflow you already favor.

To build a custom project:

1.  Access the .jar in the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Use your preferred dependency management tool (Ivy, Gradle, Maven), to include the SDK .jar dependency.
3.  Open the pdfservices-api-credentials.json downloaded when you created your credential.
4.  Add the [Authentication](authentication.md#authentication) details as described above.

![Adobe PDF Services SDK On Maven](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/53d3c2030c0371e95a2edca19b888c4656140eb5/src/pages/overview/images/maven.png)
