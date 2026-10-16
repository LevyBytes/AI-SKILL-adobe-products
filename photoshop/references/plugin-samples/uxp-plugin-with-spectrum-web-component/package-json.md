# package.json

After adding a component with `yarn add`, the components should appear under 'dependencies'.

To resolve transitive dependencies, use [force resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/). Include all dependencies in the `resolutions` block as well to avoid incompatibility issues in sub components.
