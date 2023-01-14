import Head from "next/head"
import Image from "next/image"
import {
  Header,
  ImageAndText,
  ImageTextGrid,
  InfoArea,
  LabeledArea,
  SimpleForm,
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
                secondaryDescription="Высочайший уровень мастерства наших специалистов в сочетании с детальным планированием работ и расчетом всех элементов до милиметров. 
                В работах применяются материалы премиального уровня и финишные покрытия из натурального камня и дерева. Реализовываются дизайнерские идеи и индивидуальные решения."
              />
            }
            rightArea={
              <ImageAndText
                secondaryImage="collaboration@2x"
                secondaryImageAlt="text-title-2"
                secondaryTitle="Эксклюзив - от 35 000 руб. за кв. м."
                secondaryDescription="Все работы премиального уровня, но в финишных решениях могут применяться более экслюзивные идеи, 
                начиная с нестандартных напольных покрытий, заканчивая огромными широкоформатными слэбами. Это еще более высокая ответственность, 
                так как работы ведутся с ограниченными лотами и каждая ошибка несет как материальные потери, 
                так и простои в ожидании доставки эксклюзивной продукции."
              />
            }
          />
        </div>

        <div className="mt-32 border-t border-t-black border-opacity-[15%]"></div>

        <div className="mt-32">
          <LabeledArea
            labelTitle="Честный подход"
            title="Один объект - одно финансирование"
            description="Мы не перераспределяем средства между разными объектами, а внутренняя система мотивации сотрудников построена так, что в интересах каждого специалиста выполнить работы с высочайшим коэффициентом качества и в установленные сроки, либо быстрее."
            haslink={false}
          />
        </div>

        {/* Form Area */}
        <section className="bg-black bg-opacity-[3%] py-16 mt-24 border-t border-black border-opacity-[15%]">
          <div className="container max-w-6xl mx-auto mb-32 flex flex-col-reverse lg:flex-row-reverse justify-between lg:items-center lg:gap-x-20">
            <div className="lg:flex-1 py-10 px-4 md:px-32 lg:px-0 lg:border-l lg:border-black lg:border-opacity-[15%]">
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-6 lg:px-11 pb-6 border-b border-black border-opacity-[15%]">
                  <Image
                    src="/accets/images/sketch-proud-to-be-independent-2022.avif"
                    alt="some-image"
                    width={64}
                    height={64}
                    className="rounded-md shrink-0"
                  />
                  <p className="text-dark font-medium text-base leading-6">
                    Алгоритм работ давно продуман и каждый специалист
                    подключается в нужный период строительных работ.
                  </p>
                </div>
                <div className="flex items-center gap-x-6 lg:px-11 pb-6 border-b border-black border-opacity-[15%]">
                  <Image
                    src="/accets/images/sketch-proud-to-be-independent-2022.avif"
                    alt="some-image"
                    width={64}
                    height={64}
                    className="rounded-md shrink-0"
                  />
                  <p className="text-dark font-medium text-base leading-6">
                    Двухсторонний контроль качества на входе и выходе. Все
                    процессы прописаны и максимально автоматизированы.
                  </p>
                </div>
                <div className="flex items-center gap-x-6 lg:px-11 pb-6 last:border-none last:pb-0 border-b border-black border-opacity-[15%]">
                  <Image
                    src="/accets/images/sketch-proud-to-be-independent-2022.avif"
                    alt="some-image"
                    width={64}
                    height={64}
                    className="rounded-md shrink-0"
                  />
                  <p className="text-dark font-medium text-base leading-6">
                    Поэтапная оплата работ и материалов - выступает своего рода
                    гарантом нашей заинтересованности в достижении целей в
                    сроки.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-20 mt-20 lg:mt-0 md:px-32 lg:px-0">
              <div className="flex flex-col gap-y-6 px-5 md:px-0">
                <h2 className="text-dark font-black text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
                  Поэтапная сдача объекта
                </h2>
                <p className="text-dark font-medium text-base leading-6 md:text-lg md:leading-7">
                  Делим всесь строительный процесс на логические этапы, заранее
                  прогнозируя сроки, финансовые вложения и результат каждого
                  этапа.
                </p>
              </div>
            </div>
          </div>
          <LabeledArea
            labelTitle="В подарок первый месяц авторского надзора"
            title="Оставьте заявку на ремонтные работы"
            description="Получите профессиональную консультацию и ответы на все вопросы. Для этого достаточно оставить контактный номер телефона и наш специалист перезвонит в течение 10 минут."
            haslink={false}
            linkTo="/"
            linkTitle="Explore your design toolkit"
          />
          <div className="container max-w-6xl mx-auto flex flex-col gap-y-16 mb-24 px-4 md:px-32 xl:px-64 lg:px-0">
            <SimpleForm />
          </div>
        </section>
      </main>
    </>
  )
}
