import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        img: "golocker.jpg",
        title: "Locker NYC: Package Flow & Utilization Dashboard",
        desc: "Designed an interactive Power BI dashboards integrating massive datasets from multiple sources. Developed advanced DAX measures and calculated columns to analyze key metrics, including a complex locker utilization rate—factoring in package turnover, occupancy duration, peak usage, and location trends. This dynamic measure adjusted based on filters like time, borough, and package type (pickup vs. return), revealing inefficiencies that weren’t visible in Excel. These insights enabled stakeholders to optimize locker distribution, reduce congestion, and improve overall operational efficiency.",
        link: "https://www.nyc.gov/html/dot/html/pr2024/nyc-dot-delivery-lockers.shtml",
    },
    {
        id: 2,
        img: "Car Sales Dashboard.png",
        title: "Car Sales Dashboard",
        desc: "This project involved designing a dynamic and interactive Sales Dashboard and interactive Car Sales Dashboard in Power Bi to track and analyze key sales performance metrics for a car dealership. The dashboard provides real-time insights into critical KPIs, helping the company monitor trends, measure growth, and make data-driven decisions.",
        link: "https://www.dropbox.com/scl/fi/l0fwa01f6czxb1tegiwkx/Car-Sales-Dashboard-1.pdf?rlkey=vfp44ni6wce4tpw9sl0wir73o&st=krtof1za&dl=0",
    },
    {
        id: 3,
        img: "golocker.jpg",
        title: "Locker NYC: Package Flow & Utilization Dashboard",
        desc: "The dashboard provides insights into operational efficiency, highlighting package flow trends, pickup/return times, and locker utilization across locations.",
        link: "/",
    },
    {
        id: 4,
        img: "golocker.jpg",
        title: "Locker NYC: Package Flow & Utilization Dashboard",
        desc: "The dashboard provides insights into operational efficiency, highlighting package flow trends, pickup/return times, and locker utilization across locations.",
        link: "/",
    },
    {
        id: 5,
        img: "golocker.jpg",
        title: "Locker NYC: Package Flow & Utilization Dashboard",
        desc: "The dashboard provides insights into operational efficiency, highlighting package flow trends, pickup/return times, and locker utilization across locations.",
        link: "/",
    },
];

const imgVariants = {
    initial: {
        x: -500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const textVariants = {
    initial: {
        x: 500,
        y: 500,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.05,
        },
    },
};

const ListItem = ({ item }) => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <div className="pItem" ref={ref}>
            <motion.div
                variants={imgVariants}
                animate={isInView ? "animate" : "initial"}
                className="pImg"
            >
                <img src={item.img} alt={item.title} />
            </motion.div>
            <motion.div
                variants={textVariants}
                animate={isInView ? "animate" : "initial"}
                className="pText"
            >
                <motion.h1 variants={textVariants}>{item.title}</motion.h1>
                <motion.p variants={textVariants}>{item.desc}</motion.p>
                <motion.a variants={textVariants} href={item.link}>
                    <button>View Project</button>
                </motion.a>
            </motion.div>
        </div>
    );
};

const Portfolio = () => {
    const [containerDistance, setContainerDistance] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const calculateDistance = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                setContainerDistance(rect.left);
            }
        };

        calculateDistance();
        window.addEventListener("resize", calculateDistance);

        return () => {
            window.removeEventListener("resize", calculateDistance);
        };
    }, []);

    const { scrollYProgress } = useScroll({ target: ref });

    const xTranslate = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -window.innerWidth * items.length]
    );

    return (
        <div className="portfolio" id="portfolio" ref={ref}>
            <motion.div className="pList" style={{ x: xTranslate }}>
                <div
                    className="empty"
                    style={{
                        width: window.innerWidth - containerDistance,
                    }}
                />
                {items.map((item) => (
                    <ListItem item={item} key={item.id} />
                ))}
            </motion.div>
            <section />
            <section />
            <section />
            <section />
            <section />
            <div className="pProgress">
                <svg width="100%" height="100%" viewBox="0 0 160 160">
                    <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#ddd"
                        strokeWidth={20}
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#FFB6C1"
                        strokeWidth={20}
                        style={{ pathLength: scrollYProgress }}
                        transform="rotate(-90 80 80)"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Portfolio;