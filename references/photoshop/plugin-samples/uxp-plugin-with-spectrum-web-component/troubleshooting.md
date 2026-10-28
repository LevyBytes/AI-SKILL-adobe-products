# Troubleshooting

When the console reports this failure, try the checks below to clear it.

```text
Failed to execute 'define' on 'CustomElementRegistry': the name "sp-icon-alert" has already been used with this registry
```

The usual cause is dependency resolution bringing in duplicate copies of a component, such as `sp-icon-alert`. Troubleshoot it this way:

- Confirm that `index.js` is not being invoked more than once by accident.
- Inspect `package.json` and verify the component is present in the resolutions block when needed.
- Use the recommended package version exactly, without the `^` prefix.
