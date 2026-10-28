# Import an Adobe Premiere project

Note

Pulling a Premiere project into After Effects doesn't go through Dynamic Link. If any sequence within that Premiere project is already dynamically linked to After Effects, the import won't work.

On import, a Premiere project shows up in the Project panel in two forms at once: a new composition where every Premiere clip becomes a layer, and a folder where every clip sits as its own footage item. Any bins in your Premiere project get turned into folders nested inside the Premiere project folder. Nested sequences become nested compositions.

Importing a Premiere project into After Effects doesn't carry over every feature of that project. The set of features that survive the import matches the set preserved when you copy and paste between the two applications.

What After Effects keeps intact is the clip ordering along the timeline, the footage duration (trimmed In and Out points included), and where markers and transitions sit. The way layers line up in the Timeline panel follows how clips were arranged in the Premiere Timeline panel. Premiere clips enter the Timeline panel as layers ordered the way they appeared—bottom upward and left to right—in the Premiere Timeline panel. Speed changes you made to a clip, say through the Clip > Speed command, are preserved and turn up as a value in the Stretch column of the After Effects Timeline panel.

Effects shared by both Premiere and After Effects come across on import, and their keyframes are preserved.

Whatever transitions and titles (dissolves aside) your Adobe Premiere project carries arrive in the After Effects composition as solid layers, keeping their original placement and duration.

Audio Level keyframes are preserved.

Choose File > Import > File or File > Import > Adobe Premiere Project.

If you choose Import > Adobe Premiere Project, then only Adobe Premiere projects are shown.

Select a project, and click OK.

To import only one sequence, choose a sequence from the menu.

To import audio, select Import Audio.

To add a single item from a track in a Premiere project, copy the item in Premiere, and choose Edit > Paste in After Effects.
