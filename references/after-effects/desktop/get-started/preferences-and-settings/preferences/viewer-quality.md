# Viewer Quality

- Faster: Favors speed ahead of precision.

  - More Accurate Except Cached Preview: While zooming, After Effects aims for greater accuracy unless what you're looking at is a cached preview (RAM Preview).
  - More Accurate: Keeps precision the priority at all times.

  - Faster: Leans on simplified color math so interaction stays responsive.
  - More Accurate Except Cached Preview: Splits the difference between speed and accuracy. During playback, cached frames may rely on simplified color transforms, yet static frames stay accurate.
  - More Accurate: Runs the complete color management math to render color exactly.
