import './Audit.css';
import {Container} from "../../../wrappers/container/Container";
import {Phone} from "../../form/phone/Phone";

export const Audit = () => {
    return (
        <Container>
            <section className="audit">
                <h1>Бесплатный аудит</h1>
                <div className="audit-description">
                    <h2>Закажите <br/><span>бесплатный скайп-аудит отдела продаж</span></h2>
                    <p>И получите предложение <br/>по решению вашей задачи</p>
                </div>
                <Phone value="Заказать аудит"/>
            </section>
        </Container>
    );
};