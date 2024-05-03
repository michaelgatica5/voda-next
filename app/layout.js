import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import styles from '../styles/styles.module.css';
import { Inter } from "next/font/google";
import Logo from "@/components/Logo/Logo";
import HeadPanelMenu from "@/components/HeadPanelMenu/HeadPanelMenu";
import HeadPanelUser from "@/components/HeadPanelUser/HeadPanelUser";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}) {
	return (
		<html lang="es">
			<head></head>
			<body className={inter.className}>
				<main>
					<div className={`fixed top-0 flex justify-between items-center px-5 ${styles.logo}`}>
						<Logo />
					</div>
					<div className={`fixed top-0 flex justify-between items-center ${styles.headPanel}`}>
						<HeadPanelMenu />
						<HeadPanelUser />
					</div>
					<div className={`fixed py-2 h-screen ${styles.sidebar}`}>
						<Sidebar />
					</div>
					<div className={`${styles.mainpanel}`}>
						 <Toaster /> {/*position="bottom-center" */}
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
