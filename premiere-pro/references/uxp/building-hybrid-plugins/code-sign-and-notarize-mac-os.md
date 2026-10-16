# 3. Code sign and notarize (macOS)

On macOS, each `.uxpaddon` executable needs signing and notarization under an **Apple Developer ID** certificate. Requirements:

- Do not use self-signed or test certificates; they are **not accepted**.
- Certificate validity must cover **at least one year**.
- Signing applies only to the `.uxpaddon` binaries; JavaScript, HTML, CSS, and manifest files in the rest of the plugin bundle do not need it.

For more information about Apple Developer ID requirements, see the [FAQ](../hybrid-plugins-faq/reference-index.md).
