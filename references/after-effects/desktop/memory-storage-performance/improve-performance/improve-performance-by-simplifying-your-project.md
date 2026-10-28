# Improve performance by simplifying your project

Trimming a project down and splitting it into pieces keeps After Effects from churning through elements you never use, and it lets you decide exactly when each step runs — both of which cut wasted, repeated processing and lift performance considerably.

- Strip out any elements the project no longer references.
- Break a sprawling project into a handful of smaller ones, and merge them back together right before you render the final movie. The way to bring them back together is to import every one of those projects into one combined project.
- Ahead of rendering, run the Collect Files command so every source footage file lands on a fast local drive — ideally a different drive than the one you render and export to.
- Pre-render any nested compositions, and output a finished composition as a movie; that stops After Effects from re-rendering the same composition each time it has to show it.
- When you aren't actively editing a particular source item, swap in a still-image or low-resolution proxy in its place.
- Drop the composition down to a lower resolution.
- Flip the Solo switch on the layer you're focused on so it sits by itself.
