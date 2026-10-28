# Versioning scheme

Version strings on the SDK follow a `\#.\#.\#` pattern (for instance, 1.1.0), where each segment maps, in order, to a major release, a minor release, and a patch or update (Major.Minor.Patch). The release types break down this way:

- **Major Releases (1.x.x)**: A major release brings changes that break backward compatibility across the APIs and interfaces, and it triggers the EOL countdown for every release that came before. Teams should schedule their migration work to finish before the prior major release goes out of support.
- **Minor Releases (x.1.x)**: Expect these roughly once a quarter. They stay backward compatible with the most recent major release and add fresh interfaces. The interfaces you already rely on keep working, though some may be flagged as deprecated; anything deprecated gets pulled in a later major release.
- **Patch Releases (x.x.1)**: These ship strictly for urgent security or bug fixes when the situation calls for them. Whatever lands in a patch then folds into the following minor release, letting teams pull in and ship updated code on whatever timeline their business needs.
