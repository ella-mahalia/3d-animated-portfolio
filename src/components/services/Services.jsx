import "./services.css";

const skillItem = [
    {
        imgSrc: "/react.png",
        label: "React",
    },
    {
        imgSrc: "/saas.png",
        label: "SaaS",
    },
    {
        imgSrc: "/tailwind1.png",
        label: "Tailwind CSS",
    },
    {
        imgSrc: "/threejs1.png",
        label: "Three JS",
    },
    {
        imgSrc: "/css.png",
        label: "CSS",
    },
    {
        imgSrc: "/javascript.webp",
        label: "JavaScript",
    },
    {
        imgSrc: "/powerbi.png",
        label: "PowerBi",
    },
    {
        imgSrc: "/python.webp",
        label: "Python",
    },
    {
        imgSrc: "/sql1.png",
        label: "SQL",
    },
    {
        imgSrc: "/r.png",
        label: "R",
    },
    {
        imgSrc: "/nodejs.png",
        label: "Node JS",
    },
    {
        imgSrc: "/aws.webp",
        label: "Amazon Web Services",
    },
    {
        imgSrc: "/gcp.webp",
        label: "Google Cloud Platform",
    },
];

const Services = () => {
    return (
        <section className="title-section">
            <h2 className="technical">Technical Proficiency</h2>

            <p className="technical-description">
                Leveraging modern technologies and frameworks, I build scalable, efficient, and user-friendly applications.
                My expertise spans frontend and backend development, data analytics, and visualization, ensuring robust solutions
                for diverse use cases.
            </p>

            <div className="skill-grid">
                {skillItem.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">
                            <img src={skill.imgSrc} alt={skill.label} />
                        </div>
                        <h3 className="text-lg font-semibold">{skill.label}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;