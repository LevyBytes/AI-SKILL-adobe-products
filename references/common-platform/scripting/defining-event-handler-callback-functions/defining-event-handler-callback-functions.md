# Defining behavior with event callbacks and listeners - Defining event-handler callback functions

A script may define an event handler either as a named function referenced from the callback property, or as an inline anonymous function assigned directly to that property.

```javascript
function hasBtnsCbOnClick() { /* do something interesting */ }
hasBtnsCb.onClick = hasBtnsCbOnClick;
```

```javascript
UI-element.callback-name = function () { handler-definition };
```

Event-handler functions receive no arguments.

For example, this assignment stores an onClick function on hasBtnsCb that turns on a sibling control:

```javascript
hasBtnsCb.onClick = function () {
    this.parent.alertBtnsPnl.enabled = this.value;
};
```

The following statements assign onClick handlers to buttons that close their containing dialog. Each handler returns a different value to the show method that opened the dialog, allowing the calling script to identify the clicked button:

```javascript
buildBtn.onClick = function() {
    this.parent.parent.close( 1 );
};

cancelBtn.onClick = function() {
    this.parent.parent.close( 2 );
};
```
