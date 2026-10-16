# Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup, since they bundle ready-to-run code, a baked-in credential json file, and dependency connections that are already configured.

1. Download and extract the [Python sample project](https://github.com/adobe/pdfservices-python-sdk-samples).
2. Copy the downloaded zip to the directory that you set up for this project and unzip the files there.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Go to the project directory (which contains `requirements.txt` file) and setup a virtual environment.

Python 3 includes `venv`; installing the separate `virtualenv` package is unnecessary for this command. On Windows Command Prompt use `myenv\Scripts\activate.bat`; in PowerShell use `myenv\Scripts\Activate.ps1`.

```bash
python -m venv myenv
source myenv/bin/activate
```

5. Now build the sample project using this command in terminal: `pip install -r requirements.txt`.
6. Test the sample code on the command line.
7. Refer to this document for details about running samples as well as the API Reference for API details.
8. You can import the samples into your preferred IDE and run the samples from there or run the commands from the README.md file in terminal.
