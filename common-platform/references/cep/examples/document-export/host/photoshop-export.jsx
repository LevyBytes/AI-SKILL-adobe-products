/*
Copyright 2018 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
function exportPhotoshopDocument(doc, target, type) {
    if (type === "pdf") {
        var options = new PDFSaveOptions();
        options.embedColorProfile = true;
        options.optimizeForWeb = true;
        doc.saveAs(target, options, true);
    } else if (type === "jpg") {
        var options = new JPEGSaveOptions();
        options.embedColorProfile = true;
        options.formatOptions = FormatOptions.STANDARDBASELINE;
        options.matte = MatteType.NONE;
        options.quality = 1;
        doc.saveAs(target, options, true);
    } else if (type === "png") {
        var options = new PNGSaveOptions();
        options.interlaced = false;
        doc.saveAs(target, options, true);
    } else if (type === "web-jpg") {
        var options = new ExportOptionsSaveForWeb();
        options.quality = 60;
        options.format = SaveDocumentType.JPEG;
        options.includeProfile = true;
        doc.exportDocument(target, ExportType.SAVEFORWEB, options);
    } else {
        throw new Error("Unsupported Photoshop export type");
    }
}
