interface FormAreaProps {
  title: string
  description: string
}

export default function FormArea({ title, description }: FormAreaProps) {
  return (
    <div className="flex flex-col w-full md:w-2/3 gap-y-8 text-dark">
      <h2 className="text-dark font-black text-center text-subtitleMobile leading-subtitleMobile md:text-subtitleTablet md:leading-subtitleTablet lg:text-subtitleDesctop lg:leading-subtitleDesctop">
        {title}
      </h2>
      <p className="text-dark font-medium text-center text-base leading-6 md:text-lg md:leading-7">
        {description}
      </p>
    </div>
  )
}
