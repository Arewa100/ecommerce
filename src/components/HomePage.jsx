import FeaturedProduct from "./FeaturedProduct";
import Header from "./Header";
import SlideshowComponent from "./SlideShowComponent";
import TopSellingItems from "./TopSellingItems";
import HeadingLabel from "../reusables/headingLabels";
import RegisterAsADeveloperSection from "./RegisterAsADeveloper";
import CustomerFeedback from "./CustomerFeedback";
import TopLabel from "./TopLabel";
import Comments from "./comments";
const Homepage = ()=> {

    return(
        <>
     
        <TopLabel/>
        <div className="h-[5000px] m-auto xl:max-w-[1440px] bg-white">
            <Header/>
            <SlideshowComponent/>
            <HeadingLabel textContent="Top Selling Items" backGroundColor="bg-yellow-500"/>
            <TopSellingItems/>
            <HeadingLabel textContent="Featured Product" backGroundColor="bg-red-400"/>
            <FeaturedProduct/>
            {/* <HeadingLabel textContent="we have sponsored over 2000 Engineers" backGroundColor="bg-green-900 "/> */}
            <div className="bg-red-500 w-full h-[500px]">
                <RegisterAsADeveloperSection/>
            </div>
            {/* <HeadingLabel textContent="Customer Feedback" backGroundColor="bg-cyan-900 "/> */}
            <CustomerFeedback/>
    
        </div>
        </>
    )
}

export default Homepage;

// xl:max-w-[1440px] xl:bg-green-500 lg:bg-red-600 lg:max-w-[1440px] h-[5000px] bg-orange-300 m-auto bg-[#F5F5F3]