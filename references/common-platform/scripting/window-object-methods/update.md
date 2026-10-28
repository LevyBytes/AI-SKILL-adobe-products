# update()

windowOrContainerObj.update()

Lets a script continue a lengthy task, such as copying a large file, while refreshing UI elements to show progress.

Ordinarily, UI drawing occurs in idle time, while the application is free and the OS event queue is being handled. During a long script, that normal event loop is unavailable. Call this method to force the needed synchronous drawing refreshes and process selected mouse and keyboard events, so a user can cancel the current operation, for example by clicking a Cancel button.

While update() runs, the application enters a modal state. In that state it ignores events that would activate another window or focus a control outside the window being refreshed. The modal state still permits drawing events for controls in other windows, as with a modal show() operation, so the script does not block UI updates elsewhere in the application during the operation loop.

Calling update() on a window that is not currently visible is an error.

### Returns

Nothing
