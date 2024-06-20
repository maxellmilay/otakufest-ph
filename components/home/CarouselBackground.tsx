import { FaArrowRight } from 'react-icons/fa6';
import Image from 'next/image';
import { OF24_LOGO } from '@/enums/imageUrls';
import { SPONSOR } from '@/enums/imageUrls';

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

    return (
        <>
            <div className="absolute h-full w-full ">
                <Image
                    alt="image"
                    src={images[currentIndex]}
                    fill
                    className="object-cover "
                />
            </div>
            {currentIndex == 0 && (
                <div className="flex flex-col items-center justify-center sm:justify-normal  text-center h-full w-full p-10  md:p-20">
                    <figure className="relative aspect-square w-[50vmin] cursor-pointer z-10 hover:scale-125 duration-200 xs:mt-8">
                        <Image
                            src={OF24_LOGO}
                            alt="guest"
                            fill
                            className="object-cover "
                        />
                    </figure>

                    <span className="md:text-[2.5vw] z-10 text-[0.8rem] xs:font-semibold ">
                        Connecting the world, one hobby at a time
                    </span>
                    <div className="flex space-x-1 items-center">
                        <span className="md:text-[1.5vw] text-[0.7rem] xs:font-semibold z-10">
                            August 17-18, 2024 •
                        </span>
                        <figure className="sm:w-52 w-32   z-10">
                            <Image
                                src={SPONSOR.SM_SEASIDE}
                                alt="sm-seaside logo"
                                width={200}
                                height={200}
                            />
                        </figure>
                    </div>
                </div>
            )}

            <div className="absolute bg-gradient-to-r from-black/60 to-transparent w-full h-full"></div>
            {currentIndex != 0 && (
                <div className="absolute bottom-60 left-10 md:left-20 space-y-10">
                    <div className="text-5xl xs:text-6xl md:text-7xl tracking-wide font-black">
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
            )}
        </>
    );
};

export default CarouselBackground;
