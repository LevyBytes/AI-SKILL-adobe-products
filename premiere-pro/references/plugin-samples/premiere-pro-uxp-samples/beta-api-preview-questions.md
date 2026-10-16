# Beta APIs (preview of upcoming surface) — Frequently asked questions

<details>
<summary>**Premiere Pro does not show my plugin.**</summary>

Check these items:

1. Confirm Developer Mode is enabled in Premiere Pro, then restart Premiere Pro after enabling it.
2. Make sure the `host.minVersion` in `manifest.json` is not higher than the installed Premiere Pro version.
3. UDT should show Premiere Pro in its left-hand pane; if it does not, restart both applications.

</details>

<details>
<summary>**Where can I find console.log output?**</summary>

In UDT, select the loaded plugin and click **Debug**. A Chromium DevTools window attaches to the plugin so you can inspect console output, network traffic, and the DOM.

</details>

<details>
<summary>**Do Premiere UXP API calls run asynchronously?**</summary>

Yes. Most Premiere UXP APIs return Promises, so call them with `await` or chain `.then()`. Skipping the wait can produce incorrect results and may block the panel UI. Across its `src/` modules, the `premiere-api` sample consistently uses `async`/`await`, making it the recommended pattern.

</details>

<details>
<summary>**How should file system or network access be requested?**</summary>

Add the needed capabilities under `requiredPermissions` in `manifest.json`:

- The [`oauth-workflow-sample` manifest](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro-samples/main/sample-panels/oauth-workflow-sample/manifest.json) shows `network` and `launchProcess` permissions.
- The [`premiere-api` manifest](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro-samples/main/sample-panels/premiere-api/public/manifest.json) shows `localFileSystem` and `clipboard` permissions.

</details>

<details>
<summary>**UDT does not reload my manifest.json changes.**</summary>

UDT's **Watch** mode reloads source files only. For `manifest.json` changes, use **Unload** and then **Load** in UDT.

</details>

<details>
<summary>**Can a UXP panel be paired with a native C++ plugin?**</summary>

Yes. The official [Hybrid Plugins](https://developer.adobe.com/premiere-pro/uxp/plugins/hybrid-plugins/) guide covers that combination.

</details>

<details>
<summary>**Does documentation exist for Premiere Pro transcript JSON?**</summary>

Yes. This repository includes the full specification at [`sample-panels/premiere-api/assets/transcript_format_spec.json`](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro-samples/main/sample-panels/premiere-api/assets/transcript_format_spec.json).

</details>

---
