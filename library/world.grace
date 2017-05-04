import "entity" as en

class World.new(x, y) {

    var sizeX := x
    var sizeY := y 

    var entities := List
    var world := null

    method addEntity(e: en.Entity) {
        return entities.add(e)
    }

}