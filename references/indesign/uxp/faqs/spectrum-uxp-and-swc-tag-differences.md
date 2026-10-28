# Q: Spectrum UXP widget tags and SWC tags look the same. How can I tell them apart?

A: Some components, including `<sp-button>` and `<sp-link>`, exist in both forms: Spectrum UXP Widget and SWC. The important difference is the `import` step required by SWC. After the import, UXP treats the tag as the SWC variant.
