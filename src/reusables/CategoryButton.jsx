const CategoryButton = (props)=> {

    const{textContent} = props;
    return(
        <>
        <button className="w-[147px] h-[64px]  text-slate-50 font-roboto italic text-[13px] hover:border-b-2 hover:border-[#FF0800] hover:text-blue-500 text-opacity-[0.74] transition duration-[0.1s]">{textContent}</button>
        </>
    )

}


export default CategoryButton;