type DayCardProps = {
    image: string;
    texts: string[];
};

export default function DayCard ( {image, texts}: DayCardProps) {
    return (
        <div 
            className="flex flex-col items-center justify-center
            w-[238px] py-[32px] gap-[24px]
            rounded-[50px] border border-[#5CC9FF]
            shadow-[0px_0px_20px_0px_rgba(89,227,255,0.20)]
            backdrop-blur-[2.5px]
            bg-[linear-gradient(163deg,rgba(11,205,248,0.30)_2.1%,rgba(114,199,255,0.18)_47.96%,rgba(0,153,255,0.30)_93.81%)]
            "
        >
            <img src={image} alt="카드 이미지" className="w-[128px] h-[107px] object-contain" />
            <div className="text-center text-white text-[16px] flex flex-col gap-1">
                {texts.map((text,idx) => (
                    <div key={idx} className="text-body-m">{text}</div>
                ))}
            </div>
        </div>
    );
}