import Card from "../reusables/Card"
import { motion } from "framer-motion"

const TopSellingItems = ()=> {
    return(
        <>
        <section>
                <article className=" mobile-screen: max-w-[1200px] h-[490px] m-auto mt-5">

                    <div className="w-full h-[360px] flex justify-between">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>

                    <div className=" h-[40px] w-full mt-[60px] flex items-center justify-center">
                        <motion.button whileHover={{scale:1.1}} whileTap={{ scale: 0.9 }}  className="w-[120px] h-[39px] rounded-[12px] bg-[#D9D9D9] font-roboto text-sm text-black text-opacity-[0.74] shadow-md  hover:bg-black hover:opacity-[0.74] hover:text-slate-50 transition duration-[0.2s]">View All</motion.button>
                    </div>

                   
            
                </article>
        </section>
        </>
    )
}


export default TopSellingItems