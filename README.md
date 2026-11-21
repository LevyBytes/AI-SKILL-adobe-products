# Adobe Products Agent Skill

![Adobe Products agent skill: Creative Workflows, Scripting + Plugins, Cloud + APIs](.github/readme-banner.png)

Gives Claude Code, Codex and other coding agents the documentation for eleven Adobe product areas, from desktop workflows to ExtendScript, UXP, plug-in SDKs and cloud APIs, so they can check object models, method arguments and host requirements before they write a script or explain a workflow.

**Status: early draft.** The reference pages are in place; scripts, assets and evaluations will be added over time.

## Install

```sh
npx skills add LevyBytes/AI-SKILL-adobe-products -g
```

This installs the skill as `adobe-products` for each coding agent it finds on your computer; without `-g` it goes into the current project only. The command needs Node.js 22.20 or later.

<details>
<summary>Install without Node.js</summary>

Clone the repository into your agent's skills folder:

| Agent | Command |
| --- | --- |
| Claude Code | `git clone https://github.com/LevyBytes/AI-SKILL-adobe-products ~/.claude/skills/adobe-products` |
| Codex | `git clone https://github.com/LevyBytes/AI-SKILL-adobe-products ~/.agents/skills/adobe-products` |

</details>

## Use

Ask your agent about an Adobe product as usual; it loads the skill when a task matches. You can also call it by name with `/adobe-products` in Claude Code or `$adobe-products` in Codex.

- "Which arguments does `doc.addField` take in Acrobat JavaScript?"
- "Which InDesign `TextFrame` property returns the next frame in a thread?"
- "How does `batchPlay` work in a Photoshop UXP plugin?"
- "What do the two numbers in the After Effects `wiggle` expression control?"

## Products

The skill holds 80,907 reference pages across eleven product areas. Each product index notes its host, platform, runtime and version requirements, since desktop scripting, UXP and cloud APIs can expose different operations within one product.

### Acrobat: PDF workflows, Acrobat JavaScript and PDF Services API

[Acrobat](references/acrobat/INDEX.md) covers creating, editing, reviewing, signing and securing PDFs on desktop, web and mobile. Its 4,836 pages include 1,496 on Acrobat JavaScript scripting, 1,146 on the PDF Services API, 197 on the PDF Embed API, 138 on the Document Generation API, 148 on Acrobat AI workflows and 112 on application integrations.

### After Effects: compositing, expressions, scripting and the C++ plug-in SDK

[After Effects](references/after-effects/INDEX.md) covers compositions, layers, animation, expressions, tracking, keying, effects, 3D and rendering. Its 5,665 pages include 2,602 on desktop workflows, 2,036 on the C++ plug-in SDK and 1,025 on ExtendScript scripting objects.

### Audition: audio recording, restoration and mixing

[Audition](references/audition/INDEX.md) covers recording, Waveform editing, Multitrack mixing, restoration, effects, audio analysis and podcast production in 570 pages.

### Firefly: generative image, vector, audio and video, and Firefly APIs

[Firefly](references/firefly/INDEX.md) covers image, vector, audio and video generation and editing, Boards, the video editor, custom models and enterprise features. Its 1,136 pages include 872 on web workflows and 250 on the cloud service APIs, alongside 34 Node.js and Python API examples.

### Illustrator: vector artwork, Illustrator scripting and cloud automation

[Illustrator](references/illustrator/INDEX.md) covers paths, shapes, typography, color, artboards, layers, effects and generative artwork. Its 4,224 pages include 2,696 on scripting, 1,460 on desktop workflows and 66 on cloud service APIs.

### InCopy: editorial stories, assignments and InDesign collaboration

[InCopy](references/incopy/INDEX.md) covers managed stories and assignments, collaboration with InDesign, copy editing, tracked changes and notes in 977 pages.

### InDesign: page layout, the InDesign scripting object model and UXP

[InDesign](references/indesign/INDEX.md) covers page layout, documents and books, typography, tables, interactive documents and publishing. Its 33,857 pages include 30,331 on the document object model used by scripts, 2,651 on desktop workflows and 873 on UXP plugins and APIs.

### Media Encoder: encoding queues, presets and scripting

[Media Encoder](references/media-encoder/INDEX.md) covers queues, presets, watch folders, formats, export settings and publishing destinations. Its 311 pages include 222 on desktop workflows and 82 on scripting, alongside 2 automation scripts.

### Photoshop: image editing, UXP plugins and Photoshop cloud APIs

[Photoshop](references/photoshop/INDEX.md) covers layers, selections, masks, color, typography, filters, automation and export. Its 4,738 pages include 1,955 on UXP plugins and APIs, 1,434 on cloud service APIs, 1,206 on desktop workflows and 141 on plug-in samples.

### Premiere Pro: video editing, UXP, scripting and plug-in samples

[Premiere Pro](references/premiere-pro/INDEX.md) covers timelines, media and proxies, text-based editing, captions, audio mixing, effects and export. Its 4,880 pages include 2,513 on desktop workflows, 1,925 on UXP plugins and APIs, 400 on scripting and 40 on plug-in samples.

### Shared Adobe platform: ExtendScript, ScriptUI and CEP extensions

[Shared Adobe platform](references/common-platform/INDEX.md) covers the developer APIs that several Adobe apps share: ExtendScript, ScriptUI, BridgeTalk, Socket, ExternalObject and XMPScript, plus CEP extensions. Its 19,713 pages include 1,153 on scripting, 833 on CEP and 17,725 on separately attributed community type declarations.

## Open source creative apps

If you support open source software, look at the [ArtCraft](https://getartcraft.com/) apps and consider contributing to them. Each is written from scratch in Rust, and several cover the same ground as products in this skill. Contributors can use this skill to check how Adobe documents the feature they are working on.

| Adobe product | ArtCraft repository |
| --- | --- |
| Photoshop | [PhotoCraft](https://github.com/storytold/photocraft): image editing |
| Illustrator | [VectorCraft](https://github.com/storytold/vectorcraft): vector illustration |
| InDesign and InCopy | [DesignCraft](https://github.com/storytold/designcraft): page layout and publishing |
| Premiere Pro | [FilmCraft](https://github.com/storytold/filmcraft): video editing, color and sound |
| After Effects | [EffectCraft](https://github.com/storytold/effectcraft): motion graphics and visual effects |
| Audition | [SoundCraft](https://github.com/storytold/soundcraft): recording, editing and mixing audio |
| Acrobat | [PdfCraft](https://github.com/storytold/pdfcraft): PDF reading and editing |

Their shared [craft-libs](https://github.com/storytold/craft-libs) read Adobe formats such as PSD, IDML and After Effects projects.

## When agents load this skill

Use when a task needs Adobe product documentation, workflows, scripting, plugins, SDKs or service APIs for Acrobat, Photoshop, Illustrator, InDesign, InCopy, Premiere Pro, After Effects, Audition, Media Encoder, Firefly, or shared CEP, ExtendScript and ScriptUI. Not for other creative software or generic image or PDF tasks without an Adobe product.

## The work behind the references

Desktop help and developer material are interpreted into product-owned reference trees, with focused catalogs and descriptive filenames. Source review and repair addressed identified code, literal, prerequisite and routing defects while preserving API identifiers, host conditions and source-specific notices.

## Contributing

Pull requests are accepted from approved contributors only. To propose a fix or a feature, first open an issue that describes the change your pull request would make, such as a page that is wrong or out of date and the Adobe documentation it should match. The maintainer reviews the issue and your GitHub account, then approves or declines. New maintainers are approved the same way. See [CONTRIBUTING](.github/CONTRIBUTING.md).

## Sources and license

Skill reference documentation is interpreted content for use in open source projects. Check against [official documentation sources](https://developer.adobe.com/) when dealing with defects or issues that may come up from interpreting this skill's references.

Licensed under **Apache-2.0**; see [LICENSE](LICENSE). Part of the [Agent Kaizen](https://github.com/LevyBytes/agent-kaizen) skill library.
