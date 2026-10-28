# Pros and Cons of TypeScript

TypeScript has clear benefits for larger projects. **Compile-time type checking** can catch bugs before the plugin is run, and stronger inference gives autocomplete more precision than JSDoc. **Refactoring becomes safer** because variables and functions can be renamed across the codebase with more confidence. It also unlocks **access to advanced features** such as interfaces, generics, and utility types, plus the debugging and IDE support that come with them.

The cost is **additional setup and tooling**. Before testing the plugin, TypeScript must be **compiled** to JavaScript, adding a build step. Developers who are new to TypeScript also face a **learning curve** around its syntax and concepts. For complex plugins, or for teams already comfortable with TypeScript, those costs are usually outweighed by better developer experience and code quality.
