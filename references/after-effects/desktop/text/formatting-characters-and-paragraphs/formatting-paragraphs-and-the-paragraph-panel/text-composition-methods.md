# Text composition methods

What text ends up looking like on the page comes out of an intricate set of processes known as text composition. Working from the word spacing, letter spacing, and glyph spacing options you've set, After Effects weighs the candidate line breaks and settles on whichever best honors those parameters.

Two composition methods are on offer in After Effects, both selectable from the Paragraph panel menu.

Note

Clicking the panel menu button at the panel's upper-right tab is how you open the panel menu.

Adobe Single-line Composer

Takes the classic route, composing one line of text at a time. It suits anyone who wants to steer line breaks by hand. When spacing needs tweaking, the Single-line Composer reaches for compression before it tries expanding text.

Adobe Every-line Composer

Weighs a web of breakpoints spanning a stretch of lines, letting it tune earlier lines in the paragraph so that especially ugly breaks further down get headed off. Spanning several lines yields more even spacing and fewer hyphens. The Every-line Composer goes about composition by spotting candidate breakpoints, weighing them, and handing out a weighted penalty grounded in these ideas:

Top priority rides on keeping letter and word spacing even. Each candidate breakpoint is judged and penalized by how far it strays from ideal spacing.

Once breakpoint penalties are set across a span of lines, they get squared, which blows up the worst breakpoints. The composer then leans on the good ones.
