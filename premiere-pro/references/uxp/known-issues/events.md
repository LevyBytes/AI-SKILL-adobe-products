# Events

- `uxpshowpanel` and the matching `show` callback run only the first time the panel becomes visible. They do not fire again. A future release will correct this. (PS-57284)
- `uxphidepanel` and the matching `hide` callback do not run, even when the panel becomes invisible. A future release will correct this. (PS-57284)
- Interactive elements swallow most events.
- `keypress` is not currently supported.
