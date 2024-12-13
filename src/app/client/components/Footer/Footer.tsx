"use client"
import Image from "next/image";
import images from "@utils/image.utils";

export default function Footer() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* <main className="flex-grow">
            </main> */}

            <footer className="mt-auto">
                {/* Footer above */}
                <div className="flex justify-between pb-10 py-14 bg-footerblue">
                    <div className="flex flex-col items-start">
                        <div className="flex items-center px-6">
                            <Image src={images.CodeZX} width={40} height={40} alt="CodeZX logo" />
                            <div className="flex justify-center space-x-2 ml-4">
                                <span className="text-[25px] font-bold text-textblue">Converter</span>
                                <span className="text-[25px] font-bold text-textpink">Free</span>
                            </div>
                        </div>
                        <span className="text-[18px] text-text_footer_gray font-light mt-2 ml-20">Online Converter Free</span>
                    </div>

                    <div className="flex flex-col items-start px-10 w-[250px]">
                        <span className="font-[15px] text-white py-4">Tools</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Convert PDF</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Convert Word</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Convert Image</span>
                    </div>

                    <div className="flex flex-col items-start px-10 w-[250px]">
                        <span className="font-[15px] text-white py-4 hover:cursor-pointer">Company</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">About Us</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Contact</span>
                    </div>

                    <div className="flex flex-col items-start px-10 w-[250px]">
                        <span className="font-[15px] text-white py-4">Info</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Join us</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Privacy and Policy</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">Convert Image</span>
                    </div>

                    <div className="flex flex-col items-start px-10 w-[250px]">
                        <span className="font-[15px] text-white py-4">Have a question?</span>
                        <span className="font-[15px] text-text_footer_gray py-3 hover:cursor-pointer">
                            Văn phòng 02, Tầng 08, Tòa nhà Pearl Plaza, số 561A Điện Biên Phủ, Phường 25, Quận Bình Thạnh, HCM
                        </span>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col px-24 pb-10 py-14 bg-footerblue text-text_footer_gray">
                    <hr className="border-t-1 border-text_footer_gray mb-6 font-light" />
                    <span className="text-[15px] mt-4 text-white">Copyright © 2024 CodeZX. All rights reserved</span>
                </div>
            </footer>
        </div>
    );
}
