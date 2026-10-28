# Issue: script output not found

**Error**: `No files matching pattern`

**Solution**: Confirm the UXP script writes the file under `plugin-temp:/filename` and that `scriptOutputPattern` uses the same filename.
