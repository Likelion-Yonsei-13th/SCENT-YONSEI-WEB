import { TopBar } from '@/app/_common/components/top-bar';

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopBar
        title='주요 시설 위치'
        bgClassName='backdrop-blur-md bg-white/20'
      />
      {children}
    </>
  );
}
