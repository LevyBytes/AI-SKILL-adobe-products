# Running the samples

Grabbing the code samples during the Getting Credentials workflow is the fastest path to a working setup. Bundled in are ready-to-run sample code, a credential json file already embedded, plus dependency connections that come preconfigured.

1. Download and extract the [Python sample project](https://github.com/adobe/pdfservices-python-sdk-samples).
2. Copy the downloaded zip to the directory that you set up for this project and unzip the files there.
3. Set the environment variables `PDF_SERVICES_CLIENT_ID` and `CLIENT_SECRET` by running the following commands :

- **Windows:**

  - `set "PDF_SERVICES_CLIENT_ID=<YOUR CLIENT ID>"`
  - `set "PDF_SERVICES_CLIENT_SECRET=<YOUR CLIENT SECRET>"`

- **MacOS/Linux:**
  - `export PDF_SERVICES_CLIENT_ID='<YOUR CLIENT ID>'`
  - `export PDF_SERVICES_CLIENT_SECRET='<YOUR CLIENT SECRET>'`

4. Move into the project directory holding `requirements.txt` and stand up a virtual environment there.

Python 3 includes `venv`; installing the separate `virtualenv` package is unnecessary for this command. On Windows Command Prompt use `myenv\Scripts\activate.bat`; in PowerShell use `myenv\Scripts\Activate.ps1`.

```bash
python -m venv myenv
source myenv/bin/activate
```

5. Now build the sample project using this command in terminal: `pip install -r requirements.txt`.
6. Run the sample code from the command line to try it out.
7. Lean on this document for the particulars of running samples, and on the API Reference for the API specifics.
8. Pull the samples into whichever IDE you like and launch them from there, or instead run the README.md commands straight from the terminal.
