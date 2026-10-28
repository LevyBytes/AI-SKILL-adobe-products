# Set up smart text reflow

Configure Adobe InDesign so pages can be inserted or removed automatically while you type or edit text.

Smart Text Reflow responds to text-length changes by adding or deleting pages, which helps avoid overset text and unused blank pages. The feature relies on primary text frames, meaning text frames placed on a parent page; those frames need to be threaded and present on both left and right parent pages in facing-page documents.

Open Edit > Preferences > Type (Windows) or InDesign > Preferences > Type (macOS).

Enable Smart Text Reflow.

Choose the needed settings:

- Add Pages To: choose End of Story to place new pages directly after the active story, End of Section to place them at the close of the section, or End of Document to append them at the end of the document.
- Limit to Primary Text Frames: turn this on when automatic page handling should apply only to primary text frames on parent pages. Leave it off when manually threaded frames on separate pages should also reflow.
- Preserve Facing-Page Spreads: turn this on so reflow in the middle of a facing-page document adds two-page spreads and keeps left-page and right-page relationships intact.
- Delete Empty Pages: turn this on to remove pages automatically when editing shortens the text, as long as the emptied text frame is the page's only object.

Select OK to apply the chosen settings.

If Smart Text Reflow is used with text frames that do not come from parent pages, InDesign creates new pages with full-page, single-column text frames, no matter what attributes belong to the frame that receives the new threaded frame.
