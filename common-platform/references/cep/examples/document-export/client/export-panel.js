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
var csInterface = new CSInterface();
function exportWithType(type) {
    csInterface.evalScript("exportFileResult(" + JSON.stringify(type) + ")", function (result) {
        if (result.indexOf("OK:") === 0) alert("File saved at " + result.substring(3));
        else alert(result.indexOf("ERROR:") === 0 ? result.substring(6) : "Host export failed: " + result);
    });
}
document.querySelector("#export-original").addEventListener("click", function () {
    exportWithType("original");
}, false);
document.querySelector("#export-pdf").addEventListener("click", function () {
    exportWithType("pdf");
}, false);
document.querySelector("#export-jpg").addEventListener("click", function () {
    exportWithType("jpg");
}, false);
document.querySelector("#export-png").addEventListener("click", function () {
    exportWithType("png");
}, false);
