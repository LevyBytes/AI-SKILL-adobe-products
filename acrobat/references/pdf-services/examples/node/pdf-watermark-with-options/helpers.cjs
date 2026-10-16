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
function getPageRangesForWatermark() {
    // Specify pages for deletion.
    const pageRangesForWatermark = new sdk.PageRanges();
    // Add page 1.
    pageRangesForWatermark.addSinglePage(1);
    // Add pages 3 to 4.
    pageRangesForWatermark.addRange(3, 4);
    return pageRangesForWatermark;
}
function createOutputFilePath() {
    const filePath = "output/PDFWatermarkWithOptions/";
    const date = new Date();
    const dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    sdk.fs.mkdirSync(filePath, {recursive: true});
    return (`${filePath}watermark${dateString}.pdf`);
}
module.exports = {getPageRangesForWatermark, createOutputFilePath};
