import "mgcollections" as collections
import "dom" as dom

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

class KittyImage.new() {
    
    var height := 64
    var width := 64

    def imgTag = dom.document.createElement("img")

    method draw(canvas') {
        canvas'.save
        canvas'.drawImage(imgTag, -width / 2, -height / 2, width, height)
        canvas'.restore
    }
}

method Image {
    object {
        inherits KittyImage.new
    }
}

class KittyEntity.new(x', y') {
    
    // inherits image
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

    var document
    var canvas
    var canvasWidth
    var canvasHeight

    var entities := collections.list.new

    var isInit := false

    // Called on initialization
    method init {

        if (isInit) then {
            return false
        }

        document := dom.document
        canvas := document.getElementById("standard-canvas")
        canvasWidth := canvas.width
        canvasHeight := canvas.height

        isInit := true
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
