# Running scripts from the Window menu

The bottom of the Window menu lists whatever scripts live in the ScriptUI Panels folder. A script written to present its user interface in a dockable panel belongs in the ScriptUI folder. These ScriptUI panels behave much like the stock panels of the After Effects user interface.

Rather than building a Window object and hanging controls off it, a ScriptUI Panels script works through the this object standing in for the panel. The code below, for example, drops a button onto a panel:

```javascript
var myPanel = this;
myPanel.add("button", [10, 10, 100, 30], "Tool #1");
```

Build your user interface inside a function and this no longer works — it points at the function itself instead of the panel. The fix is to hand the this object to your function as an argument. For example:

```javascript
function createUI(thisObj) {
    var myPanel = thisObj;
    myPanel.add("button", [10, 10, 100, 30], "Tool #1");
    return myPanel;
}
var myToolsPanel = createUI(this);
```

A script that refers to this can't be launched with the File > Scripts > Run Script File menu command. So that your script runs both as a Window object (reached from the File > Scripts menu) and as a native panel (reached from the Window menu), test whether this is a Panel object. For example:

```javascript
function createUI(thisObj) {
    var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "My Tools",
    [100, 100, 300, 300]);
    myPanel.add("button", [10, 10, 100, 30], "Tool #1");
    return myPanel;
}
var myToolsPanel = createUI(this);
```
