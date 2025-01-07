import Comments from "./comments";
import { delay, easeInOut, motion } from "framer-motion";
const CustomerFeedback = () => {
  return (
    <>
      <div className="bg-red-600 tablets:block mobile-screen:hidden max-w-[1440px] h-[773px] m-auto mt-5">
        <div className="w-full h-full flex flex-col justify-between ">
          {/* <div  className="w-full h-[40px] bg-green-300">
                        <h1 className="font-roboto text-[48px]">Customer Feedback</h1>
                    </div> */}
          <div className="w-full  h-full bg-[#2E2787]  object-cover object-center bg-no-repeat flex justify-center items-center">
         
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerFeedback;

// bg-[url(src/assets/images/manpics.svg)]


{/* <div className="flex flex-col justify-between w-[500px] h-[300px] bg-green-500">
<div className="w-full justify-between flex h-[50px] bg-[#3E568B]">
  <div>first</div>
  <div>second</div>
</div>

<div className="w-full justify-between flex  bg-[#3E568B]">
  <div className="bg-[#3E568B]">third</div>
  <div>fourth</div>
</div>
</div> */}