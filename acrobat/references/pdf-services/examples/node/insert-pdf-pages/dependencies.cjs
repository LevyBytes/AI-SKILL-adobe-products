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
const {pipeline} = require('node:stream/promises');
const {
    ServicePrincipalCredentials,
    PDFServices,
    MimeType,
    PageRanges,
    InsertPagesParams,
    InsertPagesJob,
    InsertPagesResult,
    SDKError,
    ServiceUsageError,
    ServiceApiError
} = require("@adobe/pdfservices-node-sdk");
const fs = require("fs");
module.exports = {pipeline, ServicePrincipalCredentials, PDFServices, MimeType, PageRanges, InsertPagesParams, InsertPagesJob, InsertPagesResult, SDKError, ServiceUsageError, ServiceApiError, fs};
