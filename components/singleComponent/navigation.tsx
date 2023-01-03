import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [popup, setPopup] = useState<boolean>(false)

  const handlePopup = () => {
    setPopup((prev) => !prev)
  }

  return (
    <div className="hidden md:flex items-center gap-x-4 xl:gap-x-10 text-dark font-bold text-sm">
      <Link href="/">Услуги</Link>
      <Link href="/">Проекты</Link>
      <Link href="/">Цены</Link>
      <div className="relative xl:hidden">
        {/* Dots */}
        <div className="flex gap-x-1 py-2 lg:hidden" onClick={handlePopup}>
          <div className="w-1 h-1 rounded-full bg-dark" />
          <div className="w-1 h-1 rounded-full bg-dark" />
          <div className="w-1 h-1 rounded-full bg-dark" />
        </div>
        <div
          className={`
             absolute top-6 w-32 px-2 py-4 shadow-light border border-black border-opacity-10
            ${popup ? "flex flex-col gap-y-2" : "hidden"}
        `}
        >
          <Link href="/">О нас</Link>
          <Link href="/">Контакты</Link>
        </div>
      </div>
      <div className="hidden ml-4 lg:ml-0 lg:flex gap-x-4 xl:gap-x-10">
        <Link href="/">О нас</Link>
        <Link href="/">Контакты</Link>
      </div>
    </div>
  )
}
