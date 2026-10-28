# Scenarios with repeat shape fill generation

Understand how a new fill uses either the original shape or the first fill, depending on the way Generative Shape Fill is run again.

Example: first create fill-1 on a shape while Shape Strength is Low. Then:

- Without ungrouping fill-1: If fill-2 is generated on fill-1 while Shape Strength is High, fill-2 follows the original shape outline instead of fill-1.
- After ungrouping fill-1: If fill-2 is generated on fill-1 while Shape Strength is High, fill-2 follows fill-1 instead of the original shape outline.
