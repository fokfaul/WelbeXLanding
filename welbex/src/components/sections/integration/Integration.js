import './Integration.css';
import {Container} from "../../../wrappers/container/Container";

export const Integration = () => {
    return (
        <Container>
            <section className="integration">
                <h1>Интеграции</h1>
                <h2><span>Интегрируем</span> и дорабатываем <br/>практически <span>любой сервис</span><br/>в AmoCRM</h2>
                <div className="integration-list">
                    <ul>
                        <li>
                            <h3>Социальные сети</h3>
                            <ul>
                                <li className="integration-facebook"/>
                                <li className="integration-vk"/>
                                <li className="integration-telegram"/>
                                <li className="integration-instagram"/>
                            </ul>
                        </li>
                        <li>
                            <h3>E-mail маркетинг</h3>
                            <ul>
                                <li className="integration-mailchimp"/>
                                <li className="integration-send"/>
                                <li className="integration-uni"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Мессенджеры</h3>
                            <ul>
                                <li className="integration-salebot"/>
                                <li className="integration-wazzup"/>
                                <li className="integration-pact"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Телефония</h3>
                            <ul>
                                <li className="integration-pbx"/>
                                <li className="integration-sipuni"/>
                                <li className="integration-mango"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Голосовые прозвоны</h3>
                            <ul>
                                <li className="integration-dog"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Складские сервисы</h3>
                            <ul>
                                <li className="integration-house"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Бизнес аналитика</h3>
                            <ul>
                                <li className="integration-power"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Бухгалтерия</h3>
                            <ul>
                                <li className="integration-1c"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Онлайн-банкинг</h3>
                            <ul>
                                <li className="integration-tinkoff"/>
                                <li className="integration-kassa"/>
                            </ul>
                        </li>
                        <li>
                            <h3>SMS рассылки</h3>
                            <ul>
                                <li className="integration-center"/>
                                <li className="integration-smsru"/>
                            </ul>
                        </li>
                        <li>
                            <h3>Сервисы</h3>
                            <ul>
                                <li className="integration-yandex"/>
                                <li className="integration-google"/>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};