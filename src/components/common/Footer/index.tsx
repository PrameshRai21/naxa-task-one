import fb from '@Assets/images/socialMediaIcons/fb.png';
import insta from '@Assets/images/socialMediaIcons/insta.png';
import twitter from '@Assets/images/socialMediaIcons/twitter.png';
import linkedIn from '@Assets/images/socialMediaIcons/linkedIn.png';

const socials = [fb, insta, twitter, linkedIn];

const first = ['Company', 'About', 'Contact Us', 'Support', 'Careers'];
const second = [
  'Quick Links',
  'Share Locations',
  'Orders Tracking',
  'Size Guide',
  'FAQs',
];
const third = ['Legal', 'Terms and Conditions', 'Privacy Policy'];

function Footer() {
  return (
    <div className="flex h-[350px] w-full items-center justify-center bg-dark font-poppins text-white">
      {/* front div */}
      <div className="flex w-[50%] flex-col gap-y-4 px-20">
        <h2 className="text-2xl font-black uppercase tracking-wider text-white">
          Fashion
        </h2>
        <p className="font-roboto text-base font-normal leading-7 tracking-widest text-greyColor">
          Complete your style with awesome <br /> clothes from us.
        </p>
        <div className="flex h-10 w-10 gap-x-3">
          {socials.map((social, index) => (
            <img
              className="h-full w-full object-contain transition-all duration-150 ease-linear hover:scale-105 focus-visible:scale-105"
              key={index}
              src={social}
              alt={`${social}.png`}
            />
          ))}
        </div>
      </div>
      {/* last div */}
      <div className="flex h-auto w-[50%] justify-between pr-20">
        <div className="flex flex-col gap-y-4 ">
          {first.map((data, index) => (
            <a
              href=""
              key={index}
              className="font-roboto text-base tracking-wider text-[#8E8E8E] transition-all duration-100 ease-linear first:text-greyColor hover:scale-105 focus-visible:scale-105"
            >
              {data}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 ">
          {second.map((data, index) => (
            <a
              href=""
              key={index}
              className="font-roboto text-base tracking-wider text-[#8E8E8E] transition-all duration-100 ease-linear first:text-greyColor hover:scale-105 focus-visible:scale-105"
            >
              {data}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-y-4 ">
          {third.map((data, index) => (
            <a
              href=""
              key={index}
              className="font-roboto text-base tracking-wider text-[#8E8E8E] transition-all duration-100 ease-linear first:text-greyColor hover:scale-105 focus-visible:scale-105"
            >
              {data}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
