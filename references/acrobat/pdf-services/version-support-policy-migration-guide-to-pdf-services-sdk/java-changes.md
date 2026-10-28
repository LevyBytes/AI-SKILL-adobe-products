# Java changes

- `artifactId` changed from `pdftools-sdk` to `pdfservices-sdk`
- Replace the `<properties>` tag and SDK `<dependency>` tag in your project's `pom.xml` file with the following:

Place these properties in the Maven project’s `properties` element:

```xml
<properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <pdfservices.sdk.version>4.3.0</pdfservices.sdk.version>
    <pdfservices.sdk.samples.version>4.3.0</pdfservices.sdk.samples.version>
</properties>
```

Place this dependency inside the project’s `dependencies` element:

```xml
<dependency>
    <groupId>com.adobe.documentservices</groupId>
    <artifactId>pdfservices-sdk</artifactId>
    <version>${pdfservices.sdk.version}</version>
</dependency>
```

- Update import statements as per new Package structure. For e.g.

```java
import com.adobe.pdfservices.operation.ExecutionContext;
```
