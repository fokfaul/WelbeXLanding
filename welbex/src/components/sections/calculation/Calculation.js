import './Calculation.css';
import {Container} from "../../../wrappers/container/Container";
import {Phone} from "../../form/phone/Phone";
import {Polyhedron} from "../../elements/Polyhedron";

export const Calculation = () => {
    function handleSelect(e) {
        e.preventDefault();
        if (e.target.localName === 'li') {
            e.target.parentNode.getElementsByClassName('selected')[0].classList.toggle('selected');
            e.target.classList.toggle('selected');
        }
    }

    return (
        <Container>
            <section className="calculation">
                <h1>Расчёт стоимости</h1>
                <div className="calculation-info">
                    <h2>Ответьте на 4 вопроса и получите <span>расчёт стоимости внедрения AmoCRM</span></h2>
                    <p>И сэкономьте 80% своего времени.</p>
                </div>
                <div className="calculation-bonus">
                    <h3>При заказе с сайта вы получите <br/>4 бонуса от компании:</h3>
                    <ul className="list-line">
                        <li>Аудит с лучшим экспертом компании</li>
                        <li>30 виджетов</li>
                        <li>Dashboard с показателями</li>
                        <li>35 дней AmoCRM</li>
                    </ul>
                </div>
                <Polyhedron/>
                <div className="calculation-form">
                    <h3>1. Пользуетесь amoCRM?</h3>
                    <ul onClick={handleSelect}>
                        <li className="selected">Нет, планирую</li>
                        <li>Да, меньше года</li>
                        <li>Да, 1-3 года</li>
                        <li>Да, более 3-х лет</li>
                    </ul>
                    <h3>2. Сколько менеджеров у вас в штате?</h3>
                    <ul onClick={handleSelect}>
                        <li className="selected">1-3</li>
                        <li>4-10</li>
                        <li>11-20</li>
                        <li>Более 20</li>
                    </ul>
                    <h3>3. Пользуетесь виджетами?</h3>
                    <ul onClick={handleSelect}>
                        <li className="selected">Нет</li>
                        <li>Да, 1-3 виджета</li>
                        <li>Да, 4-8 виджетов</li>
                        <li>Да, более 8 виджетов</li>
                    </ul>
                    <h3>4. Выберите бонус, который хотите получить</h3>
                    <ul onClick={handleSelect}>
                        <li className="selected min-icon widget">
                            30 виджетов
                        </li>
                        <li className="min-icon discount">
                            20% на доработку AmoCRM
                        </li>
                    </ul>
                    <Phone value="Получить расчёт"/>
                </div>
            </section>
        </Container>
    );
};