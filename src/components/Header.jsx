import Logo from "../reusables/logo";
import { useState, useRef} from "react";
import CategoryButton from "../reusables/categoryButton";
import CategoriesButton from "../reusables/CategoriesButton";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";


const Header = ()=> {

    const components = {
        arduino: "arduino",
        raspberripi: "Raspberri Pi"
    }

    const theState = useSelector((state)=> state.categoriesButton.value)
    console.log(theState)
    
    const isOpen = {
        state: false
    }

    const[currentState, setState]= useState(isOpen);



    const handleClick = ()=> {

        if(currentState.state === false) {
            setState((preVState)=> {
                return {...preVState, state: true}  
            })
        }else {
            setState((preVState)=> {
                return {...preVState, state: false}  
            })
        }
    
    }

    console.log(currentState);
    
    const[isHover, setIsHover] = useState(false)
    const[isHoverForDropDown, setHoverForDropDown] = useState(false)

    const handleDropDownButtonEnter = ()=> {

            setIsHover((preVState)=> {
                preVState = true
                return(preVState);
            })
        }

    const handleDropDownButtonLeave = ()=> {
        setTimeout(() => {
            setIsHover((preVState)=> {
                preVState = false
                return(preVState);
            })
        }, 100);
    }
 
    const handleDropDownEnter =()=> {
        setHoverForDropDown((preVState)=> {
            preVState = true
            return(preVState);
        })
    }

    const handleDropDownLeave =()=> {
        setHoverForDropDown((preVState)=> {
            preVState = false
            return(preVState);
        })
    }
   

    console.log(isHover)

    const[loginFormState, setLoginFormState] = useState(false)



    return(
        <>
        <div>
            {/* header line was orignally here */}
            <div className="mobile-screen:w-full  h-[132px] mobile-screen:bg-white">
                    
                    {/* this is the navbar */}
                    <div className="flex items-center justify-center h-[132px] bg-white">
                        <div className="w-full mobile-screen:max-w-[1200px]">
                            <nav className=" p-2 mobile-screen:h-[50px] mobile-screen:max-w-[1200px] mobile-screen:flex mobile-screen:items-center mobile-screen:justify-between"> 

                                {/* div holding handbugger sign and logo text / holding all content */}
                                <div className="mobile-screen:flex items-center gap-4 lg:flex lg:w-full lg:justify-between tablets:flex tablets:w-full tablets:justify-between">
                                    
                                    {/* handbugeer */}
                                    <div className="tablets:hidden">
                                        <button  onClick={handleClick} className="h-5 text-gray-800 hover:text-[#FF0800] transition duration-[0.2s] ">
                                            <svg className=" h-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div>
                                        <Logo/>
                                    </div>

                                    {/* ml-[150px] */}
                                    {/* second search  */}
                                        <div className="tablets:block mobile-screen:hidden ">
                                            <div className="flex w-[430px] h-[35px] items-centerrounded-[12px]">
                                                <input className="rounded-tl-[12px] rounded-bl-[12px] outline-none p-2 w-[380px] h-[35px] bg-[#F5F5F5] shadow-lg text-black opacity-[0.74] font-roboto placeholder:font-roboto placeholder:text-[#B4B4B4] hover:drop-shadow-xl" type="text" placeholder="Search products and categories"/>
                                                <button className="h-[35px] w-[50px] bg-[#FF0800] flex items-center justify-center rounded-tr-[12px] shadow-lg rounded-br-[12px] text-slate-50  hover:bg-black hover:opacity-[0.74] transition duration-[0.2s]">
                                                    <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                    </svg>
                                                </button>   
                                     
                                            </div>
                                        </div>
                                        
                                        {/* sm:ml-[144px] */}
                                        {/* input signup  buttons */}
                                        <div className=" mobile-screen:hidden tablets:block">
                                            <div className="gap-3 flex">
                                                <div>
                                                    <motion.button whileTap={{scale:0.8}} onClick={()=> {setLoginFormState(!loginFormState)}} className="w-[75px] h-[39px] rounded-[12px] bg-[#D9D9D9] font-roboto text-sm text-black text-opacity-[0.74] shadow-md  hover:bg-black hover:opacity-[0.74] hover:text-slate-50 transition duration-[0.2s]">Login</motion.button>
                                                </div>


                                                <div>
                                                    <motion.button  whileTap={{scale:0.8}} className="w-[75px] h-[39px] rounded-[12px] bg-[#FF0800] font-roboto text-sm  text-slate-50 shadow-md hover:bg-black hover:opacity-[0.74] transition duration-[0.2s]">Sign Up</motion.button>
                                                </div>

                                                <div className=" tablets:hidden lg:block">
                                                    <div className="flex items-center gap-1 h-[39px]">
                                                        <img className="h-5" src="../src/assets/images/cart.svg" alt="cart icon" />
                                                        <p className="font-roboto">Cart</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
    
                                </div>
        
                                {/* div holding icons */}
                                <div className="flex gap-2 tablets:hidden">
                                    <div>
                                        <img  className="h-5" src="../src/assets/images/user.svg" alt="user icon" />
                                    </div>

                                    <div>
                                        <img className="h-5" src="../src/assets/images/cart.svg" alt="cart icon" />
                                    </div>
                                </div>
                            </nav>

                              {/* this is the dropbox */}
                            <div className="bg-yellow-300 h-full w-full">

                                <div className={`tablets:hidden bg-green-700 mobile-screen:w-[250px] absolute mobile-screen:h-full ${currentState.state ? 'block' : 'hidden'}`}>  
                                    <h1>popular categories</h1>
                                </div>

                            </div>

                                    {/* this is the <search> */}
                            <div className="tablets:hidden h-6 mt-2 flex justify-center">

                                <div className="flex bg-white w-[300px] p-1 items-center rounded-xl border-[0.04rem] border-gray-500">
                                    <button><img  className="h-5" src="../src/assets/images/searchicon.svg" alt="search icon" /></button>
                                    <input className=" w-full h-[1.1rem] font-roboto outline-none text-[12px] text-gray-700 rounded placeholder:text-[10px]"type="text" placeholder="Search products and categories"/>
                                </div>
                            </div>

                        </div>

                    </div>

            </div>
          
          {/* the drop down button section */}
            <div className="mobile-screen: bg-[#2E2787] mobile-screen:h-[12px] tablets:h-[64px] flex justify-center tablets: sticky top-0 ">

                <div className=" mobile-screen:hidden tablets:block tablets:w-[1200px] tablets:h-full ">

                    <div className="flex h-full items-center justify-between">

                        <div className=" w-[588px]">

                            <CategoryButton onEnter={handleDropDownButtonEnter} onLeave={handleDropDownButtonLeave} textContent="Product Categories"/>
                            <CategoryButton textContent="Motors"/>
                            <CategoryButton textContent="Sensors"/>
                            <CategoryButton textContent="Components"/>
                            
                        </div>

                        <div>
                            <CategoryButton textContent="Find a developer"/>
                        </div>
                    </div>
                </div>
                <p className="tablets:hidden text-[8px] text-white font-Roboto Flex">somthing can be here</p>
            </div>

             {/* //this is for the drop down category*/}
                <div  onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave}  className={`${isHover || isHoverForDropDown? 'tablets:block' : 'hidden'}  m-auto mobile-screen:hidden h-[300px] bg-[url("src/assets/images/blueBackground.svg")] bg-cover  tablets:w-full lg:max-w-[100%]`}>
                    <div className="h-[300px] tablets:w-full lg:max-w-[1200px] m-auto bg-white shadow-lg flex justify-between">
                        <div className=" bg-white w-[300px] h-full p-4 shadow-lg">
                            <CategoriesButton iconLink="../src/assets/images/componenticon.svg" textContent="Components" info="Arduino nano"/>
                            <CategoriesButton iconLink="../src/assets/images/sensoricon.svg" textContent="Sensors"/>
                            <CategoriesButton iconLink="../src/assets/images/roboticsicon.svg" textContent="Robotics"/>
                            <CategoriesButton iconLink="../src/assets/images/tools.svg" textContent="Tools"/>
                            <CategoriesButton iconLink="../src/assets/images/micicon.svg" textContent="Audio"/>
                            <CategoriesButton iconLink="../src/assets/images/devicon.svg" textContent="Development"/>
                            <CategoriesButton iconLink="../src/assets/images/wifiIcon.svg" textContent="Wireless & IoT"/>
                            <CategoriesButton iconLink="../src/assets/images/stackedbookicon.svg" textContent="Miscellaneous"/>

                        </div>
                        <h1>{String(theState)}</h1>
                        <h1 className={`h-[50px] w-[300px] bg-red-600 ${theState ? "tablets:block tablets:bg-yellow-300" : "bg-green-500"}`}>maybe</h1> 
                    </div>
                </div>



                            {/* testing animation for login button */}
                             {/* <AnimatePresence>
                                    {loginFormState ? <motion.div className="bg-green-600 w-[300px] h-[200px]"  initial={{opacity: 0}} animate={{opacity: 1}}>

                                    </motion.div> : null}
                            </AnimatePresence>
                            

                            <motion.p initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} className="font-roboto text-[20px]" drag dragConstraints={{top:-125, right:125, left: 125, bottom:-125}} dragTransition={{bounceStiffness: 600, bounceDamping:10}}>
                                we are doing great
                            </motion.p>  */}
        </div>
    </>
    )
}

export default Header;

// "tablets:hidden bg-slate-50 mobile-screen:w-[250px] absolute h-screen"