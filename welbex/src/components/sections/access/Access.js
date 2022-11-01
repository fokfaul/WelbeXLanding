import './Access.css';
import {Container} from "../../../wrappers/container/Container";
import {Phone} from "../../form/phone/Phone";

export const Access = () => {
    return (
        <Container>
            <section className="access">
                <h1>Бесплатный доступ к системе</h1>
                <div className="access-flex">
                    <div className="access-description">
                        <h2>Получите доступ к полному <br/>функционалу <span>AmoCRM <br/>на 35 дней</span></h2>
                        <p>Наш сотрудник ответит <br/>на все возникшие вопросы и проконсультирует по функционалу AmoCRM.</p>
                        <p>Попробуйте уже сегодня и вы поймёте насколько это удобно и просто!</p>
                    </div>
                    <div className="access-list">
                        <h3>Вместе с доступом <br/>к системе вы получите:</h3>
                        <ul className="list-line">
                            <li>Аудит с лучшим экспертом компании</li>
                            <li>Dashboard с показателями</li>
                            <li>30 виджетов</li>
                        </ul>
                    </div>
                    <Phone value="Получить доступ"/>
                </div>
            </section>
        </Container>
    );
};