import eslintConfigPurify from "eslint-config-purify";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export default [
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2020
			}
		}
	},
	...eslintConfigPurify,
	{
		ignores: ["node_modules", "dist"]
	}
];
