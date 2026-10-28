function exportInDesignDocument(doc, target, type) {
    if (type === "pdf") doc.exportFile(ExportFormat.PDF_TYPE, target, false);
    else if (type === "jpg") doc.exportFile(ExportFormat.JPG, target, false);
    else if (type === "png") doc.exportFile(ExportFormat.PNG_FORMAT, target, false);
    else throw new Error("Unsupported InDesign export type");
}
