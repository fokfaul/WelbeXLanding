import './FAQ.css';
import {Container} from "../../../wrappers/container/Container";

export const FAQ = () => {
    function handleSelect(e) {
        if (e.currentTarget.localName === 'li') {
            e.currentTarget.classList.toggle('selected');
        }
    }
    return (
        <Container>
            <section className="faq">
                <h1>Вопрос/ответ</h1>
                <div className="faq-about">
                    <h2>Ответы на <span>часто <br/> задаваемые вопросы</span></h2>
                    <h3>Не нашли ответ на свой вопрос? <br/>Оставьте заявку на консультацию!</h3>
                </div>
                <div className="faq-list">
                    <ul>
                        <li onClick={handleSelect}>
                            <h3>Сколько стоит интеграция X с AmoCRM?</h3>
                            <p>Стоимость API интеграции с amoCRM начинается с 20000 рублей и зависит от сложности
                                проекта. Для того, чтобы узнать точную цену, позвоните нам и запишитесь на аудит.</p>
                        </li>
                        <li onClick={handleSelect}>
                            <h3>Требует ли AmoCRM обучения?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum labore nostrum officia
                                qui tempora. Adipisci error est ex illo impedit optio pariatur, porro quia quos
                                similique vel voluptas voluptatem voluptatum?</p>
                        </li>
                        <li onClick={handleSelect}>
                            <h3>Чем занимается Ваша компания?</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum labore nostrum officia
                                qui tempora. Adipisci error est ex illo impedit optio pariatur, porro quia quos
                                similique vel voluptas voluptatem voluptatum?</p>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};