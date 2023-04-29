import PropTypes from 'prop-types';
import css from '../Statistics.module.css'
import { getRandomSaturatedColor } from '../getRandomSaturatedColor';

export const StatisticsItem = ({id, label, percentage}) => {
    return (
        <li key={id} className={css.item} style={{backgroundColor: getRandomSaturatedColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
        </li>
    )  
}

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}