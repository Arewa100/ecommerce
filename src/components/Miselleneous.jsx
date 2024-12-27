const RegisterAsADeveloperSection = ()=> {
    return(
        <>
                {/* register as a developer section */}
                <div className="max-w-[1200px] h-[400px] bg-gray-800 relative align-middle m-auto tablets:block mobile-screen:hidden">

<div className="max-w-[1200px] h-[400px] bg-[#2E2787] m-auto mt-5 flex flex-col justify-between">
    <div className=" h-[100px] w-full flex justify-between">
        <div className="h-full w-[100px] bg-[#3E568B]"></div>
        <div className="h-full w-[100px] bg-[#3E568B]"></div>
    </div>

    <div className=" w-full h-full absolute top-0 items-center flex justify-center">
        <div className=" h-[300px] w-[1100px] bg-black object-cover bg-w-[100%] bg-h-[100%] object-center rounded-lg">
            <div className="h-full  max-w-[1100px]   flex justify-between">

            

            {/* THIS IS WHERE I AM */}
                <div className=" h-full flex items-center  p-0 tablets:pl-12 tablets: w-[400px] ">
                    <div>
                        <h3 className="text-white font-semibold font-roboto text-[30px] ">Become an Hardware Freelancer </h3>
                        <p className="text-white w-[320px] h-[46px] font-roboto font-medium">Register with us as an <span className="font-bold">embedded Systems Engineer</span>  and  secure freelance jobs.</p>
                    </div>
                </div>


                <div className=" lg:w-[550px] tablets:w-[365px] h-full flex items-center justify-center">
                    <form action="#" className="w-[350px] h-[280px] bg-white flex justify-center items-center rounded-md shadow-md">
                        <div className=" w-[300px] h-[260px]">

                    
                            <div className="w-full pt-3">
                                <input className=" w-full p-1 border-gray-600 border-b-[0.001rem] border-opacity-[0.74] hover:border-[#2E2787] outline-none placeholder: font-roboto placeholder: text-[14px] text-black text-opacity-[0.74]" type="text" placeholder="Enter Firstname"/>
                            </div>
                            <div className="w-full pt-3" >
                                <input className=" w-full p-1 border-gray-600 border-b-[0.001rem] border-opacity-[0.74] hover:border-[#2E2787] outline-none placeholder: font-roboto placeholder: text-[14px] text-black text-opacity-[0.74]" type="text" placeholder="Enter Lastname"/>
                            </div>
                            <div className="w-full pt-3"> 
                                <input className=" w-full p-1 border-gray-600 border-b-[0.001rem] border-opacity-[0.74] hover:border-[#2E2787] outline-none placeholder: font-roboto placeholder: text-[14px] text-black text-opacity-[0.74]" type="password" placeholder="Enter Password"/>
                            </div>
                            <div className="w-full pt-3">
                                <input  className=" w-full p-1 border-gray-600 border-b-[0.001rem] border-opacity-[0.74] hover:border-[#2E2787] outline-none placeholder: font-roboto placeholder: text-[14px] text-black text-opacity-[0.74]" type="password" placeholder="Confirm Password"/>
                            </div>

                            <div className=" w-full h-5 mt-1 flex gap-2 items-center font-roboto text-[11px]">
                                <input className="ml-1 size-[11px] outline-none" type="checkbox" />
                                <p className="text-black text-opacity-[0.74] font-roboto">I accept all terms & condition</p>
                            </div>

                            <div className=" h-[40px] w-full mt-3 flex items-center justify-center ">
                                <button className="w-[120px] h-[27px] rounded-[12px] bg-[#D9D9D9] font-roboto text-sm text-black text-opacity-[0.74] shadow-md  hover:bg-black hover:opacity-[0.74] hover:text-slate-50 transition duration-[0.2s]">Register</button>
                            </div>

                            <div className=" w-full h-5  flex items-center justify-center text-[11px]">
                                <p className="font-roboto text-black text-opacity-[0.74]">Already have an account ? <a href="#" className="text-[#2E2787] font-robot">Login</a></p>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="h-[100px] w-full flex justify-between">
        <div className="h-full w-[100px] bg-[#3E568B]"></div>
        <div className="h-full w-[100px] bg-[#3E568B]"></div>
    </div>
</div>
</div>
</>
    )
}


export default RegisterAsADeveloperSection;


// bg-[url(src/assets/images/womaneng.svg)]