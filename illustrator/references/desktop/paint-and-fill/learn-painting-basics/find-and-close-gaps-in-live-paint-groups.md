# Find and close gaps in Live Paint groups

Detect, control, and close gaps in Live Paint groups.

Gaps are narrow openings between paths. When paint passes through into faces you did not mean to color, the artwork probably contains a gap. You can close it by drawing a new path, by editing paths that already exist, or by changing the Live Paint group's gap options. When Live Paint groups that use different gap settings are merged, Adobe Illustrator applies these rules:

- If every selected group has Gap Detection off, Illustrator closes gaps and enables Gap Detection with Paint stops at set to Small Gaps.
- If every selected group uses the same Gap Detection setting, Illustrator closes gaps and keeps that gap setting.
- With mixed settings, Illustrator keeps the bottommost group's setting only when that group's Gap Detection is on. If it is off, Gap Detection is enabled and Paint stops at uses Small Gaps by default.

To prevent gaps in Live Paint artwork, overdraw paths so they extend beyond one another. Afterward, delete the resulting extra edges or set their Stroke to None.
