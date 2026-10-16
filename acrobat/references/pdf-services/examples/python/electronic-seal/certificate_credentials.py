"""
 Copyright 2024 Adobe
 All Rights Reserved.

 NOTICE: Adobe permits you to use, modify, and distribute this file in
 accordance with the terms of the Adobe license agreement accompanying it.
"""
import dependencies as sdk
def create_certificate_credentials():
    # Sets the name of TSP Provider being used.
    provider_name = "<PROVIDER_NAME>"
    # Sets the access token to be used to access TSP provider hosted APIs.
    access_token = "<ACCESS_TOKEN>"
    # Sets the credential ID.
    credential_id = "<CREDENTIAL_ID>"
    # Sets the PIN generated while creating credentials.
    pin = "<PIN>"
    # Creates CSCAuthContext instance using access token and token type.
    csc_auth_context = sdk.CSCAuthContext(
        access_token=access_token,
        token_type="Bearer",
    )
    # Create CertificateCredentials instance with required certificate details.
    certificate_credentials = sdk.CSCCredentials(
        provider_name=provider_name,
        credential_id=credential_id,
        pin=pin,
        csc_auth_context=csc_auth_context,
    )
    return certificate_credentials
