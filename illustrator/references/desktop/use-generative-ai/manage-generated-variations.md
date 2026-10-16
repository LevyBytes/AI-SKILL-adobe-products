# Manage generated variations

This section covers variation management for Generative Expand for images, Generative Expand, Generative Shape Fill, and Text to Vector Graphic.

Illustrator calls a canvas variation a Generative Object when it is produced by Turntable, Generative Expand for images, Generative Expand, Generative Shape Fill, or Text to Vector Graphic, and marks it with the boundary indicator. Select a Generative Object to show only its originating batch of linked variations in the Properties panel. The Generation History panel instead shows every variation these features have generated in the document.

From either the Properties panel or the Generation History panel, you can generate similar variations, send feedback, report a variation, or delete variations. Deleting variations behaves differently in the two panels.

Do one of the following:

- To manage linked variations in context from the Properties panel, select the Generative Object on the canvas.
- To manage all variations centrally, choose Object > Generative > Generation History to open the Generation History panel.

Note

For Turntable, linked variations do not show in the Properties panel; the Contextual Task Bar controls display them on the canvas.

Hover over a variation to view the Model and Prompt used for its generation.

Hover over a variation, choose More options, then select one of these commands:

- Generate Similar: Creates variations related to the selected one without requiring you to remember its prompt or settings. This command is currently available only when the variation was generated with Text to Vector Graphic by choosing a Firefly Vector model.
- Good result or Poor result: Opens feedback choices for the variation.
- Report variation: Flags a problem with the variation.
  - From the Properties panel: removes the variation from the linked variations while keeping it in the Generation History panel.
  - From the Generation History panel: removes the variation permanently, including every instance where it appears as a linked variation.

Note

Deleting a Generative Object from the canvas does not remove its variations from the Generation History panel.
