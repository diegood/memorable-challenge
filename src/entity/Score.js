import SCORE_TYPE from '@/constants/SCORE_TYPE.js'
export class Score {
    constructor(json){
        try {
            this.id = json.id
            this.ulid = json.ulid
            this.name = json.name
            this.client = json.name.split('_')[0]
            this.date = json.date
            this.description = json.description
            this.contenURL = json.url_original
            this.type = json.type
            this.sector = json.sector
            this.txtSal = json.global_txt_sal
            this.scoreM1 = json.perc_score_m1
            this.scoreM2 = json.perc_score_m2
            this.scoreM3 = json.perc_score_m3
            if(this.type === SCORE_TYPE.VIDEO){
                this.duration = json.duration
                this.frameCount = json.frame_count
                this.fps = json.fps
                this.scores = {
                    m1 : JSON.parse(json.perc_scores_m1 || "[]"), // it's weird by case this list is a string no is a Array.
                    m2 : JSON.parse(json.perc_scores_m2 || "[]"), // in some cases this will come empty
                    m3 : JSON.parse(json.perc_scores_m3 || "[]"),
                }
            }
        } catch (error) {
            console.error("it could not parse this json, what appen? i don't know, probably Diego needs another coffee try to give him one", json);
        }
    }

    get totalScore(){
        return this._calculateAverange([this.scoreM1, this.scoreM2, this.scoreM2])
    }

    get scoreByFrame(){
        const {m2, m3} = this.scores
        if(this.type === SCORE_TYPE.VIDEO){
            return this.scores.m1.map((m1, i) => this._calculateAverange([ m1, m2[i], m3[i] ]) )
        }
        return []
    }

    get scoreBySeconds(){
        const score = []
        const fps = Math.ceil(this.fps)
        for(let i=0; i < this.frameCount; i= i+ fps){   
            score.push( this._calculateAverange(this.scoreByFrame.slice(i, i+fps)) )
        }
        return score
    }

    _calculateAverange(values){
        return values.reduce((a, b) => a + b, 0) / values.length
    }
}

