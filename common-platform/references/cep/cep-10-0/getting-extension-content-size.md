# Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to get extension content size. When these properties are read from inside an IFrame, however, the values come from the IFrame window object rather than the HTML document window. For the top-level value, use `parent.window.innerWidth` and `parent.window.innerWidth`.
