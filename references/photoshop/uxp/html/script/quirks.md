# Quirks

Photoshop permits `<script>` tag injection through the HTML5 DOM API, and injected tags do execute, but plugin code should not depend on that behavior because it can create serious security exposure. Use `<script>` tags only for local, static content that is loaded and executed.
