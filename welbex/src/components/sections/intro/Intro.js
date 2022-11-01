import React, {useState} from 'react';
import './Intro.css';
import {Container} from "../../../wrappers/container/Container";

export const Intro = () => {
    const [hovered, setHovered] = useState(false);
    const setHover = () => setHovered(true);
    const unsetHover = () => setHovered(false);
    return (
        <Container>
            <section className="intro">
                <h1>Давайте знакомиться</h1>
                <div className="intro-video">
                    <h2><span>Посмотрите минутное видео</span> от основателя компании</h2>
                    <div className={hovered ? 'intro-video-space hover' : 'intro-video-space'}>
                        <div className="intro-video-window" onMouseEnter={setHover} onMouseLeave={unsetHover}/>
                        <div className="intro-video-btn" onMouseEnter={setHover} onMouseLeave={unsetHover}>
                            <div className="video-btn-play"/>
                            <p>Посмотрите видео и получите подарок</p>
                        </div>
                    </div>
                </div>
                <div className="intro-founder">
                    <h3>Михаил Доброхвалов — основатель WelbeX.</h3>
                </div>
            </section>
        </Container>
    );
};