import {TopBar} from '@/app/_common/components/top-bar';
import DayCard from './components/day-card';
import {DayCardData} from './components/day-card-data';
import UnderBar from '@/app/_common/components/underbar';


export default function MainPage() {
    return(
        <div className='relative w-full h-full flex flex-col'>
            <TopBar title=''/>
            <main className='w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
                <div className="w-full mt-[121px]">
                    <img src="/img/mainpage/mainpage-logo.png" alt="메인페이지 로고" className="h-auto w-full" />
                </div>

                    <section className="w-full flex flex-col items-center gap-[48px] mt-10 mx-auto">
                    {DayCardData.map((card,idx) => (
                        <DayCard key={idx} image={card.image} texts={card.texts} />
                    ))}
                </section>
            

            <footer className='flex items-center justify-center'>
                <UnderBar />
            </footer>

            </main>
        </div>
    );
}