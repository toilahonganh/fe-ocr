"use client"

import Marketing from "@/app/client/components/Marketing/Marketing";
import dynamic from "next/dynamic";

const MainBanner = dynamic(() => import("@/app/client/components/Banner/MainBanner"), { ssr: false });

export default function Page() {
    return (
        <>
            <div>
                <MainBanner
                 />
                <Marketing />
            </div>
        </>
    )
}