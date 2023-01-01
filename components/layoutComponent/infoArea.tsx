import Image from "next/image"

interface InfoAreaProps {}

export default function InfoArea({}: InfoAreaProps) {
  return (
    <div className="fixed px-8 md:px-0 py-4 md:py-2 bottom-0 left-0 md:relative w-full z-50 flex md:justify-center items-center min-h-10 bg-white md:bg-vivaMagenta shadow-extraLight">
      <div className="text-dark font-bold text-xs flex justify-between items-center gap-x-1 md:text-white">
        <a href="tel:+79612032707" className="md:hidden flex items-center gap-x-2">
          Позвоните нашим специалистам
          <Image
            src="/accets/icons/call-icon.svg"
            alt="right-arrow"
            width={18}
            height={18}
          />
        </a>
        <span className="hidden md:flex items-center gap-x-2">
          Заполните короткий бриф и получите скидку!
          <Image
            src="/accets/icons/arrow-right-white.svg"
            alt="right-arrow"
            width={24}
            height={24}
          />
        </span>
      </div>
    </div>
  )
}
