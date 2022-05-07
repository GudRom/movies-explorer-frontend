import React from "react";

function Portfolio() {
    return (
    <div className="portfolio">
        <h3 className="portfolio__header">Портфолио</h3>
        <ul className="portfolio__list">
            <li className="portfolio__item">
                <a href="https://github.com/GudRom/how-to-learn" className="portfolio__name" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
                <a href="https://github.com/GudRom/how-to-learn" className="portfolio__link" target="_blank" rel="noopener noreferrer"></a>
            </li>
            <li className="portfolio__item">
                <a href="https://github.com/GudRom/russian-travel" className="portfolio__name" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
                <a href="https://github.com/GudRom/russian-travel" className="portfolio__link" target="_blank" rel="noopener noreferrer"></a>
            </li>
            <li className="portfolio__item">
                <a href="https://github.com/GudRom/react-mesto-api-full" className="portfolio__name" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
                <a href="https://github.com/GudRom/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noopener noreferrer"></a>
            </li>
        </ul>
    </div>
    )
}

export default Portfolio;
