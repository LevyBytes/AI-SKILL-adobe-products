"""
 Copyright 2024 Adobe
 All Rights Reserved.

 NOTICE: Adobe permits you to use, modify, and distribute this file in
 accordance with the terms of the Adobe license agreement accompanying it.
"""
import dependencies as sdk
from certificate_credentials import create_certificate_credentials
# Initialize the logger
sdk.logging.basicConfig(level=sdk.logging.INFO)
#
# This sample illustrates how to apply electronic seal over the PDF document using default appearance options.
#
# To know more about PDF Electronic Seal, please see the
# <a href="https://www.adobe.com/go/dc_eseal_overview_doc" target="_blank">documentation</a>.
#
# Refer to README.md for instructions on how to run the samples.
#
class ElectronicSeal:
    def __init__(self):
        try:
            pdf_file = open('src/resources/sampleInvoice.pdf', 'rb')
            file_input_stream = pdf_file.read()
            pdf_file.close()
            seal_image_file = open('src/resources/sampleSealImage.png', 'rb')
            seal_image_input_stream = seal_image_file.read()
            seal_image_file.close()
            # Initial setup, create credentials instance
            credentials = sdk.ServicePrincipalCredentials(
                client_id=sdk.os.getenv('PDF_SERVICES_CLIENT_ID'),
                client_secret=sdk.os.getenv('PDF_SERVICES_CLIENT_SECRET')
            )
            # Creates a PDF Services instance
            pdf_services = sdk.PDFServices(credentials=credentials)
            # Creates an asset(s) from source file(s) and upload
            asset = pdf_services.upload(input_stream=file_input_stream, mime_type=sdk.PDFServicesMediaType.PDF)
            seal_image_asset = pdf_services.upload(input_stream=seal_image_input_stream, mime_type=sdk.PDFServicesMediaType.PNG)
            # Set the document level permission to be applied for output document
            document_level_permission = sdk.DocumentLevelPermission.FORM_FILLING
            # Sets the Seal Field Name to be created in input PDF document.
            seal_field_name = "Signature1"
            # Sets the page number in input document for applying seal.
            seal_page_number = 1
            # Sets if seal should be visible or invisible.
            seal_visible = True
            # Creates FieldLocation instance and set the coordinates for applying signature
            field_location = sdk.FieldLocation(150, 250, 350, 200)
            # Create FieldOptions instance with required details.
            field_options = sdk.FieldOptions(
                field_name=seal_field_name,
                field_location=field_location,
                page_number=seal_page_number,
                visible=seal_visible
            )
            certificate_credentials = create_certificate_credentials()
            # Create parameters for the job
            electronic_seal_params = sdk.PDFElectronicSealParams(
                seal_certificate_credentials=certificate_credentials,
                seal_field_options=field_options,
            )
            # Creates a new job instance
            electronic_seal_job = sdk.PDFElectronicSealJob(input_asset=asset,
                                                       electronic_seal_params=electronic_seal_params,
                                                       seal_image_asset=seal_image_asset)
            # Submit the job and gets the job result
            location = pdf_services.submit(electronic_seal_job)
            pdf_services_response = pdf_services.get_job_result(location, sdk.ESealPDFResult)
            # Get content from the resulting asset(s)
            result_asset: sdk.CloudAsset = pdf_services_response.get_result().get_asset()
            stream_asset: sdk.StreamAsset = pdf_services.get_content(result_asset)
            # Creates an output stream and copy stream asset's content to it
            output_file_path = self.create_output_file_path()
            with open(output_file_path, "wb") as file:
                file.write(stream_asset.get_input_stream())
        except (sdk.ServiceApiException, sdk.ServiceUsageException, sdk.SdkException) as e:
            sdk.logging.exception(f'Exception encountered while executing operation: {e}')
    # Generates a string containing a directory structure and file name for the output file
    @staticmethod
    def create_output_file_path() -> str:
        now = sdk.datetime.now()
        time_stamp = now.strftime("%Y-%m-%dT%H-%M-%S")
        sdk.os.makedirs("output/ElectronicSeal", exist_ok=True)
        return f"output/ElectronicSeal/sealedOutput{time_stamp}.pdf"
if __name__ == "__main__":
    ElectronicSeal()
