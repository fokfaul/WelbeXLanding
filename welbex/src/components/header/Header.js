import './Header.css';
import {Container} from '../../wrappers/container/Container';
import logo from "./logo.svg"
import logo_name from "./logo_name.svg"
import {Social} from "../social/Social";

export const Header = () => {
    return (
        <Container>
            <header className="main-header">
                <div className="header-top">
                    <div className="header-logo">
                        <img src={logo} width="35" height="24" alt="WelbeX"/>
                        <img src={logo_name} width="97" height="15" alt="WelbeX"/>
                    </div>
                    <nav className="main-menu">
                        <ul>
                            <li><a href="#">Услуги</a></li>
                            <li><a href="#">Виджеты</a></li>
                            <li><a href="#">Интеграции</a></li>
                            <li><a href="#">Кейсы</a></li>
                            <li><a href="#">Сертификаты</a></li>
                        </ul>
                    </nav>
                    <div className="header-contacts">
                        <p>+7 495 471-41-63</p>
                        <Social/>
                    </div>
                </div>
                <div className="header-bottom">
                    <p>крупный интегратор AmoCRM в Росcии и ещё 8 странах</p>
                </div>
            </header>
        </Container>
    );
};