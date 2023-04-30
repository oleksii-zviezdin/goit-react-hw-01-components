import PropTypes from "prop-types";

export const TransactionHistoryBody = ({ transactionData }) => {
    return transactionData.map(({ id, type, amount, currency }) => {
    return  <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
    })
}

TransactionHistoryBody.propTypes = {
    transactionData: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }
    )).isRequired,
}   