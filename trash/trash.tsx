import Image from "next/image"

;<section className="bg-black bg-opacity-[3%] py-16 border-t border-black border-opacity-[15%]">
  <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row-reverse justify-between lg:items-center lg:gap-x-20">
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
          The latest news, greatest tutorials and inspiration that’ll make you
          say “I wish I’d done that!” From incredible things you can make with
          Sketch, to insights from the people who make Sketch happen.
        </p>
      </div>
    </div>
  </div>
  {/* Form Area */}
  <div className="max-w-6xl mx-auto px-4 lg:px-0 my-10 min-h-[50vh] md:min-h-[40vh] lg:min-h-[70vh] lg:h-[70vh]">
    <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-green h-full py-12">
      {/* Round Background */}
      <div className="green-round absolute -bottom-[150px] -left-[100px] md:-bottom-[350px] md:-left-[200px] lg:-bottom-[500px] lg:-left-[200px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] rounded-full"></div>
      {/* Form */}
      <div className="w-full px-10 md:px-24 lg:px-64 z-40 flex flex-col gap-y-6">
        <h2 className="text-dark font-black text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
          Create your Workspace for free
        </h2>
        <p className="text-dark font-medium text-base leading-6 md:text-paragraphTitle md:leading-paragraphTitle">
          Whether you're new to Sketch, or back to see what’s new, we’ll have
          you set up and ready to do your best work in minutes.
        </p>
        <form className="flex flex-col md:flex-row gap-y-4 gap-x-4">
          <input
            placeholder="Введите номер телефона"
            className="flex-3 px-4 py-3 w-full md:max-w-[300px] lg:max-w-[400px] rounded-md"
          />
          <button className="flex-1 bg-black font-bold text-white text-base py-3 px-4 rounded-md">
            Отправить запрос
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
