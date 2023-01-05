import Head from "next/head"
import {
  BigImageLayout,
  Header,
  ImageAndText,
  ImageTextGrid,
  InfoArea,
  LabeledArea,
  SimpleForm,
  TitleArea,
} from "../components"
import { bigImageLayoutDirectionType } from "../components/layoutComponent/bigImageLayout"
import { ImagePositionOnBackground } from "../components/layoutComponent/imageAndText"

export default function Service() {
  return (
    <>
      <Head>
        <title>Услуги по элитному ремонту квартир в Москве</title>
        <meta
          name="description"
          content="Перечень услуг по элитному ремонту под ключ в Москве"
        />
        <link rel="icon" href="" />
      </Head>

      <InfoArea />
      <Header />
      <main className="overflow-hidden">
        <TitleArea
          title="Отделочные работы под ключ"
          description="Мы предлагаем строительные и отделочные работы любой сложности на объектах от бизнес до элитного уровня в Москве и Московской области."
          buttonTitle="Персональная консультация"
        />
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.leading}
          mainImageOrVideo="real-time-collab-visual-v90"
          title="Ремонт студии"
          description="Отделочные работы на небольших объектах требуют особого подхода - продуманный дизайн, качественные материалы, правильные напольные и настенные покрытия, сценарии освещения, цветовые решения и многое другое."
          secondaryTitle="Мы в этом профи"
          secondaryDescription="Наш опыт насчитывает более 15 объектов площадью до 35 кв.м. Поэтому проектная команда быстро и качественно сдаст объкт максимально соответствующий эскизам. Одна из немаловажных задач - сохранить бесценное квадратные метры и высоту потолков, используя новейшие технологии в отделочных работах."
          linkTo="/"
          linkTitle="Запросить выезд специалиста"
        />
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.trailing}
          mainImageOrVideo="real-time-collab-visual-v90"
          title="Ремонт квартиры с 1-2 комнатами"
          description="Чаще всего даже в элитных жилых комплексах на объектах требуется грамотная перепланировка пространства с учетов всех пожеланий заказчика - начиная с состава семьи, заканчивая интересами и образом жизни. Мы предложим полный перечень услуг: начиная с планировочных решений, заканчивая возведением перегородок и установкой звукоизоляции."
          secondaryTitle="Контроль качества с первого дня"
          secondaryDescription="Средний опыт в строительной сфере наших сотрудников 20 лет, опыт ответственного за ведение проекта специалиста не менее 30 лет - мы отвечаем за качество и безопасность наших конструкций и постоянно развиваем наш персонал."
          linkTo="/"
          linkTitle="Оставить заявку на ремонт"
        />
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.leading}
          mainImageOrVideo="real-time-collab-visual-v90"
          title="Ремонт квартир с 3 и более комнат"
          description="Отделочные работы на небольших объектах требуют особого подхода - продуманный дизайн, качественные материалы, правильные напольные и настенные покрытия, сценарии освещения, цветовые решения и многое другое."
          secondaryTitle="Мы в этом профи"
          secondaryDescription="Наш опыт насчитывает более 15 объектов площадью до 35 кв.м. Поэтому проектная команда быстро и качественно сдаст объкт максимально соответствующий эскизам. Одна из немаловажных задач - сохранить бесценное квадратные метры и высоту потолков, используя новейшие технологии в отделочных работах."
          linkTo="/"
          linkTitle="Запросить выезд специалиста"
        />
        <ImageTextGrid
          leftArea={
            <ImageAndText
              secondaryImage="prototyping@2x"
              secondaryImageAlt="text-title-1"
              secondaryImagePosition={ImagePositionOnBackground.end}
              secondaryTitle="Строительство и ремонт частных домов"
              secondaryDescription="Мы не держим в штате дизайнеров, а предпочитаем выбирать лучших специалистов в своей области. 
              Когда над каждым проек."
            />
          }
          rightArea={
            <ImageAndText
              secondaryImage="collaboration@2x"
              secondaryImageAlt="text-title-2"
              secondaryTitle="Отделочные работы в коммерческих помещениях"
              secondaryDescription="Мы не держим в штате дизайнеров, а предпочитаем выбирать лучших специалистов в своей области. 
              Когда над каждым проектом работают одни и те же люди, результат начинает повторяться, а мы за свежие идеи и нестандартное мышление."
            />
          }
        />

        <div className="mt-32">
          <LabeledArea
            labelTitle="Технологии"
            title="По последним технологиям"
            description="Если вы хотите создать жилое пространство наполненое смыслом и технологиями, позволяющими сделать ваш быт комфортнее, то мы думаем в одном направлении. В наших интерьерах эстетическое удовольствие сочетается с функциональностью и практичностью."
            haslink={true}
            linkTo="/"
            linkTitle="Элементы премиального ремонта"
          />
        </div>

        <section className="bg-black bg-opacity-[3%] py-16 mt-24 border-t border-black border-opacity-[15%]">
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
