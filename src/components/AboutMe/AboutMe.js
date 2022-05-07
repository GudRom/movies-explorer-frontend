import React from "react";
import Portfolio from '../Portfolio/Portfolio';
import photo from '../../images/student-photo.jpg';
import UniversalHeader from '../UniversalHeader/UniversalHeader';

function AboutMe() {
    return (
    <section className="student">
        <UniversalHeader header="Студент" />
        <div className="student__info">
            <div className="student__textblock">
                <p className="student__name">Роман</p>
                <p className="student__prof">Веб-разработчик, 26 лет</p>
                <p className="student__story">Я&nbsp;родился в&nbsp;России, но&nbsp;уже 8&nbsp;лет живу в&nbsp;Москве.
                 У&nbsp;меня диплом бакалавра по&nbsp;робототехнике НИУ &laquo;МЭИ&raquo;. Люблю футбол, кататься на&nbsp;сноуборде.
                  С&nbsp;мая 2020 года работаю в&nbsp;&laquo;Карьерах Якутии&raquo;. После того, как прошел курс по&nbsp;веб-разработке, ищу работу в&nbsp;этой сфере.</p>
                <ul className="student__social-list">
                    <li className="student__social-item"><a href="https://facebook.com" className="student__social-link" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                    <li className="student__social-item"><a href="https://github.com/GudRom" className="student__social-link" target="_blank" rel="noopener noreferrer">Github</a></li>
                </ul>
            </div>
            <img className="student__photo" src={photo} alt="Фото"/>
        </div>
        <Portfolio />
    </section>
    )
}

export default AboutMe;
