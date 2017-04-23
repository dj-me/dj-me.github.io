var w = window.innerWidth;
var h = window.innerHeight;
var game = new Phaser.Game(w, h, Phaser.AUTO, 'phaser-example', { preload: preload, create: create ,update: update });
var background1;
var player;
var cursors;
var circle1;
var circle2;
var circle3;
var cars;
var circle4;


function preload() {
    //  You can fill the preloader with as many assets as your game requires
    
    game.load.image('sun', 'assets/sun.png');
    game.load.image('cloud', 'assets/cloud.png');
    game.load.image('bird', 'assets/bird.png');
    game.load.image('tree1', 'assets/tree1.png');
    game.load.image('tree2', 'assets/tree2.png');
    game.load.image('cafe', 'assets/cafe.png');
    game.load.image('night', 'assets/night.png');
    game.load.image('office', 'assets/office.png');
    game.load.image('shops', 'assets/shops.png');
    game.load.image('walk', 'assets/avatar.png');
    game.load.image('shop', 'assets/shop.png');
    game.load.image('gym', 'assets/gym.png');
    game.load.image('semicircle', 'assets/semi_blue.png');
    game.load.image('home', 'assets/home.png');
    game.load.image('gymlogo', 'assets/gymlogo.png');
    game.load.image('car', 'assets/car.png');
    game.load.image('house-party-logo', 'assets/house-party-logo.png');
    
}

function create() {
    game.stage.backgroundColor = '#FF8000';
    // background1 = game.add.tileSprite(0, 0,800,600, 'bg');
    
    //  Make our game world 2000x2000 pixels in size (the default is to match the game size)
    game.world.setBounds(0, 0, 6800, 600);
    // game.add.sprite(0,0, 'bg'); 

    game.add.sprite(0,0, 'sun');

    for (var i = 400 ; i <= 6000; i = i+500) {
        game.add.sprite(i ,100, 'cloud');
    }

    for (var i = 300 ; i <= 6000; i = i+800) {
        game.add.sprite(i ,110, 'bird');
    }

    for (var i = 400 ; i <= 4000; i = i+1500) {
        game.add.sprite(i ,400, 'tree1');
    }

    for (var i = 800 ; i <= 6000; i = i+1500) {
        game.add.sprite(i ,400, 'tree2');
    }

    game.add.sprite(370 ,350, 'shop');

    game.add.sprite(2700 ,260, 'home');

    game.add.sprite(2800 ,30, 'house-party-logo');

    game.add.sprite(4600 ,30, 'gymlogo');

    game.add.sprite(4470 ,345, 'gym');

    player = game.add.sprite(0,510, 'walk');

    cars =  game.add.sprite(5500,470, 'car');

    circle1 = game.add.sprite(225 ,235, 'semicircle');
    circle1.alpha = 0.5;

    circle2 = game.add.sprite(2500 ,235, 'semicircle');
    circle2.alpha = 0.5;

    circle3 = game.add.sprite(4200 ,235, 'semicircle');
    circle3.alpha = 0.5;

    circle4 = game.add.sprite(5300 ,235, 'semicircle');
    circle4.alpha = 0.5;

    
    game.physics.enable(player,Phaser.Physics.ARCADE);
    game.physics.enable(cars,Phaser.Physics.ARCADE);
    game.physics.enable(circle4,Phaser.Physics.ARCADE);

    cursors = game.input.keyboard.createCursorKeys();

    

}

function update() {
    // background1.tilePosition.x -= 2;
    player.body.velocity.x = 0;
    cars.body.velocity.x = 0;
    circle4.body.velocity.x = 0;
    

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -260;
        game.camera.x -= 4;
    }

    if (cursors.right.isDown)
    {
        player.body.velocity.x = 260;
        game.camera.x += 4;
        if (player.position.x > 5600)
        {
            cars.body.velocity.x = 260;
            circle4.body.velocity.x = 260;
        }
    }

    // if (cursors.up.isDown)
    // {
    //     cars.body.velocity.x = 260;
    //     // game.camera.x += 4;
    // }




    // if (player.position.x > 3700 && counterforex==0)
    // {
    //     forexthought = game.add.sprite(3700,400, 'forexthought');
    //     counterforex++;
    // }

    // if (player.position.x > 3850 && counterforex==1)
    // {
    //     forexthought.kill(true);
    //     counterforex++;
    // }


}





























 