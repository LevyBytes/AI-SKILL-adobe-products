# Render a still-image sequence with multiple computers

Things worth keeping in mind as you render a still image sequence across several computers:

- Any number of computers will do for rendering a still-image sequence this way.
- As a still-image sequence renders across several computers, each copy of After Effects begins rendering at roughly the same moment.
- Where your queued render items have Skip Existing Files (a Render Settings option) turned on, the render passes over frames already present or currently being made.
- Several computers can render the project at once, all writing the still-image sequence into one folder.

To render a still-image sequence, follow these steps:

Put After Effects on each computer that will render the project. Confirm the same fonts are installed everywhere.

Keep plug-ins off the network — don't share them. Make sure a copy of the plug-ins folder sits on every computer running After Effects. With third-party plug-ins, double-check that the identical plug-ins are present on all computers and that you hold enough licenses for them.

On one of the computers, open the project, then choose Composition > Add To Render Queue.

Within the Render Queue panel, set a format under Output Module and pick a folder under Output To. Every computer doing the rendering has to be able to reach that folder.

Heading into the Render Settings section of the Render Queue panel, turn on Skip Existing Files (allow multi-machine rendering); that keeps two machines from rendering the same frames. When skip existing files is on, steer clear of attaching several output modules to one render item.

5. Save the project on the same computer where you opened it back in step 2.
6. On every computer that will render, open the project and save it. That save lets After Effects log the fresh relative paths to each computer in the step that follows.
7. Unless the network moves large files quickly, copy the project file along with all its source footage onto each rendering computer.
   On every machine, bring up the Render Queue panel and hit Render. Starting them all at the same instant is not required, yet launching them roughly together evens out the load. The moment a computer finishes a frame, After Effects scans the Output folder for the next frame still missing and renders that one.

8. Stopping and starting any computer is fine at any point. Stop one and never restart it, though, and the frame it was working on may be left unfinished. Should one or more computers halt mid-render, starting any single one of them guarantees every frame in the sequence gets rendered.
