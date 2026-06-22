# Text Variables

> Adobe InCopy reference. Original prose; identifiers preserved verbatim.

A text variable is inserted into a document and changes according to its context. For instance, Last Page Number shows the page number for the document's final page; when pages are added or removed, the variable updates.

InCopy provides several preset text variables for document insertion. Their formatting can be edited, and custom variables can also be created. Variables such as Running Header and Chapter Number are useful on parent pages for consistent formatting and numbering. Creation Date and File Name are useful in the slug area for printing.

Note

Too much variable text can produce overset or compressed text. Variable text does not wrap across lines.

## Text variables — Create or edit text variables

The variable type you choose determines which creation options are available. With the Chapter Number type, for example, text can be placed before and after the number, and a numbering style can be set. Multiple variables can be based on the same type; one may display "Chapter 1" while another displays "Ch. 1."

With the Running Header type, you can choose the style that supplies the header text and set options that remove end punctuation or change case.

To make text variables available in every new document, close all documents before creating them. If any document remains open, newly created text variables are limited to the current file.

Next, choose Type > Text Variables > Define.

Use New, or choose an existing variable and click Edit.

Enter a variable name; examples include "Full Chapter" and "Running Title."

From the Type menu, choose a variable type, configure the options for that type, and click OK.

Available options vary by selected variable type.

Text Before / Text After

For any variable type except Custom Text, text can be added before or after the variable. For example, place "of" before the Last Page Number variable and "total pages" after it to create an "of 12 total pages" result. Text can also be pasted into the boxes, but tabs, auto page numbers, and similar special characters are removed. To add special characters, click the triangle on the right side of the text box.

Style

For numbered variable types, the numbering style can be specified. When [Current Numbering Style] is selected, the variable follows the numbering style chosen in the document's Numbering & Section Options dialog box.

## Text variables — Variable types

Chapter Number

Using the Chapter Number type creates a variable that inserts the chapter number. Text may be placed before or after that number, and a numbering style can be chosen.

When the document's chapter number continues from the previous document in the book, updating the book's numbering may be required before the correct chapter number appears.

Creation Date, Modification Date, and Output Date

Creation Date adds the date or time when the document was first saved; Modification Date adds the date or time of the most recent disk save; Output Date adds the date or time when printing begins, PDF export starts, or packaging runs. Text can be added before and after the date, and the date format can be changed for all date variables.

Date Format

Date formats can be typed directly in the Date Format box, or selected from the format options opened by clicking the triangle to the right of the box. For example, "MM/dd/yy" displays as 12/22/07. Changing the format to "MMM. d, yyyy" displays Dec. 22, 2007.

Date variables follow the language applied to the text. For example, Spanish text might show "01 diciembre 2007," while German text could show "01 Dezember 2007."

The date-format tokens are:

Abbreviation

Description

Example

M

Month number, no leading zero

8

MM

Month number, leading zero

08

MMM

Abbreviated month name

Aug

MMMM

Full month name

August

d

Day number, no leading zero

5

dd

Day number, leading zero

05

E

Weekday name, abbreviated

Fri

EEEE

Full weekday name

Friday

yy or YY

Year number, last two digits

07

y (Y) or yyyy (YYYY)

Full year number

2007

G or GGGG

Era, abbreviated or expanded

AD or Anno Domini

h

Hour, no leading zero

4

hh

Hour, leading zero

04

H

Hour, no leading zero, 24-hour format

16

HH

Hour, leading zero, 24-hour format

16

m

Minute, no leading zero

7

mm

Minute leading zero

07

s

Second, no leading zero

7

ss

Second, leading zero

07

a

AM or PM, two characters

PM

z or zzzz

Time zone, abbreviated or expanded

PST or Pacific Standard Time

| --- | --- | --- |

File Name

This variable places the current file name in the document. It is often used in the slug area for printing, or in headers and footers. Along with Text Before and Text After, these options are available.

Include Entire Folder Path

Select this option to include the full folder path with the file name. Windows or Mac OS standard path conventions are used.

Include File Extension

Select this option to include the file name extension.

File Name updates whenever the file is saved with a different name or in a different location. The path or extension does not display in the document until the file has been saved.

Image Name

Image Name helps create automatic captions from metadata. It includes a Metadata Caption variable type. If a text frame uses this variable and sits next to, or is grouped with, an image, the variable shows that image's metadata. Edit Image Name to choose which metadata field is used.

See Define caption variables.

Last Page Number

Last Page Number is useful for putting a document's total page count into headers and footers in a format such as "Page 3 of 12." Here, Last Page Number generates the 12, and it updates as pages are added or removed. Text can be inserted before or after the last page number, and a numbering style can be specified. From the Scope menu, choose whether the section or the full document supplies the last page number.

Do not use Last Page Number as a count of document pages.

Running Header (Paragraph or Character Style)

Running Header variables insert either the first or the last page occurrence of text that uses the specified style. When that style does not appear on the page, InCopy uses matching text from an earlier page.

See Create variables for running headers and footers.

Custom Text

Custom Text is often used for placeholder text or for a string that may need a quick change. For example, a project using a company code name can store that code name in a custom text variable. When the real company name is available, changing the variable updates every occurrence.

For special characters in a text variable, use the triangle beside the text box.

## Text variables — Insert text variables

Put the insertion point at the location where the variable should be inserted.

Use Type > Text Variables > Insert Variable, then pick the variable that should be inserted.

On the page, the variable displays the way typed document text would. For instance, Creation Date could display as December 22, 2007. When Type > Show Hidden Characters is enabled, the variable instance is shown inside a box drawn in the current layer color.

Note

Text variables stay on a single line.

## Text variables — Delete, convert, and import text variables

Open the Text Variables dialog box when you need to remove, convert, or bring in text variables.

## Text variables — Delete text variables

To remove one placed text-variable instance from a document, select that variable and press Backspace or Delete. You can remove the variable definition as well; when you do, InCopy lets you choose what should happen to the instances already placed in the document.

Open Type > Text Variables > Define.

Highlight the variable, then click Delete.

Choose the replacement behavior: substitute another variable, turn the variable instances into regular text, or remove the variable instances entirely.

## Text variables — Convert text variables to text

For one instance, highlight the text variable in the document window, then use Type > Text Variables > Convert Variable To Text.

For every occurrence of a document text variable, open Type > Text Variables > Define, highlight the variable, and click Convert To Text.

## Text variables — Import text variables from another document

Open Type > Text Variables > Define.

Click Load, then double-click the document containing the variables to import.

In the Load Text Variables dialog box, confirm that each variable you want to bring in has a check mark beside it. If a variable already in the document shares a name with an imported variable, pick one of the choices below Conflict With Existing Text Variable, then click OK:

Use Incoming Definition

Replaces the current variable definition with the loaded one and updates all text in the active document that used the previous definition. The Load Text Variables dialog box shows both the incoming and current definitions at the bottom so you can compare them.

Auto-Rename

Gives the imported variable a new name.

Choose OK, and then click Done.

Note

Book synchronization can also copy variables into other documents.

## Text variables — Create variables for running headers and footers

Running Header variables normally pull in the first styled text occurrence found on the page. They are useful when a header or footer needs to show the active title or heading.

If the source text has not been styled yet, make and apply the paragraph style or character style that marks the header text, for example a title or heading style. Open Type > Text Variables > Define. Click New, then name the variable. In the Type menu, choose one of these values: Running Header (Paragraph Style), Running Header (Character Style). Then set these options:

Style

Select the style whose text should appear in the header or footer.

Use

Choose whether the variable should use the first or last styled occurrence found on the page. First On Page means the first paragraph or character that starts on that page. When the page has no matching occurrence, the most recent previous occurrence of that applied style is used instead. If the document has no earlier occurrence, the variable has no content.

Delete End Punctuation

When this option is enabled, the variable omits final punctuation from the displayed text, including periods, colons, exclamation points, and question marks.

Change Case

Enable this option to alter the capitalization of the header or footer text. For example, a footer can use sentence case while the page heading remains in title case.

Click OK, then click Done in the Text Variables dialog box.

Afterward, insert the variable into a header or footer built on the parent page.

When an InDesign document already has a header or footer text frame on the parent page, that frame can contain the variable. (See Edit text on a parent page.)

## Text variables — Define caption variables

When a caption-variable text frame is moved beside an image, the caption variable refreshes automatically. Choosing Type > Text Variables > Insert Variable > Image Name uses Name metadata as the default variable type. You may revise the Image Name variable or make additional variables that reference image metadata.

Use Type > Text Variables > Define.

Click New for a new variable, or click Edit for one already present.

For Type, select Metadata Caption.

Choose an option from the Metadata menu.

Enter any text that should come before or after the metadata, and then choose OK.
