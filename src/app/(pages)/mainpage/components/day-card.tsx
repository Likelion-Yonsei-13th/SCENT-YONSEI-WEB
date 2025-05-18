type TextLine = {
    content: string;
    type: 'title'|'time';
};

export type DayCardProps = {
    image: string;
    texts: TextLine[];
};

export default function DayCard ( {image, texts}: DayCardProps) {
    return (
        <div 
            className="flex flex-col items-center justify-center
            w-[238px] py-[32px] gap-[24px]
            rounded-[50px] border border-[#7AD3FF]
            shadow-[0_0_20px_0_rgba(89,227,255,0.20)]
            backdrop-blur-[2.5px]
            bg-[linear-gradient(163deg,rgba(11,205,248,0.30)_2.1%,rgba(114,199,255,0.18)_47.96%,rgba(0,153,255,0.30)_93.81%)]
            "
        >
            <img src={image} alt="카드 이미지" className="w-[128px] h-[107px] object-contain" />
            
            <div className="text-center flex flex-col items-center">
                {texts.map((text,idx) => {
                    const isSpacer = texts.length === 4 && idx === 2;

                    const classMap = {
                        title: 'text-white text-center font-pretendard text-[16px] font-bold leading-[20px] my-1',
                        time: 'text-white text-center font-pretendard text-[14px] font-normal leading-[18px]',
                    };

                    return (
                        <>
                            {isSpacer && <div className="h-4"/>}
                            <div className={classMap[text.type]}>{text.content}</div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}