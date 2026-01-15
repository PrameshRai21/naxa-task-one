import Footer from '@Components/common/Footer';
import Banner from '@Components/LayoutComponent/Banner';
import BannerTwo from '@Components/LayoutComponent/BannerTwo';
import Community from '@Components/LayoutComponent/Community';
import HeroLayout from '@Components/LayoutComponent/HeroLayout';
import NewArrival from '@Components/LayoutComponent/NewArrival';
import Voucher from '@Components/LayoutComponent/Voucher';
import YoungFavorite from '@Components/LayoutComponent/YoungsFavorite';

function WebLayout() {
  return (
    <>
      <HeroLayout />
      <Banner />
      <NewArrival />
      <BannerTwo />
      <YoungFavorite />
      <Voucher />
      <Community />
      <Footer />
    </>
  );
}

export default WebLayout;
