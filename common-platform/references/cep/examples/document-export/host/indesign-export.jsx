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
function exportInDesignDocument(doc, target, type) {
    if (type === "pdf") doc.exportFile(ExportFormat.PDF_TYPE, target, false);
    else if (type === "jpg") doc.exportFile(ExportFormat.JPG, target, false);
    else if (type === "png") doc.exportFile(ExportFormat.PNG_FORMAT, target, false);
    else throw new Error("Unsupported InDesign export type");
}
