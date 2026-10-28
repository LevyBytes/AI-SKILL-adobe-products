# Support for standard JSON (.json)

A standard JSON file can come into After Effects as footage while the data files do their work out of sight. After Effects reaches straight into the data in those files to drive animations inside projects. JSON footage never shows up as data streams in the Timeline panel. You reference its data through expressions, treating it as an evaluated JSON object.

Rework the expressions and you change how the data gets referenced. You're free to author the data in a text editor for After Effects to pull from when driving animations. JSON support rests on the JSON schema, which lays out how an application reads and edits JSON data.

Here are JSON's core data types:

- Number: a decimal figure that may carry a sign.
- String: any run of Unicode characters, even an empty one.
- Boolean: holds one of two values, true or false.
- Array: values placed in order, with zero or more of them.
- Object: name/value pairs gathered without order, the names (keys) being strings.
- Null: a value left empty, spelled with the word ‘null’.

Note

Planning to bring in Adobe Media Encoder or hook the compositions up to Premiere? Drop the data source file onto the Timeline instead of leaning on expressions that point at data entries sitting in the Project panel. Adding the data file as a composition layer also guarantees it travels along when you run Collect Files.
