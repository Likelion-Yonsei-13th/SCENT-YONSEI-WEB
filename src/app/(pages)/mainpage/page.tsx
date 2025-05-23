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
        <div className="w-full h-[530px] mt-[121px] bg-[url(/img/mainpage/mainpage-logo.png)] 
                        bg-gray-300 bg-blend-screen bg-cover bg-center bg-no-repeat">
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
