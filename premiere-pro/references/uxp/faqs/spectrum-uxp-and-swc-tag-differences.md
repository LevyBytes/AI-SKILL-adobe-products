# Q: Spectrum UXP widgets and SWC use similar tags. How can I tell which one is active?

A: Some components, including `<sp-button>` and `<sp-link>`, exist in both forms: Spectrum UXP Widget and SWC. The SWC-specific `import` step is the key signal. After that import, UXP treats the tag as the SWC variant.
