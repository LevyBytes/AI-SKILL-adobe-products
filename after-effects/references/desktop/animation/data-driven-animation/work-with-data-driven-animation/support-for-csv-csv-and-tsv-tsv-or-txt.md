# Support for CSV (.csv) and TSV (.tsv or .txt)

As footage, After Effects accepts Comma-separated value (.csv) plus Tab-separated value (.tsv or .txt) files, which can then act as data sources. Tabular data lives inside both formats as plain text, with each value separated by a comma or by a tab. For all practical purposes, CSV and TSV files act much as JSON files do.

Here's how to put CSV or TSV data files to use inside After Effects:

Pull a CSV or TSV file into the project as footage, exactly as you would bring in video, audio, or anything else. To get footage in, take any of these routes:

- Select File > Import > File.
- Right-click the Projects panel and select Import > File type.
- Double-click the Projects panel.

Once the file lands in your project window, build a composition around it.

Over in the Timeline panel, twirl the footage open to reveal its properties. Tie the layer's data properties to another layer in the composition using either the expression pick whip or the Property Link pick whip. Holding Shift while you click the timer icon beside a layer's name opens the expressions text field. The Edit > Copy With Property Links command offers another path to linking the data properties.

To point at the data footage file, attach an expression to whichever property the data should drive. The dataValue() footage attribute pulls a value from a given row and column, both of which count from zero. As an example, footage("sample.tsv").dataValue([15,1])returns the value sitting at row 16 in the second column.
