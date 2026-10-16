# Setup a Java environment

1.  Install [Java 11 or above](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  Run `javac -version` to verify your install.
3.  Verify the JDK bin folder is included in the PATH variable (method varies by OS).
4.  Install [Maven](https://maven.apache.org/install.html). You may use your preferred tool; for example:

- **Windows:** Example: [Chocolatey](https://chocolatey.org/packages/maven).
- **Macintosh:** Example: `brew install maven`.

When the project runs, Maven reads pom.xml and pulls pdfservices-sdk from the public Maven repository, and the .jar downloads on its own as you build the sample project. If you'd rather, grab the pdfservices-sdk.jar file yourself and set up an environment of your own.
