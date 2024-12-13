"use client";
import dynamic from "next/dynamic";
import data from "@/app/hooks/dummyDashbroadData";

const Header = dynamic(() => import("@/app/client/components/Header"), { ssr: false });
const Footer = dynamic(() => import("@/app/client/components/Footer"), { ssr: false });

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Truyền data vào Header như một prop */}
      <Header menuDummy={data} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
