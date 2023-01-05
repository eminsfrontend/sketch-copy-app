import Button from "../singleComponent/button"

interface TitleAreaProps {
  title: string
  description: string
  buttonTitle: string
}

export default function TitleArea({
  title,
  description,
  buttonTitle,
}: TitleAreaProps) {
  return (
    <section className="container max-w-6xl mx-auto px-8 pt-24 min-h-[60vh]">
      <div className="flex flex-col w-full md:w-2/3 gap-y-8 text-dark">
        <h1 className="font-black text-titleMobile leading-titleMobile md:text-titleTablet md:leading-titleTablet lg:text-titleDesctop lg:leading-titleDesctop">
          {title}
        </h1>
        <p className="font-medium text-base leading-6 md:text-paragraphTitle md:leading-paragraphTitle">
          {description}
        </p>
      </div>
      <Button title={buttonTitle} />
    </section>
  )
}
