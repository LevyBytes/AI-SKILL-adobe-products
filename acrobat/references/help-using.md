# Translate Pdf, Accessibility Features Pdfs, Get Smart Assistance Pdf Tools

> Adobe Acrobat reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Translate text using Adobe Express in Acrobat; Accessibility features in PDFs; Edit PDFs with chat.

## Translate text using Adobe Express in Acrobat

Search Last updated on Oct 30, 2025

Find out how to render documents across several languages straight from Adobe Acrobat by way of Adobe Express.

Translating whole PDFs is something you can do right inside Acrobat through Adobe Express, then pass them to colleagues, customers, or students anywhere in whatever language they favor. Because you never have to build and upkeep separate language editions, the time and effort you save adds up.

Open your PDF in Acrobat.

Select Convert from the global bar.

2. Use AI-powered translation in Acrobat to efficiently translate your documents and share them with global audiences.
   Select Translate this PDF. Your document opens in Adobe Express.

Within Adobe Express's Translate panel, pick which target languages you want from the Translate to dropdown menu. Whatever language you started in gets detected on its own.

4. Use Adobe Express to translate your PDF into multiple languages and personalize its tone for your audience.
   Decide whether the whole document, a single page, or just selected text gets translated.

There's also a Tone of voice setting — formal or informal — so the result fits whoever you're addressing.

Select Translate. Whatever comes back gets stored under Your stuff or Recent inside Adobe Express.

Before you export, you can take a look at the translated wording. Templates and designs from Adobe Express are fair game for translation too.

Download the translated document as a PDF or share it directly.

For PDFs that are scanned, secured, oversized, or intricate — or that lean on fonts or languages it can't handle — translation might be passed over.

Tip

Look over which languages and technical prerequisites apply when you use Translate in Adobe Express.

### Get help faster and easier

Sign in

New user?

Create an account › Manage account

Quick links

View all your plans Manage your plans View quick links Hide quick links

Legal Notices | Online Privacy Policy

## Accessibility features in PDFs

Search Last updated on Feb 26, 2026 | Also applies to Adobe Acrobat 2017, Adobe Acrobat 2020

Everyone gains when a PDF is accessible. Take the structure that lets screen readers voice a PDF — that same structure helps small mobile screens lay the document out more cleanly. The fixed tab order baked into an accessible PDF form is another example: it smooths form-filling for every user, not only those with mobility impairments.

Within Acrobat and Acrobat Reader, accessibility splits into two broad buckets: tools that make reading PDF documents easier, and tools for producing accessible PDFs. Producing accessible PDF documents calls for Acrobat rather than Reader.

### PDF accessibility features

- Output as accessible text aimed at braille printers along with other assistive hardware.
- Navigation perks such as scrolling that runs automatically and reopening a PDF at whatever page you last read.
- Preference setup made simple through an Accessibility Setup Assistant.
- Stand-ins for mouse actions by way of the keyboard.
- A Reflow capability that shows PDF text in large type and recasts multicolumn layouts down to one column that reads easily.
- Text-to-speech conversion via Read Out Loud.
- Compatibility with screen readers as well as screen magnifiers.

### Accessible PDF creation features

- Tagged PDFs produced straight out of authoring applications.
- Turning PDFs that lack tags into tagged ones.
- Letting a screen reader in while security settings still block copying, printing, editing, or pulling out text.
- The option to lay text over scanned pages so they're more accessible.
- (Acrobat Pro) Tools for editing reading order and document structure.
- (Acrobat Pro) Tools for creating accessible PDF forms.

Some ability to make existing PDFs accessible ships with Acrobat Standard. With Acrobat Pro you can take on jobs like reworking reading order or editing the document structure tags — work that's required before certain PDF documents and forms can be made accessible.

### Additional resources

These resources cover accessibility features in more depth:

- Acrobat accessibility, overview, new features, and FAQ: www.adobe.com/accessibility/products/acrobat/
- Creating accessible PDF documents: www.adobe.com/accessibility
- General accessibility tips: http://acrobatusers.com/forum/accessibility/

### About accessible PDFs

Here's what sets an accessible PDF apart.

- Searchable text: When a document is built from scanned pictures of text, it's inaccessible by nature, because what it holds is imagery rather than searchable words. The words can't be read or pulled out by assistive software, users can't select or edit them, and the PDF can't be adjusted for accessibility. Run the scanned text imagery through optical character recognition (OCR) to turn it into searchable text before the document's other accessibility features will work.
- Alternate text descriptions (Acrobat Pro): Document elements like images and interactive form fields stay invisible to screen readers without alternate text attached to them. While screen readers do handle web links, supplying richer alternate-text descriptions tends to be more useful. Both alternate text and tool tips can support a wide range of users, learning disabilities included.
- Fonts that allow characters to be extracted to text (Acrobat Pro): For a PDF to be accessible, its fonts have to carry enough detail that Acrobat can pull every character out to text for uses beyond on-screen display. Open such a PDF through Read Out Loud or with a screen reader, and Acrobat pulls characters out as Unicode text. The same Unicode extraction happens when you save as text for a braille printer. Should Acrobat be unable to work out how the font maps to Unicode, that extraction breaks down.
- Reading order and document structure tags (Acrobat Pro): A screen reader or other text-to-speech tool needs a structured document if it's going to voice the text and lay it out in a way that makes sense to the user. Inside a PDF, document structure tags set the reading order and flag headings, paragraphs, sections, tables, and the rest of the page elements.
- Interactive form fields (Acrobat Pro): Certain PDFs hold forms meant to be completed on a computer. Accessibility requires those form fields to be interactive so the user can key values into them.
- Navigational aids (Acrobat Pro): Links, bookmarks, headings, a table of contents, and a preset tab order for form fields all count as navigational aids in a PDF. They let users get a handle on a document without slogging through every word. Bookmarks pull especially heavy weight here and can be spun up from a document's headings.
- Document language (Acrobat Pro): When a PDF declares its document language, certain screen readers can flip over to the matching language.

Security that doesn’t interfere with assistive software (Acrobat Pro): Some PDF authors lock users out of printing, copying, extracting, commenting, or editing text. A screen reader still has to be able to reach the text of an accessible PDF. Acrobat lets you confirm that the security settings won't block a screen reader from turning onscreen text into speech.

For more information about PDF accessibility, see www.webaim.org/techniques/acrobat/.

### About tags, accessibility, reading order, and reflow

In a lot of respects PDF tags resemble XML tags. What they spell out is the document's structure — which text serves as a heading, which content forms a section, which text is a bookmark, and so forth. The document's organizational layout is mirrored by a logical structure tree built from these tags. As a result, tags lay down the reading order and make navigation easier — a real benefit in long, complicated documents — all without altering how the PDF looks.

By working through that logical structure tree, assistive software figures out how to present and make sense of the document's content. For working out the right reading order of text, most assistive software leans on document structure tags. Those tags also let assistive software relay what images and other content mean by way of an alternate format, sound for instance. A document with no tags carries no structure information, so Acrobat is left to guess at one off the Reading Order preference setting — which frequently leaves page items voiced out of sequence or skipped entirely.

Those very same document structure tags are what reflow leans on when a document is being viewed on a mobile device's small screen.

Note

Acrobat usually tags PDFs during creation. To check if a PDF contains tags, go to > Document Properties. Under Description tab, check the 'Tagged PDF" value in the Advanced pane.

Within Acrobat Pro, you'll find the logical structure tree on the Tags panel. There it lays out the document's content as page elements nested across various levels.

### More like this

- Reading PDFs with reflow and accessibility features
- Creating accessible PDFs
- Touch Up Reading Order tool for PDFs (Acrobat Pro)
- Editing document structure with the Content and Tags panels(Acrobat Pro)
- Keys for accessibility (Acrobat Pro)

## Edit PDFs with chat

Search Last updated on Feb 20, 2026

### Learn how to perform tasks in PDF with chat in Adobe Acrobat.

Acrobat lets you hand off your PDF tasks by chatting with the AI Assistant. Fire off a command, pose a question, or ask in plain language how a given Acrobat tool works, and what you get back is:

- Direct actions to automatically complete tasks like export, delete, extract, convert, OCR, compress, protect, sign, share, print, rotate pages, find, and replace.
- Actionable steps related to your query.
- Quick-access links that take you to the relevant tools.

On top of that, you're handed step-by-step troubleshooting guidance, so your workflows wrap up without ever stepping outside Acrobat.

### Ask Acrobat to perform PDF tasks

Select Ask AI Assistant from the top bar.

Inside the Ask AI Assistant panel, key the command tied to the Acrobat tool into the chat field.

Save the updated file by following whatever instruction comes back in the response.

A. Command related to Acrobat tool B. Instruction regarding the task in progress by Acrobat C. Save as dialog box to the updated file.

Dig into the suggested questions and matching tutorials in the response whenever you want extra help.

### Ask questions related to Acrobat tools

Select Ask AI Assistant from the top bar.

The Help panel is another route to assistance with your PDF tasks.

Inside the Ask AI Assistant panel, key your question into the chat field.

Work through the step-by-step instructions and hit the quick-access button to launch the matching tool and finish the task.

A. Query related to the Acrobat tool B. Actionable steps with quick-access link C. Quick-access button D. Suggested questions

Dig into the suggested questions and matching tutorials in the response whenever you want extra help.

Note

This capability is being rolled out in phases. Not everyone may have it yet.
