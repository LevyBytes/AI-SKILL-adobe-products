# Quirks

Photoshop may execute `<script>` elements inserted through the HTML5 DOM API, but plugins should not depend on that quirk because it creates serious security exposure. Reserve `<script>` tags for loading and running local, static content only.
