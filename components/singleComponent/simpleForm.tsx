import { ChangeEvent, useState } from "react"

export default function SimpleForm() {
  const [phone, setPhone] = useState<string>("")

  const setInputPlaceholder = () => {
    if (phone.length == 0) {
      setPhone("+7 ")
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  return (
    <form className="flex flex-col md:flex-row gap-y-4 gap-x-4 mt-8">
      <input
        type="tel"
        placeholder={"Введите номер телефона"}
        value={phone ? phone : ""}
        onChange={handleChange}
        onClick={setInputPlaceholder}
        className="flex-3 px-4 py-3 w-full md:max-w-[300px] lg:max-w-[400px] rounded-md"
      />
      <button
        type="submit"
        className="flex-1 bg-black font-bold text-white text-base py-3 px-4 rounded-md"
      >
        Отправить запрос
      </button>
    </form>
  )
}
