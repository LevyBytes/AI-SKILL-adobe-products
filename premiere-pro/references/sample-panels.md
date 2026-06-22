# Metadata Handler, Oauth Workflow Sample, Premiere Api

> Adobe Premiere Pro reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Metadata Handler Panel; How to Integrate with OAuth; premiere-api.

## Metadata Handler Panel

This sample panel gives users more control over project item metadata handling.

### Things you need to begin

- Premiere Pro 25.2.0 BETA (Build 13) or later; install it from Creative Cloud Desktop (CCD)
- UXP Developer Tool-UDT, Version 2.1.0 (2.1.0.30); get it from [Creative Cloud Desktop](https://creativecloud.adobe.com/apps/download/uxp-developer-tools) (CCD)

### Set Up

- Open a console, terminal, or command prompt.
- At your preferred local location, run `git clone https://github.com/AdobeDocs/uxp-premiere-pro-samples.git`. The command creates a new directory named `uxp-premiere-pro-samples` containing the files required to load this panel.
- Start UDT (UXP Developer Tool) and Premiere Pro (Beta).
- In UDT, use the Add Plugin button; browse to the `uxp-premiere-pro-samples/sample-panels/metadata-handler` directory and choose the `manifest.json file`.

- From UDT, load the panel and try it out.

### Preview and Known Issues

- At present, when multiple project items are selected, metadata changes are applied separately to each item. With large selections, those per-item actions can overload the history/undo queue. The result may be that broad metadata edits cannot be fully undone, and earlier UI actions may also drop out of the undo history. This is unintended behavior and remains under investigation.

### Special Thanks

Thanks to Fran's CEP Panel; it inspired the UXP panel work for improving metadata control.

## How to Integrate with OAuth

Use this tutorial to build an OAuth workflow in a Premiere Pro UXP Plugin, with the Dropbox API serving as the example. The information is current as of 26 Feb 2025.

> [!NOTE]
> Authentication flows are inherently detailed, so this guide is intentionally long and uses some advanced concepts. Read each section closely, especially Prerequisites and Configuration.

### Prerequisites

- Working knowledge of HTML, CSS, and JavaScript.
- Comfort with the command line application for your OS.
- Basic familiarity with [OAuth](https://oauth.net/2/)
- [Register an app on Dropbox](https://www.dropbox.com/developers/apps/create) and apply these settings:

  1.  Choose "Scoped Access" for the API
      - After the app is created, enable the **account_info.read** scope
  1.  Choose "Full Dropbox" for the access type

### Technology Used

1. _[Install required]_ [Node.js](https://nodejs.org/en/) plus [`npm`](https://www.npmjs.com)
1. [OAuth](https://oauth.net/2/)
1. [Dropbox API](https://www.dropbox.com/developers/documentation/http/overview)

### Overview of the OAuth workflow

Three components participate in this flow:

- Your Premiere Pro UXP Plugin
- Your server endpoints (for this development example, use a local Node.js server)
- The service provider's OAuth endpoints (this example uses the Dropbox API)

At a high level, the sequence is:
_(in the steps below, **server** means the local Node.js server, and **service** means Dropbox)_

1. The Premiere Pro UXP Plugin contacts the server to request a session ID
1. The server sends back a unique ID associated with that Premiere Pro session
1. The Premiere Pro UXP Plugin opens the user's default browser at a URL for one server endpoint
   - In the web browser, the user authorizes the server and the service to communicate
1. The server and service complete the OAuth code grant handshake
1. The server records the access token alongside the session ID
1. The Premiere Pro UXP Plugin checks with the server for an access token for that session ID. When one exists, the server returns it
1. With that access token, the Premiere Pro UXP Plugin routes service API calls through the server

### Configuration

These steps get the sample code from the GitHub repo running locally.

### 1. Install Node.js packages

The sample repo's `server` folder contains `package.json` with the dependency list. From the repo's top-level directory, install those dependencies with:

```bash
$ cd server
$ npm install
```

### 2. Configure API credentials and public URL

Put the required credentials in `public/config.js`. Required values:

- Dropbox API key
- Dropbox API secret
- Local Node.js server address; this sample assumes **http://localhost:8000**

> [!IMPORTANT]
> Along with the Dropbox API key and secret, configure the Dropbox application with this _Redirect URI_ for the local server:
>
> **http://localhost:8000/callback**

```js
const dropboxApiKey = "YOUR-DROPBOX-API-KEY";
const dropboxApiSecret = "YOUR-DROPBOX-SECRET";
const publicUrl = "http://localhost:8000";

try {
  if (module) {
    module.exports = {
      dropboxApiKey: dropboxApiKey,
      dropboxApiSecret: dropboxApiSecret,
      publicUrl: publicUrl,
    };
  }
} catch (err) {
  console.log(err);
}
```

The server uses these settings in a later step.

### 3. Start the server

Once configuration is complete, start the server from the `server` directory:

```
$ npm start
```

At this point, the server is running with an HTTPS endpoint and the Dropbox credentials are ready.

### 4. Running the plugin

In _Adobe UXP Developer Tools_, add _oauth-workflow-sample/manifest.json_ and load that plugin so it launches in Premiere Pro. After it loads, click **Connect OAuth** in Premiere Pro to begin OAuth authentication.

## premiere-api

The `premiere-api` sample is a reference panel for exploring the Premiere Pro UXP API. Press a panel button to run an API call, then inspect the matching implementation under `src/` before adapting the pattern for your own plugin.

> Setup details, prerequisites, and UDT loading instructions are covered in the [root README](sample-contributing.md).

---

### How the code is organized

This TypeScript sample must be built before UDT can load it. The important project layout is:

```
premiere-api/
â”œâ”€â”€ assets/          â† preset files, transcript spec
â”œâ”€â”€ dist/            â† compiled output (after npm run build)
|   â””â”€â”€ manifest.json    â† point UDT here, not the one in public/
â”œâ”€â”€ public/          â† static assets copied to dist/ (manifest, HTML, icons)
â”œâ”€â”€ src/             â† one .ts file per API area
â”œâ”€â”€ index.ts         â† entry point, wires src/ to buttons
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ vite.config.mjs
â”œâ”€â”€ eslint.config.mjs
```

dist/ is created only after the first
pm run build or
pm run dev.

**UDT should load dist/, not the source folders.** When .ts files change, rebuild first; otherwise UDT keeps showing the previous compiled JavaScript. This missed rebuild is the usual first-run problem.

Panel markup, the manifest, and icons live in public/ (index.html, manifest.json, icons/). Vite copies those static files into dist/ during every build.

### What's in src/

Each module focuses on a specific API area. Use this map when you need the implementation for a particular capability:

| â””â”€â”€ manifest.json â† point UDT here, not the one in public/
| File | What it covers |
| --- | --- |
| `project.ts` | Open, save, close projects; active project; graphics white luminance |
| `sequence.ts` | Create sequences; tracks; in/out points; frame rate; sequence settings |
| `projectPanel.ts` | Project items; bins; media paths; proxy; color labels; footage interpretation |
| `markers.ts` | Create, move, and remove sequence markers; marker colors |
| `metadata.ts` | Read and write XMP metadata; project panel columns; metadata schema |
| `effects.ts` | Add, apply, and remove effects |
| `transition.ts` | Add and remove transitions at clip start and end |
| `keyframe.ts` | Set values, add keyframes, get and set interpolation |
| `sourceMonitor.ts` | Open clips, play/pause, get/set position, close clips |
| `encoderManager.ts` | Encode files and project items; toggle embedded/sidecar XMP; launch encoder |
| `export.ts` | Export sequence frames and full sequences |
| `import.ts` | Import files, sequences, and After Effects components |
| `eventManager.ts` | Listen to project and encoder events |
| `sequenceEditor.ts` | Overwrite/insert track items; insert MOGRTs; clone and remove items |
| `transcript.ts` | Export and import transcripts |
| `projectConverter.ts` | Export as AAF, Final Cut Pro XML, or OpenTimelineIO |
| `settings.ts` | Scratch disk and ingest settings |
| `appPreference.ts` | Read and write application preferences |
| `properties.ts` | Get, set, and clear sequence properties |
| `prProduction.ts` | Active production; production scratch disk settings |
| `utils.ts` | Shared logging helper used across all modules |

---

### Build

```bash
cd sample-panels/premiere-api
npm install
npm run build
```

[Vite](https://vite.dev/) turns the TypeScript sources into CommonJS output in dist/, with one .js file generated for each source module. Files from public/ are copied into the same output area. sc --noEmit handles type checking separately from the emit step.

After the build completes, load sample-panels/premiere-api/dist/manifest.json in UDT and select **Load**.

### Other commands

```bash
npm run dev        # watch build + typecheck (recommended while developing)
npm run typecheck  # typecheck only, no emit
npm run lint       # run ESLint (do this before committing)
npm run clean      # delete dist/
```

---

### Making changes

During development, use this loop:

1. Start `npm run dev` so saves trigger rebuilds.
2. Change files in `src/`, `index.ts`, or `public/`.
3. Select **Reload** in UDT.

When `npm run dev` is not running, run `npm run build` manually after each edit.

**Manifest or `public/` changes** require an **Unload -> Load** cycle in UDT instead of only a reload.

---

### Debugging

Use **Debug** beside the loaded plugin in UDT to attach a Chromium DevTools window to the panel. That gives access to the console, network inspection, sources, and DOM tools.

The build writes separate `.js` files into `dist/`, such as `index.js`, `src/project.js`, and `src/utils.js`, and includes source maps. In the UDT Sources panel, those loaded modules appear like the older multi-file `tsc` output, so breakpoints can still be set against the original `.ts` sources.

The panel also includes its own console region at the top of the UI. Each button click writes its result there, so DevTools is not always required for a quick check.

## See also

- [Known Issues](uxp-known-issues.md)
