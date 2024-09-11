/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		screens: {
			xs: "362px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				mainbg: "#f5f6fa",
				counter: "#5c589b",
				usrname: "#313942",
				otherbg: "#5358b2",
				action: "#e4e6ef4f",
			},
		},
	},
	plugins: [],
};
