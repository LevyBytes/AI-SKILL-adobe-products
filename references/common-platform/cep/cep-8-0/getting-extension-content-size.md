# Getting Extension Content Size

Use `window.innerWidth` and `window.innerHeight` to read extension content size. From inside an IFrame, those properties refer to the IFrame window object rather than the HTML document window. To reach the top-most object, use `parent.window.innerWidth` and `parent.window.innerWidth`.
