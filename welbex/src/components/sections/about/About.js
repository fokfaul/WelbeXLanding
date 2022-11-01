import './About.css';
import {Container} from "../../../wrappers/container/Container";


export const About = () => {
    return (
        <Container>
            <section className="about">
                <h1>О нас</h1>
                <h2><span>WelbeX — крупный интегратор AmoCRM</span> в Росcии <br/>и ещё 8 странах</h2>
                <div className="about-figure">
                    <ul>
                        <li>
                            <h1><span>11</span></h1>
                            <p>лет в програмировании <br/>и автоматизации</p>
                        </li>
                        <li>
                            <h1><span>30</span></h1>
                            <p>сотрудников <br/>в компании</p>
                        </li>
                        <li>
                            <h1><span>+350</span></h1>
                            <p>внедрений <br/>АмоCRM</p>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};