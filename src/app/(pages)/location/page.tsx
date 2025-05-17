import TopBar from "@/app/_common/components/top-bar";

export default function LocationsPage() {
    return (
        <div className="w-full h-full flex flex-col">
            <TopBar title='주요 시설 위치' bgClassName='backdrop-blur-md bg-white/20'/>
            <main className='px-7 w-full flex flex-col overflow-y-auto scrollbar-hide scroll-smooth'>
                <Image src={'/img/fullmap.png'} />
            </main>

        </div>

    )
}