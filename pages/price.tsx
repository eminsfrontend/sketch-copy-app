import Head from "next/head"
import { Header, InfoArea, TitleArea } from "../components"

export default function Price() {
  return (
    <>
      <Head>
        <title>Стоимость элитного ремонта в Москве</title>
        <meta
          name="description"
          content="Сколько стоит элитный ремонт квартиры в Москве"
        />
        <link rel="icon" href="" />
      </Head>
      <Header />
      <main className="overflow-hidden">
        <TitleArea
          title="Стоимость элитного ремонта в Москве"
          description="Хотим обратить ваше внимание, что в ремонтных работах подобного уровня не существует четких границ. Каждый проект - индивидуальная смета и очень много элементов влияет на финальную цену."
          buttonTitle="Рассчитать стоимость работ"
        />
        <div className="text-dark container max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:gap-x-6">
          <div className="bg-green bg-opacity-80 p-10 flex flex-col flex-1 w-full rounded-xl">
            <h2 className=" font-black  text-3xl leading-7 text-center">
              Премиум
            </h2>
            <div className="flex justify-center  gap-x-6 my-6 p-4">
              <div className="font-bold font-montserrat text-dark text-2xl">
                20 000
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg">За квадратный метр</span>
                <span>стоимость работ </span>
              </div>
            </div>
          </div>
          <div className="bg-green bg-opacity-80 p-10 flex flex-1 justify-center w-full rounded-xl">
            <h2 className="text-dark font-bold text-xl leading-7">Эксклюзив</h2>
          </div>
        </div>
      </main>
    </>
  )
}
