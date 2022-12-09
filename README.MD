tailwind-lang-variants allows you to scaffold and use tailwind variants/modifiers for HTML language attribute.

## Installation

`npm install tailwind-lang-variants`

`yarn add tailwind-lang-variants`

## Usage

tailwind.config.js

```js
const colors = require("tailwindcss/colors");
const scaffoldLangVariants = require("tailwind-lang-variants");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {},
  },
  plugins: [scaffoldLangVariants("fa", "en")],
};
```

Then in any class:

```html
<h1 class="text-black fa:text-red-500 en:text-blue-500">Hello world</h1>
```
