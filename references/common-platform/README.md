# Shared Adobe platform: ExtendScript, ScriptUI and CEP extensions

![Adobe Products agent skill: Creative Workflows, Scripting + Plugins, Cloud + APIs](../../.github/readme-banner.png)

Part of the [Adobe Products agent skill](../../README.md), this product area covers the developer APIs that several Adobe apps share: ExtendScript, ScriptUI, BridgeTalk, Socket, ExternalObject and XMPScript, plus CEP extensions. Its 19,713 pages include 1,153 on scripting, 833 on CEP and 17,725 on separately attributed community type declarations. Its catalog is [INDEX.md](INDEX.md); it installs with the parent skill, as described in [Install](../../README.md#install).

**Status: early draft.** The reference pages are in place; scripts, assets and evaluations will be added over time.

## What's inside

| Reference area | Pages |
| --- | ---: |
| [CEP and ExtendScript integration](cep/reference-index.md) | 833 |
| [Community application declarations](community-types/reference-index.md) | 17,725 |
| [Scripting APIs](scripting/reference-index.md) | 1,153 |

## When agents open this product area

Use when a task concerns Adobe shared developer-platform APIs: ExtendScript, ScriptUI, BridgeTalk, Socket, ExternalObject, XMPScript, CEP extensions and version-specific runtimes, CEP-to-UXP migration, or bundled community Adobe application type declarations.

## The work behind the references

Shared Adobe developer references for scripting across applications and building CEP integrations. The package separates Adobe runtime interfaces from community application declarations and identifies the context each belongs to. Each API depends on its host application and runtime version. Community declarations are separately attributed; they do not establish host behavior by themselves.

## Contributing

Contributions follow the parent skill's process: pull requests are accepted from approved contributors only, after the maintainer reviews and approves an issue. See [CONTRIBUTING](../../.github/CONTRIBUTING.md).

## Sources and license

Skill reference documentation is interpreted content for use in open source projects. Check against [official documentation sources](https://github.com/Adobe-CEP/CEP-Resources) when dealing with defects or issues that may come up from interpreting this skill's references.

Licensed under **Apache-2.0**; see [LICENSE](../../LICENSE). Part of the [Agent Kaizen](https://github.com/LevyBytes/agent-kaizen) skill library.
