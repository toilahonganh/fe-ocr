import { Heading1, Paragraph, FileUpload } from "@components/Banner";


interface PropsProps {
    title: string;
    paragraph: string;
}

export default function ConvertPDFBanner({ title, paragraph }: PropsProps) {
    return (
        <div className="flex h-[600px] bg-bannergray items-center justify-center">
            <div className="flex flex-col items-center text-center">
                <Heading1 title={title} />
                <div className="mt-[40px]">
                    <Paragraph paragraph={paragraph} />
                </div>
                <div className="mt-[40px]">
                    <FileUpload />
                </div>
            </div>
        </div>
    )
}
