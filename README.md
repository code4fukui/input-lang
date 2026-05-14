# input-lang

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element (`<input-lang>`) that provides a user-friendly interface for selecting multiple languages.

## Demo

[https://code4fukui.github.io/input-lang/](https://code4fukui.github.io/input-lang/)

## Features

-   **Simple UI:** Provides checkboxes for common languages (English, Chinese, Korean).
-   **Extensive Language List:** Includes a searchable, multi-select dropdown for a comprehensive list of additional languages.
-   **Standardized Output:** Returns a single, semicolon-separated string of ISO 639-2/B language codes (e.g., `eng;chi;zbl`).
-   **Programmatic Control:** Easily get or set the selected languages via the `.value` property.

## Usage

Import the module and add the `<input-lang>` tag to your HTML.

```html
<script type="module" src="https://code4fukui.github.io/input-lang/input-lang.js"></script>

<input-lang id="lang-selector"></input-lang>
```

### Getting the Value

Listen for the `onchange` event to get the updated value.

```html
<script type="module">
  const selector = document.getElementById("lang-selector");
  selector.onchange = () => {
    // Outputs a string like "eng;kor"
    console.log(selector.value);
  };
</script>
```

### Setting the Value

You can set the selected languages using the `value` attribute in HTML or directly via JavaScript.

```html
<!-- Set an initial value in HTML -->
<input-lang id="lang-prefilled" value="eng;kor"></input-lang>

<script type="module">
  const prefilledSelector = document.getElementById("lang-prefilled");

  // Or, set the value programmatically
  prefilledSelector.value = "eng;chi;zbl"; // Sets English, Chinese, and Blissymbols
</script>
```

## API

### `.value`

-   **Type:** `String`
-   **Description:** Gets or sets the selected languages as a semicolon-separated string of ISO 639-2/B language codes.

## Dependencies

This component relies on the following ES modules:
-   [`stdcomp.js`](https://js.sabae.cc/stdcomp.js) for component utilities.
-   [`ISO639.js`](https://code4fukui.github.io/LangCode/ISO639.js) for language code data.
-   [`input-multi-select.js`](https://code4fukui.github.io/input-multi-select/input-multi-select.js) for the searchable dropdown.

## Author

Created by [@taisukef](https://fukuno.jig.jp/3372).

## License

MIT License — see [LICENSE](LICENSE).