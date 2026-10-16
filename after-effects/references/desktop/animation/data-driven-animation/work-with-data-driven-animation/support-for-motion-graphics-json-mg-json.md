# Support for Motion Graphics JSON (.mgJSON)

An MGJSON data file can be brought into your project as footage. Add that data footage to a composition and its data property streams get gathered under one top-level group named "Data". Footage data shows up as Properties inside the Data group. Every property in the group carries an expression linking it back to the footage file, reaching the data file's value through the expression footage("foo.mgjson").dataValue(N). N here stands for the path leading to the data stream within the file. MGJSON runs on a schema built to make referencing and importing data streams in After Effects straightforward.

Each data property individually has an expression on it tying that property to the matching data in the MGJSON file. Change the source MGJSON file and the data property values refresh themselves automatically.

Inside the Timeline panel, you can twirl the Data layers open and wield the pick-whip to link one parameter to another. Those changes propagate on their own.
