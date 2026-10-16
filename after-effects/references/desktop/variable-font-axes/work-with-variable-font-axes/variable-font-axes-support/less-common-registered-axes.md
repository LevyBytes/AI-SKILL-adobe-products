# Less common registered axes

Belonging to the OpenType spec yet implemented less often, these axes include:

| Axis name | Controls | Typical range | Use cases |
| --- | --- | --- | --- |
| Grade (GRAD) | Stroke thickness without changing width | -1 to 1 or font-specific | - Matching stroke weight across fonts<br>- Maintaining layout while adjusting weight<br>- Creating subtle emphasis without reflow |
| Serif (SERF) | Blends between sans-serif and serif styles | 0 (Sans) to 1 (Serif) or font-specific | - Transitioning between sans and serif<br>- Creating hybrid serif styles |
| Lowercase Height (XHGT) | Height of lowercase letters (x-height) | Font-specific | - Adjusting readability<br>- Creating typographic variations |
| Uppercase Height (YTAS) | Height of uppercase letters relative to ascenders | Font-specific | - Fine-tuning cap height<br>- Creating all-caps variations |
| Counters (XTRA) | Spacing inside letters (counter space) | Font-specific | - Adjusting internal negative space<br>- Creating texture variations |
