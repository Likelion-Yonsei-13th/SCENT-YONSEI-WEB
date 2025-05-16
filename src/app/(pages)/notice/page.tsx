import TopBar from '@/app/_common/components/top-bar';
import CampusFilter from './_components/CampusFilter';

export default function Notice() {
  return (
    <main>
      <TopBar title='공지사항' bgClassName='bg-white/20 backdrop-blur-md p-4' />
      <section className='p-4'>
        <CampusFilter />
      </section>
    </main>
  );
}
