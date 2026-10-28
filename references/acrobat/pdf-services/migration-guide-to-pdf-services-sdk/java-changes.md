# Java changes

- The `artifactId` is now `pdfservices-sdk` rather than the old `pdftools-sdk`
- In your project’s `pom.xml`, swap out the existing `<properties>` tag and the SDK `<dependency>` tag for these:

XML excerpt; retain the enclosing document/configuration described here.

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
    <pdfservices.sdk.version>3.5.1</pdfservices.sdk.version>
    <pdfservices.sdk.samples.version>3.5.1</pdfservices.sdk.samples.version>
</properties>

<dependency>
    <groupId>com.adobe.documentservices</groupId>
    <artifactId>pdfservices-sdk</artifactId>
    <version>${pdfservices.sdk.version}</version>
</dependency>
```

- Revise your import statements to match the new package structure. For e.g.
