import PropTypes from "prop-types";

export const TransactionHistoryHead = ({transactionType, transactionAmount, transactionCurrency}) => {
    return (
            <tr>
                <th>{transactionType}</th>
                <th>{transactionAmount}</th>
                <th>{transactionCurrency}</th>
            </tr>
    )
}

TransactionHistoryHead.propTypes = {
    transactionType: PropTypes.string.isRequired,
    transactionAmount: PropTypes.string.isRequired,
    transactionCurrency: PropTypes.string.isRequired,
}