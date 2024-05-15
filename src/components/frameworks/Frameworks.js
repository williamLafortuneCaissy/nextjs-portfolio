import Button from "../button/Button";
import styles from "./frameworks.module.css";

const frameworks = [
    {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        name: "Nextjs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
        style: {
            borderRadius: "50%", 
            border: "1px solid white"
        }
    },
    {
        name: "Sass",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
    },
    {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
    },
    {
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    
]

const Frameworks = () => {
    return ( 
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Aux Racines de <br />mes Créations Numériques</h2>
                <p className={styles.description}>Maîtrisant les fondamentaux du web avec HTML, CSS, et JavaScript, j'utilise une palette d'outils avancés pour sculpter des expériences utilisateurs fluides et captivantes. Les technologies que je présente ici ne sont qu'un aperçu de mon arsenal. Je suis constamment à l'affût de nouveaux outils pour enrichir mon offre et mieux s'adapter à vos visions les plus audacieuses.</p>
                <Button as="a" href="#">Contactez-moi</Button>
            </div>
            <div className={styles.rotator}>
                {frameworks.map(({ name: frameworkName, icon, style}, key) => (
                    <div className={styles.offsetter} style={{ "--rotation-offset": `${360 / frameworks.length * key}deg` }} key={frameworkName}>
                        <img className={styles.logo} width="50" height="50" src={icon} alt={frameworkName} style={style} />
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Frameworks;