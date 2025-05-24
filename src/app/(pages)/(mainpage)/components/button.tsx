import Link from 'next/link';

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex justify-center items-center gap-[83px]
                 px-4 py-[10px] rounded-full border border-[#DFF4FF] bg-white
                 shadow-[0px_0px_8px_rgba(27,165,225,0.5)]
                 cursor-pointer"
    >
        <span className="text-[14px] font-semibold leading-[18px] text-[#0762AD]">
        {children}</span>
    </Link>
  );
}

