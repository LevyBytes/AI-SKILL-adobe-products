# Scrollbar

A Scrollbar resembles a Slider because it uses a bar and a draggable indicator. It also includes stepper buttons at both ends; clicking one moves the indicator by stepdelta. Clicking the bar outside the indicator moves it by jumpdelta.

Orientation may be horizontal or vertical. A greater width than height makes it horizontal; otherwise it is vertical. The arguments passed to the scrollbar's add method set the value, minvalue and maxvalue properties.

Scrollbars are commonly paired with an EditText field so the current scrollbar value is visible and the position can be entered as an exact value.

This example creates a scrollbar in a panel and associates it with StaticText and EditText elements:

```javascript
dlg.sizePnl = dlg.add( "panel", undefined, "Dimensions" );
dlg.sizePnl.widthSt = dlg.sizePnl.add( "statictext", undefined, "Width:" );
dlg.sizePnl.widthScrl = dlg.sizePnl.add( "scrollbar", undefined, 300, 300, 800 );
dlg.sizePnl.widthEt = dlg.sizePnl.add( "edittext" );
```
