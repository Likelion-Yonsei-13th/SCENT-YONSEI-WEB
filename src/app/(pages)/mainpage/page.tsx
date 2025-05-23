import {TopBar} from '@/app/_common/components/top-bar';
import DayCard from './components/day-card';
import {DayCardData} from './components/day-card-data';
import UnderBar from '@/app/_common/components/underbar';
import Button from './components/button';



export default function MainPage() {
  return (
    <div className="mainpage-background min-h-screen w-full">
      <TopBar title="" />

      <main className="flex flex-col">
        <div className="w-full mt-[121px]">
          <img
            src="/img/mainpage/mainpage-logo.png"
            alt="메인페이지 로고"
            className="h-auto w-full"
          />
        </div>

        <section className="w-full flex flex-col items-center gap-[48px] mt-10 mx-auto">
          {DayCardData.map((card, idx) => (
            <DayCard key={idx} image={card.image} texts={card.texts} />
          ))}
        </section>

        <div className="flex flex-col items-center gap-[22px] mt-[57px] mb-[87px]">
          <Button href="/booth">
          부스 정보 보러가기
          </Button>

          <Button href="/booth">
          공연 정보 보러가기
          </Button>
        </div>

      </main>
      <footer className="flex items-center justify-center">
          <UnderBar />
      </footer>
    </div>
  );
}
