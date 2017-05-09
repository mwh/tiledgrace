import "mgcollections" as collections

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

class KittyWorld.new(x', y') {

    var canvas
    var canvasWidth := x'
    var canvasHeight := y' 

    var entities := collections.list.new

    method addEntity(e: Entity) {
        return entities.add(e)
    }

}

method World(x', y') {
    object {
        inherits KittyWorld.new(x', y')
    }
}

// TEST SECTION //

// def foo = World.new(100, 100)
// def bar = Entity.new(10, 10)
// foo.addEntity(bar)
