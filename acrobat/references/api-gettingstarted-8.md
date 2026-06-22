# Pdf Electronic Seal Api — Gettingstarted (part 2)

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk

- **Personalized Download**: Downloads the zip which contains `adobe-dc-pdf-services-sdk-java-samples` with a preconfigured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: Downloads the `pdfservices-api-credentials.json` with your preconfigured credentials.

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
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```

### Set up a Node.js environment

Before any sample or custom code will run, work through these steps:

1.  Install [Node.js 18.0](https://nodejs.org/en/download/) or higher.

Building the sample project pulls the @adobe/pdfservices-node-sdk npm package down for you automatically.

```
npm install --save @adobe/pdfservices-node-sdk
```

### Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup. Bundled in are ready-to-run sample code, a credential json file already embedded, plus dependency connections that come preconfigured.

1. Download [the Node.js sample project ](http://www.adobe.com/go/pdftoolsapi_node_sample).
2. From the samples root directory, run `npm install`.
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

1.  After installing the package, find and open package.json.
2.  Find the "\_integrity" key.
3.  Verify the hash in the downloaded file matches the value published here.

```
sha512-ZvwGfMlGa0mGK5HpPAdTTlsaeKKPLEbVfAeLsHr7YAQ6NO7cVkbxaPqV3Ng8dpq4mNj5Ah0Y1Q80uTjLb0Qf+A==
```

### Logging

Error and exception specifics are covered in the API docs.

For logging, the SDK leans on the [log4js API](https://www.npmjs.com/package/log4js). As it runs, the SDK looks in the working directory for config/pdfservices-sdk-log4js-config.json and pulls its logging properties from that file. Absent any configuration file, the default behavior writes INFO-level output to the console. Adjust the logging settings to suit your needs.

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

The Node package arrives automatically when the sample project builds, yet you can fetch it by hand if you'd rather rely on your own toolchain and workflow.

1.  Go to [Link](https://www.npmjs.com/package/@adobe/pdfservices-node-sdk)
2.  Download the latest package.

[Figure: Adobe PDF Services SDK on NPM JS](https://raw.githubusercontent.com/AdobeDocs/pdfservices-api-documentation/main/src/pages/overview/images/node-free-tier.png)

### Python

Bookmark or grab these core resources to give your development a running start:

- This document
- [Python API reference](https://opensource.adobe.com/pdfservices-python-sdk-samples/apidocs/latest/index.html)
- [Python sample code](https://github.com/adobe/pdfservices-python-sdk-samples)
- [Python SDK](https://www.adobe.com/go/pdfservices_python_pypi)

### Authentication

The [Getting Credentials](https://documentservices.adobe.com/dc-integration-creation-app-cdn/main.html) workflow, once complete, auto-downloads a zip or json file whose contents vary according to whether personalized code samples were requested.

- **Personalized Download**: Downloads the zip which contains `pdfservices-python-sdk-samples` with a preconfigured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: Downloads the `pdfservices-api-credentials.json` with your preconfigured credentials.

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
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```

### Setup a Python environment

Before any sample or custom code will run, work through these steps:

1. Install [Python 3.10](https://www.python.org/downloads/) or higher.
2. Verify your installation by running this command: `python --version`.

When the project runs, pip reads requirements.txt to pull pdfservices-sdk from the public PyPi repository. Building the sample project fetches the .whl on its own. As an alternative, download the pdfservices-sdk .whl file yourself and set up your own environment.

### Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup. Bundled in are ready-to-run sample code, a credential json file already embedded, plus dependency connections that come preconfigured.

1. Download and extract the [Python sample project](https://github.com/adobe/pdfservices-python-sdk-samples).
2. Copy the downloaded zip to the directory that you set up for this project and unzip the files there.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `set PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>`
  - `export PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>`

4. Move into the project directory holding `requirements.txt` and stand up a virtual environment there.

```
pip install virtualenv
python -m venv myenv
source myenv/bin/activate # on windows, use `myenv\Scripts\activate`
```

5. Now build the sample project using this command in terminal: `pip install -r requirements.txt`.
6. Run the sample code from the command line to try it out.
7. Lean on this document for the particulars of running samples, and on the API Reference for the API specifics.
8. Pull the samples into whichever IDE you like and launch them from there, or instead run the README.md commands straight from the terminal.

### Verifying download authenticity

Should you want to be sure the installer is genuine, here's how to check:

1.  After downloading the package zip, run following command

```
pip hash <download_dir>/pdfservices-sdk-4.1.0.tar.gz
```

2.  Above command will return the hash of downloaded package.
3.  Verify the hash matches the value published here.

```
ec24e0ddb8da9a968e8b8aa94203f48afb496dc99e505f6debcf0c2d51307cd2
```

## Change the logging levels as per need. INFO is recommended for pdfservices-sdk — Public API

You can reach PDF Services API straight through its REST APIs, which authenticate with an Adobe-issued credential. Once the [Getting Credentials](https://acrobatservices.adobe.com/dc-integration-creation-app-cdn/main.html?api=pdf-services-api) workflow wraps up, a zip file downloads automatically whose contents vary according to whether personalized code samples were requested. Here is how the zip file is laid out:

- **Personalized Download**: Downloads the zip which contains `adobe-dc-pdf-services-sdk-java-samples` with a preconfigured `pdfservices-api-credentials.json` file.
- **Non Personalized Download**: Downloads the `pdfservices-api-credentials.json` with your preconfigured credentials.

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
    "client_id": "<YOUR_CLIENT_ID>",
    "client_secret": "<YOUR_CLIENT_SECRET>"
  },
  "service_principal_credentials": {
    "organization_id": "<YOUR_ORGNIZATION_ID>"
  }
}
```
