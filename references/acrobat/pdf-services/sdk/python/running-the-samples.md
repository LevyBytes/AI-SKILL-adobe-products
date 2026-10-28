# Running the samples

Pulling the code samples during the Getting Credentials workflow is the fastest way to get going. They give you everything in one go: sample code ready to run, an embedded credential json file, and dependency connections already configured.

1. Fetch and unpack the [Python sample project](https://github.com/adobe/pdfservices-python-sdk-samples).
2. Drop that downloaded zip into the directory you prepared for this project and extract its files there.
3. Define `PDF_SERVICES_CLIENT_ID` plus `CLIENT_SECRET` as environment variables with these commands:

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Step into the project folder (the one with `requirements.txt`) and stand up a virtual environment.

Python 3 includes `venv`; installing the separate `virtualenv` package is unnecessary for this command. On Windows Command Prompt use `myenv\Scripts\activate.bat`; in PowerShell use `myenv\Scripts\Activate.ps1`.

```bash
python -m venv myenv
source myenv/bin/activate
```

5. Then build the sample project from the terminal with: `pip install -r requirements.txt`.
6. Give the sample code a run from the command line.
7. Lean on this document for how to run the samples, and on the API Reference for the API specifics.
8. Either pull the samples into your editor of choice and run them there, or follow the terminal commands listed in the README.md file.
