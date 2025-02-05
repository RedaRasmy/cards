import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const roboto = Roboto({
    variable: "--font-roboto-sans",
    subsets: ["latin"],
    weight: "700",
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Cards",
    description: "cards game :) ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
                <StoreProvider>
                    {children}  
                </StoreProvider>
            </body>
        </html>
    );
}
