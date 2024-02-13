class Snake {
    //蛇头
    head: HTMLElement;
    //蛇身
    bodies: HTMLCollection;
    //获取蛇的容器
    element:HTMLElement;
    constructor() {
        this.element=document.getElementById("snake")!;
        // this.element=document.getElementById("snake");
        this.head = document.querySelector('#snake >div')!;
        this.bodies = this.element.getElementsByTagName('div');

    }

    //获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    //设置蛇头的坐标
    set X(value) {
        //如果新值和旧值相同，则直接返回不再修改
        if(this.X===value)
        {
            return;
        }
        //x的值合法范围（0-290），防止撞墙
        if(value<0 || value>290){
            //进入判断，说明蛇撞墙了
            throw new Error("shezhuangqiangel1")
        }
        this.moveBady();
        this.head.style.left = value + 'px';
        //检查身体是否撞到自己
        this.cheackHeadBody();
    }
    set Y(value) {
        if(this.Y===value)
        {
            return;
        }
        if(value<0 || value>290){
            //进入判断，说明蛇撞墙了
            throw new Error("shezhuangqiangel1")
        }
        //移动身体
        this.moveBady();
        this.head.style.top = value + 'px';
        this.cheackHeadBody();

    }

    //蛇增加身体的方法
    addBody(){
        //向element中添加一个div
        this.element.insertAdjacentHTML('beforeend',"<div></div>");
        
    }
    //添加一个蛇身体移动的方法
    moveBady(){
         /*
         将后边的身体设置为前边身体的位，举例子：
         第4节=第三节的位置
         第3节=第2节的位置
         第2节=蛇头的位置
         */ 
        //遍历获取所有的身体
        for(let i=this.bodies.length-1;i>0;i--){
            //获取前面身体的位置
            let X=(this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y=(this.bodies[i-1] as HTMLElement).offsetTop;
            //将值设置到当前身体上
            (this.bodies[i] as HTMLElement).style.left=X+'px';
            (this.bodies[i] as HTMLElement).style.top=Y+'px';


        }
    }

    cheackHeadBody(){
        //获取所哟的身体，检查是否和舌头的坐标发生重叠
        for(let i=1;i<this.bodies.length;i++){
            let bd=this.bodies[i] as HTMLElement;
            if(this.X===bd.offsetLeft&&this.Y===bd.offsetTop){
                throw new Error('die');
                
            }
        }
    }




}
export default Snake