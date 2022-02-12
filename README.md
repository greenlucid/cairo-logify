# cairo-logify

Debugging in Cairo, being an novel lang, is a bit hard. You may know about serialize-word, but that requires passing `output_ptr` intrinstic arguments everywhere, so it's cumbersome. You can use hints instead. The problem with hints is that they have to be whitelisted for StarkNet, even if they're only logging info to console.

cairo-logify lets you use hints for logging, without wasting time copying and pasting these hints. It lets you zip and unzip these log statements. This is useful for big projects that require logging the same statements over and over again, to not dupe work.

Disclaimer: backup or commit your stuff regularly,
## Installation

Install it as a global package:

`npm i -g cairo-logify`

## Syntax

Go wherever you want to place your logging statement. A logging comment starts with:

`# $log`

From here, you can do different things:
- Log a constant string.
  - `# $log "Checking arguments"`
- Log things. You can log multiple of these separated with whitespace, they'll be logged in different lines.
  - `# $log moves passant encoded_move`
  
## Usage

After writing your logging statements, you can generate the hints (unzip) by running:

`cairo-logify -u test.cairo`

After you finish, debugging, you can remove the hints (zip) by running:

`cairo-logify -z test.cairo`

You can do these changes to a whole folder and their contents:

`cairo-logify -rz src`

Note that you haven't lost the logging statements, you'll be able to unzip them later as needed. Zipping is useful for deploying, or removing clutter from the source codes from diffs.
