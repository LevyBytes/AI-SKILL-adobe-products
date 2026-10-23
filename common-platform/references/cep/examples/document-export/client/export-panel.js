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
