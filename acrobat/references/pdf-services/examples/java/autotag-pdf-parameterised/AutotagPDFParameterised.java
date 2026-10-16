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
package com.adobe.pdfservices.operation.samples.autotagpdf;
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
import com.adobe.pdfservices.operation.pdfjobs.jobs.AutotagPDFJob;
import com.adobe.pdfservices.operation.pdfjobs.params.autotag.AutotagPDFParams;
import com.adobe.pdfservices.operation.pdfjobs.result.AutotagPDFResult;
import org.apache.commons.io.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
public class AutotagPDFParameterised {
    private static final Logger LOGGER = LoggerFactory.getLogger(AutotagPDFParameterised.class);
    public static void main(String[] args) {
        try (InputStream inputStream = Files.newInputStream(new File(AutotagPDFParameterisedSupport.getInputFilePathFromCmdArgs(args)).toPath())) {
            LOGGER.info("--input " + AutotagPDFParameterisedSupport.getInputFilePathFromCmdArgs(args));
            LOGGER.info("--output " + AutotagPDFParameterisedSupport.getOutputFilePathFromCmdArgs(args));
            LOGGER.info("--report " + AutotagPDFParameterisedSupport.getGenerateReportFromCmdArgs(args));
            LOGGER.info("--shift_headings " + AutotagPDFParameterisedSupport.getShiftHeadingsFromCmdArgs(args));
            Credentials credentials = new ServicePrincipalCredentials(System.getenv("PDF_SERVICES_CLIENT_ID"), System.getenv("PDF_SERVICES_CLIENT_SECRET"));
            PDFServices pdfServices = new PDFServices(credentials);
            Asset asset = pdfServices.upload(inputStream, PDFServicesMediaType.PDF.getMediaType());
            AutotagPDFParams autotagPDFParams = AutotagPDFParameterisedSupport.getOptionsFromCmdArgs(args);
            AutotagPDFJob autotagPDFJob = new AutotagPDFJob(asset).setParams(autotagPDFParams);
            String location = pdfServices.submit(autotagPDFJob);
            PDFServicesResponse<AutotagPDFResult> pdfServicesResponse = pdfServices.getJobResult(location, AutotagPDFResult.class);
            Asset resultAsset = pdfServicesResponse.getResult().getTaggedPDF();
            Asset resultAssetReport = pdfServicesResponse.getResult().getReport();
            StreamAsset streamAsset = pdfServices.getContent(resultAsset);
            StreamAsset streamAssetReport = (autotagPDFParams != null && autotagPDFParams.isGenerateReport()) ? pdfServices.getContent(resultAssetReport) : null;
            String outputPath = AutotagPDFParameterisedSupport.getOutputFilePathFromCmdArgs(args);
            String outputFilePath = outputPath + "autotagPDFInput-tagged.pdf";
            LOGGER.info(String.format("Saving asset at %s", outputFilePath));
            OutputStream outputStream = Files.newOutputStream(new File(outputFilePath).toPath());
            IOUtils.copy(streamAsset.getInputStream(), outputStream);
            outputStream.close();
            if (streamAssetReport != null) {
                String outputFilePathReport = outputPath + "autotagPDFInput-report.xlsx";
                LOGGER.info(String.format("Saving asset at %s", outputFilePathReport));
                OutputStream outputStreamReport = Files.newOutputStream(new File(outputFilePathReport).toPath());
                IOUtils.copy(streamAssetReport.getInputStream(), outputStreamReport);
                outputStreamReport.close();
            }
        } catch (ServiceApiException | IOException | SDKException | ServiceUsageException e) {
            LOGGER.error("Exception encountered while executing operation", e);
        }
    }
}
