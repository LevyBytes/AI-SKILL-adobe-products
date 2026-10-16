# Defining behavior with event callbacks and listeners — How registered event-handlers are called

When an event fires on a target, ScriptUI invokes every handler registered for that event on that target. The same event can have handlers on several different targets, including multiple targets of one type. For instance, a dialog with two checkboxes might assign a click handler to each checkbox object when each checkbox needs different click behavior.

An ancestor object can also receive events from its children. If the two checkboxes should perform the same response to a mouse click, both can share one handler registered on the parent window or container. A click in either child control then calls the handler attached to that parent window.

Both patterns can be used together, producing more than one reaction to one event. A script can attach a broad handler to the parent and a more specialized handler for the same event to the child object that is the actual target.

The order for multiple handlers is determined by the three propagation phases:

- Capture phase - For an event in an object hierarchy, ScriptUI first checks the highest ancestor that has a handler for that event, such as the window. If the top ancestor has no handler, ScriptUI continues down through ancestors, for example the dialog, until it reaches the target's direct parent. Once it finds a handler on an ancestor of the target, it runs that handler and then moves to the next phase.
- At-target phase - ScriptUI runs any handlers registered directly on the actual target object.
- Bubble phase - The event then travels outward through the hierarchy. ScriptUI looks again for handlers registered on ancestor objects for that event, beginning with the immediate parent and moving upward to the highest ancestor. When it runs a handler in this phase, propagation ends.

As an example, imagine a dialog window containing a group, and that group containing a button. The script registers one click event handler on the Window object, one on the group object, and one on the button object, which is the actual target.

After the user clicks the button, ScriptUI calls the Window object's handler first in the capture phase, then calls the button object's handler in the at-target phase. It then calls the group object's registered handler during the bubble phase.

For a handler registered on an ancestor of the actual event target, the third addEventListener() argument controls whether that ancestor handler responds during capture only rather than during bubbling. This example registers a click handler on the parent dialog object for capture-phase handling:

```javascript
myDialog.addEventListener( "click", handleAllItems, true );
```

The default for that value is false. When it is omitted, the handler can respond in the bubbling phase if a descendant is the target, or in the at-target phase if the object itself receives the event.

To identify which registered handler is currently running, inspect eventPhase and currentTarget on the event object. During capture and bubbling, currentTarget contains the target object's ancestor where the executing handler was registered.
