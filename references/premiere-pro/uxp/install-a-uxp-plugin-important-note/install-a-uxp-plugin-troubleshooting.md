# Install a UXP plugin - Troubleshooting

Although UXP plugin management is usually reliable, these checks can help when problems appear.

- Before installing a plugin, it can help to **run the host application at least once**.
- If double-clicking a `.ccx` file does not launch the Creative Cloud Desktop application, locate the UPIA executable and run it manually. The **file extension may not have been associated properly**, or **permission issues** may be involved.
- The UPIA executable can sometimes be missing from the system or become corrupted. **Reinstalling the Creative Cloud Desktop application** may fix that problem. For enterprise plugin installation, see [this packaging section](../package-a-uxp-plugin/reference-index.md) for how to include the UPIA in your package.
- Another option is [Anastasiy's Extension Manager](https://install.anastasiy.com/), a third-party tool, to install the plugin.
- For support, contact [ccintrev@adobe.com](mailto:ccintrev@adobe.com). If more troubleshooting is needed, support may request output from the [Log Collector tool](https://helpx.adobe.com/creative-cloud/apps/troubleshoot/diagnostics-repair-tools/run-log-collector-tool.html).
