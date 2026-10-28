# Frameworks

Beyond JavaScript, HTML, and CSS, many teams use **frameworks that act as an abstract layer on top of Web technologies** so reusable code can be written faster and with less repetition.

[React](https://react.dev/), [Vue](https://vuejs.org/), [Angular](https://angular.io/), and [Svelte](https://svelte.dev/) are widely used choices. Whether to use one is optional and depends on your project preferences.

Any extra tool that extends Vanilla (i.e., plain) JavaScript needs supporting software to run:

- [Node.js](https://nodejs.org/en/): a **JavaScript runtime environment** that is also commonly used as a backend server for Web projects. Visit the [Node.js download page](https://nodejs.org/en/download/), get the installer for your platform, and run it; `npm` is installed as part of that setup.
- [`npm`](https://www.npmjs.com): a **Package Manager** included with Node that manages project dependencies, meaning the external code and files your plugin relies on.
- [`yarn`](https://yarnpkg.com): an **alternative Package Manager** for Node. Install `npm` first as described above, then run:

  ```bash
  npm install yarn --global
  ```
