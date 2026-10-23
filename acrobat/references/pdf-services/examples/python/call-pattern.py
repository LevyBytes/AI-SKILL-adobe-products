"""PDF Services call sequence shared by every operation: upload, submit, wait, download.

Swap CompressPDFJob and CompressPDFResult for the operation's classes in operations.md; jobs
with options also take a params object. Errors raise ServiceApiException, ServiceUsageException
or SdkException from adobe.pdfservices.operation.exception.exceptions.
"""
import os
import sys

from adobe.pdfservices.operation.auth.service_principal_credentials import ServicePrincipalCredentials
from adobe.pdfservices.operation.pdf_services import PDFServices
from adobe.pdfservices.operation.pdf_services_media_type import PDFServicesMediaType
from adobe.pdfservices.operation.pdfjobs.jobs.compress_pdf_job import CompressPDFJob
from adobe.pdfservices.operation.pdfjobs.result.compress_pdf_result import CompressPDFResult


def run(source_path: str, target_path: str) -> None:
    credentials = ServicePrincipalCredentials(client_id=os.environ["PDF_SERVICES_CLIENT_ID"],
                                              client_secret=os.environ["PDF_SERVICES_CLIENT_SECRET"])
    services = PDFServices(credentials=credentials)
    with open(source_path, "rb") as source:
        asset = services.upload(input_stream=source.read(), mime_type=PDFServicesMediaType.PDF)
    location = services.submit(CompressPDFJob(input_asset=asset))
    response = services.get_job_result(location, CompressPDFResult)
    content = services.get_content(response.get_result().get_asset())
    with open(target_path, "wb") as target:
        target.write(content.get_input_stream())


if __name__ == "__main__":
    run(sys.argv[1], sys.argv[2])
