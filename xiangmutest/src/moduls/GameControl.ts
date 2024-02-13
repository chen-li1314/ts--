import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

class GameControl {
    //定义三个属性
    //蛇
    snake: Snake;
    //食物
    food: Food;
    //记分牌
    scorelPanel: ScorePanel;

    //创建一个属性来存储蛇的移动方向（按键的方向）
    direction: string = '';

    //创建一个属性来存储游戏是否结束
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorelPanel = new ScorePanel();
        this.init();
    }

    //游戏初始化,调用后游戏开始
    init() {
        //绑定键盘按键按下的事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        //蛇移动
        this.run();
    }
    //创建一个键盘按下的响应函数
    keydownHandler(event: KeyboardEvent) {
        // console.log(this)
        //需要检查event.key的值是否合法（用户是否按键）


        //修改direction的属性
        this.direction = event.key;



    }

    //创建一个蛇移动的方法
    run() {
        // 根据方向（this.direction）将蛇的位置改变
        /** 
         * 向上  top 减少
         * 向下  top增加
         * 向左  left 减少
         * 向右  left增加
         * 
        */
        //获取蛇的坐标
        let X = this.snake.X;
        let Y = this.snake.Y;

        //根据按键修改x,y的值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;

        }
        //检查蛇是否吃到了食物
        this.checkEat(X,Y)
            
        

        //修改蛇的x和y值
        try {
            //修改蛇的x，y的值
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            //进入catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert(e.message + 'GAME OVER!');
            //将isLive设置为false
            this.isLive = false;
        }



        //开启一个定时调用(可以根据时间决定游戏难度)

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorelPanel.level - 1) * 30);


    }
    //检查蛇是否迟到了食物
    checkEat(X: number, Y: number) {
        
        if(X === this.food.X && Y === this.food.Y) {
            this.food.change();
            this.scorelPanel.addScore();
            this.snake.addBody();
        }
    }


}
export default GameControl;