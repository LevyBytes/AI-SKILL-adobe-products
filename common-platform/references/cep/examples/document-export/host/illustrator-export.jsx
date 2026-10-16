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
function exportIllustratorDocument(doc, target, type) {
    if (type === "pdf") {
        var options = new PDFSaveOptions();
        options.optimization = true;
        doc.saveAs(target, options);
    } else if (type === "jpg") {
        var options = new ExportOptionsJPEG();
        options.blurAmount = 2;
        options.matte = true;
        options.qualitySetting = 100;
        var exportBase = File(target.fullName.replace(/\.[^.]+$/, ""));
        doc.exportFile(exportBase, ExportType.JPEG, options);
    } else if (type === "png") {
        var options = new ExportOptionsPNG8();
        options.matte = true;
        var exportBase = File(target.fullName.replace(/\.[^.]+$/, ""));
        doc.exportFile(exportBase, ExportType.PNG8, options);
    } else {
        throw new Error("Unsupported Illustrator export type");
    }
}
