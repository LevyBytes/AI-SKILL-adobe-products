# show()

windowOrContainerObj.show()

Displays this window, container, or control. If a window defines onShow, that callback runs before display.

When a window or container is hidden, its children are hidden as well; after it is shown again, those children keep their individual visibility states.

For a modal dialog, this opens the dialog and waits until dismissal before returning. If dismissal happens through close(), the method returns the result value passed to close(); otherwise it returns 0.

### Returns

Nothing
