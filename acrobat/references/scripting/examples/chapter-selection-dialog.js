var dialog4 = {
initialize: function(dialog) {
dialog.load({
subl:
{
"Chapter 1":
{
"Section 1":
{
"SubSection 1": -1,
"SubSection 2": -2,
},
"Section 2":
{
"SubSection 1": -3,
"SubSection 2": -4,
}
},
"Chapter 3": -5,
"Chapter 4": -6
}
})
},
subl: function(dialog) {
console.println("Selection Box Hit");
},
getHierChoice: function (entries) {
    if (!entries || typeof entries !== "object") return null;
    for (var label in entries) {
        var entry = entries[label];
        if (entry && typeof entry === "object") {
            var selected = this.getHierChoice(entry);
            if (selected) {
                selected.label = label + ", " + selected.label;
                return selected;
            }
        } else if (typeof entry === "number" && entry > 0) {
            return {label: label, value: entry};
        }
    }
    return null;
},
butn: function (dialog)
{
var element = dialog.store()["subl"]
var retn = this.getHierChoice(element);
if ( retn ) {
// Write to the console the full name of the item selected
console.println('The selection you have chosen is "' + retn.label + '", its value is ' + retn.value );
dialog.end("ok");
// this.doc is the doc object of this document
this.doc.gotoNamedDest("dest"+retn.value);
}
else app.alert("Please make a selection, or cancel");
},
cncl: function (dialog) { dialog.end("cancel") },
// Dialog box description
description:
createChapterSelectionLayout()
};
