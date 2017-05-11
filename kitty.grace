import "mgcollections" as collections
import "dom" as dom
import "StandardPrelude" as sp
inherits sp.methods

// Main class for game library
var m_world
var worldSet := false

// XXX: Control functions are at the bottom

// Represents an image in the game world
class KittyImage.new(url', height', width') {
    
    print "CREATING NEW IMAGE: {url'}..."
    def imgTag = dom.document.createElement("img")
    imgTag.src := url'

    var height := height'
    var width := width'

    method drawOld(ctx') {
        print "DRAWING IMAGE: {imgTag.src} ({width}, {height})..."
        ctx'.save
        ctx'.translate(0, 0)
        ctx'.rotate(-(180 + 180) / 180 * 3.1415)
        ctx'.drawImage(imgTag, -width / 2, -height / 2, width, height)
        ctx'.restore
        print "IMAGE: {imgTag.src} DRAWN"
    }
    
    method drawWithSize(ctx', width', height') {
        print "DRAWING IMAGE: {imgTag.src} ({width'}, {height'})..."
        // ctx'.save
        // ctx'.translate(0, 0)
        // ctx'.rotate(-(180 + 180) / 180 * 3.1415)
        // ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle
        //            0, 0, canvas.width, canvas.height); // destination rectangle
        ctx'.drawImage(imgTag, 0, 0, imgTag.width, imgTag.height, 0, 0, width', height')
        ctx'.restore
        print "IMAGE: {imgTag.src} DRAWN"
    }

    method drawBackground(ctx) {
        print "DRAWING BACKGROUND: {imgTag.src} (500, 500)..."
        ctx.drawImage(imgTag, 0, 0, imgTag.width, imgTag.height, 0, 0, 500, 500)
        print "BACKGROUND: {imgTag.src} DRAWN"
    }

    method draw(ctx, dx, dy, rot) {
        print "DRAWING IMAGE: {imgTag.src} ({width}, {height})..."
        ctx.save
        ctx.translate(dx, dy)
        ctx.rotate(rot *  180 / 3.14)
        ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)
        ctx.restore
        print "IMAGE: {imgTag.src} DRAWN"
    }

    print "CREATED NEW IMAGE: {url'}"
}

method Image(url', x', y') {
    object {
        inherits KittyImage.new(url', x', y')
    }
}

// Represents an object in the game world
class KittyEntity.new(x', y') {
    
    print "CREATING ENTITY AT ({x'}, {y'})..."

    var posX := x'
    var posY := y'
    var rotation := 0

    var image

    awake

    // Called on creation
    method awake {
        // print "awake"
    }

    // Called on game start
    method start {
        // print "start"
    }

    // Called by main game class
    method update {
        
    }

    // Called on class destructor
    method onDestroy {

    }

    method draw(ctx) {
        ctx.save
        ctx.translate(posX, posY)
        image.draw(ctx)
        ctx.restore
    }

    method setImage(image') {
        image := Image(image', 64, 64)
    }

    method setLocation(x, y) {
        self.posX := x
        self.posY := y
    }

    method getX {
        return posX
    }

    method getY {
        return posY
    }

    method getRotation {
        return rotation
    }

    print "ENTITY CREATED"
} 

method Entity(x', y') {
    object {
        inherits KittyEntity.new(x', y')
    }
}

// Represents the game world itself
class KittyWorld.new() {

    print "CREATING NEW WORLD..."
    
    var background
    var backgroundColour := "black"

    var document

    var backingCanvas
    var backingContext

    var canvas
    var canvasWidth
    var canvasHeight

    var entities := collections.list.new

    var isInit := false

    var mctx

    init

    // Called on initialization
    method init {

        print "INITIALIZING WORLD..."

        if (isInit) then {
            return false
        }

        document := dom.document
        canvas := document.getElementById("standard-canvas")
        canvasWidth := canvas.width
        canvasHeight := canvas.height

        isInit := true
        print "INITIALIZATION FINISHED"
        start
    }

    // Called on game start
    method start {
        print "STARTING WORLD..."
        backingCanvas := dom.document.createElement("canvas")
        backingCanvas.height := canvasHeight
        backingCanvas.width := canvasWidth
        backingContext := backingCanvas.getContext("2d")
        mctx := canvas.getContext("2d")
        print "WORLD STARTED"
    }

    // Updates the game world
    method update {
        print "UPDATING WORLD..."

        // Draw the background
        mctx.fillStyle := backgroundColour
        mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        mctx.drawImage(backingCanvas, 0, 0)
        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)

        // Draw the entities
        for (entities) do {
            entity->entity.draw(mctx)
        }

        print "WORLD UPDATED"
    }

    // method addBackground(url') {
    //     background := Image(url')
    // }
    method setBackground(background') {
        background := Image(background', canvasWidth, canvasHeight)
    }

    method addEntity(e: KittyEntity) {
        return entities.push(e)
    }

    print "WORLD CREATED"
}

method World() {
    object {
        inherits KittyWorld.new()
    }
}

// CONTROL SECTION //

// Called on game start
method start {

    print "CHECKING..."

    if (!worldSet) then {
        print "NO WORLD!!"
        return 
    }

    print "STARTING..."

    // Dewit
    m_world.start
}

// XXX: Not sure how to call this
method stop {
    print "STOPPING..."
}

method setWorld(world': KittyWorld) {
    m_world := world'
    worldSet := true
}

// TEST SECTION //

// def foo = World.new(100, 100)
// def bar = Entity.new(10, 10)
// foo.addEntity(bar)
