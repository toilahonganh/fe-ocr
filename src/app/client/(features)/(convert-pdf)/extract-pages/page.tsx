"use client"

import Marketing from "@/app/client/components/Marketing/Marketing";
import dynamic from "next/dynamic";

const PropsBanner = dynamic(() => import("@/app/client/components/Banner/PropsBanner"), { ssr: false });

export default function Page() {
    return (
        <>
            <div>
                <PropsBanner
                title="Extract Pages"
                paragraph="Extract a single or entire page from a PDF file online and save the result as a new PDF."
                 />
                <Marketing />
            </div>
        </>
    )
}