# Actions and ActionSets

The `Actions` panel is central to many Photoshop workflows. Actions work like macros: users record them and later replay frequent commands and tools. Related actions live inside `Action Sets`, much like layers can live inside Group layers.

Through the Actions object, actions can be deleted, duplicated, renamed, and played. UXP currently provides no way to _create_ an action.

The ActionSet object offers delete, duplicate, rename, and play operations for Action Sets. UXP currently provides no way to _create_ an Action Set.

Actions and Action Sets are app-wide; they are not associated with a particular Document.

This example looks up one Action in the default Action Set and plays it when present:

```javascript
const app = require("photoshop").app;
const allActionSets = app.actionTree;
const firstActionSet = allActionSets[0];
let actions = new Map(); // a JS Map allows easy "find by name" operations
firstActionSet.actions.forEach((action) => {
  actions.set(action.name, action);
});
const myAction = actions.get("Wood Frame - 50 pixel");
if (myAction) {
  // user may have deleted this action
  async function playMyAction(executionContext) {
    await myAction.play();
  }
  await require("photoshop").core.executeAsModal(playMyAction);
}
```

More `Action` details are listed under [Action](../host-api/action/reference-index.md); related Action Set material is in [ActionSet](../host-api/action-set/reference-index.md)
