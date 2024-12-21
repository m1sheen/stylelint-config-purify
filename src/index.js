import { propertyOrdering, selectorOrdering } from "stylelint-semantic-groups";

/** @type {import("stylelint").Config} */
export default {
	// Configs
	extends: ["stylelint-config-standard-scss", "stylelint-prettier/recommended"],
	// Plugins
	plugins: ["stylelint-order"],
	// Custom syntax
	customSyntax: "postcss-scss",
	// Rules
	rules: {
		"order/order": selectorOrdering,
		"order/properties-order": propertyOrdering,
		"selector-type-no-unknown": [
			true,
			{
				ignore: ["custom-elements", "default-namespace"]
			}
		],
		"declaration-empty-line-before": [
			"always",
			{
				ignore: ["after-comment", "after-declaration", "first-nested", "inside-single-line-block"]
			}
		],
		"rule-empty-line-before": [
			"always",
			{
				except: ["first-nested"]
			}
		]
	}
};
