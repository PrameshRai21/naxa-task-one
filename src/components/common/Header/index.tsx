import logo from '@Assets/images/logo/logo.png';

const links = ['Catalogue', 'Fashion', 'Favorite', 'Lifestyle'];

function Header() {
  return (
    <>
      <div className="my-5 flex justify-between ">
        <div className="h-14 w-60">
          <img
            className="h-full w-full object-contain"
            src={logo}
            alt="logo.png"
          />
        </div>
        <div className="flex items-center gap-x-14">
          <div className="flex gap-x-16">
            {links.map((link, index) => (
              <a
                key={index}
                href=""
                className="relative font-poppins text-xl font-normal uppercase after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current  after:transition-all after:duration-300  hover:after:w-full focus-visible:after:underline"
              >
                {link}
              </a>
            ))}
          </div>
          <button className="rounded-md bg-black px-5 py-2 font-poppins uppercase text-white transition-all duration-100 ease-linear hover:scale-105 focus-visible:scale-105">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
