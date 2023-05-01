import { StatisticsBoard } from "./StatisticBoard/StatisticsBoard"
import data from "../../data.json"
import css from './Statistics.module.css'

export const Statistics = ({ title }) => {
    if (title === null || title === "" || title === undefined || !title) {
        return  <section className={css.statistics}>
                    <StatisticsBoard statisticData={data} />
                </section>
    } else {
        return (
            <section className={css.statistics}>
                <h2 className={css.title}>{title}</h2>
                <StatisticsBoard statisticData={data} />
            </section>
        )
    }
}