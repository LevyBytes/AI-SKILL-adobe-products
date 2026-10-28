# The After Effects Object Model

Because this reference section runs alphabetically by object, the diagrams that follow are there to map out how the objects nest within the hierarchy and how they line up against the user interface.

Hierarchy diagram of the main After Effects scripting objects

Keep in mind that the File, Folder, and Socket objects belong to ExtendScript rather than to After Effects, and their documentation lives in the JavaScript Tools Guide.

A further piece supplied by ExtendScript is the ScriptUI module — a collection of window and interface-control objects that After Effects scripts can reach. It, too, is covered in the JavaScript Tools Guide.

Scripting mirrors the layout of the user interface in how its objects are nested.

Inside the application sits a Project panel that shows a project. That project holds compositions, compositions hold layers, and a layer's source may be a footage file, a placeholder, or a solid — each of which also shows up in the Project panel. Properties are the settings carried by each layer, and they in turn can hold markers and keyframes. Render-queue items live in the renderqueue along with render settings and output modules. Scripting exposes every one of these as an object.

Note

So that nothing is confused, "attribute" is the word this manual uses for JavaScript object properties, while "property" (or "AE property") refers to After Effects layer properties.
