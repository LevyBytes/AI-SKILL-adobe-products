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
class ElectronicSealWithTimeStampAuthoritySupport {
private static final Logger LOGGER = LoggerFactory.getLogger(ElectronicSealWithTimeStampAuthority.class);
public static String createOutputFilePath() throws IOException {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH-mm-ss");
        LocalDateTime now = LocalDateTime.now();
        String timeStamp = dateTimeFormatter.format(now);
        Files.createDirectories(Paths.get("output/ElectronicSeal"));
        return ("output/ElectronicSeal/sealedOutputWithTimeStampAuthority" + timeStamp + ".pdf");
    }
}
