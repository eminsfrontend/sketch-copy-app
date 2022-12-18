import Image from "next/image";
import CustomLink from "../singleComponent/customLink";
import TextInfo from "../singleComponent/textInfo";

interface ImageAndTextProps {
  secondaryImage: string;
  secondaryImageAlt?: string;
  secondaryTitle: string;
  secondaryDescription: string;
  linkTo: string;
  linkTitle: string;
}

export default function ImageAndText({
  secondaryImage,
  secondaryImageAlt,
  secondaryTitle,
  secondaryDescription,
  linkTo,
  linkTitle,
}: ImageAndTextProps) {
  return (
    <div className="flex flex-col gap-y-8">
      {/* Secondary Image */}
      <div className="relative rounded-xl shadow-doubled bg-black bg-opacity-[2%] h-52 lg:h-fit flex items-center">
        <Image
          src={`/accets/images/${secondaryImage}.avif`}
          alt={secondaryImageAlt || secondaryTitle}
          width={524}
          height={216}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-y-6 px-5 lg:px-0">
        <TextInfo title={secondaryTitle} description={secondaryDescription} />
        {/* Link */}
        <CustomLink to={linkTo} title={linkTitle} />
      </div>
    </div>
  );
}