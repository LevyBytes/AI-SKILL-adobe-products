# Dynamic Objects

Dynamic objects let Illustrator produce data-driven graphics.

In the Illustrator application, the Variables panel is where users create or edit variables such as graph data, linked file, text string, visibility, and variables with no specified type.

Within scripts, the variable object represents this kind of variable.

The kind property on a variable object reports which category of dynamic data that variable object contains. Variable objects exist at document level, and scripts create them in a document object.

Note

Keep variable objects distinct from variables used by scripts. Illustrator Help covers Illustrator variables, dynamic objects, and data-driven graphics.

In scripting, the dataset object represents a dataset, which groups variables together with the dynamic data assigned to them.

The dataset object includes methods that scripts can use to update dataset objects and delete them.
