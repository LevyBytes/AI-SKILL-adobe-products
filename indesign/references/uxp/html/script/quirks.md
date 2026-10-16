# Quirks

Even though Photoshop permits `<script>` tags inserted through the HTML5 DOM API and those tags do execute, treat that behavior as unsupported for dependable plugin code because it can introduce major security exposure. Use `<script>` tags only for local, static content that is loaded and executed directly.
