# 4. Test the plugin's logic

Now test what the UXP plugin does. Open a sample project in Premiere. If you do not already have one, use **Window** > **Learn** and download a sample from **Tutorials**.

Click **Populate Application Info** in the plugin panel.

[Figure: Premiere - Populate Application Info](https://raw.githubusercontent.com/AdobeDocs/uxp-premiere-pro/main/src/pages/plugins/img/getting-started-get-app-info.png)

After the click, active project and sequence information appears in the panel. The implementation is in `index.js` and retrieves the data through the [Premiere APIs](../host-api/premiere-api-overview.md). Open that file if you want to inspect the code path.
