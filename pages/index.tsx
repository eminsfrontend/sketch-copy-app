import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  TitleArea,
  BigImageLayout,
  ImageTextGrid,
  ImageAndText,
  LabeledArea,
  FormArea,
} from "../components";
import { bigImageLayoutDirectionType } from "../components/layoutComponent/bigImageLayout";
import { ImagePositionOnBackground } from "../components/layoutComponent/imageAndText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Infoline Area */}
      <Link
        href="/"
        className="fixed px-8 md:px-0 py-4 md:py-2 bottom-0 left-0 md:relative w-full z-50 flex md:justify-center items-center min-h-10 bg-white md:bg-vivaMagenta shadow-extraLight"
      >
        <span className="text-dark font-bold text-xs flex items-center gap-x-1 md:text-white">
          Ready to create your best work?!
          <Image
            src="/accets/icons/arrow-right-white.svg"
            alt="right-arrow"
            width={24}
            height={24}
          />
        </span>
      </Link>

      {/* Heared Area */}
      <header className="bg-white md:bg-transparent fixed top-0 md:relative w-full z-50 bg-opacity-80 backdrop-blur-sm shadow-extraLight">
        <nav className="container max-w-6xl mx-auto px-8 lg:px-4 py-2 md:py-5 flex justify-between items-center">
          <div className="left-side flex gap-x-16 items-center">
            <div className="">
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
            </div>
            {/* Navigation Desctop */}
            <div className="hidden md:flex gap-x-10 text-dark font-bold text-sm">
              <Link href="/">Product</Link>
              <Link href="/">Learn</Link>
              <Link href="/">Apps</Link>
              <Link href="/">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="hidden md:block after:content-['|'] after:text-dark after:opacity-30 after:ml-6 after:font-bold">
              Right Side
            </div>
            {/* Create Button With fontSize options */}
            <button className="md:bg-black font-bold text-dark md:text-white underline md:no-underline text-sm py-4 md:py-3 md:px-3 md:rounded-md underline-offset-4">
              Get Started for Free
            </button>
          </div>
        </nav>
      </header>

      <main className="overflow-hidden">
        {/* Title Area */}
        <section className="container max-w-6xl mx-auto px-8 pt-24 min-h-[60vh]">
          <TitleArea
            title="Everything you need to prototype"
            description="Sketch gives you all the tools you need for a truly collaborative design process. From early ideas to pixel-perfect artwork, playable prototypes and developer handoff. It all starts here."
          />
          <Button title="Get Started for Free" />
        </section>

        {/* ------------------------------------ Slider Area (Not ready) ------------------------------------ */}

        {/* ------------------------------------ Area 1 ------------------------------------ */}
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.leading}
          bgImage="eye-bg"
          bgImageAlt="eye-background"
          bgImageWidth={2040}
          bgImageHeight={1150}
          mainImageOrVideo="real-time-collab-visual-v90"
          title="The all-in-one designer’s toolkit"
          description="More than just UI design tools – if you’re collaborating on new concepts, building beautiful prototypes or crafting the perfect app icon, we’ve got your whole design process covered."
          secondaryImage="native@2x"
          secondaryImageAlt="secondary-image"
          secondaryTitle="Native macOS editor"
          secondaryDescription="Create your best work with an intuitive UI, thoughtful
          features and all the benefits you’d expect from a great
          Mac app (like support for P3 color profiles, native font
          rendering, and super-fast Apple Silicon performance)."
          linkTo="/"
          linkTitle="Explore your design toolkit"
        />

        {/* ------------------------------------ Area 2 ------------------------------------ */}
        <ImageTextGrid
          leftArea={
            <ImageAndText
              secondaryImage="prototyping@2x"
              secondaryImageAlt="text-title-1"
              secondaryImagePosition={ImagePositionOnBackground.end}
              secondaryTitle="Prototyping"
              secondaryDescription="Bring your designs to life with easy-to-use tools. Test
              prototypes on your devices. Or share a link with others so they
              can try them out in any browser and give their feedback, for
              free. With no plugins required."
              linkTitle="Discover Prototyping in Sketch"
              linkTo="/"
            />
          }
          rightArea={
            <ImageAndText
              secondaryImage="collaboration@2x"
              secondaryImageAlt="text-title-2"
              secondaryTitle="Real-time collaboration"
              secondaryDescription="Work together in the same document, at the same time — right
              inside the Mac app. No hassle, no save conflicts, no pinging
              files back and forth. Just you, your collaborators, and an
              infinite Canvas to explore."
              linkTitle="See collaboration in action"
              linkTo="/"
            />
          }
        />

        {/* ------------------------------------ Area 3 ------------------------------------ */}
        <BigImageLayout
          imageDirection={bigImageLayoutDirectionType.trailing}
          bgImage="rectangular-shape-bg"
          bgImageAlt="rect-bg"
          bgImageWidth={773}
          bgImageHeight={773}
          mainImageOrVideo="handoff-visual-2"
          title="Scale up your design process"
          description="Bring your projects and people together, share feedback,
          hand off to developers, and build out beautiful design
          systems — all in one place."
          secondaryImage="workspaces@2x"
          secondaryImageAlt="workspace-alt"
          secondaryTitle="Workspaces"
          secondaryDescription="With a Sketch Workspace, you get a home for storing
          files, sharing ideas, getting feedback, managing your
          team, distributing Libraries, handing off to developers
          and exploring your Design System. It’s all included in
          your subscription."
          linkTo="/"
          linkTitle="See what a Workspace can do"
        />

        {/* ------------------------------------ Area 4 ------------------------------------ */}
        <ImageTextGrid
          leftArea={
            <ImageAndText
              secondaryImage="design-systems@2x"
              secondaryImageAlt="text-title-3"
              secondaryImagePosition={ImagePositionOnBackground.center}
              secondaryTitle="Design systems"
              secondaryDescription="Build out your design systems with reusable Styles and
              responsive Symbols. Manage them effortlessly on the Mac app or
              in the browser, share them with your team and update them
              everywhere in seconds."
              linkTitle="Discover design systems"
              linkTo="/"
            />
          }
          rightArea={
            <ImageAndText
              secondaryImage="collaboration@2x"
              secondaryImageAlt="text-title-2"
              secondaryTitle="Developer handoff"
              secondaryDescription="Invite developers to inspect and measure designs, then download
              production-ready assets, all for free. They don’t need the Mac
              app (or even a Mac) or third-party plugins. Just their favorite
              browser. And you know they have a favorite."
              linkTitle="Try developer handoff now"
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
              We’re always shipping new updates to Sketch. Here’s a selection of
              our latest features for you to explore.
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
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-0 ml-4 xl:mt-6">
                  Some link Info
                </div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-0 xl:mt-6"
                />
              </Link>
            </div>
            <div className="c2 rounded-2xl bg-black bg-opacity-[3%] flex flex-col justify-end pb-6 items-center relative overflow-hidden">
              <Image
                src="/accets/images/prototype-overlays-2@4x.avif"
                alt="icon12"
                width={494}
                height={312}
                className="absolute top-0 left-0 w-full"
              />
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-6">Some link Info</div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-6"
                />
              </Link>
            </div>
            <div className="c3 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/css.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-0 ml-4 xl:mt-6">
                  Some link Info
                </div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-0 xl:mt-6"
                />
              </Link>
            </div>
            <div className="c4 rounded-2xl bg-black bg-opacity-[3%] flex flex-col justify-end pb-6 items-center relative overflow-hidden">
              <Image
                src="/accets/images/sketch-for-iphone@4x.avif"
                alt="icon12"
                width={1114}
                height={778}
                className="absolute top-0 left-0 w-full"
              />
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-6">4 link</div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-6"
                />
              </Link>
            </div>
            <div className="c5 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/swatch.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-0 ml-4 xl:mt-6">
                  Some link Info
                </div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-0 xl:mt-6"
                />
              </Link>
            </div>
            <div className="c6 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/overrides.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-0 ml-4 xl:mt-6">
                  Some link Info
                </div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-0 xl:mt-6"
                />
              </Link>
            </div>
            <div className="c7 rounded-2xl bg-black bg-opacity-[3%] flex xl:flex-col justify-center items-center">
              <Image
                src="/accets/icons/artboard.template.32.svg"
                alt="icon12"
                width={48}
                height={48}
              />
              <Link
                href="/"
                className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
              >
                <div className="opacity-50 mt-0 ml-4 xl:mt-6">
                  Some link Info
                </div>
                <Image
                  src="/accets/icons/arrow-right.svg"
                  alt="right-arrow"
                  width={24}
                  height={24}
                  className="opacity-30 mt-0 xl:mt-6"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Short Info Section with Label */}
        <LabeledArea
          labelTitle="Extensions"
          title="Больше преимуществ в нашем подходе"
          description="Choose from hundreds of plugins, Assistants and integrations
          that let you do everything from animating interactions to making
          your designs more accessible."
          haslink={true}
          linkTo="/"
          linkTitle="Explore your design toolkit"
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
                    className="rounded-md"
                  />
                  <p className="text-dark font-medium text-base leading-6">
                    Inside Sketch: Long time no see? Discover the new Sketch
                  </p>
                </div>
                <div className="flex items-center gap-x-6 lg:px-11 pb-6 border-b border-black border-opacity-[15%]">
                  <Image
                    src="/accets/images/sketch-proud-to-be-independent-2022.avif"
                    alt="some-image"
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <p className="text-dark font-medium text-base leading-6">
                    Inside Sketch: Long time no see? Discover the new Sketch
                  </p>
                </div>
                <div className="flex items-center gap-x-6 lg:px-11 pb-6 last:border-none last:pb-0 border-b border-black border-opacity-[15%]">
                  <Image
                    src="/accets/images/sketch-proud-to-be-independent-2022.avif"
                    alt="some-image"
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <p className="text-dark font-medium text-base leading-6">
                    Inside Sketch: Long time no see? Discover the new Sketch
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-y-20 mt-20 lg:mt-0 md:px-32 lg:px-0">
              <div className="flex flex-col gap-y-6 px-5 md:px-0">
                <h2 className="text-dark font-black text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
                  Our blog
                </h2>
                <p className="text-dark font-medium text-base leading-6 md:text-lg md:leading-7">
                  The latest news, greatest tutorials and inspiration that’ll
                  make you say “I wish I’d done that!” From incredible things
                  you can make with Sketch, to insights from the people who make
                  Sketch happen.
                </p>
              </div>
            </div>
          </div>
          <LabeledArea
            labelTitle="Extensions"
            title="Больше преимуществ в нашем подходе"
            description="Choose from hundreds of plugins, Assistants and integrations
          that let you do everything from animating interactions to making
          your designs more accessible."
            haslink={false}
            linkTo="/"
            linkTitle="Explore your design toolkit"
          />
          <div className="container max-w-6xl mx-auto flex flex-col gap-y-16 mb-24 px-4 md:px-32 xl:px-64 lg:px-0">
            <form className="flex flex-col md:flex-row gap-y-4 gap-x-4 mt-8">
              <input
                type="tel"
                placeholder="Введите номер телефона"
                className="flex-3 px-4 py-3 w-full md:max-w-[300px] lg:max-w-[400px] rounded-md"
              />
              <button
                type="submit"
                className="flex-1 bg-black font-bold text-white text-base py-3 px-4 rounded-md"
              >
                Отправить запрос
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
