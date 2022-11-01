import './Widgets.css';
import {Container} from "../../../wrappers/container/Container";
import React, {useState} from 'react';


export const Widgets = () => {
    const [widget, setWidget] = useState("Яндекс Диск");
    function handleSelect(e) {
        e.preventDefault();
        if (e.target.localName === 'li') {
            setWidget(e.target.innerHTML);
            e.target.parentNode.getElementsByClassName('selected')[0].classList.toggle('selected');
            e.target.classList.toggle('selected');
        }
    }
    return (
        <Container>
            <section className="widgets">
                <h1>Виджеты</h1>
                <div className="widgets-about">
                    <h2>Для вас разработали <span>готовые решения <br/>в виде виджетов</span></h2>
                    <h3>20 виджетов помогут <br/>автоматизировать ваш отдел.</h3>
                </div>
                <div className="widgets-offers">
                    <div className="widgets-offers-description">
                        <div className="widgets-offers-opportunities">
                            <h3>Основные возможности:</h3>
                            <ul className="list-line">
                                <li>Загрузка файлов любого <br/>формата</li>
                                <li>Сортировка всех файлов <br/>по папкам</li>
                                <li>Отображение файлов прямо <br/>в сделке в виде примечания, <br/>а так же в панели справа</li>
                            </ul>
                        </div>
                        <div className="widgets-offers-free">
                            <div className="widgets-offers-free-about">
                                <h3>Попробуйте виджет {widget} бесплатно:</h3>
                                <ul className="list-line">
                                    <li>1 месяц бесплатно</li>
                                    <li>Затем выберите тариф <br/>на 6, 9, 12 или 24 месяца</li>
                                </ul>
                            </div>
                            <div className="btn widgets-offers-free-get">Попробовать бесплатно</div>
                        </div>
                    </div>
                    <div className="widgets-offers-set">
                        <ul onClick={handleSelect}>
                            <li className="icon-widget-yandex selected">Яндекс Диск</li>
                            <li className="icon-widget-google">Google Drive</li>
                            <li className="icon-widget-people">Распределение заявок</li>
                            <li className="icon-widget-clock">Время на этапе</li>
                            <li className="icon-widget-history">История посещений</li>
                            <li className="icon-widget-sync">Синхронизация сделок</li>
                            <li className="icon-widget-asana">Синхронизация с Asana</li>
                            <li className="icon-widget-telegram">Уведомление в Telegram</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Container>
    );
};