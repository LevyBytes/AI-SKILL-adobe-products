# Basics of Data properties

Drop a JSON, CSV, or TSV file into a composition and open its properties, and you'll find only a Data properties group there — the Transform properties group is absent. That Data properties group mirrors the data hierarchy laid out in the file.

JSON Data properties group in the Timeline panel

JSON Data properties group in the Timeline panel CSV and TSV Data properties group in the Timeline panel

CSV and TSV Data properties group in the Timeline panel

The way this data group works echoes how After Effects handles Motion Graphics JSON (.mgJSON) files. What sets them apart: JSON, CSV, and TSV hold only static values, whereas mgJSON can carry dynamic data that shifts over time.

Every data property carries its own expression tying it back to the matching data in the JSON, CSV, or TSV file. Swap out the source data file and the data property values update to match.
