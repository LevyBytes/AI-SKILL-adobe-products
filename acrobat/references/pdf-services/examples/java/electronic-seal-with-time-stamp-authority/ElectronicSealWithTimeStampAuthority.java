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
package com.adobe.pdfservices.operation.samples.electronicseal;
import com.adobe.pdfservices.operation.PDFServices;
import com.adobe.pdfservices.operation.PDFServicesMediaType;
import com.adobe.pdfservices.operation.PDFServicesResponse;
import com.adobe.pdfservices.operation.auth.Credentials;
import com.adobe.pdfservices.operation.auth.ServicePrincipalCredentials;
import com.adobe.pdfservices.operation.exception.SDKException;
import com.adobe.pdfservices.operation.exception.ServiceApiException;
import com.adobe.pdfservices.operation.exception.ServiceUsageException;
import com.adobe.pdfservices.operation.io.Asset;
import com.adobe.pdfservices.operation.io.StreamAsset;
import com.adobe.pdfservices.operation.pdfjobs.jobs.PDFElectronicSealJob;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.CSCAuthContext;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.CertificateCredentials;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.DocumentLevelPermission;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.FieldLocation;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.FieldOptions;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.PDFElectronicSealParams;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.RFC3161TSAOptions;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.TSABasicAuthCredentials;
import com.adobe.pdfservices.operation.pdfjobs.params.electronicseal.TSAOptions;
import com.adobe.pdfservices.operation.pdfjobs.result.PDFElectronicSealResult;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
public class ElectronicSealWithTimeStampAuthority {
    private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicSealWithTimeStampAuthority.class);
    public static void main(String[] args) {
        try (
                InputStream inputStream = Files.newInputStream(new File("src/main/resources/sampleInvoice.pdf").toPath());
                InputStream inputStreamSealImage = Files.newInputStream(new File("src/main/resources/sampleSealImage.png").toPath())) {
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));
            PDFServices pdfServices = new PDFServices(credentials);
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset sealImageAsset = pdfServices.upload(inputStreamSealImage, PDFServicesMediaType.PNG.getMediaType());
            DocumentLevelPermission documentLevelPermission = DocumentLevelPermission.FORM_FILLING;
            String sealFieldName = "Signature1";
            Integer sealPageNumber = 1;
            Boolean sealVisible = true;
            FieldLocation fieldLocation = new FieldLocation(150, 250, 350, 200);
            FieldOptions fieldOptions = new FieldOptions.Builder(sealFieldName)
                    .setFieldLocation(fieldLocation)
                    .setPageNumber(sealPageNumber)
                    .setVisible(sealVisible)
                    .build();
            String providerName = "<PROVIDER_NAME>";
            String accessToken = "<ACCESS_TOKEN>";
            String credentialID = "<CREDENTIAL_ID>";
            String pin = "<PIN>";
            CSCAuthContext cscAuthContext = new CSCAuthContext(accessToken, "Bearer");
            CertificateCredentials certificateCredentials = CertificateCredentials.cscCredentialBuilder()
                    .withProviderName(providerName)
                    .withCredentialID(credentialID)
                    .withPin(pin)
                    .withCSCAuthContext(cscAuthContext)
                    .build();
            TSABasicAuthCredentials tsaBasicAuthCredentials = new TSABasicAuthCredentials("<USERNAME>", "<PASSWORD>");
            TSAOptions tsaOptions = new RFC3161TSAOptions("<TIMESTAMP_URL>", tsaBasicAuthCredentials);
            PDFElectronicSealParams pdfElectronicSealParams = PDFElectronicSealParams.pdfElectronicSealParamsBuilder(certificateCredentials, fieldOptions)
                    .withDocumentLevelPermission(documentLevelPermission)
                    .withTSAOptions(tsaOptions)
                    .build();
            PDFElectronicSealJob pdfElectronicSealJob = new PDFElectronicSealJob(asset, pdfElectronicSealParams);
            pdfElectronicSealJob.setSealImageAsset(sealImageAsset);
            String location = pdfServices.submit(pdfElectronicSealJob);
            PDFServicesResponse<PDFElectronicSealResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFElectronicSealResult.class);
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);
            String outputFilePath = ElectronicSealWithTimeStampAuthoritySupport.createOutputFilePath();
            LOGGER.info(String.format("Saving asset at %s", outputFilePath));
            OutputStream outputStream = Files.newOutputStream(new File(outputFilePath).toPath());
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
}
