import { StatisticsBoard } from "./StatisticBoard/StatisticsBoard"
import data from "../../data.json"
    
export const Statistics = () => {
    return (
        <section className="statistics">
            <h2 className="title">Upload stats</h2>
            <StatisticsBoard statisticData={data} />
        </section>
    )
}