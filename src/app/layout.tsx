import TransitionProvider from "@/components/transitionProvider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
	weight: ["300", "400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "YMA Portfolio",
	description:
		"Yusuf Mirza Altay's Portfolio, Showcase React / Java Projects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}

