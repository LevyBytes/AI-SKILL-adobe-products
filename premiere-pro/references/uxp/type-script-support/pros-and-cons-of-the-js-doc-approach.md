# Pros and Cons of the JSDoc Approach

JSDoc's main benefit is that **it doesn't require any build steps**. The existing development flow stays intact while the editor gains **full IntelliSense with autocomplete and type hints**. Type checks happen during editing, which can expose mistakes before runtime. The approach works in modern editors such as VSCode and Cursor.

The tradeoff is that JSDoc is not equivalent to full TypeScript. Type issues show up as **editor warnings rather than compile-time errors** that stop execution. More explicit type annotations may be needed across the codebase, because JSDoc comments do not infer as much as TypeScript. **Advanced TypeScript features** such as generics, utility types, and conditional types **are not available** in JSDoc.

For smaller plugins, JSDoc is a practical way to add types without changing the build. As a plugin becomes more complex, the project can move to TypeScript later.
