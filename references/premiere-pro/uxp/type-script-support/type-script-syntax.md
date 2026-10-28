# TypeScript Syntax

TypeScript gives cleaner syntax and stronger inference:

```typescript
const ppro = require("premierepro") as premierepro;

async function analyzeSequence(): Promise<void> {
  const project = await ppro.Project.getActiveProject();
  if (!project) return;

  // TypeScript infers types automatically
  const sequence = await project.getActiveSequence();
  if (!sequence) return;

  // Full type safety and IntelliSense
  const videoTrackCount: number = await sequence.getVideoTrackCount();

  for (let i = 0; i < videoTrackCount; i++) {
    const track: VideoTrack = await sequence.getVideoTrack(i);
    console.log(`Track ${i}: ${track.name}`);
  }
}
```
