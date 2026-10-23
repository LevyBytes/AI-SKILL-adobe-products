# JavaScript APIs - OCG

Inside a PDF, an OCG object stands for an optional content group. Any piece of content can join one or more of these groups, and content tied to at least one OCG counts as optional content; whether it shows depends on the ON/OFF states of the OCGs it belongs to. The plainest setup pairs a piece of optional content with one OCG, so it appears while that OCG is on and disappears while it is off. Layer in several OCGs with varied visibility mappings and you can build far more elaborate visibility behavior.

Call the Doc getOCGs method to pull back an array of OCG objects for a PDF document.

On the Doc side, addWatermarkFromFile and addWatermarkFromText drop their watermarks into an OCG.

The PDF Reference spells out more about optional content groups.
