# Mojikumi and text composition

Mojikumi settings work with the InDesign composition engine when line breaks are chosen. With Adobe Japanese Paragraph Composer, possible break points are evaluated across the full paragraph, balancing spacing quality against concerns such as Kinsoku violations.

Different spacing situations receive penalty values from the composer. The more a spacing result departs from the desired value, the higher its penalty becomes. The selected set of line breaks is the one with the lowest total penalty across the paragraph, which produces a more even result.

This calculation updates while text is edited. Adding or deleting characters can cause the composer to revise spacing on earlier lines so the paragraph improves as a whole. During typing, earlier lines may reflow as the paragraph is refined.

Use Mojikumi when text composition or spacing needs correction. InDesign includes presets for typical cases, and custom sets are available for specialized fonts or unusual project requirements.
