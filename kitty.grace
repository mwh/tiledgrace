import "mgcollections" as collections
import "dom" as dom
// import "math" as math
import "StandardPrelude" as sp
inherits sp.methods

// Main class for game library
var m_world
var worldSet := false

// Listeners
var keyDownListener
var keyUpListener
var mouseDownListener

// Grace math returns NaNs
def math = dom.window.Math

// XXX: Control functions are at the bottom

// Represents an image in the game world
class KittyImage.new(url', height', width') {
    
    // print "CREATING NEW IMAGE: {url'}..."
    def imgTag = dom.document.createElement("img")
    imgTag.src := url'

    var height := height'
    var width := width'

    method draw(ctx, dx, dy, rot) {
        // print "DRAWING IMAGE: {imgTag.src} ({width}, {height})..."
        ctx.save
        ctx.translate(dx, dy)
        // ctx.rotate(rot *  180 / 3.14)
        ctx.rotate(rot * 3.14159 / 180)
        ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)
        ctx.restore
        // print "IMAGE: {imgTag.src} DRAWN"
    }

    // print "CREATED NEW IMAGE: {url'}"
}

method Image(url', x', y') {
    object {
        inherits KittyImage.new(url', x', y')
    }
}

// Represents an object in the game world
class KittyEntity.new(x', y') {
    
    // print "CREATING ENTITY AT ({x'}, {y'})..."

    var posX := x'
    var posY := y'
    var rotation := 0

    var action := object {
        method update {
            // print "UPDATING ENTITY..."
        }
    }

    var image

    awake

    // Called on creation
    method awake {
        // print "awake"
        setImage("realyee.png")
    }

    // Called on game start
    method start {
        // print "start"
    }

    // Called by main game class
    method update {
        action.update
    }

    // Called on class destructor
    method onDestroy {

    }

    method move(distance) {
        posX := posX + distance * math.cos(rotation * 3.14159 / 180)
        posY := posY + distance * math.sin(rotation * 3.14159 / 180)
    }

    method strafe(distance) {
        posX := posX + distance * math.cos((90 + rotation) * 3.14159 / 180)
        posY := posY + distance * math.sin((90 + rotation) * 3.14159 / 180)
    }

    method turn(angle) {
        rotation := rotation + angle
    }

    method draw(ctx, dx, dy) {
        ctx.save
        ctx.translate(posX, posY)
        image.draw(ctx, dx, dy, rotation)
        ctx.restore
    }

    method setImage(image') {
        image := Image(image', 64, 64)
    }

    method setAction(action') {
        action := action'
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

    // print "ENTITY CREATED"
} 

method Entity(x', y') {
    object {
        inherits KittyEntity.new(x', y')
    }
}

// Represents the game world itself
class KittyWorld.new() {

    // print "CREATING NEW WORLD..."
    
    var background
    var backgroundColour := "black"

    var document

    var backingCanvas
    var backingContext

    var canvas
    var canvasWidth
    var canvasHeight

    var entities := collections.list.new

    var isInit := false
    var isRunning := false

    var mctx

    var currentKeyDown := -1

    init

    // Called on initialization
    method init {

        // print "INITIALIZING WORLD..."

        if (isInit) then {
            return false
        }

        document := dom.document
        canvas := document.getElementById("standard-canvas")
        canvasWidth := canvas.width
        canvasHeight := canvas.height

        // Mouse Listener
        mouseDownListener := { ev ->
            
            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight
            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight
            
            // print "MOUSEDOWN"
            
            if ((x > (canvasWidth - 20)) && (y < 20)) then {
                ev.preventDefault
                stop
            }
        }
        canvas.addEventListener("mousedown", mouseDownListener)

        // Key Listeners
        keyDownListener := { ev->
            // print "KEYDOWN: {ev.keyCode}"
            if (ev.keyCode == 75) then {
                stop
            }
            currentKeyDown := ev.keyCode
        }
        document.addEventListener("keydown", keyDownListener)

        keyUpListener := { ev->
            // print "KEYUP"
            currentKeyDown := -1
        }
        document.addEventListener("keyup", keyUpListener)

        backingCanvas := dom.document.createElement("canvas")
        backingCanvas.height := canvasHeight
        backingCanvas.width := canvasWidth
        backingContext := backingCanvas.getContext("2d")
        mctx := canvas.getContext("2d")

        // Default background
        setBackground("doggo.jpg")

        isInit := true
        // print "INITIALIZATION FINISHED"

        // Start the game
        // print "STARTING WORLD..."
        // start
    }

    // Called on game start
    method start {
        // print "WORLD STARTED"
        isRunning := true
        dom.while { isRunning } waiting 10 do {
            update
        }
        // print "WORLD STOPPED"        
    }

    // Updates the game world
    method update {

        // print "UPDATING WORLD..."

        // Draw the background
        mctx.fillStyle := backgroundColour
        mctx.fillRect(0, 0, canvasWidth, canvasHeight)
        mctx.drawImage(backingCanvas, 0, 0)
        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)

        // Draw the entities
        for (entities) do { entity->
            entity.update
            entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)
        }

        // print "WORLD UPDATED"
    }

    method stop {
        print "WORLD STOPPING..."
        isRunning := false
        canvas.removeEventListener("mousedown", mouseDownListener)
        document.removeEventListener("keydown", keyDownListener)
        document.removeEventListener("keyup", keyUpListener)
    }

    method isKeyDown(key) {
        return key == currentKeyDown
    }

    method setBackground(background') {
        background := Image(background', canvasWidth, canvasHeight)
    }

    method addEntity(e: KittyEntity) {
        return entities.push(e)
    }

    // print "WORLD CREATED"
}

method World {
    object {
        inherits KittyWorld.new()
    }
}

// CONTROL SECTION //

// Called on game start
method start {

    print "CHECKING..."

    if (!worldSet) then {
        print "NO WORLD!!"
        return 
    }

    print "STARTING..."

    // Dewit
    m_world.start
}

method setWorld(world': KittyWorld) {
    m_world := world'
    worldSet := true
}

method atModuleEnd(module) {
    start
}

// TEST SECTION //

// def foo = World.new(100, 100)
// def bar = Entity.new(10, 10)
// foo.addEntity(bar)
