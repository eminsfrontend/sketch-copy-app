import Image from "next/image"
import Link from "next/link"
import Navigation from "./navigation"

export default function Header() {
  return (
    <header className="bg-white md:bg-transparent fixed top-0 md:relative w-full z-40 bg-opacity-80 backdrop-blur-sm shadow-extraLight">
      <nav className="container max-w-6xl mx-auto px-8 lg:px-4 py-2 md:py-5 flex justify-between items-center">
        <div className="left-side flex gap-x-8 lg:gap-x-16 items-center">
          <Link href="/" className="">
            <svg
              width="30"
              height="32"
              viewBox="0 0 30 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3522 5.46868L17.8953 0.684086C16.2759 -0.228028 13.7405 -0.228028 12.121 0.684086L3.58233 5.50069C0.196292 7.74097 0 8.07701 0 11.6455V20.3345C0 23.903 0.196292 24.255 3.64776 26.5273L12.1047 31.3119C12.9226 31.776 13.9695 32 15 32C16.0305 32 17.0774 31.776 17.879 31.3119L26.4177 26.4953C29.8037 24.255 30 23.919 30 20.3505V11.6455C30 8.07701 29.8037 7.74097 26.3522 5.46868V5.46868ZM15 21.1987C12.072 21.1987 9.68375 18.8624 9.68375 15.998C9.68375 13.1336 12.072 10.7974 15 10.7974C17.928 10.7974 20.3162 13.1336 20.3162 15.998C20.3162 18.8624 17.928 21.1987 15 21.1987Z"
                fill="#212123"
              />
            </svg>
          </Link>
          {/* Navigation Desctop */}
          <Navigation />
        </div>
        <div className="flex items-center gap-x-8">
          <div className="hidden md:flex md:gap-x-2 md:items-center">
            <Image
              src="/accets/icons/call-icon.svg"
              alt="call-icon"
              width={18}
              height={18}
            />
            <a
              href="tel:+79612032707"
              className="font-montserrat font-semibold"
            >
              +7 495 203 27 07
            </a>
          </div>
          {/* Create Button With fontSize options */}
          <button className="md:bg-black font-bold text-dark md:text-white underline md:no-underline text-sm py-4 md:py-3 md:px-3 md:rounded-md underline-offset-4">
            Оставить заявку
          </button>
        </div>
      </nav>
    </header>
  )
}
