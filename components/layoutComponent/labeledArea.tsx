import CustomLink from "../singleComponent/customLink"

interface LabeledAreaProps {
  labelTitle: string
  title: string
  description: string
  haslink: boolean
  linkTo?: string
  linkTitle?: string
}

export default function LabeledArea({
  labelTitle,
  title,
  description,
  linkTo,
  linkTitle,
  haslink,
}: LabeledAreaProps) {
  return (
    <section className="container max-w-6xl mx-auto flex flex-col gap-y-16 ">
      <div className="flex flex-col gap-y-6 items-center">
        <div className="bg-black py-1 px-3 rounded-md bg-opacity-[5%] text-dark font-semibold text-xs uppercase tracking-wide">
          {labelTitle}
        </div>
        <div className="flex flex-col gap-y-6 px-4 md:px-32 xl:px-64 lg:px-0">
          <h2 className="text-dark font-black text-center text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
            {title}
          </h2>
          <p className="text-dark font-medium text-center text-base leading-6 md:text-lg md:leading-7">
            {description}
          </p>
        </div>
        {haslink ? (
          <CustomLink to={linkTo || ""} title={linkTitle || ""} />
        ) : null}
      </div>
    </section>
  )
}
