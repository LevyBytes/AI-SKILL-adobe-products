# Execute Actions Workflow

Learn to automate Photoshop work with Actions and UXP Scripts through the `/v2/execute-actions` endpoint.

The **execute-actions workflow** runs Photoshop operations programmatically with Actions (JSON-formatted action descriptors and traditional binary `.atn` files) plus UXP Scripts (modern JavaScript automation).

Key capabilities include:

- **Actions and UXP Scripts**: Run traditional Actions (recorded operations) alongside modern UXP Scripts (JavaScript automation)
- **Inline or external**: Provide inline JSON/JavaScript or point to external `.atn`, `.json`, or `.psjs` files
- **Dynamic placeholders**: Insert file paths during execution with placeholder syntax
- **Multiple actions**: Chain as many as 10 actions in order; UXP is limited to 1 script per request
- **Pattern-based outputs**: Use glob patterns to collect dynamically generated files

**Recommendation**: Choose Actions for image manipulation and effects. Choose UXP Scripts for conditional logic, data extraction, or more complex decision-making.
