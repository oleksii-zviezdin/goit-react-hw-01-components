import { StatisticsItem } from "../StatisticItem/StatisticsItem"
import PropTypes from 'prop-types';
import css from '../Statistics.module.css'

export const StatisticsBoard = ({statisticData}) => {
    return (
        <ul className={css.statlist}>
            {statisticData.map(({ id, label, percentage }) => {
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