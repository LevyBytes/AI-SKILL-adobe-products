# Custom projects

The samples lean on Maven, but nothing stops you from substituting your own toolchain and workflow.

To build a custom project:

1.  Access the .jar in the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Use your preferred dependency management tool (Ivy, Gradle, Maven), to include the SDK .jar dependency.
3.  Open the pdfservices-api-credentials.json downloaded when you created your credential.
4.  Add the [Authentication](../../../legacy/authentication-how-to-get-started.md) details as described above.

[Figure: Adobe PDF Services SDK On Maven](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/maven.png)
