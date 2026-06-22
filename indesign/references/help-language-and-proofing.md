# Language Settings, Arabic And Hebrew

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Language and proofing; Adobe World-Ready Composer overview; Change default shaping engine; Set language for text frames and styles; Assign a language and change default language; Set up World-Ready composers for Arabic and Hebrew; Control text direction for Arabic and Hebrew; Justify Arabic text with automatic Kashida insertion; Apply ligatures to Arabic and Hebrew text; Adjust diacritical marks and coloring in Arabic text; Set digit types for Arabic and Hebrew text; Copy and paste Arabic and Hebrew text from Microsoft Word.

## Language and proofing

### Language settings

Adobe World-Ready Composer overview

Change default shaping engine

Set language for text frames and styles

Assign a language and change default language

### Arabic and Hebrew

Set up World-Ready composers for Arabic and Hebrew

Control text direction for Arabic and Hebrew

Justify Arabic text with automatic Kashida insertion

Apply ligatures to Arabic and Hebrew text

Adjust diacritical marks and coloring in Arabic text

Set digit types for Arabic and Hebrew text

Copy and paste Arabic and Hebrew text from Microsoft Word

### Chinese, Japanese, and Korean

About Mojikumi and Yakumono in Japanese layout

Spacing classes and Yakumono types

Apply Yakumono character types in layout

Customize Mojikumi spacing sets

Set spacing priorities in Mojikumi character classes

Adjust spacing around Japanese punctuation

Use Kinsoku settings

Format CJK text

Add and update Warichu options

Apply Shatai to text

Rotate characters in East Asian text

Adjust aki before and after characters

Apply Tate‑chu‑yoko in vertical text

Add and format Ruby text annotations

Apply Kenten to text

Set Character Alignment for East Asian text

Set Gyoudori for Japanese text

### Glyphs, characters, and expressions

Insert glyphs and special characters

Open and view glyphs

Replace characters with glyphs

Find and replace glyphs

Construct a GREP expression

Find and replace items using queries

Hidden character glossary

View or show hidden characters

Create and insert math expressions

Edit math expressions

Stylize math expressions

Find and replace with text patterns (GREP)

Save and manage find and replace queries

### Manage language dictionaries

Add or remove Hunspell dictionary

Set default language dictionary

Manage user dictionaries

Add or remove words from dictionaries

Import or export word lists

Change dictionary preferences

Manage the Duden dictionary

Duden dictionary hyphenation styles

Select Duden spell-check styles

### Spell check

Set up autocorrect and dynamic spelling

Check spelling

Set spelling preferences

## Adobe World-Ready Composer overview

See how Adobe InDesign uses the World-Ready Composer to compose multilingual text across multiple scripts.

In InDesign, World-Ready Composer is the composition engine used for complex scripts and multilingual layout. It supports Middle Eastern, South Asian, and Southeast Asian scripts, where direction, shaping, and typographic behavior differ from ordinary Latin-script text.

### What the World-Ready Composer provides

World-Ready Composer determines the shaping, spacing, and line or paragraph arrangement of text. Compared with the default composer, it adds bidirectional text support so left-to-right and right-to-left languages can coexist correctly in one layout.

This composer uses rules tied to each language for:

- Character shaping plus ligature handling
- Word spacing together with justification
- Line breaks and hyphenation behavior
- Typography rules specific to a script

For scripts such as Arabic, it keeps characters connected correctly and lets text flow naturally across different writing systems.

### Supported languages and scripts

World-Ready Composer covers three primary language groups:

- Middle Eastern languages: Arabic and Hebrew include full right-to-left handling, contextual shaping, and specialized capabilities; Arabic justification can use Kashida insertion.
- Bengali, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, and Telugu are covered as Indic languages, with support for forming complex conjuncts and placing vowel marks.
- South East Asian languages: Thai, Sinhala, Burmese, Lao, and Khmer provide correct handling for character clusters and tone mark placement.

### Key capabilities of the World-Ready Composer

- Bidirectional text flow: Allows left-to-right and right-to-left text to work together inside one paragraph.
- Contextual character shaping: Chooses the correct letter form automatically according to position in scripts such as Arabic.
- Complex script support: Handles conjuncts, vowel reordering, and diacritics for Indic and related scripts.
- Language-specific typography: Uses the language's rules for ligatures, mark positioning, and justification.

## Change default shaping engine

Switch between Harfbuzz and legacy text engines when composing World-Ready text in Adobe InDesign.

For World-Ready Composer, Harfbuzz is the default shaping engine, and it governs how InDesign draws complex scripts including Arabic, Hebrew, and South Asian languages. You can move to the legacy shaping engine when older workflows require compatibility or when rendering problems need troubleshooting.

### Switch to legacy shaping engine using Preferences

Open Edit > Preferences > Advanced Type (Windows) or InDesign > Preferences > Advanced Type (macOS).

Turn on Enable Legacy Text Shaping for Adobe World-Ready Composer.

Select OK.

### Switch shaping engines using a script

When several InDesign installations need the same preference, or the setting has to be automated, control the shaping engine with a script.

### Create and save the script

Start with a plain text editor; TextEdit (macOS) or Notepad (Windows) are suitable.

Set the preference with this assignment:

app.textPreferences.shapeIndicAndLatinWithHarbuzz = false;

try

{

alert( " Is Harfbuzz Enabled : "+app.textPreferences.shapeIndicAndLatinWithHarbuzz );

}

catch(e)

{

alert( "ERROR: " + e.number +"\r"+ e.message );

};

Save the file with JS X extension.

Move the JSX file you saved into the Scripts Panel folder: <InDesign installation>/Scripts/Scripts Panel.

Tip

To make Harfbuzz the default again, change false to true in the script code and save the result as a different file.

### Run the script in InDesign

Start InDesign.

Open Window > Utilities > Scripts.

Find the saved script file and double-click it to run the script.

Use the alert dialog box to verify whether Harfbuzz is active or inactive.

## Set language for text frames and styles

Apply language settings in Adobe InDesign so text uses the right spell-checking and hyphenation behavior.

InDesign lets language assignments target selected text, text frames, or character and paragraph styles. Adobe World-Ready Paragraph composer works with multiple languages, including Indic, Middle Eastern, and Southeast Asian scripts. The language value selects the dictionary and hyphenation rules used by InDesign. When styles define language settings, the formatting applies wherever the style is used, though specific text selections can override it.

### Set language for selected text

Choose the Type tool, then highlight the needed text.

Open the Properties panel (Window > Properties).

In the Character section, find the Language drop-down menu.

Choose the correct language from the list.

### Set language in paragraph or character styles

When applied to selected text, character styles that include language settings take precedence over the language set by paragraph styles.

Open either Window > Styles > Paragraph Styles or Window > Styles > Character Styles.

Use the icon for the panel menu.

Either double-click an existing style, or create a new style.

From the category list, choose Advanced Character Formats.

Find the Language drop-down menu and choose the correct language.

Select OK.

## Assign a language and change default language

Use language dictionaries in Adobe InDesign to govern spell-checking and hyphenation.

Choosing the appropriate language lets InDesign apply matching spelling, hyphenation, and typography behavior. You can attach a language to selected text, to styles, or to text frames so the setting is applied consistently. The language choice points InDesign to the dictionary and hyphenation rules it should use. A style can carry the setting through formatted content, while a local text selection can override it.

### Assign a language to text inside a frame

Activate the Type tool, click inside the frame, then press Ctrl + A (Windows) or Cmd + A (macOS).

Open the Character panel with Window > Type & Tables > Character.

In the Language drop-down menu, choose the dictionary that matches the text.

### Change the default language for new documents

In InDesign, close every open document.

Open Dictionary preferences: Edit > Preferences > Dictionary (Windows) or InDesign > Preferences > Dictionary (macOS).

In the Language drop-down menu, choose the default dictionary you want.

Select OK.

### Change the default language for text frames

With the document active, choose Edit > Deselect All so the layout has no current selection.

In Character (Window > Type & Tables > Character), choose a language from the Language drop-down menu.

Note

The selected language becomes the default for text frames you create later in this document. Text frames that already exist are not changed.

## Set up World-Ready composers for Arabic and Hebrew

Use Adobe World-Ready composers in InDesign when building Middle Eastern-language content.

World-Ready composers support composing and editing text for Middle Eastern scripts and other complex writing systems. For complete right-to-left controls and the related typographic features, install either the Hebrew or Arabic version of InDesign with the Creative Cloud desktop app. After that installation, InDesign can use World-Ready composers to compose multilingual and bidirectional text correctly.

Open the Paragraph panel: Window > Type & Tables > Paragraph.

Use the Paragraph panel menu icon.

Choose one composer option:

Adobe World-Ready Paragraph Composer

Adobe World-Ready Single-line Composer

Tip

Files can also be saved with Arabic and Hebrew names.

## Control text direction for Arabic and Hebrew

Use paragraph, character, and story direction settings in Adobe InDesign to handle bidirectional text flow.

InDesign provides direction controls for Arabic and Hebrew text, allowing right-to-left (RTL) material to coexist with left-to-right (LTR) content such as English text or numbers. You can apply direction at the paragraph, character, or story level. These controls are available in the Middle Eastern or North African version of InDesign.

### Set paragraph text direction

Select the text frame that contains the paragraph.

Open Window > Type & Tables > Paragraph.

For Arabic or Hebrew, select the Right-to-Left Paragraph Direction icon.

For Latin text, select the Left-to-Right Paragraph Direction icon.

### Set character text direction

With the Type tool, highlight the characters that require another direction.

Open the Character panel: Window > Type & Tables > Character.

Use the panel menu icon, then choose Character Direction.

From the submenu, choose Default, Left-to-Right, or Right-to-Left.

### Set story direction for multi-column layouts

Select a text frame from the story.

Open Window > Type & Tables > Story.

In the Story panel, use Right-to-Left Story Direction for Arabic or Hebrew text.

Use Left-to-Right Story Direction for Latin text.

Note

Direction is stored independently for each story. In documents that combine languages, separate text threads may need different story-direction settings.

## Justify Arabic text with automatic Kashida insertion

Use automatic Kashida options in Adobe InDesign to lengthen Arabic characters during proper text justification.

Arabic justification relies on Kashidas, which are horizontal character extensions, instead of changing spaces between words. InDesign can add Kashidas automatically so the script keeps the intended appearance.

Kashidas work with justified Arabic text only; left, right, and center-aligned text do not use them. You can set the length and apply the setting to either paragraphs or selected characters.

### Apply Kashidas to paragraphs

Select the Arabic paragraph.

Open Window > Type & Tables > Paragraph.

Open the panel menu icon and confirm the selected composer is Adobe World-Ready Paragraph Composer.

Use the Justify all lines icon so the paragraph uses full justification.

Next to the Insert Kashida icon, choose a Kashida length from the drop-down menu: None, Short, Medium, Long, or Stylistic.

### Apply Kashidas to character ranges

With the Type tool, highlight the Arabic characters that should be extended.

Open Window > Type & Tables > Character.

Select the panel menu icon, then choose Kashidas.

## Apply ligatures to Arabic and Hebrew text

Use OpenType ligature features in Adobe InDesign to connect Middle Eastern character pairs.

Ligatures combine particular letter pairs, improving the readability and visual finish of Arabic and Hebrew text. When the feature is on, InDesign substitutes ligature glyphs for standard characters automatically when the active OpenType font contains them.

You need an OpenType font that includes ligatures and an InDesign release with right-to-left language support.

### Activate standard ligatures

Select the Arabic or Hebrew text.

Open Window > Type & Tables > Character.

Select the panel menu icon, then choose Ligatures.

### Apply decorative discretionary ligatures

Select the text that should use more decorative ligature shapes.

Open the Character panel: Window > Type & Tables > Character.

Use the panel menu icon.

Choose OpenType > [Discretionary Ligatures].

Note

Some OpenType fonts do not provide discretionary ligatures. If the command is disabled or the text does not visibly change, the active font does not include those optional glyphs.

## Adjust diacritical marks and coloring in Arabic text

Use Character panel controls in Adobe InDesign to reposition marks, and use Find/Change when you need to alter their colors.

Arabic diacritical marks show pronunciation. You can reposition them for clearer reading or apply color styling for emphasis. The adjustments affect text that already contains diacritics. OpenType Arabic fonts generally give the best result. Position changes are available for selected text, and color changes are made through Find/Change.

### Adjust diacritical mark position

With the Type tool, select Arabic text that contains diacritical marks.

Open the Character panel: Window > Type & Tables > Character.

Use the panel menu icon, then choose Diacritic Positioning.

From the drop-down, choose the needed diacritic positioning setting: OpenType (adjustment from base character), OpenType (positive adjustment is up), or choose None, Loose, Normal, Tight.

In the Horizontal field, type a positive value to move marks right, or type a negative value to move them left.

In the Vertical field, type a positive value to move marks up, or type a negative value to move them down.

### Change diacritical mark colors

Select Edit > Find/Change.

From the Query drop-down menu, choose Change Arabic Diacritic Color.

In the Change Format section, select Specify attributes to change.

In Character Color options, configure the colors you want and select OK.

Select Change All to update every diacritical mark color in the document, or select Change to update one instance at a time.

## Set digit types for Arabic and Hebrew text

Choose Arabic, Hindi, or Farsi numeral styles in Adobe InDesign so numbers match the document language.

For Arabic and Hebrew text, InDesign supports three numeral systems: Arabic (Western), Hindi, and Farsi digits. The chosen digit type determines how numbers are displayed, and you can change it for selected characters.

### Change digit type for selected text

Use the Type tool to select the digits you need to change.

Open Window > Type & Tables > Character.

Select the panel menu icon, then choose a type from the Digits drop-down: Arabic, Hindi, or Farsi.

### Set automatic digit preference for Arabic scripts

Open Edit > Preferences > Advanced Type (Windows) or InDesign > Preferences > Advanced Type (macOS).

Enable Use Native Digits When Typing in Arabic Scripts.

Confirm with OK.

Tip

For documents that combine multiple languages, set digit types on individual characters so each text range shows the intended numeral style.

## Copy and paste Arabic and Hebrew text from Microsoft Word

Use the clipboard to bring right-to-left text into Adobe InDesign while keeping its direction and alignment intact.

When Arabic or Hebrew content is pasted from Microsoft Word, InDesign retains the direction, alignment, and original flow. This behavior applies in documents that support right-to-left languages. Before pasting, verify that the document is using the correct composer and language settings.

In the Microsoft Word document that contains Arabic or Hebrew text, highlight the text to copy.

Press Ctrl + C (Windows) or Cmd + C (macOS).

In InDesign, activate the Type tool.

Click inside an existing text frame; to make a new frame, drag with the tool.

Press Ctrl + V (Windows) or Cmd + V (macOS) to insert the text.

Tip

When a document includes both left-to-right and right-to-left material, paragraph direction can be adjusted manually after pasting from the Paragraph panel (Window > Type & Tables > Paragraph).

## See also

- [Character Styles](uxp-character-styles.md)
- [Paragraph Styles](uxp-paragraph-styles.md)
