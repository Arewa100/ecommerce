import Logo from "../reusables/logo";
import { useState } from "react";


const Header = ()=> {


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
    
    return(
        <>
        <div>
            <div className="mobile-screen:w-full mobile-screen:max-h-[27px] bg-[#D9D9D9] flex justify-center">
                <p className=" italic text-[#FF0800] font-semibold text-[10px]">CHEAP<span className="text-[#2E2787]">ER</span></p>
            </div>

            <div className="mobile-screen:w-full  h-[132px] mobile-screen:bg-white">
                    
                    {/* this is the navbar */}
                    <div className="flex items-center justify-center h-[132px] bg-white">
                        <div className="w-full mobile-screen:max-w-[1200px]">
                            <nav className=" p-2 mobile-screen:h-[50px] mobile-screen:max-w-[1200px] mobile-screen:flex mobile-screen:items-center mobile-screen:justify-between"> 

                                {/* div holding handbugger sign and logo text */}
                                <div className="mobile-screen:flex items-center gap-4">

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

                                    {/* second search  */}
                                        <div className="tablets:block mobile-screen:hidden ml-[150px]">
                                            <div className="flex w-[430px] h-[35px] items-centerrounded-[12px]">
                                                <input className="rounded-tl-[12px] rounded-bl-[12px] outline-none p-2 w-[380px] h-[35px] bg-[#F5F5F5] shadow-lg text-black opacity-[0.74] font-roboto placeholder:font-roboto placeholder:text-[#B4B4B4] hover:drop-shadow-xl" type="text" placeholder="Search products and categories"/>
                                                <button className="h-[35px] w-[50px] bg-[#FF0800] flex items-center justify-center rounded-tr-[12px] shadow-lg rounded-br-[12px] text-slate-50  hover:bg-black hover:opacity-[0.74] transition duration-[0.2s]">
                                                    <svg className=" fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                                    </svg>
                                                </button>   
                                     
                                            </div>
                                        </div>

                                        {/* input buttons */}
                                        <div className=" mobile-screen:hidden tablets:block ml-[144px]">
                                            <div className="gap-5 flex">
                                                <div>
                                                    <button className="w-[75px] h-[39px] rounded-[12px] bg-[#D9D9D9] font-roboto text-sm text-black text-opacity-[0.74] shadow-md  hover:bg-black hover:opacity-[0.74] hover:text-slate-50 transition duration-[0.2s]">Login</button>
                                                </div>

                                                <div>
                                                <button className=" w-[75px] h-[39px] rounded-[12px] bg-[#FF0800] font-roboto text-sm  text-slate-50 shadow-md hover:bg-black hover:opacity-[0.74] transition duration-[0.2s]">Sign Up</button>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <img className="h-5" src="../src/assets/images/cart.svg" alt="cart icon" />
                                                    <p className="font-roboto">Cart</p>
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
                            <div className={`tablets:hidden bg-red-100 mobile-screen:w-[250px] absolute h-[1000px] ${currentState.state ? 'block' : 'hidden'}`}>  
                                <h1>popular categories</h1>
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

            <div className="mobile-screen: bg-[#2E2787] mobile-screen:h-[12px] tablets:h-[64px] flex justify-center">
                <p className="text-[8px] text-white font-Roboto Flex">somthing can be here</p>
            </div>
        </div>
    </>
    )
}

export default Header;

// "tablets:hidden bg-slate-50 mobile-screen:w-[250px] absolute h-screen"