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
    
    print "CREATING NEW IMAGE: {url'}"
    def imgTag = dom.document.createElement("img")
    imgTag.src := url'

    var height := 64
    var width := 64

    method draw(canvas') {
        print "DRAWING IMAGE: {imgTag.src}"
        canvas'.translate(0, 0)
        canvas'.save
        canvas'.drawImage(imgTag, -width / 2, -height / 2, width, height)
        canvas'.restore
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

    print "CREATED NEW WORLD..."
    
    var background

    var document
    var canvas
    var canvasWidth
    var canvasHeight

    var entities := collections.list.new

    var isInit := false

    init

    // Called on initialization
    method init {

        print "INIT..."

        if (isInit) then {
            return
        }

        document := dom.document
        canvas := document.getElementById("standard-canvas")
        canvasWidth := canvas.width
        canvasHeight := canvas.height

        isInit := true
        print "FINISHED..."
    }

    method update {
        print "HERE"
        background.draw(canvas)
        print "DONE"
    }

    // method addBackground(url') {
    //     background := Image(url')
    // }
    method addBackground(background') {
        background := background'
    }

    method addEntity(e: Entity) {
        return entities.add(e)
    }

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
