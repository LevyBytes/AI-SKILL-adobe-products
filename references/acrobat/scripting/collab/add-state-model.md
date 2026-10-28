# addStateModel

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Registers a fresh state model with Acrobat. The set of legitimate states an annotation built on the model may hold is laid out by a state model (consult the Annotation object for how to read and write an annotation's state). Such models can map out the workflow a document review follows and can drive review management.

See also removeStateModel, getStateInModel, and transitionToState.

Parameters

| Parameter | Description |
| --- | --- |
| cName | A language-neutral identifier, one of a kind, for the State Model. |
| cUIName | The name shown for the state model within the interface. A localized string is the expected value. |
| oStates | A States object spells out the model's states. |
| cDefault | (optional) Picks one of the model's states to serve as the fallback when nothing else is set. By default no fallback state exists. |
| bHidden | (optional) Controls whether the state model stays out of sight in the state model interface. It defaults to false, so the State Model appears. |
| bHistory | (optional) Controls whether the state model keeps an audit trail. Retaining that trail consumes extra room in the file. It defaults to true. |

States object

Passed in as the oStates parameter, this generic object captures a collection of states within a state model. Each key in the object literal is a one-of-a-kind state identifier, while each matching value is an object carrying these properties:

| Property | Description |
| --- | --- |
| cUIName | The state's UI label (display name). |
| oIcon | (optional) An Icon Stream object shown in the UI to represent the state. |

Example: register a state model carrying the one-of-a-kind name “ReviewStates”:

```javascript
Collab.addStateModel({
    cName: "ReviewStates",
    cUIName: "My Review",

     oStates:
    {
        "initial": {cUIName: "Haven't reviewed it"},
        "approved": {cUIName: "I approve"},
        "rejected": {cUIName: "Forget it"},
        "resubmit": {cUIName: "Make some changes"}
    },
    cDefault: "initial"
});
```

Calling Collab.removeStateModel takes a state model away.
