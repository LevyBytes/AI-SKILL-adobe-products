# Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to get extension content size. Inside an IFrame, those properties refer to the IFrame window object rather than the HTML document's window. For the top-level window, use `parent.window.innerWidth` and `parent.window.innerWidth`.
