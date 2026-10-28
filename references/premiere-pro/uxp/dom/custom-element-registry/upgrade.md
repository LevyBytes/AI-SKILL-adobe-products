# upgrade(root)

Upgrades every candidate custom element under the tree rooted at `root`.

[ This feature is gated by a feature flag. Enable `enableSWCSupport` in the plugin manifest featureFlags section before using it ]

**See**: [CustomElementRegistry - upgrade](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/upgrade)

| Param | Description |
| --- | --- |
| root | Node instance whose descendants may include shadow-containing elements to upgrade |
