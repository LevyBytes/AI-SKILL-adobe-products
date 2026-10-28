# Events

- `uxpshowpanel` and the matching `show` callback fire only the first time the panel becomes visible. They do not fire again. This is planned for a future fix. (PS-57284)
- `uxphidepanel` and the matching `hide` callback do not fire, including when the panel becomes invisible. This is planned for a future fix. (PS-57284)
- Interactive elements consume most events.
- `keypress` is not supported yet.
