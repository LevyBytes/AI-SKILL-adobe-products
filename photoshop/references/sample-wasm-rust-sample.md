# Wasm Rust Sample

> Adobe Photoshop reference. Original prose; identifiers preserved verbatim.

Use this plugin as a foundation for adding Rust and WebAssembly to UXP plugins. Most startup dependencies are already defined in the project. Because the plugin depends on the [Rust Programming Language](https://www.rust-lang.org/), Photoshop use requires a Rust development environment to be configured first.

**Warning:** On ARM devices, including Apple Silicon Macs, this plugin currently crashes Photoshop.

## Configuration — Rust Environment

Install and configure the [Rust toolchain](https://www.rust-lang.org/tools/install) on the machine before starting.

Complete the `rustup` installation flow. After it finishes, `cargo` commands will be available in the shell.

> Building this project requires the Rust toolchain to be installed.

**Note:** On Windows, the Rust compiler needs [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) to be installed. See the [Rust documentation](https://doc.rust-lang.org/book/ch01-01-installation.html#installing-rustup-on-windows) for details.

### 1. Install [wasm-pack](https://github.com/rustwasm/wasm-pack)

```
$ cargo install wasm-pack
```

### 2. Test local Rust configuration and [wasm-pack](https://github.com/rustwasm/wasm-pack) installation

```
$ yarn test         # or cargo test && wasm-pack test --node
```

## Configuration — Node.js

### 1. Install the Node.js dependencies:

```
$ yarn install      # or npm install
```

### 2. Run plugin in watch or build mode

```
$ yarn watch        # or npm run watch

## OR

$ yarn build        # or npm run build
```

> Run `build` before trying to load this plugin in Photoshop.

- `yarn watch` or `npm run watch` builds a development copy of the plugin, recompiling whenever the source files change. The output goes into `dist`.
- `yarn build` or `npm run build` builds a production copy of the plugin and writes it to `dist`. It does not refresh after each source-file change.

**Note:** UXP cannot implicitly access `localhost` for a development server, so this plugin uses inline WebAssembly to operate correctly. You will therefore see this import in `js/index.js`:

```

```

The build script generates this JS file with inline WebAssembly. To generate the file yourself, run:

```
$ yarn inlinewasm   # generate JS file containing the inline WebAssembly data
```

## OR — What this plugin does

A small Rust implementation stores state for a counter component shown in the UI. Through the `wasm-bindgen` API, the Rust code can call JavaScript API methods such as `console.log`. The sample also shows one build-process approach for using Rust and WebAssembly inside UXP plugins.
