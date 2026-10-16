# Work with data-driven Motion Graphics templates

Data-driven Motion Graphics templates let you adjust bar charts, line graphs, and the like quickly and precisely, no manual data entry or motion-graphics expertise required.

This feature lets you bring spreadsheet-data controls — for the CSV (comma-separated value) and TSV (tab-separated value) formats — into the Essential Graphics panel. Export those data-control templates to Premiere and you can change or swap the data right there in Premiere.

There's a second angle, too: within the Essential Graphics panel, the data controls can serve as a browser or editor for the composition's CSV or TSV data layers, no template export involved. Add a composition carrying spreadsheet data to the panel and every bit of the related data shows up, ready to edit. Work with a nested composition, though, and those data controls won't be reachable as primary properties of that composition.

Pull a CSV or TSV file into your project and add it onto your composition.

Over in the Timeline panel, twirl open the data layer's properties.

Grab the layer's data property group and drag it across to the Essential Graphics panel.

These are the spreadsheet-data properties you can adjust within the Essential Graphics panel:

Spreadsheet Properties

Click Edit Properties to the right of the data group to change the following:

- Data property type: Pick what data type each column's values use. This governs how the spreadsheet values come across in Premiere. The type for each column gets set by an After Effects author within After Effects. Over in Premiere, that type maps to one of three forms — a text string, a hot text slider when the values are numbers, or, for color, a hexadecimal value (for example, #EE0473).

- Minimum Rows: Premiere lets you change how many rows a Motion Graphics template uses. Here you set the lowest number of rows permitted.

Rows

Premiere lets you change how many rows a Motion Graphics template uses. Here you set the highest number of rows permitted.

Data properties

- Column names: Edit the column names shown in the Motion Graphics template.

- Data values: Edit the value held in a spreadsheet cell. Pick which row you're editing by switching the Row menu at the top of the Data values group.

Note

Bringing a data layer's Data property group into the panel strips out the expressions tying the layer's data properties to the source data file, swapping them for static values. Those static values refresh on their own whenever you alter the source data file outside After Effects.

Find out how to handle data-driven Motion Graphics templates and apply them in Premiere.

Note

Working with .tsv files — particularly in German-language Excel, though it hits any language that swaps a comma for a decimal — Excel writes the .tsv files out as .txt files. You'll have to rename the extension to .tsv yourself before linking the file to a Motion Graphics template in Premiere.

Failing that, reach for other spreadsheet tools such as Open Office or Google Sheets.
