import { StatisticsBoard } from "./StatisticBoard/StatisticsBoard"
import data from "../../data.json"

export const Statistics = ({title}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <StatisticsBoard statisticData={data} />
        </section>
    )
}