import './Clients.css';
import {Container} from "../../../wrappers/container/Container";

export const Clients = () => {
    const list = {
        "cleaning": "Клининг",
        "realty": "Недвижимость",
        "sport": "Спорт и здоровье",
        "legal": "Юридические услуги",
        "consulting": "Консалтинг",
        "education": "Образование",
        "build": "Строительство",
        "b2b": "B2B поставки",
        "logistic": "Логистика",
        "sell": "Продажи услуг и товаров",
        "transport": "Транспортные услуги",
        "hr": "HR и онлайн-рекрутинг",
        "marketing": "Маркетинг и реклама",
        "production": "Производство",
        "finance": "Финансовые услуги",
        "it": "IT-сфера"
    };
    return (
        <Container>
            <section className="clients">
                <h1>Наши клиенты</h1>
                <div className="clients-about">
                    <h2>Внедрили AmoCRM и увеличили продажи <span>для клиентов в абсолютно разных нишах</span></h2>
                    <h3>Для малого, среднего и крупного <br/>бизнеса с бюджетом <br/>до 3 миллионов рублей.</h3>
                </div>
                <div className="clients-list">
                    <ul>
                        {Object.keys(list).map((name, value) => (
                            <li key={value}>
                                <div className={"icon-circle clients-list-" + name}/>
                                <h3>{list[name]}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Container>
    );
};