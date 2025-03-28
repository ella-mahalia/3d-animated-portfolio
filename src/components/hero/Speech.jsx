import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion";

const Speech = () => {
    return (
        <motion.div 
        className="bubbleContainer"
        animate={{opacity: [0,1] }}
        transition={{ duration: 1 }}
        >
            <div className="bubble">
                <TypeAnimation
                    sequence={[
                        1000,
                        "Designing solutions like it's my superpower… cape not included.",
                        1000,
                        "If you asked me Marvel or DC. The obvious choice would be DC",
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    deletionSpeed={60}
                    repeat={Infinity}
                />
            </div>
            <img src="/ella.png" alt="" />
        </motion.div>
    );
};

export default Speech;