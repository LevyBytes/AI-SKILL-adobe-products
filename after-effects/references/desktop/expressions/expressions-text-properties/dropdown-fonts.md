# Dropdown fonts

Link Fonts or Styles to a Dropdown Menu

Link Fonts or Styles to a Dropdown Menu

A Dropdown menu can drive text styling — for instance, pinning Text layers to chosen fonts. That comes in handy for templates, MoGRTs, brand-guideline enforcement, and similar use cases:

```javascript
// To lock a text layer to specific fonts with a Dropdown Menu Control

var dropDownMenu = thisComp.layer("LayerName").effect("Dropdown Menu Control")("Menu");

switch (dropDownMenu.value) {

    case 1 :

        text.sourceText.style.setFont("Georgia");

        break;

    case 2 :

        text.sourceText.style.setFont("Impact");

        break;

default :

        text.sourceText.style.setFont("Tahoma");

}
```
