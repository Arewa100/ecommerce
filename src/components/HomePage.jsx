import FeaturedProduct from "./FeaturedProduct";
import Header from "./Header";
import SlideshowComponent from "./SlideShowComponent";
import TopSellingItems from "./TopSellingItems";
import HeadingLabel from "../reusables/headingLabels";

const Homepage = ()=> {

    return(
        <>
        <div className="h-[5000px] m-auto xl:max-w-[1440px] bg-white">
            <Header/>
            <SlideshowComponent/>
            <HeadingLabel textContent="Top Selling Items" backGroundColor="bg-yellow-500"/>
            <TopSellingItems/>
            <HeadingLabel textContent="Featured Product" backGroundColor="bg-red-400"/>
            <FeaturedProduct/>

            <div className="max-w-[1200px] h-[400px] bg-green-900 m-auto">
                become a developer
            </div>
        </div>
        </>
    )
}

export default Homepage;

// xl:max-w-[1440px] xl:bg-green-500 lg:bg-red-600 lg:max-w-[1440px] h-[5000px] bg-orange-300 m-auto bg-[#F5F5F3]