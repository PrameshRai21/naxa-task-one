import trend from '@Assets/images/cardImage/trend.png';
import under from '@Assets/images/cardImage/under.png';
import leaf from '@Assets/images/logo/leaf.png';
import { ArrowRight } from 'lucide-react';

type ClothesTypes = {
  img: string;
  title: string;
};

const clothes: ClothesTypes[] = [
  { img: trend, title: 'Trending on Instagram' },
  { img: under, title: 'All under $40' },
];

function YoungFavorite() {
  return (
    <div className="mb-10 px-20">
      {/* title section */}
      <div>
        <h1 className="relative z-50 font-poppins text-4xl font-black ">
          Young's Favorite
        </h1>
        <img
          className="h-8 w-28 -translate-y-6 translate-x-52 object-contain"
          src={leaf}
          alt=""
        />
      </div>
      {/* card section */}
      <div className="mt-16 flex gap-10 ">
        {clothes.map((cloth, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-5 rounded-lg p-1 pb-4 transition-all duration-150 ease-linear hover:scale-[101%] hover:shadow-2xl"
          >
            <img src={cloth.img} alt={`${cloth.img}.png`} />
            <div className="flex justify-between">
              <div className="flex flex-col gap-y-2">
                <h3 className="font-poppins text-xl font-medium text-dark">
                  {cloth.title}
                </h3>
                <p className="focus-visible::cursor-pointer font-poppins text-base font-medium text-greyColor transition-all duration-150 ease-linear hover:cursor-pointer hover:text-dark focus-visible:text-dark">
                  Explore Now!
                </p>
              </div>
              <div className="flex items-center justify-center ">
                <ArrowRight className="text-bold text-greyColor transition-all duration-150 ease-linear hover:scale-105 hover:text-dark focus-visible:scale-105 focus-visible:text-dark" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YoungFavorite;
