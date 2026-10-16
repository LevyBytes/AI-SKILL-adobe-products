# How to Delete a `DS_Store` File for a Specific Folder

**Note:** Without an administrator sign-in, Terminal may request your name and password before allowing the `DS_Store` removal commands.

1. From the desktop, choose Go > Utilities > Terminal.

2. Find the folder that contains the `DS_Store` file, then change to that directory in Terminal. For example, when the folder is on the desktop, run cd desktop and press Enter.

3. Type find . -name '.`DS_Store`' -type f -delete and press Enter to remove every .`DS_Store` file from the current directory.

4. Select OK. The chosen folder's .`DS_Store` files will be deleted.
