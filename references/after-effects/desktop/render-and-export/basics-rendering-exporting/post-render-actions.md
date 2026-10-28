# Post-render actions

Post-render actions let you put simple, after-the-render chores on autopilot.

Pre-rendering is the textbook case: pick Composition > Pre-render and the chosen composition joins the render queue with its Post-Render Action option already set to Import & Replace Usage.

Note

Because you set Post-Render Action options inside the Output Module group, keep in mind that swapping the Output Module template can move the Post-Render Action option along with it. Learn more about output modules and output module settings.

Open up the Output Module group in the Render Queue panel by clicking the arrow to the left of the Output Module heading.

From the Post-Render Action menu, pick one of these:

None

Carries out no post-render action. This is the default.

Import

Once rendering finishes, brings the rendered file into the project as a footage item.

Import & Replace Usage

Brings the rendered file into the project and puts it in place of the item you name. Drag the pick whip onto the item in the Project panel that it should replace to name it.

Reach for Import & Replace Usage to string together a chain of dependent render items. You could, for example, point one render item at a watch folder and several computers to build a still-image sequence, then let the next render item turn that still-image sequence into a single movie file. Learn more about network rendering with watch folders and render engines.

Set Proxy

Makes the rendered file a proxy for the item you name. Drag the pick whip onto the item in the Project panel to name it.

### More like this

- Composition settings
- Layer switches and columns in the Timeline panel
- Placeholders and proxies
- Pre-render a nested composition
- Preview video and audio
