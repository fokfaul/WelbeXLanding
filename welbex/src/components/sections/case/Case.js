import './Case.css';
import {Container} from "../../../wrappers/container/Container";
import telegram from "./video_telegram.png"
import youtube from "./video_youtube.png"

export const Case = () => {
    return (
        <Container>
            <section className="case">
                <h1>Кейсы решений</h1>
                <div className="case-about">
                    <h2>Оцените результаты <span>внедрения AmoCRM</span></h2>
                    <h3>Ваш бизнес тоже станет <br/>эффективнее!</h3>
                </div>
                <div className="case-list">
                    <ul>
                        <li className="case-list-big">
                            <span className="case-list-upper">+50%</span>
                            <p>успешно закрытых сделок</p>
                            <h3>Компания по обслуживанию канализаций</h3>
                            <div className="case-list-video">
                                <img src={telegram} alt="Телеграм"/>
                                <div className="case-video-btn">
                                    <div className="video-btn-play"/>
                                    <p>Смотреть видеоотзыв</p>
                                </div>
                            </div>
                        </li>
                        <li className="case-list-short">
                            <span className="case-list-upper">+30%</span>
                            <p>скорость <br/>завершения сделок</p>
                            <h3>Компания по разработке индивидуального дизайна</h3>
                            <div className="video-btn-play"/>
                        </li>
                        <li className="case-list-short">
                            <span className="case-list-upper">в 5 раз</span>
                            <p>увеличили <br/>скорость работы <br/>логиста</p>
                            <h3>Курьерская служба</h3>
                            <div className="video-btn-play"/>
                        </li>
                        <li className="case-list-big">
                            <span className="case-list-upper">+70%</span>
                            <p>KPI сотрудников</p>
                            <h3>Создание системы мотивации сотрудников</h3>
                            <div className="case-list-video">
                                <img src={youtube} alt="Youtube"/>
                                <div className="case-video-btn">
                                    <div className="video-btn-play"/>
                                    <p>Смотреть видеоотзыв</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </Container>
    );
};