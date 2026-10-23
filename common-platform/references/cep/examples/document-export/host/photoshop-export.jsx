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
