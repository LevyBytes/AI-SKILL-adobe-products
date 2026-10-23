# When do API users need these instructions?

Before calling the [asynchronous Data merge operation](https://raw.githubusercontent.com/AdobeDocs/ffs-illustrator-api/main/src/pages/api/index.md), create a template whose variables and bindings line up with the artwork population expected for each CSV row.

For service behavior and limits, see [Technical usage notes - About auto-mapping for Data Merge](../technical-usage-notes/about-auto-mapping-for-data-merge.md), including asset size, CSV row count, and automatic variable-to-object mapping.

**Template authoring requires the Illustrator app.** Illustrator is where variables, data sets, bindings, and common CSV or XML preparation are set up, such as through the **Variables** panel. The cloud API merges **CSV** data into your uploaded template; it does not take over template creation or validation inside the product.

Use the Adobe product documentation on HelpX collected here for current guidance across these use cases:
