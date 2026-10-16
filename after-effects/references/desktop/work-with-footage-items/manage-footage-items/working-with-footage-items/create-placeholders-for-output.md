# Create placeholders for output

Placeholder files are something you can generate for reuse across separate compositions. Say you build a placeholder for a render-queue item destined to produce a 24-fps movie, then drag that placeholder into a 30-fps composition. From there, rendering the 30-fps composition makes After Effects render the placeholder at 24 fps first and feed that rendered version into the 30-fps render.

Drag a queued item's Output Module heading from the Render Queue panel over to the Project panel. After Effects then builds a placeholder for output in the Project panel and sets that item's Post-Render Action option to Import & Replace Usage.
