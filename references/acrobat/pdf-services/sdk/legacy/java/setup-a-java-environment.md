# Setup a Java environment

1.  Install [Java 8 or above](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  Run `javac -version` to verify your install.
3.  Confirm that the JDK bin folder appears in the PATH variable; how you do that depends on your OS.
4.  Install [Maven](https://maven.apache.org/install.html). Whichever tool you like best works fine; for instance:

- **Windows:** Example: [Chocolatey](https://chocolatey.org/packages/maven).
- **Macintosh:** Example: `brew install maven`.

When the project runs, Maven reads pom.xml to retrieve pdfservices-sdk from the public Maven repository. Building the sample project triggers the .jar download on its own. If you would rather, grab the pdfservices-sdk.jar file directly and wire up your own environment.
