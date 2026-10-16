# How template nodes differ from simple inputs

Input ports on these nodes are exposed in a template-specific way:

Start by uploading a document or scene template, such as an InDesign .indd, a Photoshop .psd, or the 3D scene asset required by a composition node.

The service reads the template, then creates mappable ports that match placeholders, layers, fields, or scene inputs present in the file.

Connect workflow inputs, including text, images, tables, or other assets, to those ports. At run time, the template receives those values and generates the outputs.

Before the template is uploaded and validated successfully, the complete set of mappable parameters is usually hidden. Treat template upload as the required first step, just as each merge type's single-node documentation does.
