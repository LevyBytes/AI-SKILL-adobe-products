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
package com.adobe.pdfservices.operation.samples.protectpdf;
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
import com.adobe.pdfservices.operation.pdfjobs.jobs.ProtectPDFJob;
import com.adobe.pdfservices.operation.pdfjobs.params.protectpdf.ContentEncryption;
import com.adobe.pdfservices.operation.pdfjobs.params.protectpdf.EncryptionAlgorithm;
import com.adobe.pdfservices.operation.pdfjobs.params.protectpdf.Permission;
import com.adobe.pdfservices.operation.pdfjobs.params.protectpdf.Permissions;
import com.adobe.pdfservices.operation.pdfjobs.params.protectpdf.ProtectPDFParams;
import com.adobe.pdfservices.operation.pdfjobs.result.ProtectPDFResult;
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
public class ProtectPDFWithOwnerPassword {
    private static final Logger LOGGER = LoggerFactory.getLogger(ProtectPDFWithOwnerPassword.class);
    public static void main(String[] args) {
        try (
                InputStream inputStream = Files.newInputStream(new File("src/main/resources/protectPDFInput.pdf").toPath())) {
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));
            PDFServices pdfServices = new PDFServices(credentials);
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
            Permissions permissions = new Permissions();
            permissions.addPermission(Permission.PRINT_LOW_QUALITY);
            permissions.addPermission(Permission.EDIT_DOCUMENT_ASSEMBLY);
            permissions.addPermission(Permission.COPY_CONTENT);
            ProtectPDFParams protectPDFParams = ProtectPDFParams.passwordProtectOptionsBuilder()
                    .setOwnerPassword("password")
                    .setPermissions(permissions)
                    .setEncryptionAlgorithm(EncryptionAlgorithm.AES_256)
                    .setContentEncryption(ContentEncryption.ALL_CONTENT_EXCEPT_METADATA)
                    .build();
            ProtectPDFJob protectPDFJob = new ProtectPDFJob(asset, protectPDFParams);
            String location = pdfServices.submit(protectPDFJob);
            PDFServicesResponse<ProtectPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, ProtectPDFResult.class);
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);
            String outputFilePath = createOutputFilePath();
            LOGGER.info(String.format("Saving asset at %s", outputFilePath));
            OutputStream outputStream = Files.newOutputStream(new File(outputFilePath).toPath());
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException ex) {
            LOGGER.error("Exception encountered while executing operation", ex);
        }
    }
    public static String createOutputFilePath() throws IOException {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH-mm-ss");
        LocalDateTime now = LocalDateTime.now();
        String timeStamp = dateTimeFormatter.format(now);
        Files.createDirectories(Paths.get("output/ProtectPDFWithOwnerPassword"));
        return ("output/ProtectPDFWithOwnerPassword/protect" + timeStamp + ".pdf");
    }
}
