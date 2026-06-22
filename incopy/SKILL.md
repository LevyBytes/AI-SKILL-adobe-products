---
name: incopy
description: Use when a task specifically concerns Adobe InCopy: InCopy, copy editing, assignments, stories, editorial review, or InDesign-linked text workflows; this is the product subskill routed from adobe-products.
---

# Adobe InCopy Reference

Use this subskill for editorial workflows, copy editing, assignments, stories, track changes, and InDesign-connected collaboration.

## Workflow

1. Identify the surface the task touches (desktop/web help, UXP, ExtendScript, REST API, C++ SDK, samples).
2. Use the task router below or `references/INDEX.md` to open the one file that matches.
3. Treat every label, menu path, shortcut, API/method/object name, endpoint, enum value, and number as an exact reference fact.

## Task router

Load only the reference the task needs. Files are grouped by surface.

### Desktop & Web Help

| Topic | Read |
| --- | --- |
| Whats New | references/help-whats-new.md |
| Earlier Versions | references/help-earlier-versions.md |
| Workspace Basics | references/help-workspace-basics.md |
| Customizing Preferences Defaults, Default Keyboard Shortcuts, Recovery Undo, Usability Productivity ... | references/help-settings-and-preferences.md |
| Using Incopy Workflow, Collaboration, Basic Managed File Workflow | references/help-incopy-workflow-overview.md |
| Adjusting Workflow | references/help-adjusting-workflow.md |
| Managed Files, Assignment Packages | references/help-managed-files.md |
| Sharing Content, Stand Alone Documents | references/help-managed-files-2.md |
| Adding Text | references/help-adding-text.md |
| Editing Text (part 1) | references/help-editing-text.md |
| Editing Text (part 2) | references/help-editing-text-2.md |
| Viewing Stories, Moving Documents, Copyfitting Text | references/help-add-and-edit-text.md |
| Find Change (part 1) | references/help-find-change.md |
| Find Change (part 2) | references/help-find-change-2.md |
| Checking Spelling | references/help-checking-spelling.md |
| Using Thesaurus | references/help-using-thesaurus.md |
| Text Changes, Tracking Reviewing Changes, Using Editorial Notes, Using Text Macros | references/help-track-and-review-changes.md |
| Text Variables | references/help-text-variables.md |
| Formatting Text, Formatting Characters | references/help-character-formatting.md |
| Using Fonts | references/help-using-fonts.md |
| Kerning Tracking, Leading | references/help-character-formatting-2.md |
| Glyphs Special Characters | references/help-glyphs-special-characters.md |
| Formatting Paragraphs | references/help-formatting-paragraphs.md |
| Tabs Indents | references/help-tabs-indents.md |
| Aligning Text | references/help-aligning-text.md |
| Bullets Numbering | references/help-bullets-numbering.md |
| Drop Caps Nested Styles, Text Composition | references/help-paragraph-formatting.md |
| Styles | references/help-styles.md |
| Paragraph Character Styles | references/help-paragraph-character-styles.md |
| Swatches | references/help-swatches.md |
| Composing Cjk Characters | references/help-composing-cjk-characters.md |
| Formatting Cjk Characters, Changing Spacing Characters Cjk Text | references/help-cjk-and-multilingual-text.md |
| Creating Tables, Selecting Editing Tables | references/help-add-tables.md |
| Formatting Tables, Table Strokes Fills | references/help-add-tables-2.md |
| Table Cell Styles | references/help-table-cell-styles.md |
| Importing Graphics (part 1) | references/help-importing-graphics.md |
| Importing Graphics (part 2) | references/help-importing-graphics-2.md |
| Controlling Graphics Display, Transforming Graphics | references/help-add-graphics-and-frames.md |
| Frames Grids Rulers Guides, Frame Grids | references/help-add-graphics-and-frames-2.md |
| Footnotes, Endnotes | references/help-add-references-and-links.md |
| Cross References | references/help-cross-references.md |
| Hyperlinks, Including Metadata Story | references/help-add-references-and-links-2.md |
| Saving Exporting, Exporting Pdf, Pdf, Printing Stories | references/help-save-export-and-print.md |
| Setting Printer | references/help-setting-printer.md |
| Xml, Structuring Documents Xml | references/help-work-with-xml.md |
| Tagging Content Xml, Using Xml Files, Exporting Xml | references/help-work-with-xml-2.md |
| Troubleshoot Corrupt Incopy Documents, Unable To Open Icap Files | references/help-troubleshooting.md |

## Gotchas

Recurring failure modes and what to do instead live in the sibling [GOTCHA.md](GOTCHA.md).

## References

Start at `references/INDEX.md`; metadata in `references/topics.json`. One subject per file; open only what the router points to.

## Verification

- Validate: `python "$env:DEVROOT\SKILLS\skills\skill-drafting\scripts\validate_skill_package.py" "$env:DEVROOT\SKILLS\skills\adobe-products\incopy"`
