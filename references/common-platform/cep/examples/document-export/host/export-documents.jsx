#include "illustrator-export.jsx"
#include "photoshop-export.jsx"
#include "indesign-export.jsx"

function exportFile(type) {
    if (!app.documents.length) throw new Error("Open a saved document first.");
    var doc = app.activeDocument;
    var source;
    try { source = File(doc.fullName); }
    catch (error) { throw new Error("Save the document in its native format first."); }
    if (type === "original") {
        doc.save();
        return source.fsName;
    }
    if (!/^(pdf|jpg|png|web-jpg)$/.test(type)) throw new Error("Unsupported export type.");
    if (type === "web-jpg" && app.name !== "Adobe Photoshop") {
        throw new Error("Web JPEG export in this example requires Photoshop.");
    }
    var extension = type === "web-jpg" ? "jpg" : type;
    var name = source.name;
    var dot = name.lastIndexOf(".");
    var stem = dot > 0 ? name.substring(0, dot) : name;
    var target = File(source.parent.fullName + "/" + stem + "." + extension);
    if (target.fsName.toLowerCase() === source.fsName.toLowerCase() || target.exists) {
        throw new Error("The export destination already exists. Choose another source name or move the existing export.");
    }
    if (app.name === "Adobe Illustrator") exportIllustratorDocument(doc, target, type);
    else if (app.name === "Adobe Photoshop") exportPhotoshopDocument(doc, target, type);
    else if (app.name === "Adobe InDesign") exportInDesignDocument(doc, target, type);
    else throw new Error("This example supports Illustrator, Photoshop and InDesign.");
    return target.fsName;
}

function exportFileResult(type) {
    try { return "OK:" + exportFile(type); }
    catch (error) { return "ERROR:" + error.message; }
}
