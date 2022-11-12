import { Score } from "../entity/Score"

const BASE_URL = "https://dev-cognitive-dashboard-server.herokuapp.com"
export default {
    async getScores(){
        const response = await fetch(`${BASE_URL}/techtest`)
        const data = await response.json()
        return data.map(score => new Score(score))
    }
}