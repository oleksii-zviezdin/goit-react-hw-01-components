import PropTypes from "prop-types";
import { TransactionHistoryHead } from "./TransactionHistoryHead/TransactionHistoryHead";
import { TransactionHistoryBody } from "./TransactionHistoryBody/TransactionHistoryBody";
import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({transactions}) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <TransactionHistoryHead
                    transactionType="Type"
                    transactionAmount="Amount"
                    transactionCurrency="Currency"
                />
            </thead>
            <tbody>
                <TransactionHistoryBody transactionData={transactions} />
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
}