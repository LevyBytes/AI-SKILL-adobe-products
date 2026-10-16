# JavaScript APIs — Field

An Acrobat form field — the kind made with the Acrobat form tool or via the Doc addField method — is what this object stands for. Just as a form author can adjust an existing field's properties such as its font or border color, the Field object lets the JavaScript user carry out those same edits.

Reaching a field first requires binding it to a JavaScript variable through one of the Doc's methods. You can bind several variables to a single field by reading or writing the field's object properties or invoking its methods — and a change made through any one of them reaches every variable bound to that field.

```javascript
var f = this.getField("Total");
```

Here the variable f gives the script a handle for working with the "Total" form field.

A document's fields may be organized into a hierarchy. Take form fields named "FirstName" and "LastName": these are flat names with nothing tying them together. Renaming the fields lets you build a hierarchy of fields inside the document.

"Name.First" and "Name.Last", for instance, build a tree of fields. Within Acrobat forms the period ('.') separator marks a step down the hierarchy. Across those fields "Name" acts as the parent, with "First" and "Last" as its children. "Name" also counts as an internal field, since it has no visible appearance, whereas "First" and "Last" are terminal fields that show up on the page.

When Acrobat form fields carry the same name they also carry the same value. A terminal field may present that data in more than one way — appearing on separate pages, carrying a different rotation, or taking a different font or background color — yet the value stays the same across them. So editing the value on one presentation of a terminal field pushes the same update automatically to every other one sharing that name.

A widget is the term for each presentation of a terminal field. No widget carries a name of its own; instead a 0-based index within its terminal field identifies it. That index follows the sequence in which the field's individual widgets were made, and tab-order has no bearing on it.

To find the index of a particular widget, turn to Acrobat's Fields navigation tab. The index is whatever number trails the '#' sign inside the displayed field name. (From Acrobat 6.0 onward, that widget index shows only when a field holds more than one widget.) Double-clicking an entry in the Fields panel jumps you to the matching widget in the document; conversely, selecting a field in the document highlights its matching entry in the Fields panel.

From Acrobat 6.0 on, getField can fetch the Field object for a single one of a field's widgets. The notation for this tacks a "." (period) plus the widget index onto the field name you pass. Used this way, the Field object getField returns wraps just one individual widget. Such Field objects work anywhere a Field object obtained by passing the plain field name would — though, as the table below shows, the collection of nodes affected can differ.

From Acrobat 8.0 on, the LiveCycle Reader Extensions Field right gets checked for Field objects only when the JavaScript runs outside the PDF file — from the JavaScript console, via batch execution, or via JSObject.

| Action | Field object that represents all widgets | Field object that represents one specific widget |
| --- | --- | --- |
| Get a widget property | Gets the property of widget # 0. | Gets the property of the widget. |
| Set a widget property | Sets the property of all widgets that are children of that field. (The rect property and the setFocus method are exceptions that apply to widget # 0. See example below.) | Sets the property of the widget. |
| Get a field property | Gets the property of the field. | Gets the property of the parent field. |
| Set a field property | Sets the property of the field. | Sets the property of the parent field. |

In the next example the rect property of the "my radio" field's second radio button — index 1, since the first sits at index 0 — gets reset.

```javascript
var f = this.getField("my radio.1");
f.rect = [360, 677, 392, 646];
```
