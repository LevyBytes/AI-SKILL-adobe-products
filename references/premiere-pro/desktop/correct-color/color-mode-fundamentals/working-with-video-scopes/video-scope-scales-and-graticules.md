# Video Scope scales and graticules

Every video scope includes a graticule overlay for reading the graph against its intensity, plus a numeric scale on the left edge. The scope range resizes automatically to match the outgoing video signal, using the Peak Luminance color management value, which is commonly linked to Output Color Space.

To alter the graticule shown on a scope:

- Right-click the target scope, then select one of these choices for the Waveform Monitor, RGB Parade, and RGB Overlay scopes:
- 10-bit: displays the 10-bit numeric span for encoded video code values. This is useful for QC workflows that call out exact code values.
- Percentage: the default view; maps the available Min to Max range from 0 (Black) through 100 (Peak Luminance). Use it for general reference; it resembles IRE but is not the same scale.
- HDR: presents a "nits" (cd/m2) scale commonly used while grading high dynamic range (HDR) output for HLG or PQ deliveries. Program masters commonly top out at 1000 nits, while premium "evergreen" content is often mastered with 4000 nits max.
