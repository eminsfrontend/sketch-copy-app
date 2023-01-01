import Image from "next/image"

interface InfoAreaProps {}

export default function InfoArea({}: InfoAreaProps) {
  return (
    <div className="fixed px-8 md:px-0 py-4 md:py-2 bottom-0 left-0 md:relative w-full z-50 flex md:justify-center items-center min-h-10 bg-white md:bg-vivaMagenta shadow-extraLight">
      <div className="text-dark font-bold text-xs flex items-center gap-x-1 md:text-white">
        <span className="flex ">
          Позвонить специалисту
          <Image
            src="/accets/icons/call-icon.svg"
            alt="right-arrow"
            width={24}
            height={24}
          />
        </span>
        <Image
          src="/accets/icons/arrow-right-white.svg"
          alt="right-arrow"
          width={24}
          height={24}
        />
      </div>
    </div>
  )
}
