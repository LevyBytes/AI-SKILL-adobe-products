# OutputPanel

Community declaration reference: Animate/22.0.

Troubleshooting output, including syntax errors, is displayed by the Output panel object. Access it with fl.outputPanel or flash.outputPanel. See fl.outputPanel.

```typescript
declare class OutputPanel {
    /**
    - Empties the Output panel. Batch-processing scripts can clear an error list, or save it in increments by pairing this method with outputPanel.save().
      */
      clear(): void
    /**
    - Writes the Output panel contents to a local text file, either replacing that file or appending to it.
    - An invalid or missing fileURI reports an error.
    - For batch processing, this method can preserve compiler output. For example, a JSFL file can compile multiple components; compile errors appear in the Output panel, and this method can save those errors to a text file for automatic parsing by the build system.
    - @param fileURI String written as a file:/// URI that identifies the local file for the Output panel contents.
    - @param bAppendToFile Optional Boolean value. true appends the Output panel contents to the output file; false overwrites an existing output file. Default: false.
    - @param bUseSystemEncoding Optional Boolean value. true saves Output panel text with the system encoding; false writes UTF-8 text with Byte Order Mark characters at the start. Default: false.
      */
      save(fileURI: string, bAppendToFile?: boolean, bUseSystemEncoding?: boolean): void
    /**
    - Sends a text string to the Output panel, adds a newline, and shows the panel if it is hidden. The behavior matches fl.trace() and the ActionScript trace() statement.
    - To output a blank line, call outputPanel.trace("") or outputPanel.trace("\n"). The second form can be embedded inline so \n becomes part of the message string.
    - @param message String containing text to append to the Output panel.
      */
      trace(message: string): void
}
```

Source: [Animate/22.0/index.d.ts](https://raw.githubusercontent.com/docsforadobe/Types-for-Adobe/5a69e41e5c5b59f7254cc07ca1e57cf8b6884867/Animate/22.0/index.d.ts).
