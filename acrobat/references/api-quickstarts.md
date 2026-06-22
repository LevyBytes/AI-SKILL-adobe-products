# Dotnet, Java

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Quickstart for Adobe PDF Services API (.NET); Quickstarts; Quickstart for Adobe PDF Services API (Java) — Prerequisites.

## Quickstart for Adobe PDF Services API (.NET)

Let's get going with the Adobe PDF Services API by working through one straightforward case: feeding in a PDF and turning it into Microsoft Word. Across this guide, you'll follow every step needed to build a program that pulls this off.

### Step One: Getting credentials

1. Kick things off by pointing your browser at [https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api). Should you not yet be signed in to Adobe.com, you'll have to log in or register a fresh user. A personal email account is the suggested choice here rather than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/dotnet/shot1.png)

2. Once you've signed up or logged in, the next prompt asks you to title your new credentials. Give it the name "New Project".

3. Switch the "Choose language" setting over to ".Net".

4. Take note as well of the checkbox labeled "Create personalized code sample." Ticking it bundles a broad collection of samples in with your credentials, which can come in handy for digging deeper down the line.

5. Tick the checkbox indicating that you accept the developer terms, then hit "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/dotnet/shot2-spc.png)

6. The moment your credentials exist, a download of them starts on its own:

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/dotnet/shot3-spc.png)

### Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-.NetSamples.zip. Extracting it reveals a samples folder plus the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/dotnet/shot5-spc.png)

2. Move that `pdfservices-api-credentials.json` file into a directory you've just made.

3. Within that new directory, add a file called `ExportPDFToWord.csproj`. Its job is to spell out our requirements and to help shape the application we're putting together.

```xml

```

The dependencies we require and the way the application gets built are both defined by this file.

The PDF our application works on is `Bodea Brochure.pdf` (grab it from [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)), and the goal is to turn it into a Microsoft Word document named `Bodea Brochure.docx`.

4. Inside your editor, open up the directory holding the credentials you copied earlier and the `csproj` file you just made. Add one more file there, `Program.cs`.

With that, coding can begin.

### Step Three: Creating the application

1. The starting point is pulling in the dependencies the code relies on:

```javascript
using System;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.exportpdf;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;
```

2. Next, lay out our main class together with its `Main` method:

```javascript
namespace ExportPDFToDocx
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
        static void Main()
        {
        }
    }
}
```

3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands and replacing placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` with the credentials present in `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. With that done, we can build the credentials object and put it to use:

```javascript
// Initial setup, create credentials instance
ICredentials credentials = new ServicePrincipalCredentials(
    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

// Creates a PDF Services instance
PDFServices pdfServices = new PDFServices(credentials);
```

5. The asset upload comes next:

```javascript
IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());
```

6. After that, we assemble the parameters and the job itself:

```javascript
// Create parameters for the job
ExportPDFParams exportPDFParams = ExportPDFParams.ExportPDFParamsBuilder(ExportPDFTargetFormat.DOCX)
    .Build();

// Creates a new job instance
ExportPDFJob exportPDFJob = new ExportPDFJob(asset, exportPDFParams);
```

What this block establishes is the operation in play (an Export) and the parameter feeding the Export PDF job. The lone parameter here is the destination format, namely DOCX.

7. The block that follows hands off the job and retrieves its result:

```javascript
// Submits the job and gets the job result
String location = pdfServices.Submit(exportPDFJob);
PDFServicesResponse<ExportPDFResult> pdfServicesResponse =
    pdfServices.GetJobResult<ExportPDFResult>(location, typeof(ExportPDFResult));

// Get content from the resulting asset(s)
IAsset resultAsset = pdfServicesResponse.Result.Asset;
StreamAsset streamAsset = pdfServices.GetContent(resultAsset);
```

8. This next block writes the result out to the location you name:

```javascript
// Creating output streams and copying stream asset's content to it
String outputFilePath = "/output/Bodea Brochure.docx";
new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
streamAsset.Stream.CopyTo(outputStream);
outputStream.Close();
```

Running this carries out the Export and then drops the resulting Word file onto disk.

[Figure: Example running in the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/dotnet/shot9.png)

Pulled together, the full program reads as follows (`Program.cs`):

```javascript
using System;
using System.IO;
using System.Reflection;
using Adobe.PDFServicesSDK;
using Adobe.PDFServicesSDK.auth;
using Adobe.PDFServicesSDK.exception;
using Adobe.PDFServicesSDK.io;
using Adobe.PDFServicesSDK.pdfjobs.jobs;
using Adobe.PDFServicesSDK.pdfjobs.parameters.exportpdf;
using Adobe.PDFServicesSDK.pdfjobs.results;
using log4net;
using log4net.Config;
using log4net.Repository;

namespace ExportPDFToDocx
{
    class Program
    {
        private static readonly ILog log = LogManager.GetLogger(typeof(Program));
                static void Main()
        {
            //Configure the logging
            ConfigureLogging();
            try
            {
                // Initial setup, create credentials instance
                ICredentials credentials = new ServicePrincipalCredentials(
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_ID"),
                    Environment.GetEnvironmentVariable("PDF_SERVICES_CLIENT_SECRET"));

                // Creates a PDF Services instance
                PDFServices pdfServices = new PDFServices(credentials);

                // Creates an asset from source file and upload
                using Stream inputStream = File.OpenRead(@"Bodea Brochure.pdf");
                IAsset asset = pdfServices.Upload(inputStream, PDFServicesMediaType.PDF.GetMIMETypeValue());

                // Create parameters for the job
                ExportPDFParams exportPDFParams = ExportPDFParams.ExportPDFParamsBuilder(ExportPDFTargetFormat.DOCX)
                    .Build();

                // Creates a new job instance
                ExportPDFJob exportPDFJob = new ExportPDFJob(asset, exportPDFParams);

                // Submits the job and gets the job result
                String location = pdfServices.Submit(exportPDFJob);
                PDFServicesResponse<ExportPDFResult> pdfServicesResponse =
                    pdfServices.GetJobResult<ExportPDFResult>(location, typeof(ExportPDFResult));

                // Get content from the resulting asset(s)
                IAsset resultAsset = pdfServicesResponse.Result.Asset;
                StreamAsset streamAsset = pdfServices.GetContent(resultAsset);

                // Creating output streams and copying stream asset's content to it
                String outputFilePath = "/output/Bodea Brochure.docx";
                new FileInfo(Directory.GetCurrentDirectory() + outputFilePath).Directory.Create();
                Stream outputStream = File.OpenWrite(Directory.GetCurrentDirectory() + outputFilePath);
                streamAsset.Stream.CopyTo(outputStream);
                outputStream.Close();

                Console.WriteLine("Saving asset at " + Directory.GetCurrentDirectory() + outputFilePath);
            }
            catch (ServiceUsageException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (ServiceApiException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (SDKException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (IOException ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
            catch (Exception ex)
            {
                log.Error("Exception encountered while executing operation", ex);
            }
        }

        static void ConfigureLogging()
        {
            ILoggerRepository logRepository = LogManager.GetRepository(Assembly.GetEntryAssembly());
            XmlConfigurator.Configure(logRepository, new FileInfo("log4net.config"));
        }
    }
}
```

## Quickstarts

Looking to give the PDF Services API a fast spin? Each quickstart below walks you through landing your first working operation, and there's one matched to every SDK we support:

- [Node.js](api-quickstarts-2.md)
- [Java](api-quickstarts.md)
- [.NET](api-quickstarts.md)
- [Python](api-quickstarts-2.md)

## Quickstart for Adobe PDF Services API (Java) — Prerequisites

Here's what has to be in place before you can follow this guide:

- [Java](http://www.oracle.com/technetwork/java/javase/downloads/index.html) - You'll need Java 11 or a later version.
- [Maven](https://maven.apache.org/install.html)
- An Adobe ID. Lacking one isn't a problem — the credential setup guides you through making it.
- Some means of editing code. This guide doesn't tie you to any particular editor.

### Quickstart for Adobe PDF Services API (Java) — Step One: Getting credentials

1. Kick things off by pointing your browser at [https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api). Should you not yet be signed in to Adobe.com, you'll have to log in or register a fresh user. A personal email account is the suggested choice here rather than a federated ID.

[Figure: Sign in](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/java/shot1.png)

2. Once you've signed up or logged in, the next prompt asks you to title your new credentials. Give it the name "New Project".

3. Switch the "Choose language" setting over to "Java".

4. Take note as well of the checkbox labeled "Create personalized code sample." Ticking it bundles a broad collection of samples in with your credentials, which can come in handy for digging deeper down the line.

5. Tick the checkbox indicating that you accept the developer terms, then hit "Create credentials."

[Figure: Project setup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/java/shot2-spc.png)

6. The moment your credentials exist, a download of them starts on its own:

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/java/shot3-spc.png)

### Quickstart for Adobe PDF Services API (Java) — Step Two: Setting up the project

1. Look inside your Downloads folder for the credentials ZIP, PDFServicesSDK-JavaSamples.zip. Extracting it reveals a samples folder plus the `pdfservices-api-credentials.json` file.

[Figure: alt](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/java/shot5-spc.png)

2. Move the `pdfservices-api-credentials.json` into a directory you've just made.

3. Inside that directory, create a file named `pom.xml` and drop in the content below:

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>com.adobe.documentservices</groupId>
  <artifactId>pdfservices-sdk-pdf-guide</artifactId>
  <version>1</version>

  <name>PDF Services Java SDK Samples</name>

  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <pdfservices.sdk.version>4.3.0</pdfservices.sdk.version>
  </properties>

  <dependencies>

    <dependency>
      <groupId>com.adobe.documentservices</groupId>
      <artifactId>pdfservices-sdk</artifactId>
      <version>${pdfservices.sdk.version}</version>
    </dependency>



    <dependency>
      <groupId>org.apache.logging.log4j</groupId>
      <artifactId>log4j-slf4j-impl</artifactId>
      <version>2.21.1</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.0</version>
        <configuration>
          <source>${maven.compiler.source}</source>
          <target>${maven.compiler.target}</target>
        </configuration>
      </plugin>
      <plugin>
        <groupId>org.codehaus.mojo</groupId>
        <artifactId>exec-maven-plugin</artifactId>
        <version>1.5.0</version>
        <executions>
          <execution>
            <goals>
              <goal>java</goal>
            </goals>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

The dependencies we require and the way the application gets built are both defined by this file.

The PDF our application works on is `Bodea Brochure.pdf` (grab it from [here](https://documentcloud.adobe.com/view-sdk-demo/PDFs/Bodea%20Brochure.pdf)), and the goal is to turn it into a Microsoft Word document named `Bodea Brochure.docx`.

4. Inside your editor, open the directory where you copied the credentials, then add a new directory, `src/main/java`. Within it, create `ExportPDFToWord.java`.

With that, coding can begin.

### Quickstart for Adobe PDF Services API (Java) — Step Three: Creating the application

1. The starting point is pulling in the dependencies the code relies on:

```javascript

```

2. Next, lay out our main class:

```javascript
public class ExportPDFToWord {

    private static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(ExportPDFToWord.class);

    public static void main(String[] args) {

	}

}
```

3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands and replacing placeholders `YOUR CLIENT ID` and `YOUR CLIENT SECRET` with the credentials present in `pdfservices-api-credentials.json` file:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. With that done, we can build the credentials object and put it to use:

```javascript
// Initial setup, create credentials instance
Credentials credentials = new ServicePrincipalCredentials(
        System.getenv("PDF_SERVICES_CLIENT_ID"),
        System.getenv("PDF_SERVICES_CLIENT_SECRET"));

// Creates a PDF Services instance
PDFServices pdfServices = new PDFServices(credentials);
```

5. The asset upload comes next:

```javascript
Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
```

6. After that, we assemble the parameters and the job itself:

```javascript
// Create parameters for the job
ExportPDFParams exportPDFParams = ExportPDFParams.exportPDFParamsBuilder(ExportPDFTargetFormat.DOCX).build();

// Creates a new job instance
ExportPDFJob exportPDFJob = new ExportPDFJob(asset, exportPDFParams);
```

What this block establishes is the operation in play (an Export) and the parameter feeding the Export PDF job. The lone parameter here is the destination format, namely DOCX.

7. The block that follows hands off the job and retrieves its result:

```javascript
// Submit the job and get the job result
String location = pdfServices.submit(exportPDFJob);
PDFServicesResponse<ExportPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ExportPDFResult.class);

// Get content from the resulting asset(s)
Asset resultAsset = pdfServicesResponse.getResult().getAsset();
StreamAsset streamAsset = pdfServices.getContent(resultAsset);
```

8. This next block writes the result out to the location you name:

```javascript
// Creates an output stream and copy stream asset's content to it
OutputStream outputStream = Files.newOutputStream(new File("./Bodea Brochure.docx").toPath());
IOUtils.copy(streamAsset.getInputStream(), outputStream);
```

Running this carries out the Export and then drops the resulting Word file onto disk.

[Figure: Example running in the command line](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/quickstarts/java/shot9.png)

Assembled in full, the program looks like this (`src/main/java/ExportPDFToWord.java`):

```javascript

public class ExportPDFToWord {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExportPDFToWord.class);

    public static void main(String[] args) {

        try (InputStream inputStream = Files.newInputStream(new File("src/main/resources/Bodea Brochure.pdf").toPath())) {
            // Initial setup, create credentials instance
            Credentials credentials = new ServicePrincipalCredentials(
                    System.getenv("PDF_SERVICES_CLIENT_ID"),
                    System.getenv("PDF_SERVICES_CLIENT_SECRET"));

            // Creates a PDF Services instance
            PDFServices pdfServices = new PDFServices(credentials);

            // Creates an asset(s) from source file(s) and upload
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());

            // Create parameters for the job
            ExportPDFParams exportPDFParams = ExportPDFParams.exportPDFParamsBuilder(ExportPDFTargetFormat.DOCX)
                    .build();

            // Creates a new job instance
            ExportPDFJob exportPDFJob = new ExportPDFJob(asset, exportPDFParams);

            // Submit the job and gets the job result
            String location = pdfServices.submit(exportPDFJob);
            PDFServicesResponse<ExportPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ExportPDFResult.class);

            // Get content from the resulting asset(s)
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);

            // Creates an output stream and copy stream asset's content to it
            Files.createDirectories(Paths.get("output/"));
            OutputStream outputStream = Files.newOutputStream(new File("output/Bodea Brochure.docx").toPath());
            LOGGER.info("Saving asset at output/Bodea Brochure.docx");
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
}
```

## See also

- [Quickstarts](api-pdf-extract-api.md)
