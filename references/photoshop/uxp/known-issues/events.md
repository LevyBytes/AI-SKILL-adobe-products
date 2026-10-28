# Events

- `uxpshowpanel` and the matching `show` callback fire only the first time the panel becomes visible. They do not fire again. A future fix is planned. (PS-57284)
- `uxphidepanel` and the matching `hide` callback do not fire at all, even after the panel becomes invisible. A future fix is planned. (PS-57284)
- Interactive elements consume most events.
- `keypress` is not currently supported.
