# macOS folder permissions issue

Open Terminal from Applications > Utilities.

Enter the appropriate command after replacing &lt;username&gt; with your account name and &lt;version&gt; with the InDesign version folder name, then press Return:

- Single-user systems that need full access: chmod 777 /Users/&lt;username&gt;/Library/Preferences/Adobe/InDesign/&lt;version&gt;
- Shared systems that need restricted access: chmod 755 /Users/&lt;username&gt;/Library/Preferences/Adobe/InDesign/&lt;version&gt;

When prompted, enter your administrator password and press Return.

Open InDesign.
