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
function getInputFilePathFromCmdArgs(args) {
    let inputFilePath = "resources/autotagPdfInput.pdf";
    let inputFilePathIndex = args.indexOf("--input");
    if (inputFilePathIndex >= 0 && inputFilePathIndex < args.length - 1) {
        inputFilePath = args[inputFilePathIndex + 1];
    } else
        console.log("input file not specified, using default value : autotagPdfInput.pdf");
    return inputFilePath;
}
function getOutputFilePathFromCmdArgs(args) {
    let outputFilePath = "output/AutotagPDFWithParameters/";
    let outputFilePathIndex = args.indexOf("--output");
    if (outputFilePathIndex >= 0 && outputFilePathIndex < args.length - 1) {
        outputFilePath = args[outputFilePathIndex + 1];
    } else {
        console.log("output path not specified, using default value :" + outputFilePath);
        sdk.fs.mkdirSync(outputFilePath, {recursive: true});
    }
    return outputFilePath;
}
function getGenerateReportFromCmdArgs(args) {
    return args.includes("--report");
}
function getShiftHeadingsFromCmdArgs(args) {
    return args.includes("--shift_headings");
}
module.exports = {getInputFilePathFromCmdArgs, getOutputFilePathFromCmdArgs, getGenerateReportFromCmdArgs, getShiftHeadingsFromCmdArgs};
