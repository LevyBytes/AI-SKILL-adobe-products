# Localization

From CC onward, the PF App Suite (Useful Utility Functions) gained `PF_AppGetLanguage`(), letting a plug-in look up the active language and supply the matching language string.

Parts of the API take Unicode when you hand strings to AE. Elsewhere — naming effect parameters during `PF_Cmd_PARAM_SETUP`, for instance — a char string is what's expected. AE reads those non-Unicode strings as multi-byte data encoded under the app's active locale. To assemble them on Windows, call WideCharToMultiByte() and pass `CP_OEMCP` as its first argument; on macOS, supply the encoding that GetApplicationTextEncoding() hands back.

Trying out other languages in AE spares you an OS reinstall, but AE itself still has to be reinstalled:
