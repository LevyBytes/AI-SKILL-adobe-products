# macOS security warnings for binaries

The SDK's `template-plugin` binaries are unsigned. On macOS, allow them from **System Settings** > **Privacy & Security**. For production builds, sign and notarize the binaries with a valid Apple Developer ID.
