# Formatting characters - Determine the appearance of scaled text values

Scaling a frame also scales the text inside it. For example, if a text frame is doubled in size, the contained text doubles as well; 20-point text becomes 40 points.

David Blatner discusses scaled text frames in Making a Magnifying Glass Text Frame in InDesign.

A preference controls how scaled text is reported in panels:

By default, when Apply To Content is selected, the Font Size fields in the Control panel and Character panel show the new text size, such as 40 pt. If Adjust Scaling Percentage is selected, those Font Size fields show both original and scaled sizes, such as "20 pt (40)."

The Transform panel scaling values report the horizontal and vertical percentages used to scale the frame. With the default Apply To Content setting, those values return to 100% after text is scaled. When Adjust Scaling Percentage is selected, the values describe the scaled frame, so doubling the frame scale appears as 200%.

Tracking frame scale changes helps when you need to restore a frame and its text to original size. It also helps identify how much the frame size was changed. To track scaling for frames and the text they contain:

Open General preferences by choosing Edit > Preferences > General (Windows) or InDesign > Preferences > General (Mac OS).

Enable Adjust Scaling Percentage, and then click OK.

Note the following:

Adjust Scaling Percentage applies only to frames scaled after the preference is enabled, not to frames that already exist.

Adjust Scaling Percentage remains attached to the text. Even after you turn that preference off and scale the frame again, the scaled point size still appears in parentheses.

To clear the parenthesized scaled point size in the Transform panel, choose Redefine Scaling as 100% there. This command does not alter the visible scaled frame.

When Adjust Scaling Percentage is selected, editing text or scaling one frame in a threaded set scales the text, even if that text moves into another frame. With Apply To Content selected, text that flows into another frame because of editing no longer carries the scaling.
