# Open Adobe Premiere projects.

Use File > Open Project. Shortcut: Ctrl + O (Windows), Command + O (macOS).

Navigate to the project file, then select Open.

If the Where Is The File dialog box appears, find the file with the Look In field, or choose one of these options:

- Find: opens Windows Explorer (Windows) or Finder (macOS) search.
- Skip: substitutes a missing file with a temporary offline clip for the current session. After the project is closed and opened again, a dialog asks you to locate the file or skip it another time.
- Skip All: applies the Skip behavior to every missing file, replacing them with temporary offline files.
- Skip Previews: prevents Premiere from looking for preview files already rendered for the project. The project may open faster, but some sequence areas may require rendering for best playback.
- Offline: substitutes a missing file with an offline clip, which is a placeholder preserving all references to the missing file throughout the project. Unlike the temporary offline clip made by Skip, an Offline placeholder remains between sessions, so missing files do not have to be located every time the project opens.
- Offline All: applies the Offline behavior to every missing file, replacing them with persistent offline files.

Caution

Do not delete source files while they are being used as clips in a Premiere project unless they were captured with device control and you intend to recapture them. Once the final movie has been delivered, source files can be deleted.
