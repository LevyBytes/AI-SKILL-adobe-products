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
package com.adobe.pdfservices.operation.samples.pdfwatermark;
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
import com.adobe.pdfservices.operation.pdfjobs.jobs.PDFWatermarkJob;
import com.adobe.pdfservices.operation.pdfjobs.params.PageRanges;
import com.adobe.pdfservices.operation.pdfjobs.params.pdfwatermark.PDFWatermarkParams;
import com.adobe.pdfservices.operation.pdfjobs.params.pdfwatermark.WatermarkAppearance;
import com.adobe.pdfservices.operation.pdfjobs.result.PDFWatermarkResult;
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
public class PDFWatermarkWithOptions {
    private static final Logger LOGGER = LoggerFactory.getLogger(PDFWatermarkWithOptions.class);
    public static void main(String[] args) {
        try (
                InputStream sourceFileInputStream = Files.newInputStream(new File("src/main/resources/pdfWatermarkInput.pdf").toPath());
                InputStream watermarkFileInputStream = Files.newInputStream(new File("src/main/resources/watermark.pdf").toPath())) {
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));
            PDFServices pdfServices = new PDFServices(credentials);
            Asset inputDocumentAsset = pdfServices.upload(sourceFileInputStream, PDFServicesMediaType.PDF.getMediaType());
            Asset watermarkDocumentAsset = pdfServices.upload(watermarkFileInputStream, PDFServicesMediaType.PDF.getMediaType());
            PageRanges pageRangeForPDFWatermark = getPageRangeForPDFWatermark();
            WatermarkAppearance watermarkAppearance = new WatermarkAppearance();
            watermarkAppearance.setOpacity(50);
            PDFWatermarkParams pdfWatermarkParams = PDFWatermarkParams.pdfWatermarkParamsBuilder()
                    .withPageRanges(pageRangeForPDFWatermark)
                    .withWatermarkAppearance(watermarkAppearance)
                    .build();
            PDFWatermarkJob pdfWatermarkJob = new PDFWatermarkJob(inputDocumentAsset, watermarkDocumentAsset)
                    .setParams(pdfWatermarkParams);
            String location = pdfServices.submit(pdfWatermarkJob);
            PDFServicesResponse<PDFWatermarkResult> pdfServicesResponse = pdfServices.getJobResult(location, PDFWatermarkResult.class);
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
    private static PageRanges getPageRangeForPDFWatermark() {
        PageRanges pageRangeForPDFWatermark = new PageRanges();
        pageRangeForPDFWatermark.addRange(2, 5);
        pageRangeForPDFWatermark.addRange(8, 10);
        return pageRangeForPDFWatermark;
    }
    public static String createOutputFilePath() throws IOException {
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH-mm-ss");
        LocalDateTime now = LocalDateTime.now();
        String timeStamp = dateTimeFormatter.format(now);
        Files.createDirectories(Paths.get("output/PDFWatermarkWithOptions"));
        return ("output/PDFWatermarkWithOptions/pdfwatermark" + timeStamp + ".pdf");
    }
}
