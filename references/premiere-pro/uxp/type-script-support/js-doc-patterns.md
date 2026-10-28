# JSDoc Patterns

These patterns show common ways to add type hints in JavaScript. Start by typing the main `ppro` object; after that, method calls carry types forward automatically. Use explicit annotations mainly for function parameters or when extra clarity helps.

**Type hint for the main API:**

```javascript
/** @type {import('@adobe/premierepro').premierepro} */
const ppro = require("premierepro");

async function example() {
  const project = await ppro.Project.getActiveProject();
  const sequence = await project.getActiveSequence();

  // Types flow through automatically; sequence has full IntelliSense!
  const trackCount = await sequence.getVideoTrackCount();
}
```

**Function parameters and return types:**

```javascript
/**
 * Analyze all video tracks in a sequence
 * @param {import('@adobe/premierepro').Sequence} sequence - The sequence to analyze
 * @returns {Promise<void>}
 */
async function analyzeTracks(sequence) {
  const videoTrackCount = await sequence.getVideoTrackCount();

  for (let i = 0; i < videoTrackCount; i++) {
    const track = await sequence.getVideoTrack(i);
    console.log(`Track ${i}: ${track.name}`);
  }
}
```

**Arrays and complex types:**

```javascript
/**
 * Process multiple track items
 * @param {import('@adobe/premierepro').VideoClipTrackItem[]} trackItems
 */
async function processTrackItems(trackItems) {
  for (const item of trackItems) {
    // item has full IntelliSense
    const name = await item.getName();
    console.log(name);
  }
}
```
