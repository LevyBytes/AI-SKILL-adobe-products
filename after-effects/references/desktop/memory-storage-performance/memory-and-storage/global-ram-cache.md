# Global RAM cache

What the Global RAM cache brings to the table:

- An undo/redo restores cached frames.
- Returning a composition or layer to an earlier state — say, toggling a layer's visibility off and then on — restores cached frames.
- Reusable frames turn up at any point on the timeline — think loop expressions, time remapping, or copy/paste of keyframes — not just the frames sitting next door.
- Frames eligible for reuse get spotted on duplicated layers or duplicated compositions;
- A render queue rendering with anything besides Current Settings won't automatically wipe out the cache.
