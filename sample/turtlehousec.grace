dialect "logo"
method square(l) {
    forward (l)
    turnRight (90)
    forward (l)
    turnRight (90)
    forward (l)
    turnRight (90)
    forward (l)
    turnRight (90)
}

var length := 200
var diagonal := 1.414 * length
square(length)
turnRight (45)
lineColor:= blue
forward (diagonal)
lineColor:= red
turnLeft (90)
forward (diagonal / 2)
turnLeft (90)
forward (diagonal / 2)
lineColor:= blue
turnLeft (90)
forward (diagonal)
turnLeft (90)
lineColor:= green
circle(diagonal / 2)

method circle(r) {
    var diam := r * 2
    var circ := diam * 3.14
    var step := circ / 360
    for (1 .. 360) do {i->
        forward (step)
        turnLeft (1)
    }
}

// chunks: 294px,2px 8px,11px 237px,295px