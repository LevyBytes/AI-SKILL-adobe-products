# Dynamic Link performance

The source composition a linked clip points to may be intricate, so any action you take on it needs extra processing time scaled to that complexity. After Effects carries out the action and then hands the finished data to Adobe Premiere by way of the global performance cache and persistent disk cache. Those caches lift After Effects performance, supplying already-cached frames whenever Premiere asks for them.

Cut down on playback lag through any one of these:

- Set the linked composition offline
- Switch off a linked clip so it briefly quits pointing at a composition
- In Premiere, use the Render and Replace feature (Clip > Render and Replace) to substitute the rendered file for the dynamically linked composition.

When intricate source compositions are part of your routine, add more RAM or move to a quicker processor.
