# AEGP Suites - Persistent Data Suite

Plug-ins are granted read and write access to data persisted in After Effects' preferences. With the suite below, AEGPs can register and look after persistent data of their own. Entries are keyed by (section key, value key) pairs. As a convention, a plug-in should adopt its matchname as the section key, or prefix its section keys with it when several are used.

You can store A_long, `A_FpLong`, strings, and void* values. `A_FpLongs` keep 6 decimal places of precision, and there is no option to request another precision. String data covers the entire 8-bit range, with only 0x00 set aside to terminate a string. That makes such strings well suited to UTF-8, ISO 8859-1, and plain ASCII. Section keys and value keys share this type. When a value falls outside the simple types on offer, wrap your custom data in data handles. The void* unstructured form lets you keep data of any sort; just pass along its size in bytes together with the data.

For every value-retrieval function: when the requested key is absent, the default is written into the blob and also returned; with no default supplied, an empty value gets written and returned.

Keep in mind that this lives in the application's preferences rather than in the project. As of 6.5, there is no mechanism for stashing opaque AEGP-generated data inside an After Effects project.

After Effects copes with plug-ins that alter preferences while running; before it acts on a pref-able setting it consults the in-RAM copy of the prefs instead of trusting the saved file. It's like we _planned_ this, or something!
