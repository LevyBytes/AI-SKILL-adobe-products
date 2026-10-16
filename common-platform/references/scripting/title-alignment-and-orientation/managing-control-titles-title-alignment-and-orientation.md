# Managing control titles — Title alignment and orientation

Title layout handles alignment differently than automatic layout. In this context, the alignment property sets both the title/graphic orientation and the way the title lines up with the graphic element. Its value is a 2-element array: the first item controls horizontal alignment, and the second item controls vertical alignment. The accepted values match those from automatic layout (see Aligning children), except that fill is not permitted.

```javascript
button.titleLayout = { alignment: ["right", "center"] };
```

```javascript
image.titleLayout = { alignment: ["center", "bottom"] };
```

```javascript
button.title = "Get information";
button.titleLayout = { alignment: ["center", "center"] };
```

```javascript
image.titleLayout = { alignment: ["left", "top"] };
```

```javascript
panel.title = "Image format";
panel.titleLayout = { alignment: ["center", "top"], spacing: 15 };
```
