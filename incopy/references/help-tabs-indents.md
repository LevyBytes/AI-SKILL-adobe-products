# Tabs Indents

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

Tabs place text at chosen horizontal positions inside a frame. The Horizontal ruler units setting in the Units & Increments preferences dialog box controls the default tab setup.

Tabs affect the whole paragraph. Setting the first tab removes all default tab stops to its left. Each later tab removes any default tabs between the tabs you set. Available tab types include left, center, right, decimal, and special-character tabs.

Use the Tabs dialog box to set tabs.

Tabs dialog box

A. Tab alignment buttons B. Tab position C. Tab Leader box D. Align On box E. Tab ruler F. Snap above frame

Tabs dialog box

In a vertical text frame, the Tabs dialog box also changes to a vertical orientation. If its direction differs from the text frame direction, click the magnet icon to align the rulers with the current text frame.

Vertical tabs

Vertical tabs

## Tabs and indents — Open the Tabs dialog box

With the Type tool, click inside the text frame. Choose Type > Tabs.

When the frame top is visible, the Tabs dialog box attaches to the current text frame and changes its width to match the current column.

When the top of a horizontal frame is visible, the Tabs dialog box attaches to the top of the current text frame, and its width changes to match the current column width. When a text insertion point is in a vertical frame, the Tabs dialog box attaches to the right side of the text frame, and the displayed length matches the current column length.

## Tabs and indents — Align the Tabs dialog box ruler with your text

In Layout View, scroll through the document until the content top is visible. Continue scrolling as needed until the text frame top appears. In the Tabs dialog box, click the magnet icon. The dialog box snaps to the top of the column containing the selection or insertion point.

## Tabs and indents — Set tabs

You can create left, center, right, decimal, and special-character tabs. With a special-character tab, the alignment character can be any character you choose, such as a colon or dollar sign.

To preview tab-setting changes, choose View > Layout View. Select the Type tool, place an insertion point in the paragraph, and press the Tab key. Insert tabs in the paragraphs where horizontal space is needed. (Tabs can also be added after the tab settings are created.)

Using tabs to align text

Using tabs to align text

Next, choose Type > Tabs. The Tabs dialog box appears. To define which paragraphs are affected, select one paragraph or several paragraphs.

Note

In Galley view and Story view, a tab added at the start of the paragraph indents text by the same amount no matter where the tab is positioned. Layout view shows the real tab distance.

For the first tab, choose its alignment by clicking a left, right, center, or decimal tab-alignment button in the Tabs dialog box. This defines how text lines up at the tab position. Then choose one action:

Click the tab ruler where the new tab should be placed.

Adding a new tab setting

Adding a new tab setting

- Put a position in the X box and press Enter or Return. With the X value selected, use the up arrow or down arrow key to raise or lower the tab value by 1 point, respectively.

For additional tabs with other alignments, go through steps 3 and 4 again. The first setting aligns right; the second aligns left.

The first tab setting is right-aligned; the second tab setting is left-aligned.

Note

To insert a tab character in a table, choose Type > Insert Special Character > Other > Tab.

## Tabs and indents — Repeat tabs

Use Repeat Tab when you need InCopy to generate additional tab stops from the spacing between the chosen tab and either the left indent or the tab stop before it.

Place the insertion point in the paragraph. In the Tabs panel, pick a tab stop on the ruler. From the panel menu, choose Repeat Tab.

Repeated tabs

A. Tab-alignment buttons B. Tab stop on the ruler C. Panel menu

Repeated tabs

## Tabs and indents — Move, delete, and edit tab settings

The Tabs dialog box is the place to adjust tab stops, remove them, or change their settings.

## Tabs and indents — Move a tab setting

With the Type tool, put the insertion point inside the paragraph. In the Tabs dialog box, choose a tab from the tab ruler. Then use either method:

Enter a different position for X, then press Enter or Return.

Move the tab by dragging it to the new position.

## Tabs and indents — Delete a tab setting

Put the insertion point in the paragraph. Then use one of these methods:

Drag the tab away from the tab ruler.

Choose the tab, then choose Delete Tab from the panel menu.

To restore the default tab stops, choose Clear All from the panel menu.

## Tabs and indents — Change a tab from one alignment to another

In the Tabs dialog box, choose a tab on the tab ruler. Select the tab-alignment button for the alignment you want.

Note

Another way to rotate through the four alignment choices is to hold Alt (Windows) or Option (Mac OS) while clicking the tab setting.

## Tabs and indents — Specify characters for decimal tabs

With decimal tabs, text aligns on a user-chosen character, for example a period or dollar sign.

In the Tabs panel, create a decimal tab on the tab ruler or select an existing one. In the Align On box, enter the alignment character. You may type the character directly or paste it. Confirm that each paragraph being aligned contains it.

Text aligned using a decimal tab

Text aligned using a decimal tab

## Tabs and indents — Add tab leaders

A tab leader fills the space from a tab to the following text with a repeated character sequence, for example dots or dashes.

In the Tabs panel, choose a tab stop on the ruler. In the Leader box, enter a pattern up to eight characters long, then press Enter or Return. InCopy repeats those characters across the tab width. To alter the leader's font or other formatting, select the tab character in the text frame and apply formatting from the Character panel or the Type menu.

## Tabs and indents — Insert right indent tabs

A single command can place a right-aligned tab at the right indent, which helps when building tabular text across a full column. Right indent tabs behave differently from ordinary tab stops. A right indent tab:

Aligns later text against the right edge of the text frame. If a paragraph has any tab stops after the right indent tab, those stops and the text attached to them move onto the next line.

Exists as a special character in the text instead of as an entry in the Tabs dialog box. Because you insert it from a context menu rather than the Tabs dialog box, a paragraph style cannot include a right indent tab.

Is separate from the Right Indent value in the Paragraph panel. Right Indent moves the paragraph's whole right edge inward from the text frame's right edge.

Works with a tab leader. A right indent tab uses the leader from the first tab stop beyond the right margin, or if no such stop exists, from the final tab stop before that margin.

With the Type tool, click the line where the right indent tab should be inserted. Choose Type > Insert Special Character > Other > Right Indent Tab.

## Tabs and indents — Set indents

Indents shift text inward from the frame's left and right sides. For paragraph starts, first-line indents are usually the better choice than spaces or tabs.

The left-margin indent is the reference point for the first-line indent. For example, when the paragraph's left edge has a one-pica indent, adding a one-pica first-line indent places the paragraph's first line two picas in from the frame edge or inset.

Indent values can be changed in the Tabs dialog box, the Paragraph panel, or the Control panel. Bulleted and numbered list setup also lets you define indents.

For CJK text, the mojikumi setting can define the first-line indent. If the Paragraph panel already specifies a first-line indent and you also set indents through mojikumi, the resulting indent can combine both values.

## Tabs and indents — Set an indent using the Tabs dialog box

Using the Type tool, click inside the paragraph that needs an indent. Choose Type > Tabs to open the Tabs dialog box. For the indent markers in the Tabs dialog box, use one of these approaches:

- To indent only the first line, drag the top marker. To move both markers and indent the complete paragraph, drag the bottom marker.

First-line indent (left) and no indent (right)

First-line indent (left) and no indent (right)

Choose the top marker and enter X to indent the first line. Choose the bottom marker and enter X to shift both markers while indenting the entire paragraph.

For details about the Tabs dialog box, see Tabs dialog box overview.

## Tabs and indents — Set indents using the Paragraph panel or the Control panel

With the Type tool, click in the paragraph you want to indent. In the Paragraph panel or Control panel, change the relevant indent fields. For example:

To indent the whole paragraph by one pica, enter a value such as 1p in the Left Indent box.

To indent just the first line of a paragraph by one pica, enter 1p or another suitable value in the First Line Left Indent box.

To make a one-pica hanging indent, set Left Indent to a positive value such as 1p, then set First Line Left Indent to a negative value such as -1p. See Set indents.

## Tabs and indents — Reset indents

Click in the paragraph whose indents should return to the zero mark. From the Tabs dialog box menu, choose Reset Indents.

## Tabs and indents — Create a hanging indent

A hanging indent leaves the first line outdented while every other line in the paragraph is indented. This format is particularly helpful when inline graphics must appear at the paragraph's start.

No indent (left) and hanging indent (right)

No indent (left) and hanging indent (right)

With the Type tool, click in the paragraph that needs the indent. In either the Tabs dialog box or the Control panel, set a left indent value above zero. To define a negative first-line left indent, use one of these methods:

In the Control panel, set first-line left indent to a negative value.

In the Tabs dialog box, drag the top marker left, or select the marker and enter a negative X value.

Usually, the negative number should match the positive value from step 2; for example, a left indent of 2 picas is commonly paired with a first-line left indent of -2 picas.

## Tabs and indents — Right-indent the last line of a paragraph

Last Line Right Indent lets you create a right-side hanging indent for the final line of a paragraph. It is useful, for example, when prices in a sales catalog need to align on the right.

Last line right indent

Last line right indent

Enter the paragraphs. On each paragraph's final line, put the insertion point before the text that should be indented, then choose Type > Insert Special Character > Other > Right Indent Tab. After that, select the paragraphs. To give the paragraphs a right indent, use the Right Indent field in the Paragraph panel or Control panel and enter 2p or another needed value. To counterbalance that right indent for text after the tab, use the Last Line Right Indent field in the Paragraph panel or Control panel and enter -2p or another negative value.

## Tabs and indents — Use Indent To Here

Indent To Here is a special character that can indent selected lines in a paragraph without relying on the paragraph's left indent value. Compared with the paragraph's left indent, Indent To Here differs in these ways:

Indent To Here travels with the text flow, much like a visible character. If the text reflows, the indent shifts with it.

Only lines after the line containing the inserted special character are affected, so part of a paragraph can be indented independently.

Type > Show Hidden Characters reveals the Indent To Here character.

Indent To Here special character

Indent To Here special character

With the Type tool, click where the indent should begin. Choose Type > Insert Special Character > Other > Indent To Here. This places the special character at that point.

### More like this

- Create bulleted or numbered lists
