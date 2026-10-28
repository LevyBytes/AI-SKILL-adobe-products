# Aki value interpretation

Aki values describe spacing as percentages of a full-width character space:

- Desired: the target spacing that InDesign tries to use.
- Minimum: the smallest spacing allowed during compression for kinsoku or line justification.
- Maximum: the upper spacing limit when a line expands for full justification.

Example values for opening parenthesis: 50% (Desired), 0% (Minimum), 50% (Maximum):

- Shows a Â½ character space before the parenthesis.
- Shrinks to no space when line-break violations must be prevented.
- Grows to Â½ character space during line justification.

Note

During paragraph composition, Adobe Japanese Paragraph Composer evaluates spacing throughout the whole paragraph and can revise earlier lines to avoid poor breaks later. Adobe Japanese Single-line Composer instead handles each line independently.
