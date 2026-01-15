import hero from '@Assets/images/backgroundImage/another_hero.png';

function BannerTwo() {
  return (
    <div className="mb-20 flex bg-orange">
      {/* image section */}
      <div className="max-h-[600px] w-[50%]">
        <img
          className="h-full w-full object-contain"
          src={hero}
          alt={`${hero}.png`}
        />
      </div>
      {/* text section */}
      <div className="flex h-auto w-[50%] flex-col items-start justify-start gap-y-3 pt-20">
        <div className=" flex h-20 w-80 -skew-y-3 items-center bg-white">
          <h1 className="skew-y-3 px-4 font-poppins text-6xl font-black uppercase">
            Payday
          </h1>
        </div>
        <h1 className="px-4 font-poppins text-6xl font-black uppercase">
          Sale Now
        </h1>
        <p className="my-8 px-4 font-poppins text-xl font-medium leading-8 text-[#231300]">
          Spend minimal $100 get 30% off <br /> voucher code for your next
          purchase
        </p>
        <p className="px-4 font-poppins text-xl">
          <strong>1 June - 10 June 2021</strong> <br /> *Terms & Conditions
          apply
        </p>
        <button className="ml-4 mt-5 rounded-md bg-black px-4 py-2 font-poppins text-xl text-white transition-transform duration-100 ease-linear hover:scale-105 focus-visible:scale-105">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default BannerTwo;
