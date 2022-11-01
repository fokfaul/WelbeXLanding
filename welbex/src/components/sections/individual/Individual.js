import './Individual.css';
import {Container} from "../../../wrappers/container/Container";
import {Phone} from "../../form/phone/Phone";

export const Individual = () => {
    return (
        <Container>
            <section className="individual">
                <h1>Индивидуальный виджет</h1>
                <div className="individual-description">
                    <h2><span>Разработаем виджет индивидуально</span> под ваши задачи</h2>
                    <p>Если вы не нашли <br/>подходящий из готовых <br/>вариантов.</p>
                </div>
                <Phone value="Заказать виджет"/>
            </section>
        </Container>
    );
};