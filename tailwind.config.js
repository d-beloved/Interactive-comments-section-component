/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				mainbg: "#f5f6fa",
				counter: "#5c589b",
				usrname: "#313942",
				otherbg: "#5358b2",
				action: "#e4e6ef",
			},
		},
	},
	plugins: [],
};
