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
function getHTMLToPDFParams() {
    // Define the page layout, in this case an 8 x 11.5 inch page (effectively portrait orientation)
    const pageLayout = new sdk.PageLayout({
        pageHeight: 11.5,
        pageWidth: 8
    });
    // Set the dataToMerge field that needs to be populated in the HTML before its conversion
    const dataToMerge = {
        "title": "Create, Convert PDFs and More!",
        "sub_title": "Easily integrate PDF actions within your document workflows."
    };
    return new sdk.HTMLToPDFParams({
        pageLayout,
        dataToMerge,
        includeHeaderFooter: true,
    });
}
function createOutputFilePath() {
    const filePath = "output/DynamicHTMLToPDF/";
    const date = new Date();
    const dateString = date.getFullYear() + "-" + ("0" + (date.getMonth() + 1)).slice(-2) + "-" +
        ("0" + date.getDate()).slice(-2) + "T" + ("0" + date.getHours()).slice(-2) + "-" +
        ("0" + date.getMinutes()).slice(-2) + "-" + ("0" + date.getSeconds()).slice(-2);
    sdk.fs.mkdirSync(filePath, {recursive: true});
    return (`${filePath}create${dateString}.pdf`);
}
module.exports = {getHTMLToPDFParams, createOutputFilePath};
