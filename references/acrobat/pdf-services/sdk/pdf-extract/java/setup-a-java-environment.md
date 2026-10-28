# Setup a Java environment

1.  Install [Java 11 or above](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  Run `javac -version` to verify your install.
3.  Verify the JDK bin folder is included in the PATH variable (method varies by OS).
4.  Install [Maven](https://maven.apache.org/install.html). You may use your preferred tool; for example:
    - **Windows:** Example: [Chocolatey](https://chocolatey.org/packages/maven).
    - **Macintosh:** Example: `brew install maven`.

At build time, Maven reads pom.xml and pulls pdfservices-sdk down from the public Maven repository, so the .jar arrives automatically when you compile the sample project. If you'd rather, fetch the pdfservices-sdk.jar yourself and wire up your own environment.
