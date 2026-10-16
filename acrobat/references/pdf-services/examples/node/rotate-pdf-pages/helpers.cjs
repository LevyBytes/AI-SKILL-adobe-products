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
function getFirstPageRangeForRotation() {
    // Specify pages for rotation.
    const firstPageRange = new sdk.PageRanges();
    // Add page 1.
    firstPageRange.addSinglePage(1);
    // Add pages 3 to 4.
    firstPageRange.addRange(3, 4);
    return firstPageRange;
}
function getSecondPageRangeForRotation() {
    // Specify pages for rotation.
    const secondPageRange = new sdk.PageRanges();
    // Add page 2.
    secondPageRange.addSinglePage(2);
    return secondPageRange;
}
function createOutputFilePath() {
    const filePath = "output/RotatePages/";
    const date = new Date();
    const dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    sdk.fs.mkdirSync(filePath, {recursive: true});
    return (`${filePath}rotate${dateString}.pdf`);
}
module.exports = {getFirstPageRangeForRotation, getSecondPageRangeForRotation, createOutputFilePath};
