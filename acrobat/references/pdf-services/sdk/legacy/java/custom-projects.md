# Custom projects

The samples rely on Maven, but nothing stops you from bringing your own tooling and workflow.

Here is how to assemble a custom project:

1.  Access the .jar in the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Pull in the SDK .jar dependency through whichever dependency manager you favor (Ivy, Gradle, Maven).
3.  Open up the pdfservices-api-credentials.json that came down when your credential was created.
4.  Plug in the [Authentication](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/pdf-electronic-seal-api/index.md#authentication) details following the guidance above.

[Figure: Adobe PDF Services SDK On Maven](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/maven.png)
