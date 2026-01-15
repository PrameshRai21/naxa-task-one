import Header from '@Components/common/Header';
import hero from '@Assets/images/backgroundImage/hero.png';

function HeroLayout() {
  return (
    <div className="mb-10 px-20">
      <Header />
      <div className="flex min-h-[600px] w-full rounded-3xl bg-greyColor ">
        {/* text-section */}
        <div className="flex w-[50%] flex-col items-start justify-start px-20 pt-20">
          <div className="-py-1 min-w-72 -rotate-2 -skew-x-3 overflow-hidden bg-white">
            <h1 className=" rotate-2 skew-x-3 px-4 font-poppins text-6xl font-black uppercase leading-tight">
              Let's
            </h1>
          </div>
          <h1 className="px-4 font-poppins text-6xl font-black uppercase leading-tight">
            Explore
          </h1>
          <div className="-py-1 min-w-80 -rotate-2 -skew-x-3 overflow-hidden bg-orange">
            <h1 className="rotate-2 skew-x-3 px-4 font-poppins text-6xl font-black uppercase leading-tight">
              Unique
            </h1>
          </div>
          <h1 className="px-4 font-poppins text-6xl font-black uppercase leading-tight">
            Clothes.
          </h1>
          <p className="my-6 px-4 font-poppins text-xl font-normal text-[#191818]">
            Live for Influential and Innovative fashion!
          </p>
          <button className="ml-4 rounded-md bg-black px-4 py-2 font-poppins text-xl text-white transition-transform duration-100 ease-linear hover:scale-105 focus-visible:scale-105">
            Shop Now
          </button>
        </div>
        {/* image section */}
        <div className="flex w-[50%] flex-col justify-end overflow-hidden">
          <div className="min-h-[90%] w-[90%] ">
            <img
              className="h-full w-full translate-y-8 object-contain"
              src={hero}
              alt="hero.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroLayout;
