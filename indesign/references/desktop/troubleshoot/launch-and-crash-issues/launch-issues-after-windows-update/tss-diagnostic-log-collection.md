# Information 2: Additional logs by running TroubleShootingScript toolset (TSS)

Use the TroubleshootingScript toolset (TSS) to capture more logs and generate a `DND_SetupReport`.

Download and unzip toolset from: https://aka.ms/getTSS.

Use Windows Start menu search for Powershell.

Open an elevated PowerShell prompt by right-clicking Windows PowerShell or PowerShell and choosing Run as administrator.

Run this command so the script can execute: Set-ExecutionPolicy - scope Process -ExecutionPolicy RemoteSigned - Force

Collect the installation data by running the tss script with: .\TSS.ps1 -Collectlog `DND_SetupReport`

Create a zip from the `C:\MS_DATA` folder that contains the collected files.
