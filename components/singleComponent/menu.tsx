import Link from "next/link"
import { useEffect, useState } from "react"

export default function Menu() {
  const [menu, setMenu] = useState<boolean>(false)

  const menuHandler = () => {
    setMenu((prev) => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : ""
  }, [menu])

  return (
    <>
      <button
        className="md:hidden flex flex-col justify-center gap-y-1"
        onClick={menuHandler}
      >
        <div className="w-6 h-[2px] bg-dark rounded-full" />
        <div className="w-6 h-[2px] bg-dark rounded-full" />
      </button>

      {/* Mobile Menu Popup */}
      <div
        className={`
          mobile-menu fixed top-0 right-0 w-full h-screen bg-vivaMagenta z-50
          flex flex-col px-10 py-20 gap-y-10
          text-white
          ${menu ? "block overflow-hidden" : "hidden"}
        `}
      >
        <div className="flex gap-x-4 items-center">
          <svg
            width="30"
            height="32"
            viewBox="0 0 30 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.3522 5.46868L17.8953 0.684086C16.2759 -0.228028 13.7405 -0.228028 12.121 0.684086L3.58233 5.50069C0.196292 7.74097 0 8.07701 0 11.6455V20.3345C0 23.903 0.196292 24.255 3.64776 26.5273L12.1047 31.3119C12.9226 31.776 13.9695 32 15 32C16.0305 32 17.0774 31.776 17.879 31.3119L26.4177 26.4953C29.8037 24.255 30 23.919 30 20.3505V11.6455C30 8.07701 29.8037 7.74097 26.3522 5.46868V5.46868ZM15 21.1987C12.072 21.1987 9.68375 18.8624 9.68375 15.998C9.68375 13.1336 12.072 10.7974 15 10.7974C17.928 10.7974 20.3162 13.1336 20.3162 15.998C20.3162 18.8624 17.928 21.1987 15 21.1987Z"
              fill="#fff"
            />
          </svg>
          <span className="text-lg">Quazar</span>
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <Link href="/service" className="py-4">
            Услуги
          </Link>
          <Link href="/" className="py-4">
            Проекты
          </Link>
          <Link href="/price" className="py-4">
            Цены
          </Link>
          <Link href="/" className="py-4">
            О нас
          </Link>
          <Link href="/" className="py-4">
            Контакты
          </Link>
        </div>

        <div className="w-6 h-6 p-6 relative self-center" onClick={menuHandler}>
          <div className="w-6 h-[2px] bg-white rotate-45 absolute"></div>
          <div className="w-6 h-[2px] bg-white -rotate-45 absolute"></div>
        </div>
      </div>
    </>
  )
}
