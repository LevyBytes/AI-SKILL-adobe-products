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
