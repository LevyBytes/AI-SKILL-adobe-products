# Timeline declaration

Community declaration reference: Animate/22.0.

A Timeline is the Flash timeline object. For the active document, retrieve it with fl.getDocumentDOM().getTimeline(); that call gives back the timeline for whichever scene or symbol is currently open for editing.
With scenes, every scene timeline carries its own index, so the active document can address it as fl.getDocumentDOM().timelines[i]. In that expression, i identifies the timeline value's index.
Timeline object methods and properties interpret frame arguments as zero-based indexes rather than as the displayed frame numbers in the timeline sequence. For example, frame 1 has the frame index 0.

Declaration: `declare class Timeline`.

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
