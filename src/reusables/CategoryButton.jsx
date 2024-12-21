const CategoryButton = (props)=> {

    const{textContent, onClick} = props;
    return(
        <>
        <button onMouseOver={onClick} className={`w-[147px] h-[64px]  text-slate-50 font-roboto italic text-[13px] hover:border-b-2 hover:border-white hover:text-blue-500 text-opacity-[0.74] transition duration-[0.1s]`}>{textContent}</button>
        </>
    )

}


export default CategoryButton;