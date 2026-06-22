# Adobe Products Skill

> _A router that resolves Adobe documentation, workflow, scripting, plugin, SDK, and service-API questions to the right Adobe product sub-skill._

Part of **[Agent Kaizen](https://github.com/DirectorGunner/agent-kaizen)** — continuously improving how AI agents reason, act, verify, and operate inside project environments. This repository is the `adobe-products` skill: a reusable, trigger-rich task handbook that an AI coding agent (OpenAI Codex, Claude Code) loads on demand when a task matches its triggers.

## What this skill covers

This skill is the entry point for Adobe Creative Cloud and Adobe developer documentation, routing across eleven product areas: Acrobat (PDF creation, signing, security, JavaScript automation, PDF Services API), Photoshop (raster editing, layers, UXP plugins, batchPlay), Illustrator (vector artwork, paths, ExtendScript), InDesign (page layout, UXP scripting), InCopy (editorial and track-changes workflows), Premiere Pro (timelines, captions, UXP panels), After Effects (compositing, expressions, C++ SDK plugins), Audition (waveform and multitrack audio), Media Encoder (encoding, watch folders, presets), Firefly (generative imaging and Firefly Services REST APIs), and the shared Common Platform (CEP, ExtendScript/ScriptUI, TypeScript definitions). It spans documentation, workflow, scripting (ExtendScript, UXP, batchPlay), plugin and SDK development, and authenticated service APIs. Rather than a global corpus, it routes each task to a focused product sub-skill — each a direct subdirectory with its own `SKILL.md` task router and a flat `references/` folder of readable subject files with identifiers preserved verbatim. One notable pitfall it flags: keep product scope narrow, since UXP, ExtendScript, and REST surfaces share concepts but expose product-specific objects and behavior.

## What's inside

- `SKILL.md` — the router frontmatter (`name` + trigger-rich `description`) that routes to sub-skills.
- sub-skill folders — each a focused area with its own `SKILL.md`, `references/`, and `GOTCHA.md`.
- `GOTCHA.md` — known pitfalls and edge cases.

## Use it

This skill is one git repo inside the Agent Kaizen **skills store**. The store nests two folders on purpose: the outer **`SKILLS\`** is a VS Code project for building and maintaining skills (its own workspace + tooling), and the inner lowercase **`skills\`** holds every skill as its own repo. That split lets a project pull skills two ways — the **whole `skills\` folder at once** (loads everything — **not recommended**) or **one skill at a time** (recommended: load only what a task needs and stay under Claude Code's skill-listing budget).

Paths below use **`%DEVROOT%`** — the `DEVROOT` environment variable pointing at the folder that contains `SKILLS\`. Set it once by running **`SetDevRoot.cmd`** in the SKILLS repo root (no admin); a new shell then resolves `%DEVROOT%` automatically.

Link **just this skill** (recommended) — a Windows directory junction, no admin:

```cmd
mklink /J .agents\skills\adobe-products  "%DEVROOT%\SKILLS\skills\adobe-products"
mklink /J .claude\skills\adobe-products  "%DEVROOT%\SKILLS\skills\adobe-products"
```

Or link the **whole store** at once (loads every skill — not recommended outside a skills-dev project):

```cmd
mklink /J .agents\skills  "%DEVROOT%\SKILLS\skills"
mklink /J .claude\skills  "%DEVROOT%\SKILLS\skills"
```

Remove a link (the store copy is untouched):

```cmd
rmdir .agents\skills\adobe-products
rmdir .claude\skills\adobe-products
```

The agent (OpenAI Codex, Claude Code) then auto-loads this skill whenever a task matches its triggers. Built and validated with **[skill-drafting](https://github.com/DirectorGunner/AI-skill-drafting)** to the Agent Kaizen gold standard.

## License

Licensed under **AGPL-3.0**, matching the [Agent Kaizen](https://github.com/DirectorGunner/agent-kaizen) project.
