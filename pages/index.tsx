import Head from "next/head"
import Image from "next/image"
import {
  Button,
  TitleArea,
  BigImageLayout,
  ImageTextGrid,
  ImageAndText,
  LabeledArea,
  SimpleForm,
  InfoArea,
  Header,
} from "../components"
import { bigImageLayoutDirectionType } from "../components/layoutComponent/bigImageLayout"
import { ImagePositionOnBackground } from "../components/layoutComponent/imageAndText"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InfoArea />
      <Header />

      <main className="overflow-hidden">
        {/* ------------------------------------ Title Area ------------------------------------ */}
        <TitleArea
          title="Элитный ремонт в Москве и МО"
          description="Мы бригада профессиональных строителей. Более 30 лет строим и ремонтируем объекты бизнес и премиум класса. Реализуем проекты под ключ и участвуем в качестве приглашенных специалистов."
          buttonTitle="Получить консультацию"
        />

        {/* ------------------------------------ Area 1 ------------------------------------ */}
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.leading}
          mainImageOrVideo="real-time-collab-visual-v90"
          title="Весь комплекс работ в одном месте"
          description="От замеров до сданного объекта – все работы мы выполняем своими силами, либо с привлечением проверенных годами специалистов, работающих по нашим стандартам."
          secondaryImage="native@2x"
          secondaryImageAlt="secondary-image"
          secondaryTitle="Качество в каждой детали"
          secondaryDescription="Мы отвечаем за надежность создаваемых конкструкций и их долговечность, благодаря многоуровневому контролю качества и предлагаем нашим клиентам постоянный мониторинг состояния объекта после его сдачи."
          linkTo="/"
          linkTitle="Подробнее о наших стандартах"
        />

        {/* ------------------------------------ Area 2 ------------------------------------ */}
        <ImageTextGrid
          leftArea={
            <ImageAndText
              secondaryImage="prototyping@2x"
              secondaryImageAlt="text-title-1"
              secondaryImagePosition={ImagePositionOnBackground.end}
              secondaryTitle="По последним технологиям"
              secondaryDescription="Современное строительство и отделочные работы - это постоянно меняющиеся тренды и технологии. 
              Мы следим за новинками и предлагаем своим клиентам проверенные решения, сочетающие в себе технологичность, премиальность и удобство эксплуатации."
              linkTitle="Элементы премиального ремонта"
              linkTo="/"
            />
          }
          rightArea={
            <ImageAndText
              secondaryImage="collaboration@2x"
              secondaryImageAlt="text-title-2"
              secondaryTitle="В коллаборации с лучшими дизайнерами"
              secondaryDescription="Мы не держим в штате дизайнеров, а предпочитаем выбирать лучших специалистов в своей области. 
              Когда над каждым проектом работают одни и те же люди, результат начинает повторяться, а мы за свежие идеи и нестандартное мышление."
              linkTitle="Проекты с нашим участием"
              linkTo="/"
            />
          }
        />

        {/* ------------------------------------ Area 3 ------------------------------------ */}
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.trailing}
          mainImageOrVideo="handoff-visual-2"
          title="Персональный подход в работе"
          description="Создаем уникальные жилые пространства, в которых продумана каждая деталь. 
          Каждое решение выверено и решает задачи, поставленные вами перед проектной командой."
          secondaryImage="workspaces@2x"
          secondaryImageAlt="workspace-alt"
          secondaryTitle="Выбирайте сами степень участия"
          secondaryDescription="Мы можем выполнить строительные и отделочные работы с минимальным участием заказчика, либо с полным погружением в рабочие процессы - все зависит только от вашего времени и желания."
          linkTo="/"
          linkTitle="Подробнее о моделях взаимодействия"
        />

        {/* ------------------------------------ Area 4 ------------------------------------ */}
        <ImageTextGrid
          leftArea={
            <ImageAndText
              secondaryImage="design-systems@2x"
              secondaryImageAlt="text-title-3"
              secondaryImagePosition={ImagePositionOnBackground.center}
              secondaryTitle="Результат, соответствующий ожиданиям"
              secondaryDescription="Наш подход не вредставляет возможным старт ремонтных работ без дизайн-проекта. Чем детальнее проработан пакет документов, тем
              проще выполнить работы в строго указанные сроки без необходимости вносить серьезные правки."
            />
          }
          rightArea={
            <ImageAndText
              secondaryImage="collaboration@2x"
              secondaryImageAlt="text-title-2"
              secondaryTitle="Современные системы умного дома"
              secondaryDescription="В нашем понимании современный дом или квартира - это технологичное и безопасное пространство, где каждый элемент делает жизнь собственника проще и удобнее. 
              От входной двери, до принтера - мы можем продумать любые сценарии взаимодействия."
              linkTitle="Про умные технологии"
              linkTo="/"
            />
          }
        />

        {/* Grid Area */}
        <section className="container max-w-6xl mx-auto my-48 flex flex-col gap-y-16">
          <div className="flex flex-col gap-y-6 px-4 md:px-32 lg:px-0">
            <h3 className="text-dark font-black text-center text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
              Больше преимуществ
            </h3>
            <p className="text-dark font-medium text-center text-base leading-6 md:text-lg md:leading-7">
              Ощутите действительно премиальный сервис в области
              строительно-отделочных работ без лишнего пафоса.
            </p>
          </div>
          {/* Grid */}
          <div className="my-grid">
            <div className="c1 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/duplicate.document.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Документирование
              </div>
            </div>
            <div className="c2 rounded-2xl bg-black bg-opacity-[3%] flex flex-col justify-end pb-6 items-center relative overflow-hidden">
              <Image
                src="/accets/images/prototype-overlays-2@4x.avif"
                alt="icon12"
                width={494}
                height={312}
                className="absolute top-0 left-0 w-full"
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Отчетность по затратам и работам
              </div>
            </div>
            <div className="c3 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/css.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Авторский надзор
              </div>
            </div>
            <div className="c4 rounded-2xl bg-black bg-opacity-[3%] flex flex-col justify-end pb-6 items-center relative overflow-hidden">
              <Image
                src="/accets/images/sketch-for-iphone@4x.avif"
                alt="icon12"
                width={1114}
                height={778}
                className="absolute top-0 left-0 w-full"
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Поэтапная сдача работ
              </div>
            </div>
            <div className="c5 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/swatch.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Комплектация объекта
              </div>
            </div>
            <div className="c6 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/overrides.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Соблюдение сроков
              </div>
            </div>
            <div className="c7 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/artboard.template.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <div className="opacity-50 lg:mt-6 ml-2 lg:ml-0 cursor-pointer text-dark font-bold text-base leading-6 flex justify-center items-center gap-x-1">
                Личный кабинет{" "}
                <span className="text-xs mb-2 opacity-60">Скоро</span>
              </div>
            </div>
          </div>
        </section>

        {/* Short Info Section with Label */}
        <LabeledArea
          labelTitle="Стоимость работ"
          title="Цена / качество"
          description="Мы не предлагаем дешевых услуг, но ценим каждый рубль, вложенный в ваше будущее жилище. 
          Гибко подходим к вопросу ценообразования и индивидуально расчитываем стоимость работ по каждому объекту."
          haslink={true}
          linkTo="/"
          linkTitle="Подробнее о ценах"
        />

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
                    Знакомство с клиентом, проведение замеров, подписание
                    договора о сотрудничестве.
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
                    Подбор дизайнера и подготовка дизайн-проекта объекта, 3d
                    визуализация.
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
                    Подготовка детальной сметы, обсуждение этапов работ и
                    оплаты.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-20 mt-20 lg:mt-0 md:px-32 lg:px-0">
              <div className="flex flex-col gap-y-6 px-5 md:px-0">
                <h2 className="text-dark font-black text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
                  Порядок взаимодействия
                </h2>
                <p className="text-dark font-medium text-base leading-6 md:text-lg md:leading-7">
                  У нас подготовлен давно зарекомендовавший себя алгоритм
                  действий, который приведет нас шаг за шагом к результату - от
                  знакомства до сдачи готового объекта.
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
