# Viewing Stories, Moving Documents, Copyfitting Text

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Viewing stories — Galley, Story, and Layout view overview; Moving through documents — Scrolling through documents; Copyfitting text.

## Viewing stories — Galley, Story, and Layout view overview

InCopy has three story views: Galley, Story, and Layout. The naming comes from traditional publishing practice.

Galley view

Text appears with the same line breaks established by the related Adobe InDesign document. When the copy runs past its allotted layout area, an overset marker identifies where the InCopy story no longer fits. You can still apply formatting in InCopy, including paragraph indents and font size, but Galley view does not display those formatting changes.

Galley view

Galley view

Story view

Text is presented as one continuous flow, with wrapping based on the document window. Because Story view does not reproduce final line endings, it is suited to concentrating on the wording itself. If the story exceeds its assigned layout space, an overset marker shows the point where the InCopy text goes beyond the available area. In this view, the information area shows paragraph styles only, and line numbers are not shown.

New InCopy stories open in Story view by default.

Note

To set a different default view for new documents, close every document and choose the preferred default from the View menu.

Story view

Story view

Layout view

Text is shown as it will output, including all formatting. When InCopy is synchronized with an InDesign layout, the story can be reviewed alongside the surrounding InDesign page items, including frames, columns, graphics, and related elements.

Layout view also supports zooming in and out so you can examine different parts of the layout.

Layout view

Layout view

### Viewing stories — Switch between Galley, Story, or Layout view

Use either method:

Pick the needed view on the View menu.

At the top of the editing area, click Galley, Story, or Layout.

### Viewing stories — About Galley view

Galley view is designed for efficient text work, with copy that remains readable and easy to mark up. It is also useful for copyfitting and other production tasks.

Opening an InDesign document in InCopy and using Galley view is comparable to reviewing traditional galley proofs. In the viewing area, line wrapping matches the final InDesign layout exactly, while all content is displayed in a single column no matter how many columns the layout uses. Page, frame, and column boundaries appear as centered separator lines labeled "Page break," "Frame break," or "Column break".

Note

If one boundary represents more than one break, such as a frame break occurring at the same place as a page break, InCopy displays the break with the greatest priority. Page breaks outrank the others, while column breaks have the lowest priority.

The Copyfit break feature in Galley view marks where the InCopy story passes the layout space assigned to it in InDesign.

Galley view initially shows text at 12 points. You can adjust font, size, or spacing for easier reading and editing, and you can also modify the background and font colors.

Note

The display font size setting affects every story; it is not applied separately to selected characters, words, or paragraphs.

The Galley & Story Appearance toolbar sits at the bottom of the workspace and provides controls that are often changed while working in a document. Controls provided there:

Display font type and size

Display leading (single space, 150% space, double space, or triple space)

Show/hide line number and styles columns

Customize Galley & Story Appearance controls

### Viewing stories — Customize Galley and Story views

Galley and Story views can be adjusted in several different ways.

### Viewing stories — Change the Galley view display settings

Choose an option from the Galley & Story Appearance toolbar. If the toolbar is not visible, choose Window > Galley & Story Appearance. By default, it is shown at the bottom of the application window.

Note

Changing display font size is different from formatting the actual text. Both actions are available in Galley view. Adjusting display size changes only the editing view and has no effect on published output, while applying text formatting changes the appearance in Layout view and in the final publication.

### Viewing stories — Set Galley view display preferences

On Windows, choose Edit > Preferences > Galley & Story Display. On Mac OS, choose InCopy > Preferences > Galley & Story Display. In the Text Display Options section, set these options:

Text Color

Sets the color of text in the viewing area. The default text color is Black.

Background

Sets the viewing area's background color. The default background is White.

Theme

Applies preset combinations of text and background colors.

Override Preview Font

Lets Galley and Story view display one extra font using its proper typeface. InCopy already renders the Symbol, Zapf Dingbats, Webdings, and Wingdings fonts accurately, regardless of the chosen display font.

Enable Anti-aliasing

Softens jagged type and bitmap-image edges by smoothing the color transition from edge pixels to background pixels. Since only edge pixels are changed, detail is preserved. You can choose the anti-aliasing level. The Default option smooths text with shades of gray. The LCD Optimized option uses color instead of gray and works best on light backgrounds with black text. The Soft option also uses gray shades, but gives a lighter and less sharp appearance.

Cursor Options

Sets how the cursor is displayed. Pick from four cursor choices. Select or deselect Blink.

Note

Settings in Galley & Story Display affect both Galley view and Story view.

### Viewing stories — Show or hide the information column

In Galley and Story views, the information column is shown along the left side of the document window. It provides read-only details such as paragraph styles, line numbers, and vertical text depth, and text cannot be entered there.

Use one of these commands:

To change only the current document's view, use View > Show Info Column, or use View > Hide Info Column.

To set the application default, close all documents first, then use View > Show Info Column, or use View > Hide Info Column.

Note

Paragraph styles help keep publications consistent. Refer to the workflow documentation used by your team for any project-specific house guidelines.

### Viewing stories — Set Story view preferences

Use the Galley & Story Display section of the Preferences dialog box to adjust how Story view appears.

On Windows, choose Edit > Preferences > Galley & Story Display. On Mac OS, choose InCopy > Preferences > Galley & Story Display. Set the options you need. Click OK.

### Viewing stories — Show or hide paragraph break marks

Paragraph break marks can be displayed or hidden in Galley and Story view. An arrow symbol identifies where a new paragraph begins.

Choose View > Show Paragraph Break Marks or View > Hide Paragraph Break Marks.

### Viewing stories — Use the vertical depth ruler

While entering text, you may need both the story's line count and its physical depth in Layout view. The vertical depth ruler places a ruler on the left edge of Galley and Story views. Every tick mark lines up with the bottom of a text line. A value appears after each group of five tick marks, showing the cumulative vertical depth of the text up to that location. Once layout composition for that part of the document finishes, the depth updates automatically.

Depth values use the vertical units setting in Units & Increments preferences.

Note

For copyfitting, InCopy also calculates and displays the depth of overset text.

At the top of the editing area, click Galley or Story. Use either command:

For the depth ruler, use View > Show/Hide Depth Ruler.

For the information column, use View > Show/Hide Info Column.

### Viewing stories — Layout view overview

Layout view shows text and other page objects with the formatting and placement they have in an InDesign document. Stories appear inside frames, matching their arrangement in InDesign.

When you work on a linked story, meaning a managed story in an open InDesign document or assignment file, InCopy does not allow layout changes. You can edit only the text and its text attributes.

For a stand-alone InCopy document, meaning an individual InCopy file not contained in an open InDesign document or assignment file, you can edit the text and text attributes and also change page size with the Document Setup command.

Compared with the other views, Layout view provides additional tools and View-menu commands. The Hand tool, Zoom tool, and Zoom commands let you inspect a spread at different magnification levels. Layout aids such as rulers, document grids, and baseline grids are also available.

Note

These viewing choices do not alter formatting. For instance, enlarging the page on screen by zooming does not change how the story appears in InDesign or in print.

### Viewing stories — About frames

In Layout view for a document in progress, the page may show one or more boxes. These nonprinting boxes can hold text, graphics, or no content. They are frames, which are layout areas reserved for particular elements. Every frame is defined as either a text frame or a graphics frame. Non-managed stories in an InDesign document or assignment file are dimmed so they are easy to recognize.

Text frames

Determine where stories appear and how much page space they occupy. For linked stories, the InDesign user defines the frames. If a story uses more than one frame, the frame arrangement controls how the text flows through the layout.

Graphics frames

May serve as borders or backgrounds, and may crop or mask graphics. InCopy lets you work with graphics inside frames, and when editing linked documents you can view graphics frames from InDesign layouts. Frames for inline graphics, meaning graphics embedded in text, can also be edited, but other graphics frames cannot. (See Create an inline graphic.)

Empty frames

Serve as placeholders. Empty text frames and empty graphics frames can be recognized by their appearance. An empty box is an empty text frame; a box crossed by an X is an empty graphics frame. You can type into an empty text frame only when that frame is tied to the story exported from InDesign to InCopy. InCopy also allows importing or pasting graphics into an empty graphics frame.

Empty text frame (left) and empty graphics frame (right)

Empty text frame (left) and empty graphics frame (right)

### Viewing stories — Show or hide frame edges

When frame edges are hidden, the X in an empty graphics frame is hidden as well.

Text and graphics frames with frame edges displayed (left) and hidden (right)

Text and graphics frames with frame edges displayed (left) and hidden (right)

In Layout view, choose View > Extras > Show Frame Edges or View > Extras > Hide Frame Edges.

### Viewing stories — View documents

Use the Zoom tool or View options when you need to zoom into or out from documents.

### Viewing stories — Zoom in or out

In Layout view, the page view can be enlarged or reduced. The application bar shows the current zoom percentage.

Use any of these methods:

To magnify a particular area, select the Zoom tool and click the area to enlarge. Each click advances to the next preset zoom percentage and centers the display on the clicked point. At the highest magnification, the center of the Zoom tool is blank. To zoom out, hold Alt (Windows) or Option (Mac OS) to switch to the Zoom Out tool, then click the area to reduce. Each click moves back to the previous preset percentage.

For the next preset zoom percentage, activate the window you want to inspect and run View >Zoom In. To step back to the previous preset percentage, run View > Zoom Out.

For an exact zoom amount, enter or select a magnification level in the Zoom box in the application bar.

While holding Alt (Windows) or Option (Mac OS), roll the mouse scroll wheel or sensor to zoom in or out.

### Viewing stories — Use power zoom

Power zoom gives you a fast way to move through document pages. With the grabber hand, you can zoom in or out while scrolling through the full document. This is especially helpful in long documents.

Power zoom requires Layout view.

Click the Hand tool.

You can also activate the grabber hand by holding the spacebar, or by holding Alt/Option while in text mode.

After the grabber hand is active, click and keep the mouse button pressed.

The document zooms out, exposing more of the spread. A red box shows the visible area.

Keep holding the mouse button and drag the red box to move through the document pages. Use the arrow keys or the mouse scroll wheel to resize the red box. Release the mouse button to zoom into the new document area.

The document window returns either to its earlier zoom percentage or to the dimensions represented by the red box.

### Viewing stories — Magnify by dragging

Activate the Zoom tool, then drag a marquee around the area to enlarge.

Note

When another tool is active, use Ctrl+spacebar (Windows) or Command+spacebar (Mac OS) for the Zoom In tool. From another active tool, Ctrl+Alt+spacebar (Windows) or Command+Option+spacebar (Mac OS) switches to the Zoom Out tool.

Zooming in on selection of text

Zooming in on selection of text

### Viewing stories — Display the document at 100%

Use any of these methods:

Double-click the Zoom tool.

Choose View > Actual Size.

Enter 100%, or select 100%, in the Zoom box in the application bar.

### Viewing stories — Fit the page, spread, or pasteboard within the active window

Use any of these methods:

Use View > Fit Page In Window.

Use View > Fit Spread In Window.

Use View > Entire Pasteboard.

### Viewing stories — Working with ConnectNow

Adobe ConnectNow gives you a private, secure online meeting room for real-time web collaboration. ConnectNow supports screen sharing and annotation, chat messages, and integrated audio communication. It can also broadcast live video, share files, record meeting notes, and control an attendee's computer.

The application interface provides direct access to ConnectNow.

Use File > Share My Screen.

When the Sign In to Adobe CS Live dialog box appears, provide your email address and password, then click Sign In. If you do not have an Adobe ID, use the Create Adobe ID button.

To begin screen sharing, click the Share My Computer Screen button in the center of the ConnectNow application window.

For detailed ConnectNow instructions, see Adobe ConnectNow Help.

For a ConnectNow video tutorial, see Using ConnectNow to share your screen (7:12). Dreamweaver is the application shown in that tutorial.

### More like this

- Keys for navigating through documents
- Editing overset text
- Working with tables in Galley/Story view
- Sharing content between InCopyand InDesign

## Moving through documents — Scrolling through documents

Scroll bars along the bottom and right edges of the InCopy window work in every view, as do a mouse wheel or sensor.

Keyboard navigation can also move through a story with Page Up, Page Down, and the arrow keys. In Layout view, Page Up or Page Down advances to the next page or moves back to the previous page in the layout. In Galley or Story view, those keys move the display by one screen rather than always landing on a page break. Up Arrow and Down Arrow reposition the insertion point in the copy, scrolling when needed so the insertion point remains visible.

Only in Layout view, the Hand tool is another way to pan the document view in any direction.

### Moving through documents — Move through a document with the Hand tool

Movement choices vary according to whether the story is open in Galley, Story, or Layout view. In Galley and Story view, text outside the visible area is reached with the scroll bars. Layout view additionally supports the Hand tool, page buttons, and commands.

In Layout view, choose the Hand tool  , then drag to reposition the document. Dragging to view another part of page

Dragging to view another part of page Note

For power zoom while the Hand tool is active, keep the mouse button pressed. This gives a fast method for moving across multiple document pages.

### Moving through documents — Go to another page in Layout view

Use one of these methods:

Click the status-bar buttons shown below.

Status bar in Layout view

A. First-spread button B. Previous-spread button C. Page number display box D. Next-spread button E. Last-spread button

Status bar in Layout view

- From the pop‑up menu on the status bar, choose the page number.

### Moving through documents — Jump to position markers

A marker can be placed at a chosen text location so a command or shortcut can bring you back there later. Position markers are helpful when you leave your current spot to handle another task, such as checking a fact elsewhere in the text. Each document session supports just one position marker; adding one removes the marker that was already present. The marker is also removed when the document closes.

Choose Edit > Position Marker, and use any of these actions:

To create a marker, put the insertion point in the text, then select Insert Marker.

To substitute a new marker for the current one, select Replace Marker.

To clear the marker, select Remove Marker.

To move back to the marker, select Go To Marker.

### Moving through documents — Reorder InCopy stories

After opening an assignments file or an InDesign document, you may rearrange story order in Galley or Story view. This ordering change does not move the stories in the layout.

Confirm that Galley or Story view is active. Drag the story title to its new position.

### More like this

- Use power zoom
- Keys for navigating through documents
- Keys for navigating through documents

## Copyfitting text

InCopy records multiple text statistics and shows them through the Copyfit Info toolbar. While you write, that toolbar automatically reports the number of lines, words, and characters, plus vertical depth, at the bottom of the work area for linked and stand-alone stories in both Galley and Layout views.

Note

The Copyfit Info toolbar can be detached as a floating panel. (See Use toolbars.)

For linked InCopy documents, and for stand-alone documents that use a Depth setting, the Copyfit Progress Info box shows exactly how much too long or too short the story is. When the story has not filled its assigned frames, the copyfit box becomes blue and shows a count. The blue bar's length gives an approximate percentage of frame space currently occupied by text. A shorter blue bar means more text is needed to fill the available space.

Copyfit Info toolbar

Copyfit Info toolbar

When text runs past the assigned frame area, a copyfit line marks where overset text starts, and the Copyfit Progress Info box changes to red and shows how much copy must be removed to fit the frame. (See Editing overset text.)

Note

The red bar never changes length. It is not a percentage indicator for the remaining available space.

The Copyfit Info toolbar can also show the number of lines, words, and characters, along with vertical depth, for the current selection, from the story start to the current insertion point, or from the current insertion point through the story end. (See Customize Copyfit Info settings.)

With hidden characters displayed (choose Type > Show Hidden Characters), InCopy places a number sign (#) after the final character to mark the end of a story's text flow. (See View hidden characters.)

### Customize Copyfit Info settings

- For additional Copyfit Info controls, click the triangle at the right side of the Copyfit Info toolbar, choose Customize, select the toolbar items to show, and click OK.
- For statistics that include footnotes, choose Include Footnotes In Text Statistics from the Copyfit Info toolbar menu.
- For character-count-based word counting instead of actual-word counting, open Define Word Count from the Copyfit Info toolbar menu; select Count Every, enter the character number, and click OK.
- To pause text-statistics updates while typing, turn off Update Info Automatically from the Copyfit Info toolbar menu.
- For extra statistics such as kanji, kana, and romanji characters, use Show Details on the Copyfit Info toolbar menu.

### Editing overset text

A story linked to an InDesign layout can occupy only the frames set by the designer. A stand-alone InCopy document created with a Depth setting is limited to that depth. Text beyond the permitted length becomes overset. If a story is underset, it still has space available for more text. During writing and editing, you can see whether the story fits the InDesign layout exactly. Overset text remains editable.

In Galley view or Story view, a copyfit break line separates overset text from the rest of the story. The writing and editing steps are identical above and below that break line.

Layout view does not show overset text, but the Copyfit Progress Info box reports how many overset lines the document contains.

When you write or edit a threaded story in Layout view, reaching the end of a frame requires no special action. As typing continues, the insertion point follows the story thread into the next frame automatically.

### Show or hide the depth ruler

Use View > Show Depth Ruler or Hide Depth Ruler while the document is in Galley or Story view.

The depth ruler uses the measurement units set by the Vertical setting in Units & Increments Preferences.
