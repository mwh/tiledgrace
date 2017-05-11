import "mgcollections" as collections
import "dom" as dom

import "StandardPrelude" as sp
inherits sp.new

// Main class for game library
var m_world

method start {
    print "STARTING..."
}

method stop {
    print "STOPPING..."
}

method setWorld(world') {
    m_world := world'
}

class KittyImage.new(url') {
    
    print "CREATING NEW IMAGE: {url'}..."
    def imgTag = dom.document.createElement("img")
    imgTag.src := url'

    var height := 64
    var width := 64

    method draw(ctx') {
        print "DRAWING IMAGE: {imgTag.src}..."
        ctx'.save
        ctx'.translate(0, 0)
        ctx'.rotate(-(180 + 180) / 180 * 3.1415)
        ctx'.drawImage(imgTag, -width / 2, -height / 2, width, height)
        ctx'.restore
        print "IMAGE: {imgTag.src} DRAWN"
    }

    print "CREATED NEW IMAGE: {url'}"
}

method Image(url') {
    object {
        inherits KittyImage.new(url')
    }
}

class KittyEntity.new(x', y') {
    
    awake

    var posX := x'
    var posY := y'
    var rotation := 0

    // Called on creation
    method awake {
        print "awake"
    }

    // Called on game start
    method start {
        print "start"
    }

    // Called by main game class
    method update {

    }

    // Called on class destructor
    method onDestroy {

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
} 

method Entity(x', y') {
    object {
        inherits KittyEntity.new(x', y')
    }
}

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
            return
        }

        document := dom.document
        canvas := document.getElementById("standard-canvas")
        canvasWidth := canvas.width
        canvasHeight := canvas.height

        isInit := true
        print "INITIALIZATION FINISHED"
    }

    method start {
        backingCanvas := dom.document.createElement("canvas")
        backingCanvas.height := canvasHeight
        backingCanvas.width := canvasWidth
        backingContext := backingCanvas.getContext("2d")
        mctx := canvas.getCanvas.getContext("2d")
    }

    method update {
        print "UPDATING WORLD..."
        mctx.fillStyle := backgroundColour
        mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        // mctx.drawImage(backingCanvas, 0, 0)
        // background.draw(mctx)
        print "WORLD UPDATED"
    }

    // method addBackground(url') {
    //     background := Image(url')
    // }
    method setBackground(background') {
        background := background'
    }

    method addEntity(e: Entity) {
        return entities.add(e)
    }

    print "WORLD CREATED"
}

method World() {
    object {
        inherits KittyWorld.new()
    }
}

// TEST SECTION //

// def foo = World.new(100, 100)
// def bar = Entity.new(10, 10)
// foo.addEntity(bar)
