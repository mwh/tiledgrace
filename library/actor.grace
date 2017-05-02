class Actor() {

    var posX := 0
    var posY := 0
    var rotation := 0

    method getX {
        return x
    }

    method getY {
        return y
    }

    method getRotation {
        return rotation
    }

    method contains(dx, dy) {
        return (dx == posX) && (dy == posY)
    }
} 