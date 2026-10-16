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
class AutotagPDFParameterisedSupport {
private static final Logger LOGGER = LoggerFactory.getLogger(AutotagPDFParameterised.class);
public static AutotagPDFParams getOptionsFromCmdArgs(String[] args) {
        Boolean generateReport = getGenerateReportFromCmdArgs(args);
        Boolean shiftHeadings = getShiftHeadingsFromCmdArgs(args);
        AutotagPDFParams.Builder autotagPDFParamsBuilder = AutotagPDFParams.autotagPDFParamsBuilder();
        if (generateReport)
            autotagPDFParamsBuilder.generateReport();
        if (shiftHeadings)
            autotagPDFParamsBuilder.shiftHeadings();
        return autotagPDFParamsBuilder.build();
    }
public static Boolean getShiftHeadingsFromCmdArgs(String[] args) {
        return Arrays.asList(args).contains("--shift_headings");
    }
public static Boolean getGenerateReportFromCmdArgs(String[] args) {
        return Arrays.asList(args).contains("--report");
    }
public static String getInputFilePathFromCmdArgs(String[] args) {
        String inputFilePath = "src/main/resources/autotagPDFInput.pdf";
        int inputFilePathIndex = Arrays.asList(args).indexOf("--input");
        if (inputFilePathIndex >= 0 && inputFilePathIndex < args.length - 1) {
            inputFilePath = args[inputFilePathIndex + 1];
        } else
            LOGGER.info("input file not specified, using default value : autotagPDFInput.pdf");
        return inputFilePath;
    }
public static String getOutputFilePathFromCmdArgs(String[] args) throws IOException {
        String outputFilePath = "output/AutotagPDFParameterised/";
        int outputFilePathIndex = Arrays.asList(args).indexOf("--output");
        if (outputFilePathIndex >= 0 && outputFilePathIndex < args.length - 1) {
            outputFilePath = args[outputFilePathIndex + 1];
        } else
            LOGGER.info("output path not specified, using default value : " + outputFilePath);
        Files.createDirectories(Paths.get(outputFilePath));
        return outputFilePath;
    }
}
