# Formatting hierarchy

When more than one formatting method targets the same text, InDesign resolves priority with item 1 taking precedence:

1. Character attribute overrides (manual formatting assigned on selected text)
2. Character style (next in priority)
3. Paragraph attribute overrides (after character styles)
4. Paragraph style (after paragraph overrides)
5. CJK grid attributes (from frame-grid or named-grid settings)
6. Application default settings (lowest priority)

Because of this hierarchy, manual formatting overrides styles. To determine which styles are active on text and locate overrides, inspect the Character Styles and Paragraph Styles panels.

Note

To define default formatting for future documents, close all open documents before setting text options. Those choices then become application-wide defaults.
