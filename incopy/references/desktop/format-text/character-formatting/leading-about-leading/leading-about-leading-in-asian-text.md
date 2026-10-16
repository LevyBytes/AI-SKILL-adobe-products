# Leading — About leading in Asian text

Use Leading Basis Position in the Paragraph panel menu to choose the basis position for leading. With the default Embox Top/Right setting, InCopy measures line leading from the top of the current line's embox to the top of the next line's embox. If you select a line and increase its leading while using Embox Top/Right, the space below that line grows because the measurement runs from the current line toward the next line. Every other Leading Basis Position setting measures from the current line back to the previous line, so raising those values increases the line aki above the current line.

Leading consists of the embox height plus the line aki spacing.

Set leading through Leading in the Character panel or Control panel. The default setting is Automatic. When Auto Leading is active, the Character panel displays the Leading value in parentheses. Automatic values differ between text frames and text in frame grids. Use the Justification menu item in the Paragraph panel to set the Automatic Leading value. In InCopy, the automatic leading default is 175% of the set font size for text in text frames and 100% for text in frame grids, which lets grid alignment spread the text lines within the grid.

When grid alignment is None, the Character panel's Leading value controls leading in the text frame. If grid alignment uses any setting other than None, the baseline grid settings determine how leading is applied.

Note

Text copied from a frame grid and pasted into a text frame keeps the frame grid attributes, so Leading is set to Automatic at 100%. If line spacing looks compressed, enter a Leading value instead of relying on the automatic setting.

For text in frame grids, set Leading with Line Gap in the Frame Grid Settings dialog box rather than with the leading value. The frame-grid leading value equals the Line Gap value plus the grid size, which is the font size. For example, when the grid size is 13Q and the line gap is 10H, the actual leading value is "23H".

For text placed in the frame grid, the default grid justification is Center. In that case, the distance from one grid center to the next grid center is the leading value. If grid justification is None, leading is applied from the location defined in the grid. When grid justification is set to None, the Leading value in the Character panel controls leading.

Leading inside a frame grid has several interacting parts. For placed text, the actual leading value varies with Font Size, Leading value, and Gyoudori settings in the Paragraph panel. Keep these points in mind:

If the frame grid font size stays unchanged, but the Character panel makes the placed text font size or leading value smaller than the grid size, the text aligns to the grid according to the Grid Justification settings.

If the frame grid font size, or grid size, stays unchanged but the Character panel makes the placed text font size larger than the grid size+line gap, gyoudori is determined automatically. When Gyoudori is Automatic, text can align to the grid in 0.5-line increments, such as 1.5, 2, 2.5, 3, and so on. When Gyoudori is anything other than Automatic, text aligns to the grid according to that setting, and large font sizes can cause characters to overlap.

If the frame grid font size, or grid size, remains unchanged while the Character panel sets placed text gyoudori to a value larger than the grid size+line gap, leading moves to the next line when Leading is Automatic. For example, with a 13Q frame grid size and a 10H line gap, Leading set to 24H places text on every other line. If it is set to 47H, text goes on every third line. For any Leading setting besides Automatic, InCopy ignores the value entered in Leading.
