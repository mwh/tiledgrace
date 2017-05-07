import "entity" as en

class World.new(x, y) {

    var sizeX := x
    var sizeY := y 

    var entities := List

    method addEntity(e: en.Entity) {
        return entities.add(e)
    }

}