import React from "react";
import UniversalHeader from '../UniversalHeader/UniversalHeader';

function AboutProject() {
    return (
    <section className="project">
        <UniversalHeader header="О проекте"/>
        <ul className="project__flexbox">
            <li className="project__textblock">
                <p className="project__header">Дипломный проект включал 5&nbsp;этапов</p>
                <p className="project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и&nbsp;финальные доработки.</p>
            </li>
            <li className="project__textblock">
                <p className="project__header">На выполнение диплома ушло 5&nbsp;недель</p>
                <p className="project__text">У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </li>
        </ul>
        <div className="project__worktime">
            <ul className="project__flex-basis">
                <li className="project__timeline">1 неделя</li>
                <li className="project__timeline project__timeline_white-big-basis">4 недели</li>
            </ul>
            <ul className="project__flex-basis">
                <li className="project__caption">Back-end</li>
                <li className="project__caption project__caption_big-basis">Front-end</li>
            </ul>
        </div>
    </section>
    )
}

export default AboutProject;
