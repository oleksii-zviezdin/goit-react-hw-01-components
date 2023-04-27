import { StatisticsItem } from "../StatisticItem/StatisticsItem"
import PropTypes from 'prop-types';

export const StatisticsBoard = (statisticData) => {
    return (
        <ul className="stat-list">
            {statisticData.map(eachData =>
                <StatisticsItem
                    id={eachData.id}
                    label={eachData.label}
                    percentage={eachData.percentage} />
                )}
        </ul>
    )
}

StatisticsBoard.prototype = {
    data: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}