dialect "sniff"
object {
    inherits image
    url := "sun.png"
    width := 100
    height := 100
}
def sun = Δ

object {
    inherits circle
    colour := "blue"
    forward (125)
    always {
        face (sun)
        turn (90)
        forward (2)
    }
}
def earth = Δ

object {
    inherits image
    url := "moon.png"
    width := 20
    height := 20
    forward (190)
    always {
        face (earth)
        turn (85)
        forward (9)
    }
    whenever {touching (mars)} do {
        print ("The moon crashed into Mars.")
        stop
    }
}
def moon = Δ

background ("black")

object {
    inherits circle
    colour := "red"
    radius := 10
}
def mars = Δ

// chunks: 387px,133px 729px,261px 363px,340px 597px,72px 137px,121px
