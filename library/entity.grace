// dialect "sniff"

class Entity.new(x, y) {
    
    // inherits image

    var posX := x
    var posY := y
    var rotation := 0

    method update {

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