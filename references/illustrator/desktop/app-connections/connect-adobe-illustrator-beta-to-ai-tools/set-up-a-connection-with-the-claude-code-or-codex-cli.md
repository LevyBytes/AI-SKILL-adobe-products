# Set up a connection with the Claude Code or Codex CLI

Claude Code and Codex Command Line Interface (CLI) versions must be launched from Terminal (macOS) or Command Prompt (Windows) before they can connect to Illustrator (Beta).

The Codex app can connect to Illustrator (Beta) through text prompts. Use the Others option in the MCP & Tools settings for that setup.

Open Illustrator (Beta).

Choose MCP & Tools in the Application Bar at the top of the workspace.

MCP & Tools is also available from Illustrator (Beta) > Settings (macOS) or Edit > Preferences (Windows).

Copy the command for your AI tool that includes the server URL and authentication key:

- For Claude Code, choose Copy Claude Code command to clipboard next to Claude Code.
- For Codex, next to Codex, choose Copy Codex command to clipboard.

Sample command for Claude Code:

claude mcp add --transport http --header "Authorization: Bearer ilst_da9d6ccd0a1e39ecea17c19e3a5042325856532f8f8df1185b76f0ba5b6fa054" --scope user illustrator http://localhost:18412/v1/mcp

Caution

Do not use the sample command, because your Illustrator (Beta) installation has its own authentication key. From the MCP & Tools settings, use only the exact command shown there.

On macOS, use Terminal; on Windows, use Command Prompt. Paste the command and press Enter to complete setup.

Type Claude or Codex in Terminal or Command Prompt to restart that session.

For a quick connection test, enter a prompt like Create a document in Claude Code or Codex. When the connection works, it asks whether it can continue with the requested change.
