# Managing control titles - Margins around the title and graphic object

The margins property sets, in pixels, the distance from each edge of an element to the visible content inside that element. This replaces the default margin values: most element types have no margins, while iconbutton uses 6 pixels at each edge.

- For iconbutton, margins sets the padding between the button frame and the title plus icon image.
- For other element types, margins sets the padding between the imaginary border around the combined bounding boxes of the title and graphic object. This increases the space the element occupies beyond its default measurements.

The example below overrides the default margins for iconbutton and dropdownlist elements.

Panels surround the lists so artificial borders are visible around them:

```javascript
w.btn1 = w.add("iconbutton { title: 'Default margins', image: 'SystemWarningIcon' }");

w.btn2 = w.add("iconbutton { title: 'Extra T/B margins', image: 'SystemWarningIcon' }");
var defaultBtnMargins = w.btn2.titleLayout.margins;
w.btn2.titleLayout = { margins: [defaultBtnMargins[0], 15, defaultBtnMargins[2], 15] };

w.panel1 = w.add("panel { margins: 0, ddl1: DropDownList { title: 'Default margins' } }");
w.panel2 = w.add("panel { margins: 0, ddl2: DropDownList { title: 'Extra L/R margins' } }");
w.panel2.ddl2.titleLayout = { margins: [15, 0, 15, 0] };
```
