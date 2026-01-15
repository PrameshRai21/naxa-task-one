import leaf from '@Assets/images/logo/leaf.png';
import hoodie from '@Assets/images/cardImage/hoodie.png';
import coat from '@Assets/images/cardImage/coat.png';
import tshirt from '@Assets/images/cardImage/t-shirt.png';
import { ArrowRight } from 'lucide-react';

type ClothesTypes = {
  img: string;
  title: string;
};

const clothes: ClothesTypes[] = [
  { img: hoodie, title: 'Hoodies & Sweetshirt' },
  { img: coat, title: 'Coats and Parkas' },
  { img: tshirt, title: 'Tees & T-Shirts' },
];

function NewArrival() {
  return (
    <div className="mx-20 mb-10 flex flex-col gap-y-20 bg-white">
      {/* head section */}
      <div>
        <h1 className="relative z-50 font-poppins text-4xl font-black uppercase">
          New Arrival
        </h1>
        <img
          className="h-8 w-28 -translate-y-5 translate-x-36 object-contain"
          src={leaf}
          alt=""
        />
      </div>
      {/* card section */}
      <div className="flex gap-24">
        {clothes.map((cloth, index) => (
          <div
            key={index}
            className="flex h-auto w-96 flex-col gap-y-7 rounded-lg p-1 transition-all duration-150 ease-linear hover:scale-[101%] hover:shadow-2xl"
          >
            <div>
              <img src={cloth.img} alt={`${cloth.img}.png`} />
            </div>
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

export default NewArrival;
