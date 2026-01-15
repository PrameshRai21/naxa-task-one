import hnm from '@Assets/images/logo/hnm.png';
import obey from '@Assets/images/logo/obey.png';
import shopify from '@Assets/images/logo/shopify.png';
import lacoste from '@Assets/images/logo/lacoste.png';
import levis from '@Assets/images/logo/levis.png';
import amazon from '@Assets/images/logo/amazon.png';

const logos = [hnm, obey, shopify, lacoste, levis, amazon];

function Banner() {
  return (
    <div className="mb-10 flex h-40 w-full items-center justify-around bg-orange px-20">
      {logos.map((logo, index) => (
        <div className="flex h-12 items-center" key={index}>
          <img
            className="h-full w-auto object-contain"
            src={logo}
            alt={`${logo}.png`}
          />
        </div>
      ))}
    </div>
  );
}

export default Banner;
