export default {
    version: "0.2",
    language: "en",
    words: [],
    flagWords: [],
    ignorePaths: ["node_modules/**"],
    languageSettings: [
		{
			"languageId": "*",
			"dictionaries": ["companies", "softwareTerms", "misc", "filetypes"]
		},
		{
			"languageId": "javascript,javascriptreact",
			"dictionaries": ["typescript", "node", "npm"]
		},
		{
			"languageId": "typescript,typescriptreact",
			"dictionaries": ["typescript", "node", "npm"]
		},
		{
			"languageId": "javascriptreact,typescriptreact",
			"dictionaries": ["html", "css", "fonts"]
		},
		{
			"languageId": "markdown,asciidoc",
			"dictionaries": ["npm", "html"]
		},
		{
			"languageId": "html,pug,jade",
			"dictionaries": ["html", "fonts", "typescript", "css", "npm"]
		},
		{
			"languageId": "handlebars",
			"dictionaries": ["html", "css", "fonts", "typescript"]
		},
		{
			"languageId": "json",
			"dictionaries": ["node", "npm"]
		},
		{
			"languageId": "css,less,scss",
			"dictionaries": ["fonts", "css"]
		},
		{
			"languageId": "map",
			"enabled": false
		},
		{
			"languageId": "image",
			"enabled": false
		},
		{
			"languageId": "binary",
			"enabled": false
		},
		{
			"languageId": "html",
			"ignoreRegExpList": ["href"]
		}
	],
}