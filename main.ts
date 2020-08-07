controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        4 f 4 
        4 4 4 
        4 4 4 
        . 4 . 
        4 4 4 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        4 4 4 . 4 
        f 4 4 4 4 
        4 4 4 . 4 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        4 . 4 4 4 
        4 4 4 4 f 
        4 . 4 4 4 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        4 4 4 
        . 4 . 
        4 4 4 
        4 4 4 
        4 f 4 
        `)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    4 . 4 4 4 
    4 4 4 4 f 
    4 . 4 4 4 
    `, SpriteKind.Player)
scene.setBackgroundColor(8)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(hex`0a0008000200000000000000000102000000000000000001020000000000000000010200000000000000000102000000000000000001020000000000000000010200000000000000000102000000000000000001`, img`
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
info.setLife(5)
forever(function () {
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
    pause(400)
    if (Math.percentChance(50)) {
        projectile = sprites.createProjectileFromSide(img`
            . . 9 9 9 9 9 . . 
            . 9 . . . . . 9 . 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            . 9 . . . . . 9 . 
            . . 9 9 9 9 9 . . 
            `, 50, 0)
        tiles.placeOnRandomTile(projectile, myTiles.tile2)
    } else {
        projectile = sprites.createProjectileFromSide(img`
            . . 9 9 9 9 9 . . 
            . 9 . . . . . 9 . 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            9 . . . . . . . 9 
            . 9 . . . . . 9 . 
            . . 9 9 9 9 9 . . 
            `, -50, 0)
        tiles.placeOnRandomTile(projectile, myTiles.tile1)
    }
})
