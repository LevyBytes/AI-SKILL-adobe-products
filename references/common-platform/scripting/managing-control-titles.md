# Managing control titles

Controls commonly need a nearby title or label so users can tell what the element is for. Examples in Automatic layout show one approach: add a statictext element for the label, then let automatic layout place that text in relation to the control it names.

For many routine arrangements, the title-layout feature is the shorter route. It lets you set an element's title and describe how that title sits relative to the object's graphic representation, without adding extra statictext or container elements. Title layout uses an element's optional title and titleLayout properties.

Internally, ScriptUI treats the title and the element's graphic representation as two separate items. Layout rules then position those items inside a virtual container that surrounds both of them. This resembles automatic layout, but the mechanism is intentionally narrower.

Title layout applies to these UI element types:

- DropDownList
- FlashPlayer
- IconButton
- Image
- TabbedPanel

In this group, most element types show the title outside the element, and the virtual container is an imagined outline around both the title and the separate element. With IconButton, the title appears within the button bounds, so the element's outer bounds define the virtual container. In either form, the same layout ideas apply.

- The title property is a String value that supplies a text label for a UI element. The titleLayout property controls whether that title is placed left, right, above, below, or centered over the graphic element.
  - The character width assigned to the title;
  - The justification used inside that character width;
  - The truncation behavior to use when text does not fit;
  - The title's orientation, alignment, and spacing relative to the object it names;
  - The margins inside the virtual container around the title and its associated object.

Every titleLayout property is optional; element types that support this feature provide defaults for all of them. The reference section gives the full property details; see titleLayout.

The next sections use examples to show title layout producing several different arrangements.
