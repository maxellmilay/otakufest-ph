import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { OF24_LOGO } from '@/enums/imageUrls';

interface News {
    title: string;
    description: string;
    link: string;
}

interface CarouselBackgroundProps {
    news: News[];
    images: string[];
    currentIndex: number;
}

const CarouselBackground: React.FC<CarouselBackgroundProps> = ({
    news,
    images,
    currentIndex,
}) => {
    console.log(images[currentIndex]);
    if (currentIndex == 0) {
        return (
            <>
                <div className="absolute h-full w-full">
                    <Image
                        alt="image"
                        src="/smseaside.jpg"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col items-center  text-center h-full w-full p-10 mt-5 md:p-20">
                    <figure className="relative aspect-square w-[50vmin] hover:scale-125 duration-200">
                        <Image
                            src={OF24_LOGO}
                            alt="guest"
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <span className="md:text-[2.5vw] z-10">
                        Connecting the world, one hobby at a time
                    </span>
                    <span className="md:text-[1.5vw] z-10">
                        August 17-18, 2024 • SM Seaside Cebu
                    </span>
                </div>
                <div className="absolute bg-gradient-to-r from-black/60 to-transparent w-full h-full"></div>
            </>
        );
    } else {
        return (
            <>
                <div className="absolute h-full w-full">
                    <Image
                        alt="image"
                        src={images[currentIndex]}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute bg-gradient-to-r from-black/60 to-transparent w-full h-full"></div>
                <div className="absolute bottom-60 left-20 space-y-10">
                    <div className="text-7xl tracking-wide font-black">
                        <h1>{news[currentIndex].title}</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href={news[currentIndex].link} className="peer">
                            <div className="bg-black/40 rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 duration-300 hover:duration-300  ">
                                <FaArrowRight />
                            </div>
                        </a>
                        <a
                            href={news[currentIndex].link}
                            className="peer-hover:underline peer"
                        >
                            <span className="tracking-wide hover:underline ">
                                Read News
                            </span>
                        </a>
                    </div>
                </div>
            </>
        );
    }
};

export default CarouselBackground;
