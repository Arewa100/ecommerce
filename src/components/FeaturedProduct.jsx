import Card from "../reusables/Card"
const FeaturedProduct = ()=> {
    return(
        <>
        <section>

        <article className="  mobile-screen: max-w-[1200px] h-[870px] m-auto mt-5">

            <div className="w-full h-[360px] flex justify-between ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <div className="w-full h-[360px] flex justify-between  mt-5 ">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>


            <div className=" h-[40px] w-full mt-[60px] flex items-center justify-center ">
                <button className="w-[120px] h-[39px] rounded-[12px] bg-[#D9D9D9] font-roboto text-sm text-black text-opacity-[0.74] shadow-md  hover:bg-black hover:opacity-[0.74] hover:text-slate-50 transition duration-[0.2s]">View All</button>
            </div>

        </article>

        </section>
        </>
    )
}


export default FeaturedProduct