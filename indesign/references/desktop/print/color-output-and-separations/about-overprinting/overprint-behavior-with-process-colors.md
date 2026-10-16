# Overprint behavior with process colors

For process colors that overprint without common ink components, InDesign combines their ink values. If a 100% magenta fill overprints a 100% cyan fill, the overlap becomes violet rather than magenta. The resulting color comes from the total ink densities.

When a stroke is used to trap two process colors, define the CMYK stroke with the higher corresponding ink value from each starting color. This method closes possible gaps while avoiding unwanted color changes.
