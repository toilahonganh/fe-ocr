type ParagraphProps = {
    paragraph: string; 
};

export default function Paragraph({ paragraph }: ParagraphProps) {
    return (
        <>
            <p className="text-[15px] font-light text-textgray">{paragraph}</p>
        </>
    );
}
