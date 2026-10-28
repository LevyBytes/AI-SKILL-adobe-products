# Configure Color Management

Before entering Color mode, verify that Color Management is configured as intended. Color mode is chosen automatically from the format of the first clip added to a sequence, so the automatic choice might not match the setup you actually need. Selecting the correct color setup for the project is essential for best results.

For example, iPhone media is often in the HLG color space, and importing it can set the sequence to Direct HLG (HDR). That is the wrong choice when the intended delivery is Rec. 709 standard dynamic range; in that case, Direct Rec. 709 (SDR) is preferable. This automatic selection happens only when the first clip or clips enter a sequence. Check the sequence color setup right after editing or adding those first clips, and that check covers the remainder of the edit.

To set the critical color management options quickly for a new project:

Open Color Management panel.

In Preferences section, confirm that Display Color Management is on. For an HDR program, enable Extended Dynamic Range Monitoring; for an SDR program, keep it off.

In Project section, enable Color Manage Auto Detected Log and Raw Media so media formats that support automatic color management are handled.

Note

Some clips may still need manual tagging when they do not include metadata for automatic detection, allowing their color space to be managed correctly.

In Sequence section, choose the Color Setup that best matches your needs. Use one of these options:

- For most projects, when outputting video in the familiar long-standing way, choose Direct Rec. 709 (SDR) if it is not already active. This offers the widest workflow compatibility.
- Choose Wide Gamut (Tone Mapped) when you want enhanced image processing plus output tone-mapping that automatically controls extreme highlight and shadow levels during grading. This helps especially when grading HDR output.
- Direct HLG (HDR) and Direct PQ (HDR) are intended for passthrough workflows where you do not want the media type edited into a sequence to be altered. If you imported iPhone media or plan to deliver to a broad general audience, choose Direct Rec. 709 SDR or Wide Gamut (Tone Mapped) instead.

To decide how you want to output your media:

- For the most widely compatible sequence output, keep Output Color Space set to Direct. 709, the default setting. That creates standard dynamic range media that plays on nearly everything.
- For HDR sequence output, choose Rec. 2100 HLG or Rec. 2100 PQ according to the required HDR delivery format. If the choice is unclear, check the documentation for the streaming or video-sharing service you plan to use.
