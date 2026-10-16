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
package com.adobe.pdfservices.operation.samples.insertpages;
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
import com.adobe.pdfservices.operation.pdfjobs.jobs.InsertPagesPDFJob;
import com.adobe.pdfservices.operation.pdfjobs.params.PageRanges;
import com.adobe.pdfservices.operation.pdfjobs.params.insertpages.InsertPagesParams;
import com.adobe.pdfservices.operation.pdfjobs.result.InsertPagesResult;
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
public class InsertPDFPages {
    private static final Logger LOGGER = LoggerFactory.getLogger(InsertPDFPages.class);
    public static void main(String[] args) {
        try (
                InputStream baseInputStream = Files.newInputStream(new File("src/main/resources/baseInput.pdf").toPath());
                InputStream firstInputStreamToInsert = Files.newInputStream(new File("src/main/resources/firstFileToInsertInput.pdf").toPath());
                InputStream secondInputStreamToInsert = Files.newInputStream(new File("src/main/resources/secondFileToInsertInput.pdf").toPath())) {
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));
            PDFServices pdfServices = new PDFServices(credentials);
            Asset baseAsset = pdfServices.upload(baseInputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset firstAssetToInsert = pdfServices.upload(firstInputStreamToInsert, PDFServicesMediaType.PDF.getMediaType());
            Asset secondAssetToInsert = pdfServices.upload(secondInputStreamToInsert, PDFServicesMediaType.PDF.getMediaType());
            PageRanges pageRanges = getPageRangeForFirstFile();
            InsertPagesParams insertPagesParams = InsertPagesParams.insertPagesParamsBuilder(baseAsset).addPagesToInsertAt(firstAssetToInsert, pageRanges, 2)
                    .addPagesToInsertAt(secondAssetToInsert, 3)
                    .build();
            InsertPagesPDFJob insertPagesJob = new InsertPagesPDFJob(insertPagesParams);
            String location = pdfServices.submit(insertPagesJob);
            PDFServicesResponse<InsertPagesResult> pdfServicesResponse = pdfServices.getJobResult(location, InsertPagesResult.class);
            Asset resultAsset = pdfServicesResponse.getResult().getAsset();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);
            String outputFilePath = createOutputFilePath();
            LOGGER.info(String.format("Saving asset at %s", outputFilePath));
            OutputStream outputStream = Files.newOutputStream(new File(outputFilePath).toPath());
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
        } catch (IOException | ServiceApiException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
    private static PageRanges getPageRangeForFirstFile() {
        PageRanges pageRanges = new PageRanges();
        pageRanges.addRange(1, 3);
        pageRanges.addSinglePage(4);
        return pageRanges;
    }
    public static String createOutputFilePath() throws IOException {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH-mm-ss");
        LocalDateTime now = LocalDateTime.now();
        String timeStamp = dateTimeFormatter.format(now);
        Files.createDirectories(Paths.get("output/InsertPDFPages"));
        return ("output/InsertPDFPages/insert" + timeStamp + ".pdf");
    }
}
