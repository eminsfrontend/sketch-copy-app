import Image from "next/image";
import Link from "next/link";
import CustomLink from "../singleComponent/customLink";
import TextInfo from "../singleComponent/textInfo";
import ImageAndText from "./imageAndText";

export enum bigImageLayoutDirectionType {
  leading,
  trailing,
}

interface bigImageLayoutProps {
  imageDirection: bigImageLayoutDirectionType;
  mainImageOrVideo: string;
  mainImageOrVideoAlt?: string;
  title: string;
  description: string;
  secondaryTitle: string;
  secondaryDescription: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  linkTo: string;
  linkTitle: string;
}

export default function bigImageLayout({
  imageDirection,
  mainImageOrVideo,
  mainImageOrVideoAlt,
  title,
  description,
  secondaryTitle,
  secondaryDescription,
  secondaryImage,
  secondaryImageAlt,
  linkTo,
  linkTitle,
}: bigImageLayoutProps) {
  return (
    <section className="min-h-screen w-full flex flex-col items-center relative px-4 lg:px-0 py-16">
      {/* Background paralax image */}
      {/* <div
        className={`absolute -z-10 lg:top-1/2 lg:-translate-y-1/2 ${
          imageDirection === bigImageLayoutDirectionType.leading
            ? "ml-6 lg:ml-0 -right-1/2 lg:-right-0 lg:-left-[53%]"
            : "mr-6 lg:mr-0 -left-1/2 lg:left-[50%] lg:-right-[53%]"
        }`}
      >
        <Image
          src={`/accets/images/${bgImage}.svg`}
          alt={bgImageAlt || "background-image"}
          width={bgImageWidth}
          height={bgImageHeight}
          loading="lazy"
        />
      </div> */}
      <div className="overflow-hidden relative w-full min-h-screen flex flex-col justify-center items-center">
        {/* Image/video container */}
        <div
          className={`overflow-hidden lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:w-3/4 h-[90%] md:max-h-[590px] xl:max-h-[90%] rounded-xl shadow-light border border-black border-opacity-10 ${
            imageDirection === bigImageLayoutDirectionType.leading
              ? "lg:-left-[30%]"
              : "lg:-right-[30%]"
          }`}
        >
          <video
            src={`/accets/videos/${mainImageOrVideo}.mp4`}
            autoPlay
            loop
            muted
          ></video>
        </div>
        {/* Info container */}
        <div
          className={`container max-w-6xl mx-auto flex justify-between lg:gap-x-20 ${
            imageDirection === bigImageLayoutDirectionType.leading
              ? ""
              : "flex-row-reverse"
          }`}
        >
          <div className="lg:flex-1" />
          <div className="flex flex-1 flex-col gap-y-20 mt-20 lg:mt-0 md:px-32 lg:px-0">
            {/* Main Title Area */}
            <div className="flex flex-col gap-y-6 px-5 lg:px-0">
              <h2 className="text-dark font-black text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
                {title}
              </h2>
              <p className="text-dark font-medium text-base leading-6 md:text-lg md:leading-7">
                {description}
              </p>
            </div>
            {/* Secondary Title Area */}
            <ImageAndText
              secondaryImage={secondaryImage || undefined}
              secondaryImageAlt={secondaryImageAlt || secondaryTitle}
              secondaryTitle={secondaryTitle}
              secondaryDescription={secondaryDescription}
              linkTo={linkTo}
              linkTitle={linkTitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
