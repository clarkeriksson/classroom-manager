import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  	title: "Classroom Manager",
  	description: "Free data-driven spatial classroom manager",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
  	return (
    	<html lang="en" className="h-full w-full m-0 p-0">
      		<body className={`h-full w-full m-0 p-0 ${montserrat.className}`}>{children}</body>
    	</html>
  	);
}
