"""
 Copyright 2024 Adobe
 All Rights Reserved.

 NOTICE: Adobe permits you to use, modify, and distribute this file in
 accordance with the terms of the Adobe license agreement accompanying it.
"""
import dependencies as sdk
# Initialize the logger
sdk.logging.basicConfig(level=sdk.logging.INFO)
#
# This sample illustrates how to generate a tagged PDF by setting options with command line arguments.
#
# Refer to README.md for instructions on how to run the samples.
#
class AutotagPDFParameterised:
    _input_path: str
    _output_path: str
    _generate_report: bool
    _shift_headings: bool
    def __init__(self):
        pass
    def execute(self, *args: str) -> None:
        args = self.parse_args(*args)
        self._input_path = args.input if args.input else self.get_default_input_file_path()
        self._output_path = args.output if args.output else self.get_default_output_file_path()
        self._generate_report = args.report
        self._shift_headings = args.shift_headings
        self.autotag_pdf()
    def autotag_pdf(self):
        try:
            file = open(self._input_path, 'rb')
            input_stream = file.read()
            file.close()
            # Initial setup, create credentials instance
            credentials = sdk.ServicePrincipalCredentials(
                client_id=sdk.os.getenv('PDF_SERVICES_CLIENT_ID'),
                client_secret=sdk.os.getenv('PDF_SERVICES_CLIENT_SECRET')
            )
            # Creates a PDF Services instance
            pdf_services = sdk.PDFServices(credentials=credentials)
            # Creates an asset(s) from source file(s) and upload
            input_asset = pdf_services.upload(input_stream=input_stream,
                                              mime_type=sdk.PDFServicesMediaType.PDF)
            # Create parameters for the job
            autotag_pdf_params = self.get_autotag_pdf_options()
            # Creates a new job instance
            autotag_pdf_job = sdk.AutotagPDFJob(input_asset=input_asset,
                                            autotag_pdf_params=autotag_pdf_params)
            # Submit the job and gets the job result
            location = pdf_services.submit(autotag_pdf_job)
            pdf_services_response = pdf_services.get_job_result(location, sdk.AutotagPDFResult)
            # Get content from the resulting asset(s)
            result_asset: sdk.CloudAsset = pdf_services_response.get_result().get_tagged_pdf()
            stream_asset: sdk.StreamAsset = pdf_services.get_content(result_asset)
            # Create output directory if not present
            self.create_output_file_path(self._output_path)
            # Creates an output stream and copy stream asset's content to it
            with open(f'{self._output_path}/autotagPDFInput-tagged.pdf', "wb") as file:
                file.write(stream_asset.get_input_stream())
            if self._generate_report:
                result_asset_report: sdk.CloudAsset = pdf_services_response.get_result().get_report()
                stream_asset_report: sdk.StreamAsset = pdf_services.get_content(result_asset_report)
                with open(f'{self._output_path}/autotagPDFInput-report.xlsx', "wb") as file:
                    file.write(stream_asset_report.get_input_stream())
        except (sdk.ServiceApiException, sdk.ServiceUsageException, sdk.SdkException) as e:
            sdk.logging.exception(f'Exception encountered while executing operation: {e}')
    @staticmethod
    def parse_args(*args: str):
        if not args:
            args = sdk.sys.argv[1:]
        parser = sdk.argparse.ArgumentParser(description='Autotag PDF')
        parser.add_argument('--input', help='Input file path', type=sdk.Path, metavar='input')
        parser.add_argument('--output', help='Output path', type=sdk.Path, dest='output')
        parser.add_argument('--report', dest='report', action='store_true', help='Generate report(in XLSX format)',
                            default=False)
        parser.add_argument('--shift_headings', dest='shift_headings', action='store_true', help='Shift headings',
                            default=False)
        return parser.parse_args(args)
    @staticmethod
    def get_default_input_file_path() -> str:
        return 'src/resources/autotagPdfInput.pdf'
    @staticmethod
    def get_default_output_file_path() -> str:
        now = sdk.datetime.now()
        time_stamp = now.strftime("%Y-%m-%dT%H-%M-%S")
        sdk.os.makedirs("output/AutotagPDFParameterised", exist_ok=True)
        return f"output/AutotagPDFParameterised/autotag-tagged{time_stamp}"
    @staticmethod
    def create_output_file_path(path) -> None:
        sdk.os.makedirs(path, exist_ok=True)
    def get_autotag_pdf_options(self) -> sdk.AutotagPDFParams:
        return sdk.AutotagPDFParams(
            shift_headings=self._shift_headings,
            generate_report=self._generate_report
        )
if __name__ == "__main__":
    autotag_pdf_parameterised = AutotagPDFParameterised()
    autotag_pdf_parameterised.execute()
