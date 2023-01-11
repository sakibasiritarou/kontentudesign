enchant();

var player1= new Array(9);
player1.fill(0);

window.onload = function(){
    
    core = new Core(1321,1321);
    core.fps =16;

    //core.isStart =false;
    core.addEventListener('load', function(){
        core.pushScene(game.startScene() );
    });

    

    core.preload('img/number_1.png','img/number_2.png',
    'img/number_3.png','img/number_4.png','img/number_5.png','img/number_6.png','img/number_7.png',
    'img/number_8.png','img/number_9.png','img/Rnumber_1.png','img/start.png');
    core.onload = function() {

        core.rootScene.addEventListener('enterframe',function(e) {
            if(!core.isStart) return;

            var number_1 =new Sprite(75,152);

        number_1.image = core.assets['img/number_1.png'];
        number_1.frame =1;
        number_1.x=550;
        number_1.y =550;
        number_1.scaleX=1;
        number_1.scaleY =1;

        core.rootScene.addChild(number_1);

        number_1.addEventListener('touchstart' , function(e) {
           //this.x =e.x-this.width/2;
            //this.y =e.y - this.height / 2;
            if(player1[0]==0)
            {
                player1[0]=1;
                number_1.image = core.assets['img/Rnumber_1.png'];
            }
            else
            {
                number_1.image = core.assets['img/number_1.png'];
                player1[0]=0;
            }
            


        });
        });

        startbutton = new Sprite(236,48);
        startbutton.image = core.assets['img/start.png'];
        startbutton.x=542;
        startbutton.y=536;
        startbutton.scaleX = 4;
        startbutton.scaleY = 4;

        startbutton.addEventListener('touchstart' , function(){
            startbutton.y=-200;
            core.isStart = true;
        });
        core.rootScene.addChild(startbutton);

        


        

    }
    core.start();
    
}