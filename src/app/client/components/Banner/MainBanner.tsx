import images from "@utils/image.utils";
import { BannerImage, Heading1, Paragraph, FileUpload } from "@components/Banner";

export default function MainBanner() {
    return (
        <>
            <div className="flex h-[700px] bg-bannergray">
                <div className="flex"> 
                    <div className="flex-1 pt-[100px] pl-[150px]">
                        <Heading1 title="Online Converter Files" />
                        <div className="mt-[40px]">
                            <Paragraph paragraph="Allows users to find an all in one converter for PDF, Word, image and more. Log in to further open the input limit of the file." />
                        </div>
                        <div className="mt-[40px]">
                            <FileUpload />
                        </div>
                    </div>
                    <div className="flex-1 pt-[150px]">
                        <BannerImage image={images.Person} />
                    </div>
                </div>
            </div>
        </>
    )
}