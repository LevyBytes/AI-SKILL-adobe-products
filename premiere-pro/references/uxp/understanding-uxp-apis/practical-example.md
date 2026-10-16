# Practical Example

Consider a plugin that needs to combine both API categories. Suppose it must:

1. Load text content from a file on the user's computer
2. Add a new text layer to the active sequence
3. Apply a specific style to that text layer

Each step maps to a different API area:

**Step 1: Read file content** — Read with the `fs` module from UXP

```javascript
const fs = require("fs");
const file = await fs.getFileForOpening();
const content = await file.read();
```

**Step 2: Create text layer** — Create it through the Premiere DOM APIs

```javascript
const app = require("premierepro");
const sequence = app.project.activeSequence;
// Add text layer to sequence
```

**Step 3: Apply styling** — Combine both API areas

```javascript
// Premiere APIs to modify the clip properties
// UXP APIs to show progress in your plugin's UI
```

In this example, UXP Core APIs cover infrastructure work, while Premiere APIs make the creative-content changes.
