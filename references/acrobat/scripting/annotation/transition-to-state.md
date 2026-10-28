# transitionToState

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | D | No | C |

Moves the annotation into cState by running a state transition, and the move gets logged in the annotation’s audit trail.

See also the getStateInModel method.

Note

States behave correctly across a multiuser setup only when every user shares the same state model definitions. The safest approach is to keep those definitions in a folder-level JavaScript file that you can hand out to everyone or install on every machine.

Parameters

| Parameter | Description |
| --- | --- |
| cStateModel | The state model in which to perform the state transition. cStateModel must have been previously added by calling the Collab method addStateModel. |
| cState | A valid state in the state model to transition to. |

Example: Define a custom set of transition states, then set the state of an annotation.

```javascript
try {
    // Create a document
    var myDoc = app.newDoc();
    // Create an annot
    var myAnnot = myDoc.addAnnot
    ({
        page: 0,
        type: "Text",
        point: [300,400],
        name: "myAnnot",
    });
    // Create the state model
    var myStates = new Object();
    myStates["initial"] = {cUIName: "Haven't reviewed it"};
    myStates["approved"] = {cUIName: "I approve"};
    myStates["rejected"] = {cUIName: "Forget it"};
    myStates["resubmit"] = {cUIName: "Make some changes"};
    Collab.addStateModel({
        cName: "ReviewStates",
        cUIName: "My Review",
        oStates: myStates,
        cDefault: "initial"
    });
} catch(e) { console.println(e); }
// Change the states
myAnnot.transitionToState("ReviewStates", "resubmit");
myAnnot.transitionToState("ReviewStates", "approved");
```
