# Issue 3 (CEP 12) : Flicker during a resize around the corners of a CEP Panel

CEP drawing has moved from OpenGL to Metal. With Metal, panel content is rescaled by default whenever panel size changes.
Most clients, however, preferred the earlier CEP behavior, where panel resizing did not rescale content and pixels beyond bounds were simply filled. Back-porting that behavior to Metal creates some side effects, so flicker can appear around a panel corner during resize in some cases.

---
