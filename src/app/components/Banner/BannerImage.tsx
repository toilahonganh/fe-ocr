import Image from "next/image";

type BannerImageProps = {
    image: string; 
};

export default function BannerImage({ image }: BannerImageProps) {
    return (
        <>
            <Image src={image} width={680}  height={400} alt="Banner" />
        </>
    );
}
