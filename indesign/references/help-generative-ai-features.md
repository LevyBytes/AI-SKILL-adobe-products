# Gen Ai Features Overview, Generative Ai Faq, Use Ai Assistant, Ai Assistant Capabilities

> Adobe InDesign reference. Original prose; identifiers preserved verbatim.

## Overview

Covers: Generative AI features; Generative AI features overview; Generative AI in InDesign FAQ; Use AI Assistant; AI Assistant capabilities.

## Generative AI features

Generative AI features overview

Generative AI in InDesign FAQ

Use AI Assistant

AI Assistant capabilities

## Generative AI features overview

Survey of the generative AI features offered in Adobe InDesign and Adobe InDesign (Beta).

## Generative AI in InDesign FAQ

This FAQ covers access, usage, commercial-safety details, and other common questions for generative AI features in Adobe InDesign.

InDesign describes its Adobe Firefly-powered generative AI set as four features. The named items are Text to Image, the expansion tool Generative Expand, Generative Fill (beta), the Alt Text feature, Generate Text, and AI Assistant. Adobe positions these tools for commercially safe use and offers them anywhere Adobe provides services, with mainland China and Russia excluded.

No. Access to generative AI features is included with the current InDesign license, so InDesign users do not pay an additional charge.

No. The generative AI features add creative choices alongside today's InDesign tools and workflows; they do not replace current functionality.

Generative features follow the same technical requirements as InDesign itself.

With the exception of Alt Text and AI Assistant, the remaining generative AI features are English-only wherever Adobe provides services. Alt Text uses the Language of the document's [Basic Paragraph] style when it generates text. Mainland China is not supported for these features.

Yes. Images created with the generative AI features are editable outputs, so you can modify them in InDesign like other images.

On Windows, InDesign downloads every variation to C:\Users<username>\Documents\InDesign GenAI Assets. On macOS, the location is /Users/username/Documents/InDesign GenAI Assets. Placed variations are visible in the Links panel.

For GenAI-generated images, the Status section of the Links panel shows the OK icon. To hand the placed variation to another app, right-click it, choose Edit With, and then choose the application.

Write direct prompts of three to eight words that describe the character, color, scene, or texture you want. Prompts such as "sunrise behind mountains" or "soft sheep wool texture" tend to work better than command-style wording.

For generated images, the Firefly model supplies 2K resolution; for expanded images in InDesign, it can return up to 4K resolution.

Using generative AI features in InDesign consumes Generative Credits. For details about credit allocation, limits, and usage, see Generative credits.

Commercial use means any usage that creates commercial activity for you, your brand, or your business. Examples include selling, using print and digital promotional materials, or using outputs in the sale of products and content.

To support Firefly's commercially safe design, Adobe says the initial model is trained from Adobe Stock images, openly licensed material, and public-domain works whose copyright has expired. Adobe still does not guarantee any individual output; each creator remains responsible for due diligence.

Adobe says it is important to build a model that respects customers and matches company values. Along with training on inclusive datasets, Adobe continually tests the model to reduce harmful stereotype risks. The Firefly team works to find and resolve issues, and you can use the Report option on any image to send negative results.

Content Credentials can add extra information about you and your creative process directly to your assets.

For files generated with generative AI features and exported as JPG, PNG, SVG, or SVA, InDesign automatically attaches Content Credentials. Those credentials indicate that InDesign created or edited the image using Firefly generative AI technology.

## Use AI Assistant

Learn how AI Assistant in Adobe InDesign (Beta) can update documents, answer questions, and carry out complex operations on your behalf.

Inside InDesign (Beta), AI Assistant uses prompts to help you explore, create, and edit content, layouts, and objects. It can make quick design changes while leaving the parts you want unchanged.

The Contextual Task Bar includes AI Assistant as an entry point. Other ways to open the AI Assistant panel are Window > AI Assistant, File > AI Assistant, and the AI Assistant icon in the upper-right corner of the InDesign (Beta) application.

Type a prompt in the AI Assistant panel. The prompt can relate to any of these workflows:

- Modify layouts and objects: Use simple prompts to change positioning, formatting, and structure. Example prompts: Turn this text into bullet points, Make this page a two-column layout, or Add page numbers to every page.
- Ask questions about InDesign: Request contextual help for tasks, tools, and shortcuts. Example prompts: How can I create a table of contents? or Describe how parent pages work in InDesign.
- Perform multi-step workflows: Run operations that would normally involve scripting or several manual actions.
- Data Merge support: Combine the user's intent with the document template structure and the attached dataset's semantics, then map data fields automatically to matching placeholders. This removes manual field-mapping work and supports accurate, scalable document-variation generation.

Submit the prompt with the Send Prompt icon, Enter (Windows), or Return (macOS).

Check the resulting changes in the document itself.

Tip

- Keep the conversation interactive so you can refine results across multiple turns.
- Use the refresh icon whenever you want a new chat for a different task or workflow.
- Try a broad set of design and production workflows while experimenting freely.

## AI Assistant capabilities

Explore what AI Assistant in Adobe InDesign (Beta) can do.

AI Assistant reads your document and design intent as you work. Rather than searching tutorials, ask a question such as, How can I create a table of contents? and learn in context. You can also save time by asking it to add drop shadows to all images in the document.

Note

- Availability is limited to English (North America) and English (International).
- Current usage allows 25 prompts per day and 250 prompts per month.

  - How can I create a table of contents?
  - Describe how parent pages work in InDesign.
  - How can I check whether this document is print-ready?

  - Build a grid for a three-column layout.
  - Put page numbers in the footer.
  - What margin does this document use?

  - Turn the selected text into bullet points.
  - Insert placeholder text in the selected text frame.

  - Add a drop shadow to every image.

  - Apply RGB (0, 128, 128) to the selected objects.

### Write effective prompts

Clear, specific prompts give AI Assistant the best results. Special syntax and technical wording are unnecessary. Use plain, natural sentences and phrase questions the way you would ask a colleague. Keep these points in mind:

- State the change you want as specifically as possible. Add measurements, values, and names when you know them. If the exact value is unknown, such as a margin width, ask first: "What is the current margin?" Then send the edit request.
- For text and object edits, make a selection before entering the prompt so AI Assistant knows precisely what to modify.
- AI Assistant can complete some multistep workflows in a single step, but complex work is easier to control when you split it into separate prompts and send them one at a time. That lets you review each result before continuing.
- When the first output needs adjustment, ask AI Assistant to revise it. If the result is not what you wanted, revert with Edit > Undo (Ctrl + Z (Windows) or Command + Z (macOS)).
- Rate responses with the thumbs up or thumbs down icons. Your feedback helps improve future results.

### Frequently asked questions

AI Assistant is a conversational helper for creating, editing, and preparing production-ready documents more quickly. It gives contextual guidance, answers questions, and automates common work such as data merging, style application, and formatting.

AI Assistant remains in active development and testing, and Adobe is gathering feedback to refine the experience. Adobe's Terms of Use govern use of the AI Assistant.

New users receive step-by-step guidance that helps build confidence and skill. Experienced users can save time by assigning repetitive work to the assistant and uncovering advanced features.

It can explain features, perform tasks for you, and keep you in a creative flow by answering immediately inside the workspace.

During this limited release, AI Assistant is available only in the InDesign (Beta) app and only for English (North America) and English (International).

To work with AI Assistant, you need a plan that includes Adobe InDesign. Start by downloading the InDesign (Beta) app from Adobe Creative Cloud.

In the InDesign (Beta) app, AI Assistant usage is currently limited to 25 free prompts per day. Generative credits reset daily and do not roll over.

Share feedback by using the thumbs-up or thumbs-down icons on generated results, or by completing the in-app survey. For discussion, ideas, questions, and tips, join the Adobe InDesign community or participate in UserVoice.
