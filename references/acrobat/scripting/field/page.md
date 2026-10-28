# page

| Version (Key) | Save-Prefs | Security | Product | Type | Access |
| --- | --- | --- | --- | --- | --- |
| 5.0 | No | No | All | Integer Array | R |

A field's page number, or an array of them. When a field shows up just once in the document, page hands back a single integer — the 0-based number of the page it sits on. With multiple appearances, you instead get an array of integers, where every entry is the 0-based page of one appearance. The sequence of those page numbers follows the creation order of the field's individual widgets, and tab-order has no bearing on it. Should an appearance land on a hidden template page, page reports -1 for that one.

Fields

all

Example 1: Work out whether a given field shows up on a single page or on several.

```javascript
var f = this.getField("myField");
if (typeof f.page == "number")
    console.println("This field only occurs once on page " + f.page);
else
    console.println("This field occurs " + f.page.length + " times");
```

Example 2 (Acrobat 6.0)

You can lean on the page property to count the widgets tied to a field name. Here it counts the radio buttons within a radio button field.

```javascript
var f = this.getField("myRadio");
if ( typeof f.page == "object" )
    console.println("There are " + f.page.length
        + " radios in this field.");
```
