import React from "react";
import UniversalHeader from '../UniversalHeader/UniversalHeader';

function Techs() {
    return (
    <section className="tech">
        <div className="tech__position">
            <UniversalHeader header="Технологии" />
            <div className="tech__textblock">
                <h3 className="tech__header">7 технологий</h3>
                <p className="tech__caption">На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.</p>
            </div>
            <ul className="tech__list">
                <li className="tech__item">HTML</li>
                <li className="tech__item">CSS</li>
                <li className="tech__item">JS</li>
                <li className="tech__item">React</li>
                <li className="tech__item">Git</li>
                <li className="tech__item">Express.js</li>
                <li className="tech__item">mogoDB</li>
            </ul>
        </div>
    </section>
    )
}

export default Techs;
