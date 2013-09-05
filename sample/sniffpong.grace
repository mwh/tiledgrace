dialect "sniff"
background ("black")

object {
    inherits circle
    colour := "yellow"
    radius := 5
    jumpTo (centre)
    turn (random (60) + 15)
    whenever {x < 5} do {
        background ("red")
        stop
    }
    whenever {x > (canvasWidth - 5)} do {
        background ("green")
        stop
    }
    whenever {touchingEdge} do {
        bounce
    }
    whenever {touching (myPaddle)} do {
        bounceOff (myPaddle)
    }
    whenever {touching (computerPaddle)} do {
        bounceOff (computerPaddle)
    }
    always {
        forward (2.25)
    }
}
def ball = Δ

object {
    inherits rectangle
    height := 20
    width := 10
    colour := "white"
    jumpTo (leftCentre.right(5))
    whenever {y < mouse.y} do {
        y := y + 3
    }
    whenever {y > mouse.y} do {
        y := y - 3
    }
}
def myPaddle = Δ

object {
    inherits rectangle
    height := 20
    width := 10
    colour := "white"
    jumpTo (rightCentre.left(5))
    whenever {y < ball.y} do {
        y := y + 1
    }
    whenever {y > ball.y} do {
        y := y - 1
    }
}
def computerPaddle = Δ

// chunks: 413px,12px 10px,8px 341px,54px 340px,520px