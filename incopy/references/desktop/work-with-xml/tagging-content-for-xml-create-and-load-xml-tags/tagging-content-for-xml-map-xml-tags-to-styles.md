# Tagging content for XML - Map XML tags to styles

XML tags describe data only; they do not carry formatting instructions. After XML content is imported and placed, it still needs formatting. A common approach is linking XML tags with paragraph, character, table, or cell styles. For example, Byline can be mapped to the Author character style, so imported and placed XML content tagged Byline receives the Author character style automatically. Mapping tags to styles reduces the manual work needed to format imported XML content.

Not every tag has to be mapped to a paragraph or character style. Some elements may never appear in the layout, while others are simpler to format individually. Child elements also inherit the paragraph or character style assigned to the parent, so map parent and child elements separately to avoid confusing results.

Note

The Map Tags To Styles command reapplies styles across a document and can produce unwanted changes. Depending on its XML tag, text that formerly used one style can be reassigned to a different style. If some text has already been formatted, applying styles manually may be preferable so existing paragraph and character style choices are not replaced.

Use either the Tags panel menu or the Structure pane menu to open Map Tags To Styles.

A menu of styles appears for each tag in the Map Tags To Styles dialog box

Do any of the following:

To bring in another document's styles, tags, and mapping definitions, click Load, choose the document, and click Open.

To map tags one at a time, click a tag's Style column and choose a paragraph or character style from the menu. The paragraph symbol marks paragraph styles in the menu; an "A" marks character styles. Repeat for every tag you want to map.

To map tags automatically to styles with matching names, click Map By Name. Styles whose names are identical to tag names are selected in the Style column. A tag and style match only when both name and case are identical; H1 and h1, for example, are not treated as a match. If two different style groups contain the same style name, Map By Name does not work, and an alert asks you to rename one style.

Click OK.
