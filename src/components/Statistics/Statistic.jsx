import { StatisticsBoard } from "./StatisticBoard/StatisticsBoard"
import data from "../../data.json"
import css from './Statistics.module.css'

export const Statistics = ({title}) => {
    return (
        <section className={css.statistics}>
            <h2 className={css.title}>{title}</h2>
            <StatisticsBoard statisticData={data} />
        </section>
    )
}