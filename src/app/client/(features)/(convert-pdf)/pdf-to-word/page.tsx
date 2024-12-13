"use client"

import Marketing from "@/app/client/components/Marketing/Marketing";
import dynamic from "next/dynamic";

const PropsBanner = dynamic(() => import("@/app/client/components/Banner/PropsBanner"), { ssr: false });

export default function Page() {
    return (
        <>
            <div>
                <PropsBanner
                title="Converter PDF to Word"
                paragraph="Allows users to find an all in one converter for PDF to Word file."
                 />
                <Marketing />
            </div>
        </>
    )
}