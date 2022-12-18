interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button className="bg-black font-bold text-white text-base py-3 px-4 rounded-md mt-8">
      {title}
    </button>
  );
}
