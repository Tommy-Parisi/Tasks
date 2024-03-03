import React, { useState } from "react";

enum Holiday {
    NewYear = "🎆",
    StPatrick = "🍀",
    Easter = "🐇",
    Halloween = "🎃",
    Christmas = "🎄"
}

const yearOrder = [
    Holiday.NewYear,
    Holiday.StPatrick,
    Holiday.Easter,
    Holiday.Halloween,
    Holiday.Christmas
];

const alphaOrder = [
    Holiday.Christmas,
    Holiday.Easter,
    Holiday.Halloween,
    Holiday.NewYear,
    Holiday.StPatrick
];

function getNextHoliday(currentHoliday: Holiday, order: Holiday[]): Holiday {
    const currentIndex = order.indexOf(currentHoliday);
    const nextIndex = (currentIndex + 1) % order.length;
    return order[nextIndex];
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.NewYear
    );

    const cycleByYear = () =>
        setCurrentHoliday((current) => getNextHoliday(current, yearOrder));

    const cycleAlphabetically = () =>
        setCurrentHoliday((current) => getNextHoliday(current, alphaOrder));

    return (
        <div>
            <p>Holiday: {currentHoliday}</p>
            <button onClick={cycleAlphabetically}>Advance by Alphabet</button>
            <button onClick={cycleByYear}>Advance by Year</button>
        </div>
    );
}
