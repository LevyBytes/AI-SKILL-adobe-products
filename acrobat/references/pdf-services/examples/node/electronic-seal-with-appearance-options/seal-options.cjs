/*
 * Copyright 2024 Adobe
 * All Rights Reserved.
 *
 * NOTICE: Adobe permits you to use, modify, and distribute this file in
 * accordance with the terms of the Adobe license agreement accompanying
 * it. If you have received this file from a source other than Adobe,
 * then your use, modification, or distribution of it requires the prior
 * written permission of Adobe.
 */
const sdk = require('./dependencies.cjs');
function createSealOptions() {
    // Set the document level permission to be applied for output document
    const documentLevelPermission = sdk.DocumentLevelPermission.FORM_FILLING;
    // Create AppearanceOptions and add the required signature appearance items
    const sealAppearanceOptions = new sdk.AppearanceOptions({
        items: [
            sdk.AppearanceItem.DATE,
            sdk.AppearanceItem.SEAL_IMAGE,
            sdk.AppearanceItem.NAME,
            sdk.AppearanceItem.LABELS,
            sdk.AppearanceItem.DISTINGUISHED_NAME
        ]
    });
    // Set the Seal Field Name to be created in input PDF document
    const sealFieldName = "Signature1";
    // Set the page number in input document for applying seal
    const sealPageNumber = 1;
    // Set if seal should be visible or invisible
    const sealVisible = true;
    // Create FieldLocation instance and set the coordinates for applying signature
    const fieldLocation = new sdk.FieldLocation({
        left: 150,
        top: 250,
        right: 350,
        bottom: 200
    });
    // Create FieldOptions instance with required details
    const sealFieldOptions = new sdk.FieldOptions({
        visible: sealVisible,
        location: fieldLocation,
        fieldName: sealFieldName,
        pageNumber: sealPageNumber,
    });
    // Set the name of TSP Provider being used
    const providerName = "<PROVIDER_NAME>";
    // Set the access token to be used to access TSP provider hosted APIs
    const accessToken = "<ACCESS_TOKEN>";
    // Set the credential ID
    const credentialId = "<CREDENTIAL_ID>";
    // Set the PIN generated while creating credentials
    const pin = "<PIN>";
    // Create CSCAuthContext instance using access token and token type
    const authorizationContext = new sdk.CSCAuthContext({
        accessToken,
        tokenType: "Bearer"
    });
    // Create CertificateCredentials instance with required certificate details
    const certificateCredentials = new sdk.CSCCredential({
        providerName,
        credentialId,
        pin,
        authorizationContext,
    });
    // Create parameters for the job
    const params = new sdk.PDFElectronicSealParams({
        documentLevelPermission,
        certificateCredentials,
        sealFieldOptions,
        sealAppearanceOptions
    });
    return params;
}
module.exports = {createSealOptions};
