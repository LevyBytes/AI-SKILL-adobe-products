# Multimedia event processing

Any time an event fires and reaches an EventListener, a multimedia event object rides along as a parameter to that EventListener. Resembling the event object found throughout Acrobat, it carries the properties spelled out below.

When rendition actions raise multimedia event objects — say, through custom JavaScript supplied on the Actions tab of the Multimedia Properties panel — those objects gain these extra properties:

| action.annot | The ScreenAnnot object for this event. |
| --- | --- |
| action.rendition | The Rendition object for this event. |

Multimedia event objects that the standard multimedia event dispatcher has handled pick up these properties too. Supplying your own events.dispatch method means they will not be present.

| Property | Description |
| --- | --- |
| media.doc | The document, same as target.doc. |
| media.events | The events object, same as target.events. |
| media.id | A copy of event.name with spaces removed. |

Particular events can expose properties of their own. Look to each EventListener object method's writeup for the specifics.

To halt any further dispatching, an event method invoked by the standard event dispatcher can assign either of these properties:

```javascript
stopDispatch
stopAllDispatch
```

Setting event.stopDispatch to true keeps the current event from reaching the EventListeners that remain. Doing this inside an on event method stops the rest of the on methods from running for that event, yet the after methods still fire. Set event.stopAllDispatch and neither kind of event method runs afterward. Turn to the EventListener object for what the on and after EventListeners mean.
