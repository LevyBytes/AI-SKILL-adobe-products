# What this action does

1. **Auto Cutout** - AI detects the main subject and isolates it automatically
2. **Create Mask** - Builds a layer mask from the generated selection
3. **Convert to Smart Object** - Changes the layer into a smart object for non-destructive editing
4. **First Trim** - Minimizes canvas size by removing transparent pixels around the subject
5. **Add Canvas Padding** - Applies the customizable default of 10 pixels to each side
6. **Convert to Layers** - Turns the smart object back into a regular layer
7. **Delete Mask** - Deletes the layer mask after it is no longer needed
8. **Final Trim** - Performs a final trim so edges are clean and output stays consistent
