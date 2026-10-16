function createChapterSelectionLayout() {
    return {
name: "My Novel",
elements:
[
{
type: "view",
align_children: "align_left",
elements:
[
{
type: "cluster",
name: "Book Headings",
elements:
[
{
type: "static_text",
name: "Make a selection",
},
{
type: "hier_list_box",
item_id: "subl",
char_width: 20,
height: 200
}
]
},
{
type: "view",
align_children: "align_row",
elements:
[
{
type: "button",
item_id: "cncl",
name: "Cancel"
},
{
item_id: "butn",
type: "button",
name: "Select"
}
]
}
]
}
]
};
}
