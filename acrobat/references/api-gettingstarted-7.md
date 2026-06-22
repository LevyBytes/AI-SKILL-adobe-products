# Pdf Electronic Seal Api — Gettingstarted (part 1)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

1. To get the digital certificate, a client first registers with a Trust Service Provider (TSP). You can buy a certificate from any of the [supported TSPs](api-overview.md) that meet the Cloud Signature Consortium (CSC) requirements. The [CSC](https://cloudsignatureconsortium.org/wp-content/uploads/2020/01/`CSC_API_V1_1`.0.4.0.pdf) standard covers this in more depth.
2. Acting as the legal owner of the digital certificate, the client is put through remote identity verification by the TSP.
3. Once that verification clears, the TSP hands the client a digital certificate together with a `credential_id`, `client_id` and `client_secret`, generally guarded by a static PIN. Keep both the credential details and the PIN somewhere safe for when you need them later.

[Figure: TSP Token Generation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/cert.png)

## Getting Started — Step 3: Obtain your TSP OAuth Token

To the TSP's OAuth 2.0 authorization API, the client submits its `client_id` and `client_secret`. Back comes an access token, and you hand that token to the PDF Electronic Seal API as one of its [input parameters](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-electronic-seal-api/howtos/electronic-seal-api.md#api-parameters). That token exists so the sealing process can reach the TSP's endpoints, and it stays valid only for the window the TSP sets.

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

With every prerequisite squared away, the customer then invokes the PDF Electronic Seal API using the right parameters and receives the electronically sealed PDF in return.

[Figure: Seal Workflow](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/seal-flow.png)

## Getting Started — Step 4 : Getting the API access token

The PDF Electronic Seal API exposes authenticated endpoints, and obtaining an access token takes two steps:

1. ** Get Credentials ** - An Adobe-provided credential is needed to invoke the PDF Services API. [Click here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) to obtain one and finish the workflow. Remember to copy the credential values and stash them somewhere secure.
2. ** Retrieve Access Token ** - To authorize a request, the PDF Services APIs need an access_token. Either pull it via the "Get AccessToken" call in the Postman Collection, supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1, or just run the cURL shown below to fetch the access_token directly.

### REST API

```javascript
curl --location 'https://pdf-services.adobe.io/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id={{Placeholder for Client ID}}' \
--data-urlencode 'client_secret={{Placeholder for Client Secret}}'
```

## Getting Started — Step 5 : Uploading an asset

With the access token in hand, the next job is uploading the asset, and that too breaks into two steps:

1. Start by requesting an upload pre-signed URI through the API shown here.

A fuller description of the API lives [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/asset.uploadpresignedurl).

### REST API

```javascript
curl --location --request POST 'https://pdf-services.adobe.io/assets' \
--header 'X-API-Key: {{Placeholder for client_id}}' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "mediaType": "{{Placeholder for mediaType}}"
}'
```

2. Once that API returns a `200` response status, take the `uploadUri` field from its response body and PUT the asset straight to the cloud provider with the call below. The same response hands back an `assetID` field, which feeds into creating the job.

### REST API

```javascript
curl --location -g --request PUT 'https://dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token=REDACTED-EXAMPLE for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential=REDACTED-EXAMPLE for X-Amz-Credential}}&X-Amz-Signature=REDACTED-EXAMPLE for X-Amz-Signature}}' \
--header 'Content-Type: application/pdf' \
--data-binary '@{{Placeholder for file path}}'
```

With the PDF Electronic Seal API you may optionally supply a seal image — that is, a logo, watermark, or background graphic that becomes part of how the seal looks. Repeat Step 4 to upload that seal image.

## Getting Started — Step 6 : Creating the job

Build the job for the operation by passing the `assetID` you got in Step 2 inside the API request body. A successful submission returns the `201` status code plus a `location` response header, which you then use for polling.

To build the job, see the matching API spec for the specific [PDF Operation](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md).

## Getting Started — Step 7 : Fetching the status

With the job created, poll the `location` handed back in the Step 3 response header by calling the API below.

A fuller description of the API lives [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.electronicseal.jobstatus).

### REST API

```javascript
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/electronicseal/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

Rather than polling the status API, you can instead have job-completion notices delivered over a Webhook. See the [webhook documentation](api-webhook-notification.md) for the details.

## Getting Started — Step 8 : Downloading the asset

When the poll API comes back with a `200` response code, its response body carries a `status` field whose value is `in progress`, `done` or `failed`.

A `status` of `in progress` means you should keep polling the location until it flips to `done` or `failed`.

When `status` reads `done`, the response body additionally includes a download pre-signed URI in the `dowloadUri` field; use it to pull the asset straight from the cloud provider with the API call below.

A fuller description of the API lives [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/asset.get).

### REST API

```javascript
curl --location -g --request GET 'https://dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com/b37fd583-1ab6-4f49-99ef-d716180b5de4?X-Amz-Security-Token=REDACTED-EXAMPLE for X-Amz-Security-Token}}&X-Amz-Algorithm={{Placeholder for X-Amz-Algorithm}}&X-Amz-Date={{Placeholder for X-Amz-Date}}&X-Amz-SignedHeaders={{Placeholder for X-Amz-SignedHeaders}}&X-Amz-Expires={{Placeholder for X-Amz-Expires}}&X-Amz-Credential=REDACTED-EXAMPLE for X-Amz-Credential}}&X-Amz-Signature=REDACTED-EXAMPLE for X-Amz-Signature}}'
```

## Getting Started — SDK

Beyond the REST interface, the PDF Services API can be reached through SDKs in widely used languages — Node.js, Java, .NET and Python.

Before you put the Adobe PDF Services SDK to work, add the hostnames below to your allow-list:

- ims-na1.adobelogin.com (required for all clients)

**SDK version 4.x and above — United States (Default) region**

- dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com (not required if using external storage for both input and output)
- pdf-services-ue1.adobe.io
- pdf-services.adobe.io (default URI)

**SDK version 4.x and above — Europe region**

- dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com (not required if using external storage for both input and output)
- pdf-services-ew1.adobe.io

**SDK version 3.x and above — United States (Default) region**

- dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
- pdf-services-ue1.adobe.io
- pdf-services.adobe.io (default URI)

**SDK version 3.x and above — Europe region**

- dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
- pdf-services-ew1.adobe.io

**SDK version up to 2.x**

- cpf-ue1.adobe.io

### Java

Get a head start on development by bookmarking or grabbing these essential resources:

- This document
- [API reference (Javadoc)](https://www.adobe.com/go/pdftoolsapi_java_docs)
- [Java Sample code](https://www.adobe.com/go/pdftoolsapi_java_samples)
- [Java library](https://www.adobe.com/go/pdftoolsapi_java_maven). The Maven project contains the .jar file.

### Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file lands automatically; what it holds depends on whether you chose to include personalized code samples.

- **Personalized Download**: yields a zip holding `adobe-dc-pdf-services-sdk-java-samples`, where a `pdfservices-api-credentials.json` file is already set up for you.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, its credentials already filled in.

With the zip downloaded, you can run its samples right away once you set the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` using the commands that follow:

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

1.  Install [Java 11 or above](http://www.oracle.com/technetwork/java/javase/downloads/index.html).
2.  Run `javac -version` to verify your install.
3.  Verify the JDK bin folder is included in the PATH variable (method varies by OS).
4.  Install [Maven](https://maven.apache.org/install.html). You may use your preferred tool; for example:

- **Windows:** Example: [Chocolatey](https://chocolatey.org/packages/maven).
- **Macintosh:** Example: `brew install maven`.

When the project runs, Maven reads pom.xml and pulls pdfservices-sdk from the public Maven repository, and the .jar downloads on its own as you build the sample project. If you'd rather, grab the pdfservices-sdk.jar file yourself and set up an environment of your own.

### Running the samples

Pulling down the code samples during the Getting Credentials workflow is the fastest route to a working setup. Each bundle hands you ready-to-run sample code, a baked-in credential json file, and connections to dependencies already wired up.

1.  Download [the Java sample project](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Build the sample project with Maven: `mvn clean install`.
3.  Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4.  Exercise the sample code from the command line.
5.  Lean on this document for how to run the samples, and on the API Reference whenever you need API specifics.

Running from the command line isn't required. You're free to pull the samples Maven project into whatever IDE you like (e.g. IntelliJ/Eclipse) and run the samples there instead.

### Verifying download authenticity

Should you want to be sure the installer is genuine — a sensible security precaution — do the following:

1.  With the package installed, browse to its `.jar.sha1` file.
2.  Compute the hash using whatever third-party utility you prefer.
3.  Track down the PDF Services sha1 file and open it. Note: Maven users will find it under the .m2 directory.
4.  Confirm that the hash you produced lines up with what the .sha1 file records.

```
5d49322ced35a8195378a7ed297b4fb721780736
```

### Logging

Consult the API docs when you need error and exception specifics.

- For logging, pair the [slf4j API](https://www.slf4j.org/) with a log4js-slf4j binding.
- You'll find the logging configuration under src/main/resources/log4js.properties.
- Should you need a different binding, declare it in pom.xml.

**log4js.properties file**

```properties
name=PropertiesConfig
appenders = console
```

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk

logger.pdfservicessdk.name = com.adobe.pdfservices.operation
logger.pdfservicessdk.level = INFO
logger.pdfservicessdk.additivity = false
logger.pdfservicessdk.appenderRef.console.ref = STDOUT

logger.validator.name=org.hibernate
logger.validator.level=WARN

logger.apache.name=org.apache
logger.apache.level=WARN

````

![Samples directory structure Java](../images/samplefilesjava.png)

### Custom projects

Maven ships with the samples, but nothing stops you from swapping in whatever toolchain and workflow you already favor.

To build a custom project:

1.  Access the .jar in the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Use your preferred dependency management tool (Ivy, Gradle, Maven), to include the SDK .jar dependency.
3.  Open the pdfservices-api-credentials.json downloaded when you created your credential.
4.  Add the [Authentication](index.md#authentication) details as described above.

![Adobe PDF Services SDK On Maven](../images/maven.png)

### .NET

Bookmark or grab these core resources to give your development a running start:

-   This document
-   [Nuget package](https://www.adobe.com/go/pdftoolsapi_net_nuget)
-   [.NET API reference](https://www.adobe.com/go/pdftoolsapi_net_docs)
-   [.NET Sample code](https://www.adobe.com/go/pdftoolsapi_net_samples)
-   Input/output test files reside in the their respective sample directories

### Prerequisites

Here is what the samples project depends on:

-   NET: version 8.0 or above
-   A build Tool: Either Visual Studio or .NET Core CLI.

### Authentication

Finishing the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) flow triggers an automatic download of a zip or json file, and what that file holds depends on whether you chose personalized code samples.

-   **Personalized Download**: Downloads the zip which contains `adobe-DC.PDFServices.SDK.NET.Samples` with a preconfigured `pdfservices-api-credentials.json` file.
-   **Non Personalized Download**: Downloads the `pdfservices-api-credentials.json` with your preconfigured credentials.

With the zip in hand, the samples inside it run as-is once you've defined the pair of environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by issuing the commands below:

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
        "client_id": "<`YOUR_CLIENT_ID`>",
        "client_secret": "<`YOUR_CLIENT_SECRET`>"
    },
    "service_principal_credentials": {
       "organization_id": "<`YOUR_ORGNIZATION_ID`>"
    }
}
````

### Set up a NET environment

You'll need the following before any sample or custom code will run:

1.  Download and install the [.NET SDK](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install).

Building the sample project pulls the Nuget package down for you automatically.

### Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup. Bundled in are ready-to-run sample code, a credential json file already embedded, plus dependency connections that come preconfigured.

1. Clone or download the [samples project](https://www.adobe.com/go/pdftoolsapi_net_samples).
2. From the samples directory, build the sample project: `dotnet build`.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Run the sample code from the command line to try it out.
5. Lean on this document for the particulars of running samples, and on the API Reference for the API specifics.

### Verifying download authenticity

Should you want to be sure the installer is genuine, here's how to check:

1.  After installing the Nuget package, navigate to the .nuget directory.
2.  Find and open the .sha512 file.
3.  Verify the hash in the downloaded file matches the value published here.

```
PAJ0eB+wUhgvLcIcH37IUgfFV7TxG2wWhcfaON57hWmpDFiPqAM6kgKFfyzAWVAnkzAQoQEWLPxgSIASNy5d8A==
```

### Logging

Error and exception specifics are covered in the API docs.

To bridge across logging frameworks, the .NET SDK relies on [LibLog](https://github.com/damianh/LibLog). Within the sample projects, Log4net serves as the logging provider, and log4net.config carries those logging configurations. Drop in the configuration for whichever provider you prefer and wire up the appropriate appender to switch logging on.

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

The Nuget package arrives automatically when the sample project builds, yet you can fetch it by hand if you'd rather rely on your own toolchain and workflow.

1.  Go to [Link](https://www.adobe.com/go/pdftoolsapi_net_nuget).
2.  Download the latest package.

![Adobe PDF Services SDK on Nuget](../images/nuget-free-tier.png)

### Node.js

Bookmark or grab these core resources to give your development a running start:

- This document
- [Node.js API reference](https://www.adobe.com/go/pdftoolsapi_node_docs)
- [Node.js Sample code](http://www.adobe.com/go/pdftoolsapi_node_sample)
- [Node.js SDK](http://www.adobe.com/go/pdftoolsapi_node_npm)

### Authentication

Finishing the [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) flow triggers an automatic download of a zip or json file, and what that file holds depends on whether you chose personalized code samples.
