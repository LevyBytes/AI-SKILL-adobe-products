# Adobe Products

```mermaid
---
config:
  flowchart:
    wrappingWidth: 400
---
flowchart LR
    brand["KAIZEN<br/>SKILL LIBRARY"]:::brand
    skill("Adobe Products"):::skill
    first(["Creative Workflows"]):::topic
    second(["Scripting + Plugins"]):::topic
    third(["Cloud + APIs"]):::accent
    brand --- skill
    skill --- first
    skill --- second
    skill --- third
    classDef brand fill:#0f172a,color:#67e8f9,stroke:#22d3ee,stroke-width:2px,font-family:monospace
    classDef skill fill:#172554,color:#eff6ff,stroke:#60a5fa,stroke-width:2px,font-size:20px
    classDef topic fill:#0c4a6e,color:#bae6fd,stroke:#38bdf8,stroke-width:1px
    classDef accent fill:#1e293b,color:#fcd34d,stroke:#f59e0b,stroke-width:1px
    linkStyle default stroke:#38bdf8,stroke-width:1px
```

A coordinated library of Adobe product references for creative work, automation and integration. Product-specific entrypoints keep desktop workflows, scripting environments, plug-in APIs and cloud services in their proper host and version context.

Use when a task needs Adobe product documentation, workflows, scripting, plugins, SDKs, or service APIs for Acrobat, Photoshop, Illustrator, InDesign, InCopy, Premiere Pro, After Effects, Audition, Media Encoder, Firefly, or shared CEP, ExtendScript, and ScriptUI. Routes to the bundled product skill; excludes unrelated creative software and generic image or PDF tasks without an Adobe product context.

## What this skill helps with

| Task | Useful reference material |
| --- | --- |
| [Work on documents and layouts](acrobat/README.md) | Start with PDF workflows, then select the separate InDesign or InCopy skill for publishing work. |
| [Create and automate artwork](photoshop/README.md) | Use Photoshop references or select Illustrator and Firefly for their distinct workflows and APIs. |
| [Edit moving images and sound](premiere-pro/README.md) | Navigate Premiere Pro alongside dedicated After Effects, Audition and Media Encoder material. |
| [Develop Adobe integrations](common-platform/README.md) | Consult shared ExtendScript, ScriptUI and CEP material, retaining each product API's separate conditions. |

## Included product and platform subskills

| Subskill | Use it for |
| --- | --- |
| [Acrobat](acrobat/README.md) | PDF workflows, JavaScript and document service integrations. |
| [After Effects](after-effects/README.md) | Compositing, animation, expressions, scripting and native plug-in APIs. |
| [Audition](audition/README.md) | Recording, audio editing, restoration, analysis and mixing. |
| [Shared Adobe platform](common-platform/README.md) | ExtendScript, ScriptUI, BridgeTalk, CEP and attributed community declarations. |
| [Firefly](firefly/README.md) | Generative media workflows, enterprise features and service APIs. |
| [Illustrator](illustrator/README.md) | Vector artwork, typography, scripting and cloud automation. |
| [InCopy](incopy/README.md) | Editorial stories, assignments, collaboration and publishing content. |
| [InDesign](indesign/README.md) | Page layout, publishing, DOM automation and UXP development. |
| [Media Encoder](media-encoder/README.md) | Encoding queues, presets, formats, export and scripting. |
| [Photoshop](photoshop/README.md) | Image workflows, UXP development and cloud-service APIs. |
| [Premiere Pro](premiere-pro/README.md) | Editing, media workflows, audio, export, scripting and UXP. |

## The work behind the references

Desktop help and developer material are interpreted into product-owned reference trees, with focused catalogs and descriptive filenames. Source review and repair addressed identified code, literal, prerequisite and routing defects while preserving API identifiers, host conditions and source-specific notices.

## Start here

Start with [SKILL.md](SKILL.md) and follow its context routes.

Keep the complete product bundle together. Select the product entrypoint before using an example, and preserve its host, platform, runtime and version requirements. Desktop scripting, UXP and cloud APIs can expose different operations even within one product.

## Sources and license

Skill reference documentation is interpreted content for use in open source projects. Check against [official documentation sources](https://developer.adobe.com/) when dealing with defects or issues that may come up from interpreting this skill's references.

Licensed under **AGPL-3.0**; see [LICENSE](LICENSE). Part of the [Agent Kaizen](https://github.com/LevyBytes/agent-kaizen) skill library.
