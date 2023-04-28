import { StatisticsItem } from "../StatisticItem/StatisticsItem"
import PropTypes from 'prop-types';

export const StatisticsBoard = ({statisticData}) => {
    return (
        <ul className="stat-list">
            {statisticData.map(({ id, label, percentage }) => {
                console.log(`key:`,id,`label:`, label,`repcentage:`, percentage)
                return(
                    <StatisticsItem
                        key={id}
                        id={id}
                        label={label}
                        percentage={percentage}
                    />
            )}
                )}
        </ul>
    )
}

StatisticsBoard.propTypes = {
    statisticData: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}