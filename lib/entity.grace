// dialect "sniff"

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