import { motion, useScroll, useSpring} from "framer-motion";

const TopLabel = ()=> {

    const{scrollYProgress} = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return(
        <>
        <div className="mobile-screen:w-full  mobile-screen:max-h-[27px] bg-[#D9D9D9] flex justify-center tablets:fixed">
                <p className=" italic text-[#FF0800] font-semibold text-[10px]">CHEAP<span className="text-[#2E2787]">ER</span></p>
        </div>
            <motion.div
                    id="scroll-indicator"
                    style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    originX: 0,
                    backgroundColor: "#FF0800",
                }}
            />
        </>
    )
}

export default TopLabel