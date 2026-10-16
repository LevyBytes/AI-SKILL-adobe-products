# Trapping considerations for your workflow

InDesign files do not use a single trapping approach for every object; the right treatment depends on the inks and artwork involved:

Process color builds: Where neighboring colors include the same process ink, little or no trap is usually needed. A purple stroke (cyan + magenta) next to a red fill (magenta + yellow), for example, has magenta in common. Because that magenta prints as one continuous region, small shifts in cyan or yellow are less noticeable. When the design permits it, build colors so they share ink components as much as possible.

Black ink: Pure black normally overprints colors underneath it by default, which removes most trapping issues. This works because black is sufficiently dark to hide the colors below it.

Spot colors: Spot colors placed beside each other without any shared ink components need more deliberate trapping to avoid gaps. InDesign trapping engines use each spot color's neutral density, or relative lightness/darkness, to compute suitable spreads.

Imported graphics: With automatic trapping, Illustrator vector artwork and placed PDF files follow InDesign trapping rules. Bitmap images such as photographs also trap against nearby text and graphics, and the image frame edge is used to calculate the trap boundary.
