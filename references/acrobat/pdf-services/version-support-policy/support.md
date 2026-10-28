# Support

The newest build (Major.Minor.Patch) is always Adobe's recommendation, simply because it carries the most capability and the strongest security posture. For applications that need a while to move to it, the SDK team keeps a support policy in place so already-deployed builds keep running safely. The terms:

- A given Major/Minor Version stays supported for a full year past the release of a newer Major/Minor Version; put differently, any Major.Minor.X version hits end of life one year after the subsequent Major/Minor Release. Say 1.2.0 (Minor), 1.3.0 (Minor), and 2.0.0 (Major) ship one after another — then:
  - 1.2.0 loses support one year after 1.3.0 ships.
  - 1.3.0 loses support one year after 2.0.0 ships.
- Critical bug fixes and security patches normally target only the final dot release within each supported major version. If, for example, 1.2.1, 1.3.1, and 2.0.0 are the supported builds, a security update would reach just 1.3.1 and 2.0.0. The recommended practice is to move any deployment sitting on a supported major release up to that release's last minor update.

Past end of life, a version's functionality can be deprecated and may cease to work.

Every Major/Minor Version is supported for one year after the
release of a newer Major/Minor Version; that is a Major.Minor.X
version reaches its end of life 1 year after the next Major/Minor
Release

### Support

Since our APIs keep evolving, a fresh API version can carry changes that aren't backward compatible, and we suggest moving to a new version as soon as it lands. Whatever version preceded it stays supported for a year following the new release. Barring extenuating circumstances that force a tighter window, Adobe applies reasonably commercial efforts toward giving 12 months' notice ahead of a deprecation. Such notices get refreshed here periodically, and keeping an eye out for those updates falls entirely to you. No further enhancements reach the service once the deprecation notice goes out. At any point, in whole or in part, Adobe retains the right to change, deprecate, or discontinue the service.

Past end of life, a version's functionality can be deprecated and may cease to work.
