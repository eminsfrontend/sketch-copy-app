interface TextInfoProps {
  title: string;
  description: string;
}

export default function TextInfo({ title, description }: TextInfoProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <h3 className="text-dark font-bold text-lg leading-7">{title}</h3>
      <p className="text-dark font-medium text-base leading-6">{description}</p>
    </div>
  );
}
