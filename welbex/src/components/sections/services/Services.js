import './Services.css';
import {Container} from "../../../wrappers/container/Container";

export const Services = () => {
    return (
        <Container>
            <section className="services">
                <h1>Услуги</h1>
                <div className="services-about">
                    <h2>Наша компания оказывает <span>целый спектр услуг для вашего бизнеса</span></h2>
                    <p>От аудита отдела продаж <br/>до создания автоматизированной <br/>системы продаж.</p>
                </div>
                <div className="services-list">
                    <ul>
                        <li>
                            <div className="icon services-list-licence"/>
                            <h3>Продажа лицензии</h3>
                            <p>При покупке или продлении amoCRM через нас, вы получаете дополнительные месяцы в подарок
                                для каждого пользователя.</p>
                        </li>
                        <li>
                            <div className="icon services-list-key"/>
                            <h3>Внедрение AmoCRM под ключ</h3>
                            <p>Правильно настроенная CRM-система даёт гарантированный результат и выход на новый
                                уровень.</p>
                        </li>
                        <li>
                            <div className="icon services-list-audit"/>
                            <h3>Аудит и стратегия</h3>
                            <p>Проведём аудит, найдём слабые места и составим стратегию развития вашей CRM-системы и
                                отдела продаж.</p>
                        </li>
                        <li>
                            <div className="icon services-list-help"/>
                            <h3>Сопровождение, развитие, техническая помощь</h3>
                            <p>Персональный менеджер всегда на связи по любым вопросам.</p>
                        </li>
                        <li>
                            <div className="icon services-list-individual"/>
                            <h3>Индивидуальная разработка, кастомизация, доработка</h3>
                            <p>Создадим под ваши бизнес процессы и задачи нестандартное решение в CRM-системе.</p>
                        </li>
                        <li>
                            <div className="icon services-list-widget"/>
                            <h3>Аренда виджетов</h3>
                            <p>Закажите уже готовое решение под различные задачи.</p>
                        </li>
                        <li>
                            <div className="icon services-list-education"/>
                            <h3>Обучение и аттестация</h3>
                            <p>Проводим обучение для руководителей и линейного персонала.</p>
                        </li>
                        <li>
                            <div className="icon services-list-report"/>
                            <h3>Отчётность / Dashboard</h3>
                            <p>Настроим и покажем как следить за ключевыми показателями.</p>
                        </li>
                        <li>
                            <div className="icon services-list-integration"/>
                            <h3>Интеграции сервисов с AmoCRM</h3>
                            <p>Интегрируем вашу CRM-систему с другими системами.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};