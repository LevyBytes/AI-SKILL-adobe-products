# Graphic customization objects - Custom element class

Custom class elements differ from ordinary UI elements because they start with no built-in visual appearance. The script that creates a custom element must draw it in the element's onDraw event handler function, which lets the script render any look supported by the drawing functions on the UI element's graphics object.

Custom elements share the common properties used by other control elements (see Common properties). Each custom element type also adds its own properties.

The Custom element class includes these element types:

| Element | Description |
| --- | --- |
| customBoundedValue | Use customBoundedValue for controls whose value changes between minimum and maximum bounds, such as Progressbar, Slider, and Scrollbar. It has the same additional properties as those controls: - value - minvalue - maxvalue - shortcutKey When value changes, the control receives onChange and then onDraw, so the element can redraw for the updated state. |
| customButton | Use customButton for button-style controls, including Button, IconButton with text, Checkbox, and similar controls. Additional properties are: - image - shortcutKey - text - value |
| customView | customView provides an image property so a script can specify an image to show. If image is set and no onDraw function exists, the default look is that image, rendered centered inside the element bounds. |

Moving the mouse into or out of the screen area occupied by a custom element does not call that element's onDraw event handler function.

To force a drawing refresh for those cases, call notify("onDraw") on the element from a mouseOver or mouseout event response for that element.

In the example below, the script handles mouseover and mouseout events on a customButton element and forces a visual update when the mouse enters or leaves the button:

Supply the custom button drawing callback and the custom control types used by this resource description. Call `show()` on the returned palette when ready.

```javascript
function createCustomPalette(drawButton) {
    var res = [
        "palette {",
        "    text:'Custom elements demo',",
        "    properties:{ closeOnKey:'OSCmnd+W', resizeable:true },",
        "    customBtn: Custom {",
        "        type:'customButton',",
        "        text:'Redraw original image'",
        "    },",
        "    customImageViewer: Custom {",
        "        type:'customView',",
        "        alignment:['fill','fill']",
        "    }",
        "}"
    ].join("\n");
    var w = new Window(res);
    w.customBtn.onDraw = drawButton;
    function btnMouseEventHandler(event) {
        try {
            event.target.notify("onDraw");
        } catch (error) {
            $.writeln(error);
        }
    }
    w.customBtn.addEventListener("mouseover", btnMouseEventHandler, false);
    w.customBtn.addEventListener("mouseout", btnMouseEventHandler, false);
    return w;
}
```
