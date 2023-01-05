import Head from "next/head"
import {
  Header,
  ImageAndText,
  ImageTextGrid,
  InfoArea,
  TitleArea,
} from "../components"
import { ImagePositionOnBackground } from "../components/layoutComponent/imageAndText"

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
        <div className="mt-32">
          <ImageTextGrid
            leftArea={
              <ImageAndText
                secondaryImage="prototyping@2x"
                secondaryImageAlt="text-title-1"
                secondaryImagePosition={ImagePositionOnBackground.end}
                secondaryTitle="Премиум - от 20 000 руб. за кв. м."
                secondaryDescription="Мы не держим в штате дизайнеров, а предпочитаем выбирать лучших специалистов в своей области. 
              Когда над каждым проек."
              />
            }
            rightArea={
              <ImageAndText
                secondaryImage="collaboration@2x"
                secondaryImageAlt="text-title-2"
                secondaryTitle="Эксклюзив - от 35 000 руб. за кв. м."
                secondaryDescription="Мы не держим в штате дизайнеров, а предпочитаем выбирать лучших специалистов в своей области. 
              Когда над каждым проектом работают одни и те же люди, результат начинает повторяться, а мы за свежие идеи и нестандартное мышление."
              />
            }
          />
        </div>
      </main>
    </>
  )
}
