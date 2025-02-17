import React from "react";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="aspect-auto bg-mainbg">{children}</body>
		</html>
	);
}
