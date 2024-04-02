import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
	weight: ["300", "400", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	display: "swap",
});
const inter = Inter({ subsets: ["latin"] });

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
				<div className='h-screen w-screen bg-gradient-to-b from-blue-100 to-red-100 text-black'>
					<div className='h-24'>
						<Navbar />
					</div>
					<div className='h-[calc(100vh-6rem)]'>{children}</div>
				</div>
			</body>
		</html>
	);
}

