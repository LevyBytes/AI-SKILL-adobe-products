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
function getPageRangesForFirstFile() {
    // Specify which pages of the first file are to be inserted in the base file
    const pageRanges = new sdk.PageRanges();
    // Add pages 1 to 3
    pageRanges.addRange(1, 3);
    // Add page 4
    pageRanges.addSinglePage(4);
    return pageRanges;
}
function createOutputFilePath() {
    const filePath = "output/InsertPages/";
    const date = new Date();
    const dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    sdk.fs.mkdirSync(filePath, {recursive: true});
    return (`${filePath}insert${dateString}.pdf`);
}
module.exports = {getPageRangesForFirstFile, createOutputFilePath};
