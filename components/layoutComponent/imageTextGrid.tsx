interface ImageTextGridProps {
  leftArea: React.ReactNode;
  rightArea: React.ReactNode;
}

export default function ImageTextGrid({
  leftArea,
  rightArea,
}: ImageTextGridProps) {
  return (
    <section className="px-4 md:px-0">
      <div className="container max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-y-16 lg:gap-y-0 lg:gap-x-20 md:px-32 lg:px-0">
        {leftArea}
        {rightArea}
      </div>
    </section>
  );
}
