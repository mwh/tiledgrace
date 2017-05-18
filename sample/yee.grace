dialect "kitty"

// Press 'Run' button to start the game.
// Press the 'K' key to stop the game

def foo = World
setWorld(foo)

def bar = Entity(10, 10)
def action = object {
 method update {
  // Q
  if (foo.isKeyDown(81)) then {
   bar.turn(-5)   
  } 
  // E
  elseif {foo.isKeyDown(69)} then {
   bar.turn(5)
  } 
  // W
  elseif {foo.isKeyDown(87)} then {
   bar.strafe(-5)
  } 
  // S
  elseif {foo.isKeyDown(83)} then {
   bar.strafe(5)
  } 
  // D
  elseif {foo.isKeyDown(68)} then {
   bar.move(5)   
  } 
  // A
  elseif {foo.isKeyDown(65)} then {
   bar.move(-5)   
  }
 }
}
bar.setAction(action)
foo.addEntity(bar)