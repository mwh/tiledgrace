dialect "sniff"
class stuart.new {
    inherits image
    url := "stuart.jpg"
    always {
        forward (3)
    }
    whenever {touchingEdge} do {
        bounce
    }
    turn (random (360))
    method mousedown {
        clear
    }
    always {
        if (random (100) < 20) then {
            turn (random (10))
        }
    }
}

object {
    inherits image
    url := "face.jpg"
    always {
        face (mouse)
        forward (2)
    }
    method mousedown {
        stamp
    }
}

for (1 .. 5) do {i->
    stuart.new
}

whenever {random (150) < 2} do {
    stuart.new
}

// chunks: 220px,99px 19px,2px 8px,373px 218px,2px