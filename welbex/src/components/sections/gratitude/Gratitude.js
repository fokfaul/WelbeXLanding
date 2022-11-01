import './Gratitude.css';
import {Container} from "../../../wrappers/container/Container";
import React, {useState} from 'react';

const data = [{
    name: "filtron",
    title: "Фильтрон",
    subtitle: "Пантюшин Д.В.",
    text: "«Над проектом работала целая команда. Всё было сделано профессионально, в согласованные сроки. Все вопросы решались. Руководитель проекта Елена всегда на связи: фиксировала информацию, организовывала всю работу своевременно. От компании Фильтрон, выражаю благодарность. Молодцы!»"
}, {
    name: "smscenter",
    title: "SMS Центер",
    subtitle: "Иванов Т.А.",
    text: "«Это было великолепно! Мы смогли удвоить количепство наших клиентов.»"
}, {
    name: "sendpulse",
    title: "SendPulse",
    subtitle: "Сидоров Б.С.",
    text: "«Обратиться сюда было верным решением. Нам помогли найти новый подход к нашим клиентам.»"
}];

export const Gratitude = () => {
    const [number, setNumber] = useState(0);

    function handleSelect(e, index) {
        if (e.currentTarget.localName === 'li') {
            setNumber(index);
            e.currentTarget.parentNode.getElementsByClassName('selected')[0].classList.toggle('selected');
            e.currentTarget.classList.toggle('selected');
        }
    }

    return (
        <Container>
            <section className="gratitude">
                <h1>Благодарственные письма</h1>
                <div className="gratitude-list">
                    <div className="gratitude-list-view">
                        <h2>Компания <span>{data[number].title}</span></h2>
                        <p>{data[number].subtitle}</p>
                        <p>{data[number].text}</p>
                        <a>Читать письмо целиком ></a>
                    </div>
                    <div className="gratitude-list-selector">
                        <ul>
                            {data.map((value, index) => (
                                <li className={value.name + (index === 0 ? " selected" : "")} key={index}
                                    index={index} onClick={(e) => {
                                    handleSelect(e, index)
                                }}><div/></li>))}
                            {data.map((value, index) => (
                                <li className={value.name} key={index + 3} index={index} onClick={(e) => {
                                    handleSelect(e, index)
                                }}><div/></li>))}
                            {data.map((value, index) => (
                                <li className={value.name} key={index + 6} index={index} onClick={(e) => {
                                    handleSelect(e, index)
                                }}><div/></li>))}
                        </ul>
                    </div>
                </div>
            </section>
        </Container>
    );
};