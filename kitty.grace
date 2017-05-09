import "mgcollections" as collections

// Main class for game library
var world

method start {

}

method stop {

}

method setWorld(world') {
    world := world'
}

class Entity.new(x, y) {
    
    // inherits image
    awake

    var posX := x
    var posY := y
    var rotation := 0

    // Called on creation
    method awake {

    }

    // Called on game start
    method start {

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

class World.new(x, y) {

    var canvas
    var canvasWidth := x
    var canvasHeight := y 

    var entities := collections.list.new

    method addEntity(e: Entity) {
        return entities.add(e)
    }

}
// TEST SECTION //

// def foo = World.new(100, 100)
// def bar = Entity.new(10, 10)
// foo.addEntity(bar)
