# Adobe Audition

```mermaid
---
config:
  flowchart:
    wrappingWidth: 400
---
flowchart LR
    brand["KAIZEN<br/>SKILL LIBRARY"]:::brand
    skill("Adobe Audition"):::skill
    first(["Recording and Editing"]):::topic
    second(["Audio Restoration"]):::topic
    third(["Multitrack Mixing"]):::accent
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

Adobe Audition references for recording, editing, restoring and mixing audio. The material connects Waveform and Multitrack work with analysis, effects and export guidance for production tasks.

Use when a task concerns Adobe Audition audio recording, Waveform editing, Multitrack mixing, restoration, effects, audio analysis, podcast production, surround sound, or saving and exporting audio.

## What this skill helps with

| Task | Useful reference material |
| --- | --- |
| [Find an audio workflow](references/desktop/reference-index.md) | Select recording, editing, restoration, analysis, mixing or export material. |
| [Browse the product reference](references/INDEX.md) | Navigate the bundled Audition subjects and their documented controls. |

## The work behind the references

Audio workflows are organized into focused references that retain control names, modes and procedure conditions.

## Start here

Start with [SKILL.md](SKILL.md) and follow its context routes.

Select the editing mode and audio workflow before following a procedure. Preserve its documented version, channel and output-format conditions.

## Sources and license

Skill reference documentation is interpreted content for use in open source projects. Check against [official documentation sources](https://helpx.adobe.com/audition.html) when dealing with defects or issues that may come up from interpreting this skill's references.

Licensed under **Apache-2.0**; see [LICENSE](../LICENSE). Part of the [Agent Kaizen](https://github.com/LevyBytes/agent-kaizen) skill library.
