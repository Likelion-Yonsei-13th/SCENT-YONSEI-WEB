import TopBar from "@/app/_common/components/top-bar";
//import TrashBin from "@/app/_common/components/TrashBin";
//import BarrierFree from "@/app/_common/components/BarrierFree";
import Image from "next/image";

export default function LocationsPage() {
    return (
        <div className="relative main-background w-full h-full flex flex-col">
            <TopBar title='주요 시설 위치' bgClassName='backdrop-blur-md bg-white/20'/>
            
            <main className='mt-37.5 px-7 w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
                <div className='relative w-full h-[240px] flex rounded-[10px] bg-gray300'>
                    <Image
                        src={'/img/fullmap.png'}
                        alt='전체 지도'
                        fill
                        className='object-cover px-[7px] py-[25px]'
                     />
                </div>

            </main>
        </div>
    )
}