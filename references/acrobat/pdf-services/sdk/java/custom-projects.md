# Custom projects

The samples lean on Maven, but nothing stops you from bringing your own tooling and process.

Rolling your own project goes like this:

1.  Grab the .jar from the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Pull the SDK .jar in as a dependency using whichever manager you favour (Ivy, Gradle, Maven).
3.  Open the pdfservices-api-credentials.json that downloaded when your credential was created.
4.  Wire in the [Authentication](../../legacy/authentication-how-to-get-started.md) details covered above.

[Figure: Adobe PDF Services SDK On Maven](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/maven.png)
