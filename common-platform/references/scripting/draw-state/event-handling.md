# Event handling

Several helper classes supply lower-level support for event handling.

ScriptUI usually creates event objects and delivers them to your handler. To imitate a user action, build an event object with ScriptUI.events.createEvent() and send it to the target object's controlobj-dispatchEvent function.

Keyboard state object is another helper object, giving global access to keyboard state while a function runs outside the event-handling framework.
