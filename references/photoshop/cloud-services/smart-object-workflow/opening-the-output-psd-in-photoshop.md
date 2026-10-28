# Opening the output PSD in Photoshop

Opening the processed PSD on a local Photoshop install can trigger a **"missing file"** prompt for the linked smart object. That warning is normal. During server-side processing, the PSD stores a path to the asset's temporary server location, and that path is unavailable on the local machine. Photoshop is reporting the unresolved link correctly.

Pick the option that fits the workflow:

1. **Relink locally.** Store a local copy of the asset supplied as the linked smart object somewhere Photoshop can reach. In Photoshop, choose the **Layer** panel → **Smart Objects** → **Relink to File**,

   [Figure: Relinking the smart object in Photoshop](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/relink-2.jpg?raw=true)

   or use the missing-link dialog when the PSD opens. After relinking, Photoshop stores the updated path.

   [Figure: Missing file prompt in Photoshop](https://raw.githubusercontent.com/AdobeDocs/ffs-photoshop-API/main/src/pages/assets/relink-1.jpg?raw=true)

2. **Use embedded smart objects instead.** Choose embedded smart objects when portability outranks an external-link workflow. For PSD handoff to an end user who needs to open and edit without tracking separate assets, embedded smart objects are carried inside the PSD and remove the relink step. To embed, either set `"isLinked": false` or leave `isLinked` out of the `smartObject` block. Linked smart objects fit managed asset pipelines that need direct control over source files; embedded objects usually work better for hand-off.

## See also

- [Photoshop Actions](../photoshop-actions.md)
