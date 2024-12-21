const CategoriesButton = (props)=> {

    const{textContent, iconLink} = props
    return(
        <>
        <button className="flex w-full justify-between items-center font-roboto font-semibold rounded-[12px] text-[16px] text-black opacity-[0.74] p-1 hover:bg-slate-400 ">
                            <div className="flex justify-between gap-2">
                                <img src={iconLink} alt="component icon" />
                                <p>{textContent}</p>
                            </div>

                            <svg className="h-[20px]" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.4071 4.25L13.6571 10.5L7.4071 16.75" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


        </button>
        </>
    )
}


export default CategoriesButton;