# Build the InDesign template

Start with the InDesign document that will become the template, either by opening an existing file or creating one.

Open Data Merge by choosing Window > Utilities > Data Merge.

From the Data Merge panel menu, choose Select Data Source, then open the data source file created earlier. The panel lists the column headers as fields.

Click in a text frame where a value belongs, then choose the field name in the Data Merge panel to add a placeholder, for example <&lt;ProductName&gt;>. Do the same for every field.

For image placeholders, place an empty frame and drag the matching field from the Data Merge panel onto it.

Use Preview at the bottom of the Data Merge panel to move through records and check layout, text fit, and image placement. Fix overset text or missing images before the template is used for production work.

Save the document.

Store linked assets alongside the .indd, or maintain stable relative paths, so the node can resolve links during upload. Placeholders and fields explains how those fields turn into ports in Workflow Builder.
