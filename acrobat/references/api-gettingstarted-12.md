# Pdf Services Api — Gettingstarted

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

Building against the PDF Services SDK calls for a credential issued by Adobe. [Click HERE](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) to obtain one and run through the workflow, then copy the credential values somewhere safe and keep them stored.

As part of creating the credential, you'll be offered a **Personalized Code Sample Download**. Picking _Personalized_ bakes your credential into the samples and trims a couple of steps out of getting your development environment ready.

## Step 1 : Getting the access token

Endpoints in the PDF Services API require authentication. Obtaining an access token happens in two stages:

1. **Get Credentials** Calling the PDF Services API depends on a credential that Adobe issues. [Click here](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) to get one and finish the workflow, then copy the credential values to a secure spot and save them.
2. **Retrieve Access Token** Authorizing a request to the PDF Services APIs takes an access_token. Either pull it via the "Get AccessToken" API in the Postman Collection — supplying the client_id and client_secret found in the pdfservices-api-credentials.json file you downloaded in step 1 — or fetch the access_token straight from the cURL command shown below.

### REST API

```javascript
curl --location 'https://pdf-services.adobe.io/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id={{Placeholder for Client ID}}' \
--data-urlencode 'client_secret={{Placeholder for Client Secret}}'
```

## Step 4 : Fetching the status

After the job has been created successfully, poll the `location` handed back in the Step 3 response header, calling the API below.

Fuller detail on the API is available [here](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/apis/index.md#operation/pdfoperations.jobstatus).

### REST API

```javascript
curl --location -g --request GET 'https://pdf-services.adobe.io/operation/compresspdf/{{Placeholder for job id}}/status' \
--header 'Authorization: Bearer {{Placeholder for token}}' \
--header 'x-api-key: {{Placeholder for client id}}'
```

Rather than polling the status API to track the job, you can instead have completion notifications pushed to you over a Webhook. The [documentation](api-webhook-notification.md) covers this in more depth.

## SDK

SDKs for widely used languages — Node.js, Java, Python and .NET — also give you access to the PDF Services API.

Add these hostnames to your allow-list before you put the Adobe PDF Services SDK to use:

- ims-na1.adobelogin.com (Required for all the clients)

For clients using SDK version 4.x and above:

- Using United States (Default) region for processing documents:
  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com (Not required, if using external storage for both input and output)
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)
- Using Europe region for processing documents:
  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com (Not required, if using external storage for both input and output)
  - pdf-services-ew1.adobe.io

For clients using SDK version 3.x and above:

- Using United States (Default) region for processing documents:
  - dcplatformstorageservice-prod-us-east-1.s3-accelerate.amazonaws.com
  - pdf-services-ue1.adobe.io
  - pdf-services.adobe.io (Default URI)
- Using Europe region for processing documents:
  - dcplatformstorageservice-prod-eu-west-1.s3.amazonaws.com
  - pdf-services-ew1.adobe.io

For clients using SDK version upto 2.x:

- cpf-ue1.adobe.io

### Java

Give your development a head start by bookmarking or grabbing these essential resources:

- This document
- [API reference (Javadoc)](https://www.adobe.com/go/pdftoolsapi_java_docs)
- [Java Sample code](https://www.adobe.com/go/pdftoolsapi_java_samples)
- [Java library](https://www.adobe.com/go/pdftoolsapi_java_maven). The Maven project contains the .jar file.

### Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file comes down automatically; what's inside it differs depending on whether you chose to grab personalized code samples.

- **Personalized Download**: yields a zip bundling `adobe-dc-pdf-services-sdk-java-samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, prefilled with your credentials.

With the zip downloaded, the samples in it are ready to run directly once you've set the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` via the commands below:

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

When the project runs, Maven reads pom.xml to pull pdfservices-sdk down from the public Maven repository. Building the sample project fetches the .jar for you automatically. If you prefer, grab the pdfservices-sdk.jar file yourself and wire up your own environment.

### Running the samples

Downloading the code samples during the Getting Credentials workflow is by far the fastest route to a working setup. They hand you everything at once: sample code you can run as-is, a credential json file already embedded, and dependency connections already wired up.

1.  Grab [the Java sample project](https://www.adobe.com/go/pdftoolsapi_java_samples).
2.  Have Maven build it: `mvn clean install`.
3.  Define `PDF_SERVICES_CLIENT_ID` plus `PDF_SERVICES_CLIENT_SECRET` as environment variables with these commands:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4.  Give the sample code a run from the command line.
5.  Lean on this document for how to run the samples, and on the API Reference for the API specifics.

You aren't obliged to run things from the command line. The samples Maven project imports cleanly into whatever IDE you favour (e.g. IntelliJ/Eclipse), and the samples run from there too.

### Verifying download authenticity

If you'd like to be sure the installer is genuine — a sensible security precaution — here's how:

1.  With the package installed, head to the `.jar.sha1` file.
2.  Use whatever third-party tool you like to compute the hash.
3.  Track down the PDF Services sha1 file and open it (under the .m2 directory if Maven is in play).
4.  Make sure your generated hash and the .sha1 file's value are identical.

```
5d49322ced35a8195378a7ed297b4fb721780736
```

### Logging

For specifics on errors and exceptions, consult the API documentation.

- Log through the [slf4j API](https://www.slf4j.org/), paired with a log4js-slf4j binding.
- You'll find the logging configuration at src/main/resources/log4js.properties.
- Should you need a different binding, declare it in pom.xml.

**log4js.properties file**

```properties
name=PropertiesConfig
appenders = console

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

The samples lean on Maven, but nothing stops you from bringing your own tooling and process.

Rolling your own project goes like this:

1.  Grab the .jar from the [central Maven repository](https://www.adobe.com/go/pdftoolsapi_java_maven).
2.  Pull the SDK .jar in as a dependency using whichever manager you favour (Ivy, Gradle, Maven).
3.  Open the pdfservices-api-credentials.json that downloaded when your credential was created.
4.  Wire in the [Authentication](api-pdf-services-api.md) details covered above.

[Figure: Adobe PDF Services SDK On Maven](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/maven.png)

### .NET

Kick-start your development by bookmarking or downloading these key resources:

- This document
- [Nuget package](https://www.adobe.com/go/pdftoolsapi_net_nuget)
- [.NET API reference](https://www.adobe.com/go/pdftoolsapi_net_docs)
- [.NET Sample code](https://www.adobe.com/go/pdftoolsapi_net_samples)
- Input/output test files reside in the their respective sample directories

### Prerequisites

Here's what has to be present for the samples project:

- NET: version 8.0 or above
- A build Tool: Either Visual Studio or .NET Core CLI.

### Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file comes down automatically; what it holds depends on whether you opted in to personalized code samples.

- **Personalized Download**: yields a zip bundling `adobe-DC.PDFServices.SDK.NET.Samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, prefilled with your credentials.

Once the zip is down, you can run its samples straight away after defining the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` with the commands below:

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

Whether you run a sample or your own code, you'll need this:

1.  Download and install the [.NET SDK](https://dotnet.microsoft.com/learn/dotnet/hello-world-tutorial/install).

Building the sample project pulls the Nuget package down for you automatically.

### Running the samples

Downloading the code samples during the Getting Credentials workflow is the fastest path to a running setup. They give you the lot at once: ready-to-run sample code, an embedded credential json file, and dependency connections already configured.

1. Get the [samples project](https://www.adobe.com/go/pdftoolsapi_net_samples) by cloning or downloading it.
2. Within the samples directory, run `dotnet build` to compile the project.
3. Define `PDF_SERVICES_CLIENT_ID` plus `PDF_SERVICES_CLIENT_SECRET` as environment variables with these commands:

   - **Windows:**

     - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
     - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

   - **MacOS/Linux:**
     - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
     - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Give the sample code a run from the command line.
5. Lean on this document for how to run the samples, and on the API Reference for the API specifics.

### Verifying download authenticity

To be confident the installer is genuine — a reasonable precaution — work through these:

1.  With the Nuget package installed, head into the .nuget directory.
2.  Open up the .sha512 file there.
3.  Confirm the hash in your downloaded file lines up with the value posted here.

```
PAJ0eB+wUhgvLcIcH37IUgfFV7TxG2wWhcfaON57hWmpDFiPqAM6kgKFfyzAWVAnkzAQoQEWLPxgSIASNy5d8A==
```

### Logging

For specifics on errors and exceptions, consult the API documentation.

To bridge across logging frameworks, the .NET SDK relies on [LibLog](https://github.com/damianh/LibLog). The sample projects wire up Log4net as the logging provider, with its settings supplied in log4net.config. Drop in the configuration for whichever provider you prefer and set up the appender you need to turn logging on.

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

Building the sample project grabs the Nuget package on its own, but you can fetch it by hand if you'd rather work with your own tooling and process.

1.  Go to [Link](https://www.adobe.com/go/pdftoolsapi_net_nuget).
2.  Download the latest package.

[Figure: Adobe PDF Services SDK on Nuget](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/nuget-free-tier.png)

### Node.js

Kick-start your development by bookmarking or downloading these key resources:

- This document
- [Node.js API reference](https://www.adobe.com/go/pdftoolsapi_node_docs)
- [Node.js Sample code](http://www.adobe.com/go/pdftoolsapi_node_sample)
- [Node.js SDK](http://www.adobe.com/go/pdftoolsapi_node_npm)

### Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file comes down automatically; its contents vary with whether you chose personalized code samples.

- **Personalized Download**: yields a zip bundling `adobe-dc-pdf-services-sdk-java-samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, prefilled with your credentials.

Once the zip is down, its samples are ready to run directly after you set up the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` using the commands below:

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

Running any sample or your own code takes these steps:

1.  Install [Node.js 18.0](https://nodejs.org/en/download/) or higher.

The @adobe/pdfservices-node-sdk npm package automatically downloads when you build the sample project.

```
npm install --save @adobe/pdfservices-node-sdk
```

### Running the samples

Pulling the code samples during the Getting Credentials workflow is the quickest way to a working setup. They supply everything together: sample code that runs as-is, an embedded credential json file, and dependency connections set up in advance.

1. Grab [the Node.js sample project ](http://www.adobe.com/go/pdftoolsapi_node_sample).
2. At the samples root directory, execute `npm install`.
3. Define `PDF_SERVICES_CLIENT_ID` plus `PDF_SERVICES_CLIENT_SECRET` as environment variables with these commands:

   - **Windows:**

     - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
     - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

   - **MacOS/Linux:**
     - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
     - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Give the sample code a run from the command line.
5. Lean on this document for how to run the samples, and on the API Reference for the API specifics.

### Verifying download authenticity

To make sure the installer is genuine — a sound precaution — go through these:

1.  With the package installed, open package.json.
2.  Locate the "\_integrity" key inside it.
3.  Confirm the hash in your downloaded file lines up with the value posted here.

```
sha512-ZvwGfMlGa0mGK5HpPAdTTlsaeKKPLEbVfAeLsHr7YAQ6NO7cVkbxaPqV3Ng8dpq4mNj5Ah0Y1Q80uTjLb0Qf+A==
```

### Logging

For specifics on errors and exceptions, consult the API documentation.

Logging in the SDK runs on the [log4js API](https://www.npmjs.com/package/log4js). As it executes, the SDK hunts for config/pdfservices-sdk-log4js-config.json inside the working directory and loads its logging properties from that file. Absent such a file, the default behaviour writes INFO messages to the console. Tune the logging however suits you.

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

Building the sample project fetches the Node package on its own, but you can do it manually if you'd prefer your own tooling and process.

1.  Go to [Link](https://www.npmjs.com/package/@adobe/pdfservices-node-sdk)
2.  Download the latest package.

[Figure: Adobe PDF Services SDK on NPM JS](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/node-free-tier.png)

### Python

Give your development a head start by bookmarking or downloading these key resources:

- This document
- [Python API reference](https://opensource.adobe.com/pdfservices-python-sdk-samples/apidocs/latest/index.html)
- [Python sample code](https://github.com/adobe/pdfservices-python-sdk-samples)
- [Python SDK](https://www.adobe.com/go/pdfservices_python_pypi)

### Authentication

After you finish [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html), a zip or json file comes down automatically; what's inside depends on whether you went with personalized code samples.

- **Personalized Download**: yields a zip bundling `pdfservices-python-sdk-samples` together with an already-set-up `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: yields just the `pdfservices-api-credentials.json`, prefilled with your credentials.

With the zip downloaded, its samples can run directly once you've configured the two environment variables `PDF_SERVICES_CLIENT_ID` and `PDF_SERVICES_CLIENT_SECRET` through the commands below:

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

### Setup a Python environment

Running any sample or your own code takes these steps:

1. Install [Python 3.10](https://www.python.org/downloads/) or higher.
2. Verify your installation by running this command: `python --version`.

While the project runs, pip reads the requirements.txt file to fetch pdfservices-sdk from the public PyPi repository. Building the sample project downloads the .whl for you automatically. If you prefer, download the pdfservices-sdk .whl file yourself and set up your own environment.

### Running the samples

Pulling the code samples during the Getting Credentials workflow is the fastest way to get going. They give you everything in one go: sample code ready to run, an embedded credential json file, and dependency connections already configured.

1. Fetch and unpack the [Python sample project](https://github.com/adobe/pdfservices-python-sdk-samples).
2. Drop that downloaded zip into the directory you prepared for this project and extract its files there.
3. Define `PDF_SERVICES_CLIENT_ID` plus `CLIENT_SECRET` as environment variables with these commands:

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Step into the project folder (the one with `requirements.txt`) and stand up a virtual environment.

```
pip install virtualenv
python -m venv myenv
source myenv/bin/activate # on windows, use `myenv\Scripts\activate`
```

5. Then build the sample project from the terminal with: `pip install -r requirements.txt`.
6. Give the sample code a run from the command line.
7. Lean on this document for how to run the samples, and on the API Reference for the API specifics.
8. Either pull the samples into your editor of choice and run them there, or follow the terminal commands listed in the README.md file.

### Verifying download authenticity

To be sure the installer is genuine — a prudent check — go about it this way:

1.  Once the package zip is downloaded, run the following command

```
pip hash <download_dir>/pdfservices-sdk-4.2.0.tar.gz
```

2.  That command prints out the downloaded package's hash.
3.  Check that this hash agrees with the value posted here.

```
378afa7d3b22683264a1817393932a649b98e4d4b3913816f839de240f7132d5
```

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk — Check Usage

To review how much of the PDF Services API you've consumed, walk through the steps below:

1. In your browser, launch the [Developer Onboarding Application](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html).

2. Press the `Check Usage` button, pictured in the screenshot here:

[Figure: Check Usage](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/shot1.png)

3. A popup appears letting you set the date range over which consumption gets measured, like so:

[Figure: Check Usage Popup](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/shot2.png)

4. Pick the date range you'd like usage figures for, then hit the `Generate Report` button:

[Figure: Time period selection](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/shot3.png)

5. Doing so produces a report covering every bit of API usage across your organisation, which you can additionally export as a CSV file as pictured below:

[Figure: Usage](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/shot4.png)

6. To narrow usage to one specific `client id`, open the drop-down beneath the Client ID label and choose your `client id`, as shown below:

[Figure: Client ID](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/pdf-services-api/shot6.png)
