import './Footer.css';
import {Container} from '../../wrappers/container/Container';
import logo from "./Vector.png"
import {Social} from "../social/Social";

export const Footer = () => {
    return (
        <Container>
            <footer className="main-footer">
                <div className="footer-top">
                    <img src={logo} width="97" height="15" alt="WebleX"/>
                </div>
                <div className="footer-menu">
                    <h3>О компании</h3>
                    <ul>
                        <li><a href="#">Партнерская программа</a></li>
                        <li><a href="#">Вакансии</a></li>
                    </ul>
                </div>
                <div className="footer-menu">
                    <h3>Меню</h3>
                    <ul>
                        <li><a href="#">Расчёт стоимости</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Виджеты</a></li>
                        <li><a href="#">Интеграции</a></li>
                        <li><a href="#">Наши клиенты</a></li>
                        <li><a href="#">Кейсы</a></li>
                        <li><a href="#">Благодарственные письма</a></li>
                        <li><a href="#">Сертификаты</a></li>
                        <li><a href="#">Блог на Youtube</a></li>
                        <li><a href="#">Вопрос / Ответ</a></li>
                    </ul>
                </div>
                <div className="footer-contacts">
                    <h3>Контакты</h3>
                    <p>+7 495 471-41-63</p>
                    <Social/>
                    <p>Москва, Путевой проезд 3с1, к 902</p>
                </div>
                <div className="footer-bottom">
                    <p>©WelbeX 2021. Все права защищены.</p>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </footer>
        </Container>
    );
};