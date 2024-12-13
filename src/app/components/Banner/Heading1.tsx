type HeadingProps = {
    title: string; 
};

export default function Heading1({ title }: HeadingProps) {
    return (
        <>
            <span className="text-[40px] font-bold text-textblue">{title}</span>
        </>
    );
}
