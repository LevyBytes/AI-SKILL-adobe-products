# Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to get extension content size. From inside an IFrame, those properties belong to the IFrame window object rather than the HTML document. For the top-most window, use `parent.window.innerWidth` and `parent.window.innerWidth`.
