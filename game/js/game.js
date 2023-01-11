enchant();

var player1= new Array(10);
player1.fill(0);
var player2= new Array(10);
player2.fill(0);
var costo1;
var a = new Label(``);
var costo2;
var b = new Label(``);
var Player_HP_1 =20;
var Player_HP_2 =20;
var Player_19_1 = new Array(10);
Player_19_1.fill(0);
var Player_19_2 = new Array(10);
Player_19_2.fill(0);
var Player_3ren_1 = new Array(10);
Player_3ren_1.fill(0);
var Player_3ren_2 = new Array(10);
Player_3ren_2.fill(0);

var Card_c=new Array(5);
Card_c.fill(0);
var Card_count=0;

var bougyo1 =function(){
    var a=0;
    for(var i=1;i<10;i++)
    {
        if(player1[i]==1)
        {
            a++;
            if( player1[i]==player2[i])
            {
                return -1;
            }
        }
    }
    return a;

}

var Fadein = function(a1,a2,a3,a4,a5,a6,a7,a8,a9){
    a1.tl.scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    

    a2.tl.rotateTo(360,5,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    a3.tl.rotateTo(360,10,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)

    a4.tl.rotateTo(360,15,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)

    a5.tl.rotateTo(360,20,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)

    a6.tl.rotateTo(360,25,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)

    a7.tl.rotateTo(360,30,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)

    a8.tl.rotateTo(360,35,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)

    a9.tl.rotateTo(360,40,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)




}

var Cardmotion1 = function(a2, x,y){
    a2.tl.moveTo(x, y, 24, enchant.Easing.QUAD_EASEOUT)    
    .and()
    .rotateTo(360, 24, enchant.Easing.QUAD_EASEOUT) 
    .moveTo(x,-20,1,enchant.Easing.QUAD_EASEOUT)
    .loop();


}
var Cardmotion2 = function(a2, x,y){
    a2.tl.moveTo(x, -20, 24, enchant.Easing.QUAD_EASEOUT)    
    .and()
    .rotateTo(360, 24, enchant.Easing.QUAD_EASEOUT) 
    .moveTo(x,330,1,enchant.Easing.QUAD_EASEOUT)
    .loop();


}
var bougyo2 =function(){
    var a=0;
    for(var i=1;i<10;i++)
    {
        if(player2[i]==1)
        {
            a++;
            if( player2[i]==player1[i])
            {
                return -1;
            }
        }
    }
    return a;

}

var ikkituukann1= function(){
    for(var i=1;i<10;i++)
    {
        if(player1[i]==1)
        {
            Player_19_1[i]=1;
        }
    }
}
var ikkituukann2= function(){
    for(var i=1;i<10;i++)
    {
        if(player2[i]==1)
        {
            Player_19_2[i]=1;
        }
    }
}

var renzoku3_1 = function(){
    for(var i=1;i<10;i++)
    {
        if(player1[i]==1)
        {
            Player_3ren_1[i]+=1;
        }
        else
        {
            Player_3ren_1[i]=0;
        }
    }

}

var renzoku3_2 = function(){
    for(var i=1;i<10;i++)
    {
        if(player2[i]==1)
        {
            Player_3ren_2[i]+=1;
        }
        else
        {
            Player_3ren_2[i]=0;
        }
    }

}


var NumberCard = Class.create(Sprite, {
    initialize: function(number, x, y, scale, width, height,player_number){
        Sprite.call(this, width, height);
        this.number = number;
        this.player_number=player_number;
        
        this.x = x;
        this.y = y;
        this.scaleX = scale;
        this.scaleY = scale;
        if(player_number==1)
        {
            this.image = game.assets[`img/Bcard_${number}.png`];
        this.addEventListener('touchstart' , function(e) {
            game.assets['sound/card.mp3'].play();

                if(player1[number]==0)
                {
                    
                    
                    
                    a.color = 'white';  //フォントの色を白にする
                    a.font = "16px 'Russo One', sans-serif";  //フォントの設定
                    
                    a.moveTo( 50, 80 );  //ラベルの位置
                    if(costo1<1)
                    {
                        a.text="これ以上は選べません"
                    }
                    else
                    {
                        player1[number]=1;
                        costo1-=1;
                        Card_count++;

                        for(var i=0;i<5;i++)
                        {
                            if(Card_c[i]==0)
                            {
                                Card_c[i]=this.number;
                                this.image = game.assets[`img/Bcard_${number}.png`];
                                this.x=-15+63*(i);
                                this.y=80;
                                this.scaleX=0.6;
                                this.scaleY=0.7;
                                
                                break;
                            }
                        }
                        
                        
                       a.text=`選べるの残りの数字は${costo1}つです`;
                    }
            
                    
                    
                    
                    
                    
                }
                else if(player1[number]==1)
                {
                    this.image = game.assets[`img/Bcard_${number}.png`];
                    this.x = x;
                    this.y = y;
                    this.scaleX = scale;
                    this.scaleY = scale;

                    player1[number]=0;
                    costo1+=1;
                    Card_count--;
                    for(var i=0;i<5;i++)
                    {
                        if(Card_c[i]==this.number)
                        {
                            Card_c[i]=0;
                            break;
                        }
                    }
                    
                    a.color = 'white';  //フォントの色を白にする
                    a.font = "16px 'Russo One', sans-serif";  //フォントの設定
                    a.moveTo( 50, 80 );  //ラベルの位置
                    a.text=`選べるの残りの数字は${costo1}つです`;
                    
                    

                }
                else
                {
                    ;
                }
        
        
            

             });
        }
        else if(player_number==2){
            this.image = game.assets[`img/Rcard_${number}.png`];
            this.addEventListener('touchstart' , function(e) {
                game.assets['sound/card.mp3'].play();

                if(player2[number]==0)
                {
                    b.color = 'white';  //フォントの色を白にする
                    b.font = "16px 'Russo One', sans-serif";  //フォントの設定
                    
                    b.moveTo( 50, 80 );  //ラベルの位置
                    if(costo2<1)
                    {
                        b.text="これ以上は選べません"
                    }
                    else
                    {
                        player2[number]=1;
                        costo2-=1;
                        Card_count++;

                        for(var i=0;i<5;i++)
                        {
                            if(Card_c[i]==0)
                            {
                                Card_c[i]=this.number;
                                this.image = game.assets[`img/Rcard_${number}.png`];
                                this.x=-15+63*(i);
                                this.y=80;
                                this.scaleX=0.6;
                                this.scaleY=0.7;
                                
                                break;
                            }
                        }
                       b.text=`選べるの残りの数字は${costo2}つです`;
                    }
            
                    
                    
                    
                    
                    
                }
                else
                {
                    this.image = game.assets[`img/Rcard_${number}.png`];
                    this.x = x;
                    this.y = y;
                    this.scaleX = scale;
                    this.scaleY = scale;

                    player2[number]=0;
                    costo2+=1;
                    Card_count--;
                    for(var i=0;i<5;i++)
                    {
                        if(Card_c[i]==this.number)
                        {
                            Card_c[i]=0;
                            break;
                        }
                    }
                    b.color = 'white';  //フォントの色を白にする
                    b.font = "16px 'Russo One', sans-serif";  //フォントの設定
                    b.moveTo( 50, 80 );  //ラベルの位置
                    b.text=`選べるの残りの数字は${costo2}つです`;
                    
                    

                }
        
        
            

             });
        }
        else if(player_number==9)
        {
            this.image = game.assets[`img/Bcard_${number}.png`];;
        }
        else if(player_number==10)
        {
            this.image = game.assets[`img/Rcard_${number}.png`];;
        }
        else
        {
            ;
        }
    }
});

 //スタート（タイトル）シーン
 var startScene = function() {
    var scene = new Scene();  //シーンを作成
    
    
    var bg = new Sprite(300,180);
    bg.image = game.assets['img/tranp.png'];
    bg.x=0;
    bg.y=-20;
    bg.scaleX=0.8;
    bg.scaleY=0.7;
    scene.addChild(bg);

   // bg.tl.moveTo(135,122,24,enchant.Easing.QUAD_EASEOUT);


    var l1 = new Sprite(547,71);
    l1.image = game.assets['img/title.png'];
    l1.x=-110;
    l1.y=120;
    l1.scaleX=0.5;
    l1.scaleY=0.8;
    scene.addChild(l1);

    
    
    

    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす

/*
    var titleLabel = new Label( '　Number　Card' );  //タイトルのラベルを作成
    titleLabel.color = 'white';  //フォントの色を白にする
    titleLabel.font = "32px 'Russo One', sans-serif";  //フォントの設定
    titleLabel.moveTo( 10, 140 );  //ラベルの位置
    scene.addChild( titleLabel );  //ラベルをsceneに追加
*/


    var descriptionLabel = new Label( 'Tap or press Z' );	  //説明のラベルを作成
    descriptionLabel.color = 'white';  //フォントの色を白にする
    descriptionLabel.font = "16px 'Russo One', sans-serif";  //フォントの設定
    descriptionLabel.moveTo( 105, 260 );	  //ラベルの位置
    scene.addChild( descriptionLabel );  //ラベルをsceneに追加

    Player_HP_1=20;
    Player_HP_2=20;
    Player_19_1.fill(0);
    Player_19_2.fill(0);
    Player_3ren_1.fill(0);
    Player_3ren_2.fill(0);

    scene.addEventListener( 'abuttondown', goToTheGame );
    descriptionLabel.addEventListener( 'touchstart', goToTheGame );
    function goToTheGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( cointos() );  //シーンの切り替え
        game.removeEventListener( 'abuttondown', goToTheGame );
    }


    /**aボタンかタップでメインゲームへ進む**/
    scene.addEventListener( 'bbuttondown', goTo );
    function goTo() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( cheat() );  //シーンの切り替え
        
    }

    return scene;
}

//プレイヤー１の攻撃の数字を選択するシーン
var Choice_action_1 = function() {
    var scene = new Scene();  //シーンを作成
    player1.fill(0);
    Card_c.fill(0);
    Card_count=0;

    costo1 =5;
    

    


    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 300 );  //ラベルの位置
    scene.addChild( next ); 

    /*
    var n = new Label( 'TAP' );  //タイトルのラベルを作成
    n.color = 'white';  //フォントの色を白にする
    n.font = "32px 'Russo One', sans-serif";  //フォントの設定
    n.moveTo( 2, 300 );  //ラベルの位置
    scene.addChild( n ); 
    n.addEventListener('touchstart' , function(){
        console.log(player1);
        //alert("tap")
        

    });
    */

    var text = new Label( 'プレイヤー１の攻撃のターンです' );  //タイトルのラベルを作成
    text.color = 'white';  //フォントの色を白にする
    text.font = "20px 'Russo One', sans-serif";  //フォントの設定
    text.moveTo( 2, 0 );  //ラベルの位置
    scene.addChild( text ); 

    var hp =new Label(`残りHP　${Player_HP_1}`);
    hp.color='white';
    hp.font ="20px 'Russo One', sans-serif";
    hp.moveTo(200,50);
    scene.addChild(hp);

    


    var number_1 = new NumberCard(
    1, -30, 180, 0.35, 100, 150,1);
    var number_2 = new NumberCard(
    2, 5, 180, 0.35, 100, 150,1);
    var number_3 = new NumberCard(
    3, 40, 180, 0.35, 100, 150,1);
    var number_4 = new NumberCard(
    4, 75, 180, 0.35, 100, 150,1);
    var number_5 = new NumberCard(
    5, 110, 180, 0.35, 100, 150,1);
    var number_6 = new NumberCard(
    6, 145, 180, 0.35, 100, 150,1);  
    var number_7 = new NumberCard(
    7, 180, 180, 0.35, 100, 150,1);  
    var number_8 = new NumberCard(
    8, 215, 180, 0.35, 100, 150,1);
    var number_9 = new NumberCard(
    9, 250, 180, 0.35, 100, 150,1);
        
    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    number_1.addEventListener( 'touchstart', lavalava );
    number_2.addEventListener( 'touchstart', lavalava);
    number_3.addEventListener( 'touchstart', lavalava );
    number_4.addEventListener( 'touchstart', lavalava);
    number_5.addEventListener( 'touchstart', lavalava);
    number_6.addEventListener( 'touchstart',lavalava );
    number_7.addEventListener( 'touchstart', lavalava );
    number_8.addEventListener( 'touchstart',lavalava);
    number_9.addEventListener( 'touchstart', lavalava);
    function lavalava() {
        scene.addChild( a ); 

    }
    
    
    
    /*
    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {

        if(player1[1]==1)
        {
            game.replaceScene(resultscene());
        }
    
        else
        {
            game.replaceScene(Choice());
        }
    }
    */

    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( Choice_defence_2());		//シーンの切り替え

    }
    

    return scene;
}
//プレイヤー１の防御の数字を選択するシーン
var Choice_defence_1 = function() {
    var scene = new Scene();  //シーンを作成
    player1.fill(0);
    Card_c.fill(0);
    Card_count=0;
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 300 );  //ラベルの位置
    scene.addChild( next ); 

    /*
    var n = new Label( 'TAP' );  //タイトルのラベルを作成
    n.color = 'white';  //フォントの色を白にする
    n.font = "32px 'Russo One', sans-serif";  //フォントの設定
    n.moveTo( 2, 300 );  //ラベルの位置
    scene.addChild( n ); 
    n.addEventListener('touchstart' , function(){
        console.log(player1);
        

    });
    */

    var text = new Label( 'プレイヤー１の防御のターンです' );  //タイトルのラベルを作成
    text.color = 'white';  //フォントの色を白にする
    text.font = "18px 'Russo One', sans-serif";  //フォントの設定
    text.moveTo( 2, 0 );  //ラベルの位置
    scene.addChild( text ); 

    var hp =new Label(`残りHP　${Player_HP_1}`);
    hp.color='white';
    hp.font ="20px 'Russo One', sans-serif";
    hp.moveTo(200,50);
    scene.addChild(hp);

    


    var number_1 = new NumberCard(
        1, -30, 180, 0.35, 100, 150,1);
        var number_2 = new NumberCard(
        2, 5, 180, 0.35, 100, 150,1);
        var number_3 = new NumberCard(
        3, 40, 180, 0.35, 100, 150,1);
        var number_4 = new NumberCard(
        4, 75, 180, 0.35, 100, 150,1);
        var number_5 = new NumberCard(
        5, 110, 180, 0.35, 100, 150,1);
        var number_6 = new NumberCard(
        6, 145, 180, 0.35, 100, 150,1);  
        var number_7 = new NumberCard(
        7, 180, 180, 0.35, 100, 150,1);  
        var number_8 = new NumberCard(
        8, 215, 180, 0.35, 100, 150,1);
        var number_9 = new NumberCard(
        9, 250, 180, 0.35, 100, 150,1);
        
    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    number_1.addEventListener( 'touchstart', lavalava );
    number_2.addEventListener( 'touchstart', lavalava);
    number_3.addEventListener( 'touchstart', lavalava );
    number_4.addEventListener( 'touchstart', lavalava);
    number_5.addEventListener( 'touchstart', lavalava);
    number_6.addEventListener( 'touchstart',lavalava );
    number_7.addEventListener( 'touchstart', lavalava );
    number_8.addEventListener( 'touchstart',lavalava);
    number_9.addEventListener( 'touchstart', lavalava);
    function lavalava() {
        scene.addChild( a ); 

    }
    
    /*
    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {

        if(player1[1]==1)
        {
            game.replaceScene(resultscene());
        }
    
        else
        {
            game.replaceScene(Choice());
        }
    }
    */

    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( resultscene2());		//シーンの切り替え

    }
    

    return scene;
}
//プレイヤー2の攻撃の数字を選択するシーン
var Choice_action_2 = function() {
    var scene = new Scene();  //シーンを作成
    player2.fill(0);
    Card_c.fill(0);
    Card_count=0;
    
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 300 );  //ラベルの位置
    scene.addChild( next ); 

    /*
    var n = new Label( 'TAP' );  //タイトルのラベルを作成
    n.color = 'white';  //フォントの色を白にする
    n.font = "32px 'Russo One', sans-serif";  //フォントの設定
    n.moveTo( 2, 300 );  //ラベルの位置
    scene.addChild( n ); 
    n.addEventListener('touchstart' , function(){
        console.log(player2);
        

    });
    */

    var text = new Label( 'プレイヤー２の攻撃のターンです' );  //タイトルのラベルを作成
    text.color = 'white';  //フォントの色を白にする
    text.font = "18px 'Russo One', sans-serif";  //フォントの設定
    text.moveTo( 2, 0 );  //ラベルの位置
    scene.addChild( text ); 

    var hp =new Label(`残りHP　${Player_HP_2}`);
    hp.color='white';
    hp.font ="20px 'Russo One', sans-serif";
    hp.moveTo(200,50);
    scene.addChild(hp);

    


    var number_1 = new NumberCard(
        1, -30, 180, 0.35, 100, 150,2);
        var number_2 = new NumberCard(
        2, 5, 180, 0.35, 100, 150,2);
        var number_3 = new NumberCard(
        3, 40, 180, 0.35, 100, 150,2);
        var number_4 = new NumberCard(
        4, 75, 180, 0.35, 100, 150,2);
        var number_5 = new NumberCard(
        5, 110, 180, 0.35, 100, 150,2);
        var number_6 = new NumberCard(
        6, 145, 180, 0.35, 100, 150,2);  
        var number_7 = new NumberCard(
        7, 180, 180, 0.35, 100, 150,2);  
        var number_8 = new NumberCard(
        8, 215, 180, 0.35, 100, 150,2);
        var number_9 = new NumberCard(
        9, 250, 180, 0.35, 100, 150,2);
        
    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    number_1.addEventListener( 'touchstart', lavalava );
    number_2.addEventListener( 'touchstart', lavalava);
    number_3.addEventListener( 'touchstart', lavalava );
    number_4.addEventListener( 'touchstart', lavalava);
    number_5.addEventListener( 'touchstart', lavalava);
    number_6.addEventListener( 'touchstart',lavalava );
    number_7.addEventListener( 'touchstart', lavalava );
    number_8.addEventListener( 'touchstart',lavalava);
    number_9.addEventListener( 'touchstart', lavalava);
    function lavalava() {
        scene.addChild( b ); 

    }
    
    /*
    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {

        if(player1[1]==1)
        {
            game.replaceScene(resultscene());
        }
    
        else
        {
            game.replaceScene(Choice());
        }
    }
    */

    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( Choice_defence_1());		//シーンの切り替え

    }
    

    return scene;
}
//プレイヤー2の防御の数字を選択するシーン
var Choice_defence_2 = function() {
    var scene = new Scene();  //シーンを作成
    player2.fill(0);
    Card_c.fill(0);
    Card_count=0;
    costo2=5;
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 300 );  //ラベルの位置
    scene.addChild( next ); 

    /*
    var n = new Label( 'TAP' );  //タイトルのラベルを作成
    n.color = 'white';  //フォントの色を白にする
    n.font = "32px 'Russo One', sans-serif";  //フォントの設定
    n.moveTo( 2, 300 );  //ラベルの位置
    scene.addChild( n ); 
    n.addEventListener('touchstart' , function(){
        console.log(player2);
        

    });
    */

    var text = new Label( 'プレイヤー２の防御のターンです' );  //タイトルのラベルを作成
    text.color = 'white';  //フォントの色を白にする
    text.font = "18px 'Russo One', sans-serif";  //フォントの設定
    text.moveTo( 2, 0 );  //ラベルの位置
    scene.addChild( text ); 

    var hp =new Label(`残りHP　${Player_HP_2}`);
    hp.color='white';
    hp.font ="20px 'Russo One', sans-serif";
    hp.moveTo(200,50);
    scene.addChild(hp);

    


    var number_1 = new NumberCard(
        1, -30, 180, 0.35, 100, 150,2);
        var number_2 = new NumberCard(
        2, 5, 180, 0.35, 100, 150,2);
        var number_3 = new NumberCard(
        3, 40, 180, 0.35, 100, 150,2);
        var number_4 = new NumberCard(
        4, 75, 180, 0.35, 100, 150,2);
        var number_5 = new NumberCard(
        5, 110, 180, 0.35, 100, 150,2);
        var number_6 = new NumberCard(
        6, 145, 180, 0.35, 100, 150,2);  
        var number_7 = new NumberCard(
        7, 180, 180, 0.35, 100, 150,2);  
        var number_8 = new NumberCard(
        8, 215, 180, 0.35, 100, 150,2);
        var number_9 = new NumberCard(
        9, 250, 180, 0.35, 100, 150,2);
        
    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    number_1.addEventListener( 'touchstart', lavalava );
    number_2.addEventListener( 'touchstart', lavalava);
    number_3.addEventListener( 'touchstart', lavalava );
    number_4.addEventListener( 'touchstart', lavalava);
    number_5.addEventListener( 'touchstart', lavalava);
    number_6.addEventListener( 'touchstart',lavalava );
    number_7.addEventListener( 'touchstart', lavalava );
    number_8.addEventListener( 'touchstart',lavalava);
    number_9.addEventListener( 'touchstart', lavalava);
    function lavalava() {
        scene.addChild( b ); 

    }

    /*
    number_1.addEventListener( 'touchstart', lavalava );
    number_2.addEventListener( 'touchstart', lavalava);
    number_3.addEventListener( 'touchstart', lavalava );
    number_4.addEventListener( 'touchstart', lavalava);
    number_5.addEventListener( 'touchstart', lavalava);
    number_6.addEventListener( 'touchstart',lavalava );
    number_7.addEventListener( 'touchstart', lavalava );
    number_8.addEventListener( 'touchstart',lavalava);
    number_9.addEventListener( 'touchstart', lavalava);
    function lavalava() {
        scene.addChild( a ); 

    }
    */
    
    /*
    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {

        if(player1[1]==1)
        {
            game.replaceScene(resultscene());
        }
    
        else
        {
            game.replaceScene(Choice());
        }
    }
    */

    scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( resultscene1());		//シーンの切り替え

    }
    

    return scene;
}

// コイントスで先攻後攻をきめるシーン

var cointos = function() {
    var scene = new Scene();  //シーンを作成

   /*
    var bg = new Sprite(320,320);
    bg.image = game.assets['img/abc.png'];
    bg.x=0;
    bg.y=0;
    scene.addChild(bg);
    */
    
    

    var human1 = new Sprite(100,100);
    human1.image = game.assets['img/player1.png']; 
    human1.frame =1;
    human1.x=40;
    human1.y =150;
    human1.scaleX=1;
    human1.scaleY =1;
    scene.addChild(human1);

    var p1 = new Label( 'プレイヤー１' );  //タイトルのラベルを作成
    p1.color = 'blue';  //フォントの色を白にする
    p1.font = "15px 'Russo One', sans-serif";  //フォントの設定
    p1.moveTo( 40, 135 );  //ラベルの位置
    scene.addChild( p1 ); 

    var human2 = new Sprite(100,100);
    human2.image = game.assets['img/player1.png']; 
    human2.frame =1;
    human2.x=200;
    human2.y =150;
    human2.scaleX=1;
    human2.scaleY =1;
    scene.addChild(human2);

    var p2 = new Label( 'プレイヤー２' );  //タイトルのラベルを作成
    p2.color = 'red';  //フォントの色を白にする
    p2.font = "15px 'Russo One', sans-serif";  //フォントの設定
    p2.moveTo( 210, 135 );  //ラベルの位置
    scene.addChild( p2 ); 

    var senkou = new Label( '先攻後攻を決めてください' );  //タイトルのラベルを作成
    senkou.color = 'white';  //フォントの色を白にする
    senkou.font = "25px 'Russo One', sans-serif";  //フォントの設定
    senkou.moveTo( 20, 50 );  //ラベルの位置
    scene.addChild( senkou ); 

    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 280 );  //ラベルの位置
    scene.addChild( next ); 





    

    /**シーン更新ごとに呼び出す**/

        
        
    


        scene.addEventListener( 'abuttondown', returnGame );
    next.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( Choice_action_1());		//シーンの切り替え

    }
    



    return scene;
}

var resultscene1 = function() {
    var scene = new Scene();  //シーンを作成
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 300 );  //ラベルの位置
    scene.addChild( next ); 

    var result = new Label( '結果' );  //タイトルのラベルを作成
    result.color = 'white';  //フォントの色を白にする
    result.font = "16px 'Russo One', sans-serif";  //フォントの設定
    result.moveTo( 0, 0 );  //ラベルの位置
    scene.addChild( result ); 
    
    var k=bougyo1();
    if(k==-1)
    {

    game.assets['sound/sippai.mp3'].play();
    var si = new Label( 'プレイヤー１の攻撃失敗' );  //タイトルのラベルを作成
    si.color = 'white';  //フォントの色を白にする
    si.font = "24px 'Russo One', sans-serif";  //フォントの設定
    si.moveTo( 30, 120 );  //ラベルの位置
    scene.addChild( si );
    /*var seikou = new Label( 'プレイヤー２の防御成功' );  //タイトルのラベルを作成
    seikou.color = 'white';  //フォントの色を白にする
    seikou.font = "10px 'Russo One', sans-serif";  //フォントの設定
    seikou.moveTo( 100, 200 );  //ラベルの位置
    scene.addChild( seikou );
    */
    Player_3ren_1.fill(0);
    }
    else
    {
        game.assets['sound/seikou.mp3'].play();
        var sippai = new Label( 'プレイヤー１の攻撃成功' );  //タイトルのラベルを作成
        sippai.color = 'white';  //フォントの色を白にする
        sippai.font = "24px 'Russo One', sans-serif";  //フォントの設定
        sippai.moveTo( 50, 20 );  //ラベルの位置
        scene.addChild( sippai );
        ikkituukann1();
        renzoku3_1();
        Player_HP_2=Player_HP_2-k;
        var hp = new Label( `プレイヤー２の残りのHPは${Player_HP_2}です` );  //タイトルのラベルを作成
        hp.color = 'white';  //フォントの色を白にする
        hp.font = "16px 'Russo One', sans-serif";  //フォントの設定
        hp.moveTo( 45, 60 );  //ラベルの位置
        scene.addChild( hp );

        var players_card = new Label('プレイヤー１が選択した数字です' );  //タイトルのラベルを作成
        players_card.color = 'white';  //フォントの色を白にする
        players_card.font = "16px 'Russo One', sans-serif";  //フォントの設定
        players_card.moveTo( 50, 260 );  //ラベルの位置
        scene.addChild(players_card);

        
        console.log(Player_19_1);
        console.log(Player_3ren_1);
        
        var s=0;
        for(var i=1;i<10;i++)
        {
            
            if(player1[i]==1)
            {
            var nnn = new NumberCard(i, s*60-10, 100, 0.6, 100, 150,9);
            scene.addChild(nnn);
            s++;
            }
        }
    }
    var a=1;
    for(var i=1;i<10;i++)
    {
        a=a*Player_19_1[i];
    }
    var frag=false;
    for(var i=1;i<10;i++)
    {
        if(Player_3ren_1[i]>=3)
        {
            frag=true;
        }
    }
    if(a==1 )
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( goal_1(1));		//シーンの切り替え
        }
    }
    else if(frag==true)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( goal_2(1));		//シーンの切り替え
        }
    }

    else if(Player_HP_2==0)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( gameOverScene1());		//シーンの切り替え
        }
    }

    else
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( Choice_action_2());		//シーンの切り替え
        }
    }

    return scene;
}

var resultscene2 = function() {
    var scene = new Scene();  //シーンを作成
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 300 );  //ラベルの位置
    scene.addChild( next ); 

    var result = new Label( '結果' );  //タイトルのラベルを作成
    result.color = 'white';  //フォントの色を白にする
    result.font = "16px 'Russo One', sans-serif";  //フォントの設定
    result.moveTo( 0, 0 );  //ラベルの位置
    scene.addChild( result ); 

    k=bougyo2();
    if(k==-1)
    {
    var seikou = new Label( 'プレイヤー２の攻撃失敗' );  //タイトルのラベルを作成
    game.assets['sound/sippai.mp3'].play();
    seikou.color = 'white';  //フォントの色を白にする
    seikou.font = "24px 'Russo One', sans-serif";  //フォントの設定
    seikou.moveTo( 30, 150 );  //ラベルの位置
    scene.addChild( seikou );
    Player_3ren_2.fill(0);
    }
    else
    {
        game.assets['sound/seikou.mp3'].play();
        var sippai = new Label( 'プレイヤー２の攻撃成功' );  //タイトルのラベルを作成
        sippai.color = 'white';  //フォントの色を白にする
        sippai.font = "24px 'Russo One', sans-serif";  //フォントの設定
        sippai.moveTo( 50, 20 );  //ラベルの位置
        scene.addChild( sippai );
        ikkituukann2();
        renzoku3_2();
        Player_HP_1=Player_HP_1-k;
        var hp = new Label( `プレイヤー１の残りのHPは${Player_HP_1}です` );  //タイトルのラベルを作成
        hp.color = 'white';  //フォントの色を白にする
        hp.font = "16px 'Russo One', sans-serif";  //フォントの設定
        hp.moveTo( 45, 60 );  //ラベルの位置
        scene.addChild( hp );

        var players_card = new Label('プレイヤー2が選択した数字です' );  //タイトルのラベルを作成
        players_card.color = 'white';  //フォントの色を白にする
        players_card.font = "16px 'Russo One', sans-serif";  //フォントの設定
        players_card.moveTo( 50, 260 );  //ラベルの位置
        scene.addChild(players_card);

        console.log(Player_19_2);
        console.log(Player_3ren_2);

        var s=0;
        for(var i=1;i<10;i++)
        {
            
            if(player2[i]==1)
            {
            var nnn = new NumberCard(i, s*60-10, 100, 0.6, 100, 150,10);
            scene.addChild(nnn);
            s++;
            }
        }
    }

    var a=1;
    for(var i=1;i<10;i++)
    {
        a=a*Player_19_2[i];
    }
    var frag=false;
    for(var i=1;i<10;i++)
    {
        if(Player_3ren_2[i]>=3)
        {
            frag=true;
        }
    }
    if(a==1 )
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( goal_1(2));		//シーンの切り替え
        }
    }
    else if(frag==true)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( goal_2(2));		//シーンの切り替え
        }
    }
    else if(Player_HP_1==0)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( gameOverScene2());		//シーンの切り替え
        }
    }
    else
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( Choice_action_1());		//シーンの切り替え
        }
    }

    



    return scene;
}


var cheat = function() {
    var scene = new Scene();  //シーンを作成
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    /*
    var next = new Label( '4シーン' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 200, 250 );  //ラベルの位置
    scene.addChild( next ); 
    */

    var buttle1 = new Label( '1~9選択シーン' );  //タイトルのラベルを作成
    buttle1.color = 'white';  //フォントの色を白にする
    buttle1.font = "32px 'Russo One', sans-serif";  //フォントの設定
    buttle1.moveTo( 50, 50 );  //ラベルの位置
    scene.addChild( buttle1 ); 


    var buttle2 = new Label( '3連続選択シーン' );  //タイトルのラベルを作成
    buttle2.color = 'white';  //フォントの色を白にする
    buttle2.font = "32px 'Russo One', sans-serif";  //フォントの設定
    buttle2.moveTo( 50, 150 );  //ラベルの位置
    scene.addChild( buttle2 ); 

    Player_19_1.fill(1);
    Player_19_2.fill(1);
    Player_3ren_1.fill(3);
    Player_3ren_2.fill(3);





    
    buttle1.addEventListener( 'touchstart', return1);
    function return1() {
        game.replaceScene( goal_1(1));		//シーンの切り替え

    }
    
    buttle2.addEventListener( 'touchstart', return2);
    function return2() {
        game.replaceScene( goal_2(1));		//シーンの切り替え

    }
    



    return scene;
}
/*
var buttlescene2 = function() {
    var scene = new Scene();  //シーンを作成
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '4シーン' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 200, 250 );  //ラベルの位置
    scene.addChild( next ); 

    var buttle = new Label( 'バトル2' );  //タイトルのラベルを作成
    buttle.color = 'white';  //フォントの色を白にする
    buttle.font = "48px 'Russo One', sans-serif";  //フォントの設定
    buttle.moveTo( 100, 50 );  //ラベルの位置
    scene.addChild( buttle ); 



        scene.addEventListener( 'abuttondown', returnGame );
    scene.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.replaceScene( goal_1());		//シーンの切り替え

    }
    



    return scene;
}
*/

var goal_1 = function(number_p) {
    var scene = new Scene();  //シーンを作成
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 280 );  //ラベルの位置
    scene.addChild( next ); 

    var i=number_p;

    var goal = new Label( '１～９すべての数字の数字で攻撃を成功させました。' );  //タイトルのラベルを作成
    goal.color = 'white';  //フォントの色を白にする
    goal.font = "20px 'Russo One', sans-serif";  //フォントの設定
    goal.moveTo( 10, 50 );  //ラベルの位置
   // scene.addChild( goal ); 

    /*
    var number_1 = new NumberCard(
        1, -30, 100, 0.35, 100, 150,8+i);
        var number_2 = new NumberCard(
        2, 5, 100, 0.35, 100, 150,8+i);
        var number_3 = new NumberCard(
        3, 40, 100, 0.35, 100, 150,8+i);
        var number_4 = new NumberCard(
        4, 75, 100, 0.35, 100, 150,8+i);
        var number_5 = new NumberCard(
        5, 110, 100, 0.35, 100, 150,8+i);
        var number_6 = new NumberCard(
        6, 145, 100, 0.35, 100, 150,8+i);  
        var number_7 = new NumberCard(
        7, 180, 100, 0.35, 100, 150,8+i);  
        var number_8 = new NumberCard(
        8, 215, 100, 0.35, 100, 150,8+i);
        var number_9 = new NumberCard(
        9, 250, 100, 0.35, 100, 150,8+i);
    */

    var number_1 = new NumberCard(
        1, -30, 100, 0, 100, 150,8+i);
        var number_2 = new NumberCard(
        2, 5, 100, 0, 100, 150,8+i);
        var number_3 = new NumberCard(
        3, 40, 100, 0, 100, 150,8+i);
        var number_4 = new NumberCard(
        4, 75, 100, 0, 100, 150,8+i);
        var number_5 = new NumberCard(
        5, 110, 100, 0, 100, 150,8+i);
        var number_6 = new NumberCard(
        6, 145, 100, 0, 100, 150,8+i);  
        var number_7 = new NumberCard(
        7, 180, 100, 0, 100, 150,8+i);  
        var number_8 = new NumberCard(
        8, 215, 100, 0, 100, 150,8+i);
        var number_9 = new NumberCard(
        9, 250, 100, 0, 100, 150,8+i);

    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    number_1.tl.scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_2.tl.rotateTo(360,10,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_3.tl.rotateTo(360,20,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_4.tl.rotateTo(360,30,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_5.tl.rotateTo(360,40,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_6.tl.rotateTo(360,50,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_7.tl.rotateTo(360,60,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_8.tl.rotateTo(360,70,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})

    number_9.tl.rotateTo(360,80,enchant.Easing.QUAD_EASEIN)
    .scaleTo(0.35,0.35,5,enchant.Easing.QUAD_EASEIN)
    .then(function(){game.assets['sound/pp.mp3'].play();})
    .then(function(){scene.addChild( goal ) 
        game.assets['sound/role.mp3'].play();})
    




    if(number_p==1)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( gameOverScene1());		//シーンの切り替え

        }
    }
    else if(number_p==2)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( gameOverScene2());		//シーンの切り替え

        }
    }
    else
    {
        ;
    }
    



    return scene;
}

var goal_2 = function(number_p) {
    var scene = new Scene();  //シーンを作成
    
    scene.backgroundColor = 'green';  //シーンを黒く塗りつぶす
    var next = new Label( '次へ' );  //タイトルのラベルを作成
    next.color = 'white';  //フォントの色を白にする
    next.font = "32px 'Russo One', sans-serif";  //フォントの設定
    next.moveTo( 240, 280 );  //ラベルの位置
    scene.addChild( next );
    
    var i=number_p;

    var goal = new Label( `３連続同じ数字で攻撃を成功させました` );  //タイトルのラベルを作成
    goal.color = 'white';  //フォントの色を白にする
    goal.font = "20px 'Russo One', sans-serif";  //フォントの設定
    goal.moveTo( 10, 50 );  //ラベルの位置
    
    

    if(number_p==1)
    {
        for(var i=1;i<10;i++)
        {
            if(Player_3ren_1[i]==3)
            {
                var qq1= new NumberCard(i,20,100,0,100,150,9);
                var qq2= new NumberCard(i,110,100,0,100,150,9);
                var qq3= new NumberCard(i,200,100,0,100,150,9);

                scene.addChild(qq1);
                scene.addChild(qq2);
                scene.addChild(qq3);

                qq1.tl.scaleTo(0.7,0.7,10,enchant.Easing.QUAD_EASEIN)
                .then(function(){game.assets['sound/pp.mp3'].play();})

                qq2.tl.rotateTo(360,10,enchant.Easing.QUAD_EASEIN)
                .scaleTo(0.7,0.7,10,enchant.Easing.QUAD_EASEIN)
                .then(function(){game.assets['sound/pp.mp3'].play();})

                qq3.tl.rotateTo(360,20,enchant.Easing.QUAD_EASEIN)
                .scaleTo(0.7,0.7,10,enchant.Easing.QUAD_EASEIN)
                .then(function(){scene.addChild( goal );
                    game.assets['sound/role.mp3'].play(); })

                break;

            }
        }
    }
    else
    {
        for(var i=1;i<10;i++)
        {
            if(Player_3ren_2[i]==3)
            {
                var qq1= new NumberCard(i,20,100,0,100,150,10);
                var qq2= new NumberCard(i,110,100,0,100,150,10);
                var qq3= new NumberCard(i,200,100,0,100,150,10);

                scene.addChild(qq1);
                scene.addChild(qq2);
                scene.addChild(qq3);

                qq1.tl.scaleTo(0.7,0.7,10,enchant.Easing.QUAD_EASEIN)
                .then(function(){game.assets['sound/pp.mp3'].play();})

                qq2.tl.rotateTo(360,10,enchant.Easing.QUAD_EASEIN)
                .scaleTo(0.7,0.7,10,enchant.Easing.QUAD_EASEIN)
                .then(function(){game.assets['sound/pp.mp3'].play();})

                qq3.tl.rotateTo(360,20,enchant.Easing.QUAD_EASEIN)
                .scaleTo(0.7,0.7,10,enchant.Easing.QUAD_EASEIN)
                .then(function(){scene.addChild( goal );
                    game.assets['sound/role.mp3'].play();}) 


                break;

            }
        }
    }


    if(number_p==1)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( gameOverScene1());		//シーンの切り替え

        }
    }
    else if(number_p==2)
    {
        scene.addEventListener( 'abuttondown', returnGame );
        next.addEventListener( 'touchstart', returnGame );
        function returnGame() {
            game.assets['sound/cardbottun.mp3'].play();
            game.replaceScene( gameOverScene2());		//シーンの切り替え

        }
    }
    else{
        ;
    }

    



    return scene;
}

var gameOverScene1 = function() {
    var scene = new Scene();
    scene.backgroundColor = 'green';				//シーンを黒く塗りつぶす
    /*
    var gameOverLabel = new Label( 'プレイヤー１の勝利です' );			//GAME OVERのラベルを作成
    gameOverLabel.color = 'white';							//フォントの色を白にする
    gameOverLabel.font = "23px 'Russo One', sans-serif";	//フォントの設定
    gameOverLabel.moveTo( 50, 160 );						//ラベルの位置
    scene.addChild( gameOverLabel );				//ラベルをgameOverSceneに追加
    */

    var vict =new Sprite(313,53);
    vict.image = game.assets['img/victory1.png'];
    vict.x=10;
    vict.y=150;
    vict.scaleX=0;
    vict.scaleY=0;
    scene.addChild(vict);

    vict.tl.moveTo(10, 150.5, 5, enchant.Easing.QUAD_EASEOUT)
    .scaleTo(0.7, 1, 10, enchant.Easing.QUAD_EASEIN)
    vict.tl.moveTo(10, 150.5, 55, enchant.Easing.QUAD_EASEOUT)
    .then(function(){ game.replaceScene( end() );})  




    
    var number_1 = new NumberCard(
        1, -20, -20, 0.35, 100, 150,9);
        var number_2 = new NumberCard(
        2, 10, -20, 0.35, 100, 150,9);
        var number_3 = new NumberCard(
        3, 40, -20, 0.35, 100, 150,9);
        var number_4 = new NumberCard(
        4, 70, -20, 0.35, 100, 150,9);
        var number_5 = new NumberCard(
        5, 100, -20, 0.35, 100, 150,9);
        var number_6 = new NumberCard(
        6, 130, -20, 0.35, 100, 150,9);  
        var number_7 = new NumberCard(
        7, 160, -20, 0.35, 100, 150,9);  
        var number_8 = new NumberCard(
        8, 190, -20, 0.35, 100, 150,9);
        var number_9 = new NumberCard(
        9, 220, -20, 0.35, 100, 150,9);

    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    Cardmotion1(number_1,-20,220);
    Cardmotion1(number_2,10,220);
    Cardmotion1(number_3,40,220); 
    Cardmotion1(number_4,70,220); 
    Cardmotion1(number_5,100,220); 
    Cardmotion1(number_6,130,220); 
    Cardmotion1(number_7,160,220); 
    Cardmotion1(number_8,190,220); 
    Cardmotion1(number_9,220,220); 

    var number_1 = new NumberCard(
        1, -20, 330, 0.35, 100, 150,9);
        var number_2 = new NumberCard(
        2, 10, 330, 0.35, 100, 150,9);
        var number_3 = new NumberCard(
        3, 40, 330, 0.35, 100, 150,9);
        var number_4 = new NumberCard(
        4, 70, 330, 0.35, 100, 150,9);
        var number_5 = new NumberCard(
        5, 100, 330, 0.35, 100, 150,9);
        var number_6 = new NumberCard(
        6, 130, 330, 0.35, 100, 150,9);  
        var number_7 = new NumberCard(
        7, 160, 330, 0.35, 100, 150,9);  
        var number_8 = new NumberCard(
        8, 190, 330, 0.35, 100, 150,9);
        var number_9 = new NumberCard(
        9, 220, 330, 0.35, 100, 150,9);

    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    Cardmotion2(number_1,-20,330);
    Cardmotion2(number_2,10,330);
    Cardmotion2(number_3,40,330); 
    Cardmotion2(number_4,70,330); 
    Cardmotion2(number_5,100,330); 
    Cardmotion2(number_6,130,330); 
    Cardmotion2(number_7,160,330); 
    Cardmotion2(number_8,190,330); 
    Cardmotion2(number_9,220,330); 

    game.assets['sound/fin.mp3'].play();
    

    
    

    /**aボタンかタップでメインゲームに戻る**/
    
    scene.addEventListener( 'abuttondown', returnGame );
    scene.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.replaceScene( end() );		//シーンの切り替え

    }
    

    return scene;
}

var gameOverScene2 = function() {
    var scene = new Scene();
    scene.backgroundColor = 'green';				//シーンを黒く塗りつぶす

    /*
    var gameOverLabel = new Label( 'プレイヤー２の勝利です' );			//GAME OVERのラベルを作成
    gameOverLabel.color = 'white';							//フォントの色を白にする
    gameOverLabel.font = "20px 'Russo One', sans-serif";	//フォントの設定
    gameOverLabel.moveTo( 65, 150 );						//ラベルの位置
    scene.addChild( gameOverLabel );				//ラベルをgameOverSceneに追加
    */


    var vict =new Sprite(313,52);
    vict.image = game.assets['img/victory2.png'];
    vict.x=10;
    vict.y=150;
    vict.scaleX=0;
    vict.scaleY=0;
    scene.addChild(vict);

    vict.tl.moveTo(10, 150.5, 5, enchant.Easing.QUAD_EASEOUT)
    .scaleTo(0.7, 1, 10, enchant.Easing.QUAD_EASEIN)
    vict.tl.moveTo(10, 150.5, 55, enchant.Easing.QUAD_EASEOUT)
    .then(function(){ game.replaceScene( end() );})  




    
    var number_1 = new NumberCard(
        1, -20, -20, 0.35, 100, 150,10);
        var number_2 = new NumberCard(
        2, 10, -20, 0.35, 100, 150,10);
        var number_3 = new NumberCard(
        3, 40, -20, 0.35, 100, 150,10);
        var number_4 = new NumberCard(
        4, 70, -20, 0.35, 100, 150,10);
        var number_5 = new NumberCard(
        5, 100, -20, 0.35, 100, 150,10);
        var number_6 = new NumberCard(
        6, 130, -20, 0.35, 100, 150,10);  
        var number_7 = new NumberCard(
        7, 160, -20, 0.35, 100, 150,10);  
        var number_8 = new NumberCard(
        8, 190, -20, 0.35, 100, 150,10);
        var number_9 = new NumberCard(
        9, 220, -20, 0.35, 100, 150,10);

    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    Cardmotion1(number_1,-20,220);
    Cardmotion1(number_2,10,220);
    Cardmotion1(number_3,40,220); 
    Cardmotion1(number_4,70,220); 
    Cardmotion1(number_5,100,220); 
    Cardmotion1(number_6,130,220); 
    Cardmotion1(number_7,160,220); 
    Cardmotion1(number_8,190,220); 
    Cardmotion1(number_9,220,220); 

    var number_1 = new NumberCard(
        1, -20, 330, 0.35, 100, 150,10);
        var number_2 = new NumberCard(
        2, 10, 330, 0.35, 100, 150,10);
        var number_3 = new NumberCard(
        3, 40, 330, 0.35, 100, 150,10);
        var number_4 = new NumberCard(
        4, 70, 330, 0.35, 100, 150,10);
        var number_5 = new NumberCard(
        5, 100, 330, 0.35, 100, 150,10);
        var number_6 = new NumberCard(
        6, 130, 330, 0.35, 100, 150,10);  
        var number_7 = new NumberCard(
        7, 160, 330, 0.35, 100, 150,10);  
        var number_8 = new NumberCard(
        8, 190, 330, 0.35, 100, 150,10);
        var number_9 = new NumberCard(
        9, 220, 330, 0.35, 100, 150,10);

    scene.addChild(number_1); 
    scene.addChild(number_2); 
    scene.addChild(number_3); 
    scene.addChild(number_4); 
    scene.addChild(number_5); 
    scene.addChild(number_6); 
    scene.addChild(number_7); 
    scene.addChild(number_8); 
    scene.addChild(number_9); 

    Cardmotion2(number_1,-20,330);
    Cardmotion2(number_2,10,330);
    Cardmotion2(number_3,40,330); 
    Cardmotion2(number_4,70,330); 
    Cardmotion2(number_5,100,330); 
    Cardmotion2(number_6,130,330); 
    Cardmotion2(number_7,160,330); 
    Cardmotion2(number_8,190,330); 
    Cardmotion2(number_9,220,330); 

    game.assets['sound/fin.mp3'].play();



    
    /**aボタンかタップでメインゲームに戻る**/
    
    scene.addEventListener( 'abuttondown', returnGame );
    scene.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.replaceScene( end() );		//シーンの切り替え

    }
    

    return scene;
}

var end = function() {
    var scene = new Scene();
    scene.backgroundColor = 'green';				//シーンを黒く塗りつぶす
    var end = new Label( "END" );			//GAME OVERのラベルを作成
    end.color = 'white';							//フォントの色を白にする
    end.font = "100px 'Russo One', sans-serif";	//フォントの設定
    end.moveTo( 70, 150 );						//ラベルの位置
    scene.addChild( end );				//ラベルをgameOverSceneに追加

    /**aボタンかタップでメインゲームに戻る**/
    scene.addEventListener( 'abuttondown', returnGame );
    scene.addEventListener( 'touchstart', returnGame );
    function returnGame() {
        game.assets['sound/cardbottun.mp3'].play();
        game.replaceScene( startScene() );		//シーンの切り替え

    }

    return scene;
}







//Webページが読み込まれたら
addEventListener( 'load', function() {
    game = new Game(320,350);  //ゲームオブジェクトの作成
    game.fps=16;
    game.preload('img/number_1.png','img/number_2.png',
    'img/number_3.png','img/number_4.png','img/number_5.png','img/number_6.png','img/number_7.png',
    'img/number_8.png','img/number_9.png','img/Rnumber_1.png','img/Rnumber_2.png','img/Rnumber_3.png',
    'img/Rnumber_4.png','img/Rnumber_5.png','img/Rnumber_6.png',
    'img/Rnumber_7.png','img/Rnumber_8.png','img/Rnumber_9.png'
    ,'img/start.png','img/player1.png','img/player2.png','img/castle.png','img/seibu.png','img/a.png','img/haikei.png','img/abc.png','img/tranp.png'
    ,'img/Bcard_1.png','img/Bcard_2.png','img/Bcard_3.png','img/Bcard_4.png','img/Bcard_5.png','img/Bcard_6.png','img/Bcard_7.png','img/Bcard_8.png','img/Bcard_9.png'
    ,'img/Rcard_1.png','img/Rcard_2.png','img/Rcard_3.png','img/Rcard_4.png','img/Rcard_5.png','img/Rcard_6.png','img/Rcard_7.png','img/Rcard_8.png','img/Rcard_9.png'
    ,'img/ura.png','img/title.png','img/victory.png','img/victory1.png','img/victory2.png','sound/cardbottun.mp3','sound/card.mp3','sound/seikou.mp3','sound/syouri.mp3','sound/sippai.mp3'
    ,'sound/fin.mp3','sound/pp.mp3','sound/role.mp3');

    //ゲームオブジェクトが読み込まれたら
    game.addEventListener( 'load', function() {
        game.pushScene( startScene() );  //シーンをゲームに追加する
    } );

    game.keybind( 'Z'.charCodeAt(0), 'a' );

    game.keybind( 'Q'.charCodeAt(0), 'b' );

   

   

    

    game.start();  //ゲームスタート
} );








  


