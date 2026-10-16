# How Firefly Graph works

A graph arranges creative decisions visually as a sequence of individual actions on a canvas. Each action is a node. Connected nodes create a workflow: a complete end-to-end set of creative steps that users can run, refine, save, and share.

A typical workflow uses this pattern:

1. Open a blank canvas and add your first node: Begin with an empty graph. Use the node library to locate the action you need, such as uploading a source image, creating an image with Firefly, or using a subject-selection model.
2. Connect nodes to build your workflow: Link node outputs to inputs to chain the steps. For example: Input Image → Segmentation → Apply Mask → Hue Shift → Composite Layers → Output. The next step receives the output created by the previous node.
3. Add controls for adjustable variables: Swap static values for interactive controls, including sliders, angle dials, and color pickers, so a person running the workflow can tune key parameters without opening the graph internals.
4. Run the graph and preview outputs at each node: Nodes that rely on AI models or external API services require generative credits and show a Run button. Non-AI steps run right away. Before the full workflow finishes, you can preview the output at any node.
5. Change a decision, re-run, and iterate: Since the graph captures every step, changing an earlier decision, such as replacing a source image, choosing another mask, or adjusting a color, automatically runs all downstream steps again. The whole workflow updates instantly.
