"""
 Copyright 2024 Adobe
 All Rights Reserved.

 NOTICE: Adobe permits you to use, modify, and distribute this file in
 accordance with the terms of the Adobe license agreement accompanying it.
"""
import logging
import os
from datetime import datetime
from adobe.pdfservices.operation.auth.service_principal_credentials import ServicePrincipalCredentials
from adobe.pdfservices.operation.exception.exceptions import ServiceApiException, ServiceUsageException, SdkException
from adobe.pdfservices.operation.io.cloud_asset import CloudAsset
from adobe.pdfservices.operation.io.stream_asset import StreamAsset
from adobe.pdfservices.operation.pdf_services import PDFServices
from adobe.pdfservices.operation.pdf_services_media_type import PDFServicesMediaType
from adobe.pdfservices.operation.pdfjobs.jobs.eseal_job import PDFElectronicSealJob
from adobe.pdfservices.operation.pdfjobs.params.eseal.csc_auth_context import CSCAuthContext
from adobe.pdfservices.operation.pdfjobs.params.eseal.csc_credentials import CSCCredentials
from adobe.pdfservices.operation.pdfjobs.params.eseal.document_level_permission import DocumentLevelPermission
from adobe.pdfservices.operation.pdfjobs.params.eseal.electronic_seal_params import PDFElectronicSealParams
from adobe.pdfservices.operation.pdfjobs.params.eseal.field_location import FieldLocation
from adobe.pdfservices.operation.pdfjobs.params.eseal.field_options import FieldOptions
from adobe.pdfservices.operation.pdfjobs.result.eseal_pdf_result import ESealPDFResult
