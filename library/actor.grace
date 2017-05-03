class Entity(x, y) {

    var posX := x
    var posY := y
    var rotation := 0

    method setLocation(x, y) {
        self.posX = x
        self.posY = y
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