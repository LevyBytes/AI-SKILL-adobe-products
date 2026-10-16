# Editing text — Planning conditional documents

When preparing a conditional-text project, review the material itself and consider how multiple contributors may hand it off. Consistent treatment of conditional text makes the document easier to use and maintain. Follow these guidelines.

Number of versions

Decide how many finished versions the project needs. For example, a manual for a program that runs on both Windows and Mac OS might require at least two outputs: a Windows version and a Mac OS version. If editorial comments must be present in some review drafts and absent in others, the set grows to Mac OS with comments plus Mac OS without comments, along with Windows with comments plus Windows without comments.

For heavily conditional documents, define condition sets so the document can be switched quickly between versions.

Number of condition tags required

Work out the number of condition tags needed to generate the planned versions. Each version is identified by a distinct combination of condition tags. In a finished Windows manual, for example, the Windows condition tag might be showing while the Mac OS condition tag and Comments condition tag are hidden. With that setup, decide whether Windows comments and Mac OS comments need separate condition tags or whether one shared condition tag should cover comments for both platforms.

Organization of content

Assess how much of the document should be conditional and arrange the material to keep authoring and maintenance manageable. A book might be structured so conditional text appears in only a few documents. Another approach is to keep alternate versions of a chapter in separate files, then use a different book file for each book version.

For some cases, including multilingual work, separate layers may be a better choice than conditions. Those layers can be shown or hidden, with each layer containing text for a different language.

Tagging strategy

Choose the smallest unit that will be made conditional. When a document will be translated, use a full sentence as the minimum conditional unit. Because translation can change word order, marking only part of a sentence as conditional can make translation harder.

Apply conditions to spaces and punctuation consistently; otherwise, extra spaces or misspelled words can result. If conditional text starts or ends with punctuation, include that punctuation in the condition. This keeps the text readable when multiple versions are visible.

To prevent word-spacing issues, such as an unconditional space followed by a conditional space, define a rule for spaces after conditional text: make them either always conditional or always unconditional.

Set a consistent sequence for conditional text and use that order everywhere in the document to avoid confusion.

Indexes and cross-references

For indexing, note whether index markers sit inside or outside conditional text. Index markers that are hidden with conditional text are omitted from the generated index.

When a cross-reference points to conditional text, ensure that the source text has the same condition. For example, if a cross-reference is inserted in a "Windows" paragraph but the text anchor is in a "Mac" condition, hiding the "Mac" condition leaves the cross-reference unresolved. The Hyperlinks panel shows "HT" next to that cross-reference.

After changing visibility settings for a condition that affects text in a cross-referenced paragraph, update the cross-reference.
