# Legacy Documentation — Gettingstarted (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

You reach the API through SDKs, which exist to shorten the path from zero to a working integration. As soon as your developer credential arrives, pull down one of the sample projects and configure it. Once the APIs feel familiar, fold those samples into the server-side code you write yourself.

Note that only server-based scenarios are supported by the SDK, the kind where credentials live locked inside a trusted environment. Never push SDK credentials out to end-user devices or to any environment you do not control.

## Step 1: Procure Digital Certificate Credentials

1. To obtain the digital certificate, a client first has to enroll with a Trust Service Provider (TSP). Certificates are available from any of the [supported TSPs](api-legacy-documentation.md) that meet Cloud Signature Consortium (CSC) compliance. The [CSC](https://cloudsignatureconsortium.org/wp-content/uploads/2020/01/`CSC_API_V1_1`.0.4.0.pdf) standard covers this in greater depth.
2. Acting as the certificate's legal owner, the client is then put through remote identity verification by the TSP.
3. Once that verification clears, the client receives a digital certificate from the TSP carrying a `credential_id`, `client_id` and `client_secret`. A static PIN normally guards these values. Keep the PIN and the credential details somewhere safe, since you will need them again later.

[Figure: TSP Token Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/cert.png)

## Step 2: (OPTIONAL) Procure Timestamping URL and Credentials

1. If a client wants a trusted timestamp embedded during the eSeal operation on a document, they can sign up with a Timestamping Authority (TSA) of their preference. Using the feature calls for the TSA URL, plus a username and password where those are optional.
2. You can find the roster of supported TSAs [here](api-legacy-documentation.md). Should you need a TSA that is not on the list, get in touch through customer support.

## Step 3: Obtain your TSP OAuth Token

To the TSP's OAuth 2.0 authorization API, the client submits its `client_id` and `client_secret`. Back comes an access token, and the PDF Electronic Seal API then receives it among its [input parameters](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/pdf-electronic-seal-api/howtos/electronic-seal-api.md#api-parameters). That token exists so the sealing process can reach the TSP's endpoints, and it stays valid only for the window the TSP defines.

[Figure: TSP Token Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/tsp-token.png)

**Sample OAuth Request**

```javascript
curl --location --request POST 'https://<base-url>/<API-domain-name>/csc/v0/oauth2/token'
--header 'cache-control: no-cache'
--header 'content-type: application/json'
--data-raw '{
   "lang": "en-US",
   "client_id": "<YOUR_CLIENT_ID>",
   "client_secret": "<YOUR_CLIENT_SECRET>",
   "grant_type": "client_credentials"
}'
```

**Sample Response**

```json
{
   "access_token": "xxxx-xxx-xxx-xxxx-xxxxxxxx",
   "token_type": "Bearer",
   "expires_in": <TIME_IN_SECONDS>
}
```

With every prerequisite now satisfied, the customer invokes the PDF Electronic Seal API using the right parameters and receives the electronically sealed PDF in return.

[Figure: Seal Workflow](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/seal-flow.png)

## Step 4 : Getting the API access token

Authentication guards the PDF Electronic Seal API endpoints, so fetching an access token happens in two stages:

1. ** Get Credentials ** - A credential issued by Adobe is required before you can call the PDF Services API. Grab one by [clicking here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) and finishing the flow. Remember to copy the credential values somewhere secure.
2. ** Retrieve Access Token ** - Requests to the PDF Services APIs have to be authorized with an access_token. You can either pull it via the "Get AccessToken" API in the Postman Collection, supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1, or just run the cURL command shown below to retrieve the access_token.

### Rest API

```javascript
curl --location 'https://pdf-services.adobe.io/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id={{Placeholder for Client ID}}' \
--data-urlencode 'client_secret={{Placeholder for Client Secret}}'
```

## Step 5 : Uploading an asset

With the access token in hand, the next job is to upload the asset, and that too breaks into two stages:

1. Begin by requesting an upload pre-signed URI through the API below.

A fuller description of this API lives [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/asset.uploadpresignedurl).

### Rest API

```javascript
curl --location --request POST 'https://pdf-services.adobe.io/assets' \
--header 'X-API-Key: {{Placeholder for client_id}}' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mediaType": "{{Placeholder for mediaType}}"
}'
```

2. When that call returns a `200` status, take the `uploadUri` value from its response body and PUT the asset straight to the cloud provider with it. The same response hands back an `assetID`, which you will need when you create the job.

### Rest API

```javascript
curl --location -g --request PUT 'https://dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token=REDACTED-EXAMPLE for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential=REDACTED-EXAMPLE for X-Amz-Credential}}&X-Amz-Signature=REDACTED-EXAMPLE for X-Amz-Signature}}' \
--header 'Content-Type: application/pdf' \
--data-binary '@{{Placeholder for file path}}'
```

The PDF Electronic Seal API also lets you attach an optional seal image i.e. a logo, watermark, or background graphic that becomes part of how the seal looks. To upload that seal image, simply repeat Step 4.

## Step 6 : Creating the job

Submit the `assetID` you got back in Step 2 inside the API request body to kick off the job for this operation. A successful submission returns status code `201` together with a `location` response header, and that header is what you poll against later.

The matching API spec for whichever [PDF Operation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md) you are running explains how to build the job request.

## Step 7 : Fetching the status

After the job has been created, poll the `location` value handed back in the Step 3 response header by calling the API shown below.

Further detail on this API is available [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.electronicseal.jobstatus).

### Rest API

```javascript
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/electronicseal/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

## Step 8 : Downloading the asset

When the poll API answers with a `200` code, its body carries a `status` field whose value is one of `in progress`, `done` or `failed`.

A `status` of `in progress` means you should keep hitting the location until the value flips to either `done` or `failed`.

Once `status` reads `done`, the body additionally includes a download pre-signed URI under the `dowloadUri` field; use it to pull the asset straight from the cloud provider through the API call below.

You can dig deeper into this API [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/asset.get).

### Rest API

```javascript
curl --location -g --request GET 'https://dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token=REDACTED-EXAMPLE for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential=REDACTED-EXAMPLE for X-Amz-Credential}}&X-Amz-Signature=REDACTED-EXAMPLE for X-Amz-Signature}}'
```

## SDK

Beyond REST, the PDF Services API can be driven from SDKs in widely used languages including Node.js, Java and .NET.

Allow-list the hostnames below before you put the Adobe PDF Services SDK to work:

- ims-na1.adobelogin.com (Required for all the clients)

On SDK version 3.x or newer:

- When documents are processed in the United States (the default region):

  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)

- When documents are processed in the Europe region:

  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
  - pdf-services-ew1.adobe.io

On SDK versions through 2.x:

- cpf-ue1.adobe.io

### Java

Give your development a head start by bookmarking or grabbing these essential resources:

- This document
- [API reference (Javadoc)](https://www.adobe.com/go/pdftoolsapi_java_docs)
- [Java Sample code](https://www.adobe.com/go/pdftoolsapi_java_samples)
- [Java library](https://www.adobe.com/go/pdftoolsapi_java_maven). The Maven project contains the .jar file.

### Authentication

When the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) step finishes, a zip or json file lands on your machine automatically, and what it holds depends on whether you chose to include personalized code samples.

- **Personalized Download**: hands you a zip bundling `adobe-dc-pdf-services-sdk-java-samples` together with an already-filled-in `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: hands you just the `pdfservices-api-credentials.json`, prefilled with your credentials.

With the zip unpacked, you can launch the bundled samples right away once you define the pair of environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, which you set using these commands:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

**Example pdfservices-api-credentials.json file**

```json
{
  "client_credentials": {
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```

### Setup a Java environment

1.  Install [Java 8 or above](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  Run `javac -version` to verify your install.
3.  Confirm that the JDK bin folder appears in the PATH variable; how you do that depends on your OS.
4.  Install [Maven](https://maven.apache.org/install.html). Whichever tool you like best works fine; for instance:

- **Windows:** Example: [Chocolatey](https://chocolatey.org/packages/maven).
- **Macintosh:** Example: `brew install maven`.

When the project runs, Maven reads pom.xml to retrieve pdfservices-sdk from the public Maven repository. Building the sample project triggers the .jar download on its own. If you would rather, grab the pdfservices-sdk.jar file directly and wire up your own environment.

### Running the samples

Pulling the code samples during the Getting Credentials workflow is the fastest route to a running setup. They bundle it all: code you can run immediately, a credential json file already embedded, and dependency connections set up ahead of time.

1.  Download [the Java sample project](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Build the sample project with Maven: `mvn clean install`.
3.  Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4.  Test the sample code on the command line.
5.  Lean on this document for guidance on running the samples, and on the API Reference for specifics about the API.

Running from the command line is optional. Feel free to pull the samples Maven project into whatever IDE you favor (e.g. IntelliJ/Eclipse) and run them inside it.

### Verifying download authenticity

If you want to be sure the installer is genuine, here is how to check it:

1.  Once the package is installed, browse to the `.jar.sha1` file.
2.  Compute the hash using whatever third-party utility you like.
3.  Track down the PDF Services sha1 file and open it. Maven users will find it under the .m2 directory.
4.  Make sure the hash you generated agrees with what sits in the .sha1 file.

```
c0bc2ec0eb15dd43d014bd885b3833539f103cf2
```

### Logging

Error and exception specifics are documented in the API docs.

- To handle logging, pair the [slf4j API](https://www.slf4j.org/) with a log4js-slf4j binding.
- You will find the logging configuration in src/main/resources/log4js.properties.
- Should you need different bindings, declare them in pom.xml.

**log4js.properties file**

```properties
name=PropertiesConfig
appenders = console

## A sample console appender configuration, Clients can change as per their logging implementation

rootLogger.level = WARN
rootLogger.appenderRefs = stdout
rootLogger.appenderRef.stdout.ref = STDOUT

appender.console.type = Console
appender.console.name = STDOUT
appender.console.layout.type = PatternLayout
appender.console.layout.pattern = [%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} [%t] %c{1} - %msg%n

loggers = pdfservicessdk,validator,apache

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk

logger.pdfservicessdk.name = com.adobe.pdfservices.operation
logger.pdfservicessdk.level = INFO
logger.pdfservicessdk.additivity = false
logger.pdfservicessdk.appenderRef.console.ref = STDOUT

logger.validator.name=org.hibernate
logger.validator.level=WARN

logger.apache.name=org.apache
logger.apache.level=WARN
```

[Figure: Samples directory structure Java](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/samplefilesjava.png)

### Custom projects

The samples rely on Maven, but nothing stops you from bringing your own tooling and workflow.

Here is how to assemble a custom project:

1.  Access the .jar in the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Pull in the SDK .jar dependency through whichever dependency manager you favor (Ivy, Gradle, Maven).
3.  Open up the pdfservices-api-credentials.json that came down when your credential was created.
4.  Plug in the [Authentication](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/legacy-documentation/pdf-electronic-seal-api/index.md#authentication) details following the guidance above.

[Figure: Adobe PDF Services SDK On Maven](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/maven.png)

### .NET

Get a running start on development by bookmarking or downloading these core resources:

- This document
- [Nuget package](https://www.adobe.com/go/pdftoolsapi_net_nuget)
- [.NET API reference](https://www.adobe.com/go/pdftoolsapi_net_docs)
- [.NET Sample code](https://www.adobe.com/go/pdftoolsapi_net_samples)
- Each sample directory carries its own input and output test files

### Prerequisites

For the samples project, you will need these in place:

- NET: version 6.0 or above
- A build tool — either Visual Studio or the .NET Core CLI.

### Authentication

When the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) step finishes, a zip or json file lands on your machine automatically, and what it holds depends on whether you chose to include personalized code samples.

- **Personalized Download**: gives you the zip holding `adobe-dc-pdf-services-sdk-java-samples` alongside a ready-configured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: gives you only the `pdfservices-api-credentials.json`, set up in advance with your credentials.

With the zip unpacked, you can launch the bundled samples right away once you define the pair of environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`, which you set using these commands:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

**Example pdfservices-api-credentials.json file**

```json
{
  "client_credentials": {
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```

### Set up a NET environment

Running a sample or your own custom code calls for the following:

1.  Download and install the [.NET SDK](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install).

Building the sample project pulls in the Nuget package on its own.

### Running the samples

Pulling the code samples during the Getting Credentials workflow is the fastest route to a running setup. They bundle it all: code you can run immediately, a credential json file already embedded, and dependency connections set up ahead of time.

1. Clone or download the [samples project](https://www.adobe.com/go/pdftoolsapi_net_samples).
2. From the samples directory, build the sample project: `dotnet build`.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Test the sample code on the command line.
5. Lean on this document for guidance on running the samples, and on the API Reference for specifics about the API.

### Verifying download authenticity

If you want to be sure the installer is genuine, here is how to check it:

1.  With the Nuget package installed, head into the .nuget directory.
2.  Locate the .sha512 file and open it.
3.  Confirm the hash inside your downloaded file is the same as the value posted here.

```
jdTK6PDvEcfTai7D3N97pd0u/XrvnlEJCqTRPKDrb02zcGzaVdX/2Of3WrHOqqWUFsg7GO3yf5cKXJDFN0kdMw==
```

### Logging

For error and exception details, consult the API docs.

To bridge the various logging frameworks, the .NET SDK relies on [LibLog](https://github.com/damianh/LibLog). The sample projects ship with Log4net as their logging provider, and log4net.config holds those logging configurations. Drop in the configuration for whichever provider you prefer and wire up the appropriate appender so logging is enabled.

**log4net.config file**

```html
<log4net>
  <root>
    <level value="INFO" />
    <appender-ref ref="console" />
  </root>
  <appender name="console" type="log4net.Appender.ConsoleAppender">
    <layout type="log4net.Layout.PatternLayout">
      <conversionPattern value="%date %level %logger - %message%newline" />
    </layout>
  </appender>
</log4net>
```

### Custom projects

Building the sample project grabs the Nuget package for you, yet you can fetch it by hand if you would rather rely on your own tooling and workflow.

1.  Go to [Link](https://www.adobe.com/go/pdftoolsapi_net_nuget).
2.  Download the latest package.

[Figure: Adobe PDF Services SDK on Nuget](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/nuget-free-tier.png)

### Node.js

Get a running start on development by bookmarking or downloading these core resources:

- This document
- [Node.js API reference](https://www.adobe.com/go/pdftoolsapi_node_docs)
- [Node.js Sample code](http://www.adobe.com/go/pdftoolsapi_node_sample)
- [Node.js SDK](http://www.adobe.com/go/pdftoolsapi_node_npm)

### Authentication

Wrapping up the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) step triggers an automatic download of a zip or json file, whose contents differ according to whether you asked for personalized code samples.

- **Personalized Download**: delivers a zip that packs `adobe-dc-pdf-services-sdk-java-samples` next to a pre-set `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: delivers the `pdfservices-api-credentials.json` on its own, with your credentials baked in.

Once the zip is extracted, the included samples will run straight away after you declare the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET`; set them with the commands below:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

**Example pdfservices-api-credentials.json file**

```json
{
  "client_credentials": {
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```

### Set up a Node.js environment

To run a sample or any custom code, you will need to do the following:

1.  Install [Node.js 14.0](https://nodejs.org/en/download/) or higher.

When you build the sample project, the @adobe/pdfservices-node-sdk npm package is fetched automatically.

```
npm install --save @adobe/pdfservices-node-sdk
```

### Running the samples

Pulling the code samples during the Getting Credentials workflow is the fastest route to a running setup. They bundle it all: code you can run immediately, a credential json file already embedded, and dependency connections set up ahead of time.

1. Download [the Node.js sample project ](http://www.adobe.com/go/pdftoolsapi_node_sample).
2. From the samples root directory, run `npm install`.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Test the sample code on the command line.
5. Lean on this document for guidance on running the samples, and on the API Reference for specifics about the API.

### Verifying download authenticity

If you want to be sure the installer is genuine, here is how to check it:

1.  With the package installed, open package.json.
2.  Locate the "\_integrity" key.
3.  Make sure the hash within your downloaded file lines up with the value posted here.

```
sha512-QFwmKkeFTvZhHXrklJOUbjCx8V6FftBC+DAsMCy7Q9vy5sPXQtO47rjAt6R7nzzcA/uUPfuw4/gCFNh7yRKKRQ==
```

### Logging

The API docs spell out error and exception details.

For its logging, the SDK turns to the [log4js API](https://www.npmjs.com/package/log4js). As it runs, the SDK looks for config/pdfservices-sdk-log4js-config.json in the working directory and loads the logging properties from that file. When no configuration file is supplied, the default behavior writes INFO-level output to the console. Tune the logging settings however suits you.

**log4js.properties file**

```json
{
  "appenders": {
    "consoleAppender": {
      "_comment": "A sample console appender configuration, Clients can change as per their logging implementation",
      "type": "console",
      "layout": {
        "type": "pattern",
        "pattern": "%d:[%p]: %m"
      }
    }
  },
  "categories": {
    "default": {
      "appenders": ["consoleAppender"],
      "_comment": "Change the logging levels as per need. info is recommended for pdfservices-node-sdk",
      "level": "info"
    }
  }
}
```

### Custom projects

Building the sample project grabs the Node package for you, yet you can fetch it by hand if you would rather rely on your own tooling and workflow.

1.  Go to [Link](https://www.npmjs.com/package/@adobe/pdfservices-node-sdk)
2.  Download the latest package.

[Figure: Adobe PDF Services SDK on NPM JS](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/node-free-tier.png)
