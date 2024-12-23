const Card = ()=> {

// const ratingBlock = ()=> {
//     for(let index = 1; index <= 6; index++) {
//         <svg className= "h-4 w-4"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
//         </svg>
//     }
// }
    return(
        <>
        <div className="tablets:block mobile-screen:hidden lg:w-[230px] shadow-radial-sm-less-noticeable tablets:w-[155px] h-[360px] bg-white p-4 pt-1 hover:shadow-radial-xl hover:transition duration-[0.7s]">
            <div className=" h-[190px] w-full">
                <img className="object-cover h-full w-full" src="src/assets/productsImage/arduinoUno.svg" alt="" />
            </div>

            <p className="font-roboto text-[13px] font-semibold text-slate-800 text-opacity-[0.74]  mt-2 border-t-[0.05rem] border-t-[#B4B4B4] border-opacity-[0.50] pt-1">Arduino Uno R3</p>
            <p className="font-roboto text-[20px] font-bold text-black text-opacity-[0.74]  mt-1 border-b-[0.05rem] border-b-[#B4B4B4] border-opacity-[0.50]">₦12000</p>

            <div className="flex items-center gap-1 mt-2">
                <p className="font-roboto text-[#999999] text-[11px]">Sold by</p>
                 <p className=" italic text-[#FF0800] font-roboto font-semibold text-[11px]">CHEAP<span className="text-[#2E2787]">ER</span></p>
            </div>


            {/* this is the rating */}
            <div className="flex items-center lg:text-[12px] text-[#FFC633] w-full tablets:text-[10px] lg:mt-[0.03rem] tablets:mt-1">

                    <svg className="lg:h-4 lg:w-4 tablets:h-3 tablets:w-3 fill-current"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                    <svg className="lg:h-4 lg:w-4 tablets:h-3 tablets:w-3 fill-current"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                    <svg className="lg:h-4 lg:w-4 tablets:h-3 tablets:w-3 fill-current"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                    <svg className="lg:h-4 lg:w-4 tablets:h-3 tablets:w-3 fill-current"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                    <svg className="lg:h-4 lg:w-4 tablets:h-3 tablets:w-3 text-gray-300"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>
                    
                    <div className="text-black text-opacity-[0.74] "> 
                        <p className="text-black lg:text-[12px] tablets:text-[10px] text-opacity-[0.74]">(2 Reviews)</p>
                    </div>
            </div>

            <div>
                <button className="h-[30px] w-full mt-2 bg-[#FF0800] font-roboto text-sm rounded-sm text-slate-50 shadow-md hover:bg-black hover:opacity-[0.74]">Add To Cart</button>
            </div>
        </div>
        </>
    )
}

export default Card