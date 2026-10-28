# Aligning children

Two properties control child alignment in a container: alignChildren on the parent container and alignment on each child. The parent alignChildren value sets the default alignment for all children in that container unless an individual child supplies an overriding alignment value.

Both properties use the same alignment values. The value applies along one axis, based on the container orientation. To control both axes, provide an array containing two of these strings: the first string is horizontal alignment and the second is vertical alignment. Case does not matter for these values, so FILL, Fill, and fill are all accepted.

The same value can also be assigned through the matching constants in the ScriptUI class Alignment property, for example:

```javascript
myGroup.alignment = [ ScriptUI.Alignment.LEFT, ScriptUI.Alignment.TOP]
```

When alignment is assigned with a constant and then queried, the property returns the constant's index number instead of a string.

For elements in a row, vertical-axis alignment can use these values:

| Value | Behavior |
| --- | --- |
| top | Positions the element's top edge at the container's top margin. |
| bottom | Positions the element's bottom edge at the container's bottom margin. |
| center | Centers the element between the container's top and bottom margins. |
| fill | Resizes the element's height to occupy the space between the container's top and bottom margins. |

For elements in a column, horizontal-axis alignment can use these values:

| Value | Behavior |
| --- | --- |
| left | Positions the element's left edge at the container's left margin. |
| right | Positions the element's right edge at the container's right margin. |
| center | Centers the element between the container's right and left margins. |
| fill | Resizes the element's width to occupy the space between the container's right and left margins. |

For elements in a stack, alignment may be applied on the vertical axis or the horizontal axis:

| Value | Behavior |
| --- | --- |
| top | Moves the element's top edge to the container's top margin, with the element centered between the right and left margins. |
| bottom | Moves the element's bottom edge to the container's bottom margin, with the element centered between the right and left margins. |
| left | Moves the element's left edge to the container's left margin, with the element centered between the top and bottom margins. |
| right | Moves the element's right edge to the container's right margin, with the element centered between the top and bottom margins.- |
| center | Centers the element within the container's top, bottom, right, and left margins. |
| fill | Resizes the element's height to fill the area between the top and bottom margins, and resizes its width to fill the area between the right and left margins. |

The next figure shows the sample window with row orientation and the bottom and top settings assigned to the parent's alignChildren property:

Another figure shows the sample window with column orientation and the right, left, and fill settings assigned to the parent's alignChildren property. In the fill case, each element becomes as wide as the widest element in that container:

To override the child alignment inherited from alignChildren, set alignment on a specific child element. The following diagram shows the EditText element with alignment set to right while the parent alignChildren value is left:
