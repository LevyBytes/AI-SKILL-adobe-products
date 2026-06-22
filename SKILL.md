---
name: adobe-products
description: Use when Codex or Claude needs Adobe product documentation, workflow, scripting, plugin, SDK, or service API facts; routes Acrobat, Photoshop, Illustrator, InDesign, InCopy, Premiere Pro, After Effects, Audition, Media Encoder, Firefly, and shared Adobe platform questions to product subskills.
covers:
  - acrobat
  - after-effects
  - audition
  - common-platform
  - firefly
  - illustrator
  - incopy
  - indesign
  - media-encoder
  - photoshop
  - premiere-pro
---

# Adobe Products Router

Entry point for Adobe Creative Cloud and Adobe developer documentation. This package routes to 11 product subskills; each product is a direct subdirectory with its own `SKILL.md` and a flat `references/` folder of focused, readable reference files (original prose, identifiers preserved verbatim). There is no global corpus - open the product subskill directly.

## Paths

All file paths in this package are relative to this skill's own directory: prefix `.agents/skills/adobe-products/` for Codex, or `.claude/skills/adobe-products/` for Claude.

## Workflow

1. Identify the product, host app, SDK, or service named in the task (Acrobat, Photoshop, Illustrator, InDesign, InCopy, Premiere Pro, After Effects, Audition, Media Encoder, Firefly, Common Platform).
2. Open that product's `SKILL.md` and use its task router (or `references/INDEX.md`) to pick the one reference file that matches.
3. Read that file; it is a self-contained subject. Open another only if the task spans subjects.
4. For a cross-product scan, grep the relevant product's references, e.g. `rg -n 'PATTERN' photoshop/references/*.md`.

## Product Routes

| Product | Use for | Subskill |
| --- | --- | --- |
| Acrobat | PDF creation, editing, review, signing, security, JavaScript automation, and PDF Services API work. | `acrobat/SKILL.md` |
| Photoshop | raster image editing, layers, selections, color, generative imaging, UXP plugins, batchPlay, and Photoshop APIs. | `photoshop/SKILL.md` |
| Illustrator | vector artwork, paths, type, artboards, Illustrator desktop workflows, ExtendScript, and Illustrator APIs. | `illustrator/SKILL.md` |
| InDesign | page layout, publishing, documents, pages, spreads, text, styles, UXP scripting, and layout automation. | `indesign/SKILL.md` |
| InCopy | editorial workflows, copy editing, assignments, stories, track changes, and InDesign-connected collaboration. | `incopy/SKILL.md` |
| Premiere Pro | video editing, timelines, sequences, captions, effects, export, UXP panels, ExtendScript, and samples. | `premiere-pro/SKILL.md` |
| After Effects | motion graphics, compositing, expressions, rendering, scripting, ExtendScript, and C++ SDK plugins. | `after-effects/SKILL.md` |
| Audition | audio editing, waveform and multitrack workflows, effects, restoration, recording, and export. | `audition/SKILL.md` |
| Media Encoder | encoding, transcoding, watch folders, presets, queues, exports, and automation. | `media-encoder/SKILL.md` |
| Firefly | generative imaging workflows, Firefly web features, and Firefly Services REST APIs. | `firefly/SKILL.md` |
| Common Platform | shared Adobe developer-platform material: CEP, shared ExtendScript/ScriptUI, and community TypeScript definitions. | `common-platform/SKILL.md` |

## Search tips

- Each product's `references/INDEX.md` is the cheapest first read; it tables every subject file with a one-line summary and size.
- Each `references/*.md` is one focused subject in readable prose; grep across a product with `rg -n 'PATTERN' <product>/references/*.md`.

Reference file counts: Acrobat 192 files, Photoshop 138 files, Illustrator 73 files, InDesign 346 files, InCopy 47 files, Premiere Pro 151 files, After Effects 185 files, Audition 25 files, Media Encoder 12 files, Firefly 45 files, Common Platform 209 files.

## Gotchas

Recurring failure modes and what to do instead live in the sibling [GOTCHA.md](GOTCHA.md).

## References

Each product subskill carries its own `references/INDEX.md`, `references/topics.json`, and per-subject `references/*.md` files. Start from the product `INDEX.md`.

## Official documentation

Includes original content written for this skill. The official documentation is at https://helpx.adobe.com/be_en/support.html — consult it to verify anything uncertain, conflicting, or version-specific.

## Verification

- Validate the whole package: `python "$env:DEVROOT\SKILLS\skills\skill-drafting\scripts\validate_skill_package.py" --package "$env:DEVROOT\SKILLS\skills\adobe-products"`
- That checks the router, every product subskill, and routing integrity together.
