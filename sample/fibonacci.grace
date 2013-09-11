var x := 1
var y := 1
for (1 .. 10) do {i->
    def tmp = x
    x := y
    y := tmp + y
    print (tmp)
}
// chunks: 186px,147px
