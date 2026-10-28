# Making changes

During development, use this loop:

1. Start `npm run dev` so saves trigger rebuilds.
2. Change files in `src/`, `index.ts`, or `public/`.
3. Select **Reload** in UDT.

When `npm run dev` is not running, run `npm run build` manually after each edit.

**Manifest or `public/` changes** require an **Unload -> Load** cycle in UDT instead of only a reload.

---
