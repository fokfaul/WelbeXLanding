import './Info.css';
import {Container} from "../../../wrappers/container/Container";
import {Polyhedron} from "../../elements/Polyhedron";


export const Info = () => {
    return (
        <Container>
            <section className="info">
                <div className="info-left">
                    <h1>
                        Зарабатывайте больше<br/>
                        <span>с AmoCRM.</span>
                    </h1>
                    <p>Развиваем и контролируем<br/>продажи за вас</p>
                </div>
                <Polyhedron/>
                <div className="info-right">
                    <h3>Вместе с <span>бесплатной консультацией</span> мы дарим:</h3>
                    <ul>
                        <li><h3>Виджеты</h3><p>30 готовых решений</p></li>
                        <li><h3>Dashboard</h3><p>с показателями вашего бизнеса</p></li>
                        <li><h3>Skype Аудит</h3><p>отдела продаж и CRM системы</p></li>
                        <li><h3>35 дней</h3><p>использования AmoCRM</p></li>
                    </ul>
                    <div className="btn">
                        <a href="#">Получить консультацию</a>
                    </div>
                </div>
            </section>
        </Container>
    );
};