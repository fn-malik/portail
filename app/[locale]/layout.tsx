import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import Script from "next/script";
import {languages} from "@/app/i18n/settings";
import {dir} from "i18next";

export async  function  generateStaticParams(){
  return languages.map((locale)=>({locale}))
}
export default function RootLayout({
  children,
    params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale:string}

}>) {
  return (
    <html lang={locale} dir={dir(locale)}>
    {/* eslint-disable-next-line @next/next/no-script-component-in-head */}
    <Head>
      <Script type="text/javascript" src="/script.js" />
    </Head>
    <body className="bg-gray-200 " style={{padding: "0"}}>{children}</body>


    </html>
  );
}
