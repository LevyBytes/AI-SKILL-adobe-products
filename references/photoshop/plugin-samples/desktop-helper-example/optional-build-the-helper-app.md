# 3. (Optional) Build the helper app

```bash
cd helper
yarn build
```

**Warning:** Expect this command to need a long time before it completes.

Electron production builds package JavaScript as a binary executable for the target platform, suitable for distribution or personal use. Build for production once development work is finished.

After the build completes, go to `helper/dist` and double-click the `UXP Helper App Setup 1.0.0` installer. After installation, the helper app can run locally. Future production changes require rebuilding the Electron project and installing it again.
