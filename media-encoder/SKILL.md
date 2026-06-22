---
name: media-encoder
description: Use when a task specifically concerns Adobe Media Encoder: Media Encoder queues, presets, watch folders, transcoding, exports, AME, or media automation; this is the product subskill routed from adobe-products.
---

# Adobe Media Encoder Reference

Use this subskill for encoding, transcoding, watch folders, presets, queues, exports, and automation.

## Workflow

1. Identify the surface the task touches (desktop/web help, UXP, ExtendScript, REST API, C++ SDK, samples).
2. Use the task router below or `references/INDEX.md` to open the one file that matches.
3. Treat every label, menu path, shortcut, API/method/object name, endpoint, enum value, and number as an exact reference fact.

## Task router

Load only the reference the task needs. Files are grouped by surface.

### Desktop & Web Help

| Topic | Read |
| --- | --- |
| Media Encoder Beta, Whats New, Overview Media Encoder User Interface, Media Intelligence In Media Encoder | references/help-using.md |
| Using Preset Browser, Source Settings, File Formats Supported Import, Adding Third Party Plugins | references/help-using-2.md |
| Import Media Into Adobe Media Encoder, Log Files, File Formats Supported Export, Default Keyboard Shortcuts ... | references/help-using-3.md |
| Preferences, Reset And Restore Preferences, Custom Encoding Presets, Sync Settings Ame ... | references/help-using-4.md |
| Export Settings Reference (part 1) | references/help-export-settings-reference.md |
| Export Settings Reference (part 2) | references/help-export-settings-reference-2.md |
| Encode Export Video Audio, Media Cache Database | references/help-using-5.md |
| Publish Settings, Match Audio Channelization, Automatic Loudness Correction | references/help-using-6.md |

### ExtendScript / Scripting

| Topic | Read |
| --- | --- |
| Ame Scripting Guide, How Do I Run Scripts In Ame, What Is A Good Starting Point To Understand The Scripting Objects, Where Can I Ask More Questions And Get Help ... | references/script-ame-scripting-guide.md |
| Encoderhostscriptobject, Encoderhostwrapperevent, Encoderwrapper, Encoderwrapperevent | references/script-encoderhostscriptobject.md |
| Exporterscriptobject | references/script-exporterscriptobject.md |
| Frontendscriptobject, Sourcemediainfo, Watchfolderscriptevent, Watchfolderscriptobject | references/script-frontendscriptobject.md |

## Gotchas

Recurring failure modes and what to do instead live in the sibling [GOTCHA.md](GOTCHA.md).

## References

Start at `references/INDEX.md`; metadata in `references/topics.json`. One subject per file; open only what the router points to.

## Verification

- Validate: `python "$env:DEVROOT\SKILLS\skills\skill-drafting\scripts\validate_skill_package.py" "$env:DEVROOT\SKILLS\skills\adobe-products\media-encoder"`
