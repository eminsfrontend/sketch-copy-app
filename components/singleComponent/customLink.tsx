import Image from "next/image";
import Link from "next/link";

interface CustomLinkProps {
  to: string;
  title: string;
}

export default function CustomLink({ to, title }: CustomLinkProps) {
  return (
    <Link
      href={to}
      className="text-dark font-bold text-base leading-6 flex items-center gap-x-1"
    >
      {title}
      <Image
        src="/accets/icons/arrow-right.svg"
        alt="right-arrow"
        width={24}
        height={24}
        className="opacity-30"
      />
    </Link>
  );
}
