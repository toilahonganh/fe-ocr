"use client"

import Marketing from "@/app/client/components/Marketing/Marketing";
import dynamic from "next/dynamic";

const PropsBanner = dynamic(() => import("@/app/client/components/Banner/PropsBanner"), { ssr: false });

export default function Page() {
    return (
        <>
            <div>
                <PropsBanner
                title="Organize Page"
                paragraph="Change the order of pages in a PDF file using our online PDF organizer. Arrange, add, and delete PDF pages."
                 />
                <Marketing />
            </div>
        </>
    )
}