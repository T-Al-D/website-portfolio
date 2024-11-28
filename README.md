# Website-Portfolio

[![Deploy static content to Pages](https://github.com/T-Al-D/website-portfolio/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/T-Al-D/website-portfolio/actions/workflows/jekyll-gh-pages.yml)

## A Website build with react framework (typescript + vite + mui)

(Main)Icon created with : https://www.pixilart.com/
Components from MUI : https://mui.com/material-ui/getting-started/installation/
Background-Image : https://pixabay.com/images/search/blue%20circuit/

Fonts:

-   https://www.1001freefonts.com/vanilla-extract.font
-   https://www.1001freefonts.com/kingthings-hand.font
-   https://www.1001freefonts.com/objective.font

Images:

-   https://sequenceqcs.com/blog/sequence-announces-partnership-with-tulip-interfaces
-   https://worldvectorlogo.com/de/logo/lpi
-   https://logovtor.com/ignition-by-inductive-automation-logo-vector-svg/

### Here: https://t-al-d.github.io/website-portfolio/

.
.
.
.
.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
	languageOptions: {
		// other options...
		parserOptions: {
			project: ["./tsconfig.node.json", "./tsconfig.app.json"],
			tsconfigRootDir: import.meta.dirname,
		},
	},
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
	// Set the react version
	settings: { react: { version: "18.3" } },
	plugins: {
		// Add the react plugin
		react,
	},
	rules: {
		// other rules...
		// Enable its recommended rules
		...react.configs.recommended.rules,
		...react.configs["jsx-runtime"].rules,
	},
});
```
