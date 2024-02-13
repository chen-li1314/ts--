class ScorePanel{
    // score:number
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;

    //设置一个变量限制等级
    maxlevel:number;

    //设置一个变量表示是多少分时升级
    upScore:number;
    constructor( maxlevel:number=10,upScore:number=10){
        this.scoreEle=document.getElementById("score")!;
        this.levelEle=document.getElementById("level")!;
        this.maxlevel=maxlevel;
        this.upScore=upScore;
    }

    //设置一个加分的方法
    addScore(){
        //使分数自增
        // this.score++;
        this.scoreEle.innerHTML= ++this.score+'';
        if(this.score%this.upScore===0){
            this.levelup();
        }
    }
    //等级提升
    levelup(){
        if(this.level<this.maxlevel){
            this.levelEle.innerHTML= ++this.level+'';
        }

    }


}
export default ScorePanel;
// const scorePanel=new ScorePanel(100,2);
// for(let i =0;i<200;i++){
//     scorePanel.addScore();
// }
