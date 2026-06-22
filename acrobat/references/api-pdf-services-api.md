# Policies

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Overview; Version - Support policy.

## Overview

Cloud-native PDF handling is what the Adobe PDF Services API delivers for working with documents. To shorten the ramp-up time, the service ships SDKs you can build against directly. The moment your developer credential arrives, grab one of the bundled sample projects and configure it locally. Once the call patterns feel natural, fold those samples into the server-side code you maintain.

Because credentials are meant to live only in a protected environment, the SDK targets server-side scenarios exclusively. Never push those credential values out to end-user hardware or to any environment you cannot trust.

## Version - Support policy

What follows lays out how versioning works and how long support lasts for both the PDF Services SDK and the Public API.

### SDK

### Versioning scheme

Version strings on the SDK follow a `\#.\#.\#` pattern (for instance, 1.1.0), where each segment maps, in order, to a major release, a minor release, and a patch or update (Major.Minor.Patch). The release types break down this way:

- **Major Releases (1.x.x)**: A major release brings changes that break backward compatibility across the APIs and interfaces, and it triggers the EOL countdown for every release that came before. Teams should schedule their migration work to finish before the prior major release goes out of support.
- **Minor Releases (x.1.x)**: Expect these roughly once a quarter. They stay backward compatible with the most recent major release and add fresh interfaces. The interfaces you already rely on keep working, though some may be flagged as deprecated; anything deprecated gets pulled in a later major release.
- **Patch Releases (x.x.1)**: These ship strictly for urgent security or bug fixes when the situation calls for them. Whatever lands in a patch then folds into the following minor release, letting teams pull in and ship updated code on whatever timeline their business needs.

### Support

The newest build (Major.Minor.Patch) is always Adobe's recommendation, simply because it carries the most capability and the strongest security posture. For applications that need a while to move to it, the SDK team keeps a support policy in place so already-deployed builds keep running safely. The terms:

- A given Major/Minor Version stays supported for a full year past the release of a newer Major/Minor Version; put differently, any Major.Minor.X version hits end of life one year after the subsequent Major/Minor Release. Say 1.2.0 (Minor), 1.3.0 (Minor), and 2.0.0 (Major) ship one after another — then:
  - 1.2.0 loses support one year after 1.3.0 ships.
  - 1.3.0 loses support one year after 2.0.0 ships.
- Critical bug fixes and security patches normally target only the final dot release within each supported major version. If, for example, 1.2.1, 1.3.1, and 2.0.0 are the supported builds, a security update would reach just 1.3.1 and 2.0.0. The recommended practice is to move any deployment sitting on a supported major release up to that release's last minor update.

Past end of life, a version's functionality can be deprecated and may cease to work.

![Every Major/Minor Version is supported for one year after the
release of a newer Major/Minor Version; that is a Major.Minor.X
version reaches its end of life 1 year after the next Major/Minor
Release](../images/support1.png)

### Public API

### Versioning

Per the [Public API
Docs](../../apis/index.md), every operation carries its own assetId, supplied through Form Parameters. The usual path is to grow an API while leaving it backward compatible. When an enhancement simply can't happen without breaking changes, a fresh version ships under a distinct assetId of its own. Details on which older API versions remain supported live on the [Public API
Docs](https://documentcloud.adobe.com/document-services/index.html).

One more thing: a machine learning pipeline produces the PDF Extract API output, and that pipeline gets retrained often to sharpen how it reads document layout and structure. The upshot is that exact results can shift as the model sharpens, even though the shape of the output isn't expected to change from one version to the next.

### Support

Since our APIs keep evolving, a fresh API version can carry changes that aren't backward compatible, and we suggest moving to a new version as soon as it lands. Whatever version preceded it stays supported for a year following the new release. Barring extenuating circumstances that force a tighter window, Adobe applies reasonably commercial efforts toward giving 12 months' notice ahead of a deprecation. Such notices get refreshed here periodically, and keeping an eye out for those updates falls entirely to you. No further enhancements reach the service once the deprecation notice goes out. At any point, in whole or in part, Adobe retains the right to change, deprecate, or discontinue the service.

Past end of life, a version's functionality can be deprecated and may cease to work.

### Deprecated docs - past versions

Typically only the current documentation stays posted online. For links, head to the [Documentation Library](api-releasenotes-3.md).

Documentation covering older releases is left unmaintained. Expect some dead links and stale content.
