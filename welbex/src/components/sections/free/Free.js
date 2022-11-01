import './Free.css';
import {Container} from "../../../wrappers/container/Container";
import {Phone} from "../../form/phone/Phone";

export const Free = () => {
    return (
        <Container>
            <section className="free">
                <h1>Бесплатная демонстрация</h1>
                <div className="free-description">
                    <h2>Запишитесь на <span>бесплатную демонстрацию AmoCRM</span></h2>
                    <p>Мы быстро внедрим <br/>и настроим amoCRM в вашей <br/>компании!</p>
                </div>
                <Phone value="Записаться на демонстрацию"/>
            </section>
        </Container>
    );
};