# Reading accessibility preferences

Accessibility preferences in Reading panel

Reading Order

Sets the sequence in which documents are read. These same reading-order choices show up in the Accessibility Setup Assistant as well.

Infer Reading Order From Document (Recommended)

Works out the reading order of untagged documents through a sophisticated structure-inference layout analysis.

Left-To-Right, Top-To-Bottom Reading Order

Hands over the text by its position on the page — left to right, then top to bottom. It runs faster than Infer Reading Order From Document. Only text is examined here; form fields get skipped and tables go unrecognized.

Use Reading Order In Raw Print Stream

Hands over text in whatever order the print stream recorded it. It runs faster than Infer Reading Order From Document. Only text is examined here; form fields get skipped and tables go unrecognized.

Override The Reading Order In Tagged Documents

Applies the reading order from the Reading preferences rather than whatever the document's tag structure calls for. Reserve this for poorly tagged PDFs that are giving you trouble. The matching control in the Accessibility Setup Assistant is the Override The Reading Order In Tagged Documents option.

Page Vs Document

How much of a document reaches a screen reader in one pass is what this preference controls. When a PDF carries no tags, Acrobat may study it and try to deduce both its structure and its reading order. On a lengthy document that analysis can drag on. A useful tactic is to have Acrobat hand over only the page currently on screen, so it works through just a small slice at a time. The right choice shifts with the document's size and complexity and with what the screen reader itself can do. As Acrobat passes content to a screen reader, screen magnifier, or other assistive tool, it writes that content into a memory buffer the assistive software can read directly. How much goes into that buffer influences how quickly Acrobat handles operations like opening the file, moving to the following page, switching views, and running commands.

Only Read The Currently Visible Pages

A screen magnifier usually pairs best with this option. By sparing the software from chewing through the off-screen portions of a document, it speeds things up. Once Acrobat forwards only a PDF's visible pages to the memory buffer, the assistive technology can reach those pages and no others. Moving to a different page isn't possible until that page comes into view and Acrobat has pushed its information to the buffer. So with this option on, you have to rely on Acrobat's own navigation controls rather than the assistive technology's to travel between pages. Acrobat forwards information for every visible page, which means the assistive technology also picks up pages that are only partly on screen — the foot of one page or the head of the next — alongside the fully visible ones. Should you run a page display mode other than Single Page, such as Continuous, then advance to the next page, the technology can lose track of which slice of an earlier page it already spoke aloud. So it's worth setting the Default Page Layout option to Single Page whenever you let Acrobat forward only the visible pages. Preferences for viewing PDFs explains how to make Single Page the default page layout.

This option lines up with the Only Read The Currently Visible Pages option in the Accessibility Setup Assistant.

Read The Entire Document

Reach for this when your screen reader carries its own navigation and search tools and you know them better than Acrobat's. Inside the Accessibility Setup Assistant, its equivalent is the Read The Entire Document At Once option.

For Large Documents, Only Read The Currently Visible Pages

On by default, this one generally suits screen-reader users tackling long or intricate PDFs. It lets Acrobat serve up a short document whole while falling back on page-by-page delivery once the document grows large. The For Large Documents, Only Read The Currently Visible Pages option in the Accessibility Setup Assistant is its match.

Confirm Before Tagging Documents

Switch this on and you get to approve the chosen options before Acrobat readies an untagged document for reading. Tagging eats time, all the more so on bigger documents. Within the Accessibility Setup Assistant, this maps to the Confirm Before Tagging Documents option.

Read Out Loud Options

Adjust preferences here to govern the volume, speed, and pitch of the Read Out Loud voice. The default voice is one option, or you can switch to any voice your operating system makes available. The up and down arrows let you step through blocks of text too. There are no equivalents for these in the Accessibility Setup Assistant.

Related: [Accessibility preferences](accessibility-preferences.md).
