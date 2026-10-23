# Tagging content for XML - Tag content according to styles

Paragraph, character, table, and cell styles assigned to text can serve as XML tagging input. For instance, a paragraph style named Body can be linked to a tag named StoryText. After that, the Map Styles To Tags command can place the StoryText tag on every paragraph in the document that uses the Body paragraph style. Multiple styles may point to the same tag.

Note

The Map Styles To Tags command applies tags automatically, even on paragraphs and characters that already carry tags. Use manual tagging when existing tags need to remain unchanged.

Open Map Styles To Tags from either the Tags panel menu or the Structure pane menu. For every style in the document, choose the tag it should use.

Map Styles To Tags dialog box

Map Styles To Tags dialog box

For pairing styles with identically named tags, click Map By Name. The dialog box selects styles whose names match tag names exactly. Case matters for Map By Name; for example, Head1 and head1 are handled as separate tags. To reuse mappings from an InDesign file, click Load and choose the file. Turn Include options on or off as needed:

Parent Pages stories: Maps styles on the parent page to tags.

Pasteboard Stories

Maps styles in stories on the pasteboard to tags. Deselect this option when pasteboard stories should not be tagged.

Empty Stories

Maps styles in empty stories to tags. Deselect this option when styles in empty stories should be left untagged.

Click OK.

The XML tags you specified in the Map Styles To Tags dialog box are applied across the document to the selected paragraph, character, table, and cell styles.
