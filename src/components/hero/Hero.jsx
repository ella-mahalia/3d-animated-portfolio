import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "framer-motion";
import Shape from "./Shape";
import { Suspense } from "react";

const awardVariants = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        },
    },
};

const followVariants = {
    initial: { y: -100, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.2
        },
    },
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="hSection left">
                {/* TITLE */}
                <motion.h1
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="hTitle"
                >
                    Hey There, <br />
                    <span>I'm Ella!</span>
                </motion.h1>

                {/* AWARDS */}
                <motion.div
                    variants={awardVariants}
                    initial="initial"
                    animate="animate"
                    className="awards"
                >
                    <motion.h2 variants={awardVariants}> Full Stack Developer</motion.h2>
                    <motion.p variants={awardVariants}>
                        Bachelors in Business Administration with a concentration in Computer Information Systems.
                    </motion.p>
                    <motion.div variants={awardVariants} className="awardList">
                        <motion.img variants={awardVariants} src="/award1.png" alt="Award 1" />
                        <motion.img variants={awardVariants} src="/sonny angel2.png" alt="Sonny Angel" />
                        <motion.img variants={awardVariants} src="/mouse1.png" alt="Mouse" />
                    </motion.div>
                </motion.div>

                {/* SCROLL SVG */}
                <motion.a
                    animate={{ y: [0, 5], opacity: [0, 1, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 4,
                        ease: "easeInOut"
                    }}
                    href="#services"
                    className="scroll"
                >
                    <svg
                        width="50px"
                        height="50px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                            stroke="white"
                            strokeWidth="1"
                        />
                        <motion.path
                            animate={{ y: [0, 5] }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "easeInOut"
                            }}
                            d="M12 5V8"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinecap="round"
                        />
                    </svg>
                </motion.a>
            </div>

            <div className="hSection right">
                {/* FOLLOW */}
                <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
                    <a href="https://www.linkedin.com/in/ella-mahalia-simeon/">
                        <motion.img variants={followVariants} src="/linkdein1.png" alt="" />
                    </a>
                    <a href="https://github.com/ella-mahalia">
                        <motion.img variants={followVariants} src="/github2.png" alt="" />
                    </a>
                    {/* Ensure this doesn't stretch */}
                    <div className="followTextContainer">
                        <div className="followText">FOLLOW ME</div>
                    </div>
                </motion.div>

                {/* BUBBLE */}
                <Speech />


                {/* CERTIFICATE */}
                <motion.div variants={followVariants} initial="initial" animate="animate" className="follow">
                        <motion.img variants={followVariants} src="/bow1.png" alt="Bow" />
                    <div>
                        GOOGLE <br />
                        DATA ANALYTICS <br />
                        CERTIFICATION
                    </div>
                    <br />
                    <a href="https://www.coursera.org/account/accomplishments/specialization/FP2DW7WHRXTS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-link">
                        SEE MORE
                    </a>
                </motion.div>


                {/* CONTACT BUTTON */}
                <motion.a
                    href="/#contact"
                    className="contactLink"
                    animate={{
                        x: [200, 0],
                        opacity: [0, 1],
                    }}
                    transition={{
                        duration: 2,
                    }}
                >
                    <motion.div
                        className="contactButton"
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        <svg viewBox="0 0 200 200" width="150" height="150">
                            <circle cx="100" cy="100" r="90" fill="white" />
                            <path id="innerCirclePath" fill="none" d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0" />
                            <text className="circleText">
                                <textPath xlinkHref="#innerCirclePath">Hire Now •</textPath>
                            </text>
                            <text className="circleText">
                                <textPath xlinkHref="#innerCirclePath" startOffset="44%">Contact Me •</textPath>
                            </text>
                        </svg>
                        <div className="arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="none" stroke="black" strokeWidth="2">
                                <line x1="6" y1="18" x2="18" y2="6" />
                                <polyline points="9 6 18 6 18 15" />
                            </svg>
                        </div>
                    </motion.div>
                </motion.a>
            </div>
            <div className="bg">
                {/* 3d */}
                <Canvas>
                    <ambientLight intensity={2} />
                    <directionalLight position={[1, 2, 3]} />
                    <Suspense fallback="loading...">
                        <Shape />
                    </Suspense>
                </Canvas>
                <div className="hImg">
                    <img src="/hero2.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;