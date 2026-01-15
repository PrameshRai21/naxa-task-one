import appStore from '@Assets/images/logo/appstore.png';
import playStore from '@Assets/images/logo/playstore.png';
import mobile from '@Assets/images/backgroundImage/Mobile app.png';

function Voucher() {
  return (
    <div className="mb-10 flex px-20">
      <div className="flex w-[50%] items-center justify-start">
        <div className="flex flex-col gap-y-10">
          <h1 className="font-poppins text-4xl font-black uppercase leading-snug tracking-wider">
            DOWNLOAD APP & <br />
            GET THE VOUCHER!
          </h1>
          <p className="font-poppins text-xl text-greyColor">
            Get 30% off for first transaction using <br />
            Rondovision mobile app for now.
          </p>
          <div className="flex h-12 max-w-44 gap-x-5">
            <img
              className="h-full w-full object-contain transition-all duration-150 ease-linear hover:scale-105 focus-visible:scale-105"
              src={appStore}
              alt={`${appStore}.png`}
            />
            <img
              className="h-full w-full object-contain  transition-all duration-150 ease-linear hover:scale-105 focus-visible:scale-105"
              src={playStore}
              alt={`${playStore}.png`}
            />
          </div>
        </div>
      </div>
      <div className="h-[500px] w-[50%]">
        <img
          className="h-full w-full object-contain"
          src={mobile}
          alt={`${mobile}.png`}
        />
      </div>
    </div>
  );
}

export default Voucher;
