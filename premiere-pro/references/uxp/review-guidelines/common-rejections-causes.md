# Common Rejections Causes

This table summarizes common causes of plugin submission rejection and the actions typically used to address them.

| Cause | Resolution |
| --- | --- |
| **Violation of Adobe Branding Guidelines**: plugin assets, docs, or marketing use Adobe marks or design elements outside the official branding rules. | Bring every asset into alignment with the Adobe Branding Guidelines. Remove or revise unapproved logos, icons, and references before submitting again. |
| **Blank User Interface on Launch**: the plugin starts without usable visible elements because initialization fails or required assets are absent. | Confirm that UI components, scripts, and dependencies load as intended. Re-test in a clean install of the host application. |
| **Use of default/placeholder Icons**: default icons are present, or variants are missing for required themes and sizes. | Supply custom icons for every required theme, resolution, and display scale. |
| **Non-functional buttons or silent failures**: buttons, menus, or similar interactive controls do not run actions or provide feedback, leaving flows broken or unclear. | Make each interactive component run the expected action, show feedback, and display progress indicators. Add proper error handling for failed operations. |
| **AI-generated content contains inappropriate material**: plugin AI features produce or show explicit, offensive, or otherwise policy-violating output. | Use strong content filtering or moderation so output complies with Adobe content safety policies. |
| **Missing test data or credentials**: reviewers cannot reach features because required datasets, demo accounts, or credentials were not supplied. | Add valid test data and credentials to the submission package, plus any access or setup instructions the review needs. |
| **Clipped or invisible modal dialogs**: modal dialogs appear partly off-screen or otherwise block interaction. | Check modal dialogs across panel sizes and keep them fully visible and properly centered. |
| **Missing loading indicators**: long operations make the plugin appear stuck because users receive no feedback. | Add spinners, progress bars, or status messages for operations lasting more than 1-2 seconds. |
| **Poor input field handling**: text fields fail for special characters, numbers, or localized keyboard input. | Exercise fields with varied character sets, including special characters and non-English keyboards. Add appropriate validation and error messages. |
| **Inadequate error messaging**: failures are silent or produce generic errors that do not explain how to resolve the issue. | Provide specific actionable messages that direct users toward recovery. Handle cases such as network failures gracefully. |
| **Code signing issues**: macOS plugins lack proper code signing or notarization, causing security warnings. | Use a valid Developer ID certificate to sign the plugins, then notarize them through Apple. The certificate must have at least 1 year of validity remaining. |
| **Multi-architecture failures**: [UXP Hybrid plugins](../hybrid-plugins.md) crash or do not run on specific architectures (macOS arm64, macOS x64, Windows x64). | Marketplace submission requires all three architectures. Build individual binaries for each architecture after testing each platform. |
| **Exposed developer tools**: debug consoles, developer menus, or test-only features remain reachable in production. | Strip development and debugging interfaces before submission. Confirm production builds exclude dev dependencies. |
| **Poor responsive design**: controls or content require manual resizing, or scrollbars fail to appear when needed. | Build responsive layouts that adjust to panel sizes. Ensure scrollbars appear automatically whenever content extends beyond the panel viewport. |
| **Companion app integration issues**: communication with the companion application fails, or the companion app consumes excessive resources. | Validate the companion app path end to end. Reduce resource use and keep plugin-to-companion communication reliable. |
| **Localization problems**: non-English strings truncate, or localized keyboards cause plugin failures. | Test every supported locale, make room for longer UI text, and support international keyboard layouts. |
| **Invalid or broken links**: website, support, privacy policy, or terms of service URLs are broken or open the wrong page. | Check that all links open successfully and send users to the correct relevant content. |
| **Missing third-party dependency disclosure**: the listing does not tell users that the plugin needs an external application. | State third-party application requirements clearly in the plugin description and documentation. |
| **Inadequate support channel**: no contact method exists, or the provided email/link is invalid. | Provide a working support channel, such as email, GitHub issues, or a website contact form. |
