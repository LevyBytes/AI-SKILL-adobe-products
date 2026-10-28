# removeStateModel

| Version (Key) | Save-Prefs | Security | Product |
| --- | --- | --- | --- |
| 6.0 | No | No | All |

Takes away a state model that an earlier addStateModel call had registered. Pulling a state model does nothing to the state data held on individual annotations. Drop the model and register it once more, and every annotation's state data is still on hand.

See also addStateModel, getStateInModel, and transitionToState.

Parameters

| Parameter | Description |
| --- | --- |
| cName | The same one-of-a-kind, language-neutral identifier for the state model that addStateModel received. |

Example: picking up where the addStateModel sample left off, drop the “ReviewStates” state model:

```javascript
// Remove the state model
Collab.removeStateModel("ReviewStates");
```
