import PropTypes from 'prop-types';

export const StatisticsItem = ({id, label, percentage}) => {
    return (
        <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
        </li>
    )  
}

StatisticsItem.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}