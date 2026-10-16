# Versioning scheme

Version strings for the SDK follow a \#.\#.\# shape (for instance 1.1.0), where the three digits map respectively to a major release, a minor release, and a patch/update — in other words Major.Minor.Patch. Here is how each tier is defined:

- **Major Releases (1.x.x)**: A major release brings backward-incompatible shifts to the APIs and interfaces, and it kicks off the EOL countdown for every release that came before. Plan to move your code over before the prior major release hits its end of life.
- **Minor Releases (x.1.x)**: These usually ship on a quarterly cadence. Everything stays backward compatible with the most recent major release. New interfaces arrive here; older ones keep working, though some may be marked deprecated, and anything deprecated gets pulled in a later major release.
- **Patch Releases (x.x.1)**: A patch ships only when a critical security or bug fix is required. Whatever a patch contains is folded into the following minor release, letting developers pick up and deploy the updated code on a schedule that suits their own business needs.
