const HeadingLabel = (props)=> {
    const{textContent, backGroundColor} = props
    return(
        <>
            <div>
                    <h1  className={`font-roboto text-[24px] h-[50px] ${backGroundColor} font-medium text-black opacity-[0.74] mobile-screen:max-w-[1250px] m-auto mt-5 pl-5 flex items-center rounded-tl-lg rounded-tr-lg`}>{textContent}</h1>
            </div>
        </>
    )
}

export default HeadingLabel

