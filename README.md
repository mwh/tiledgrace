# Simple Game Programming in Grace
Project for ENGR489 MMXVII. 

## Supervisors
- James Noble
- Michael Homer

## Live Site
- The current master implementation is here:
https://cambis.github.io/tiledgrace/

# Kitty Dialect
The kitty dialect contains the functions needed to make simple games in Grace.

## Usage
Import the dialect using this line:
````grace
dialect "kitty"
````

## Classes
### KittyWorld
- Worlds represent the game world, each game needs one world to run.
````grace
def world = World
````

### KittyEntity
- Entities reprent objects in the game world, they are assigned to a world. The constructor is fed the coordinates of the entity.
````grace
def entity = Entity(10, 10)
````

## World Setup
- Each world needs to be represented by one World object. You must set the world so the dialect can run it.
````grace
def world = World
setWorld(world)
````
- The game will not run if a world is not set.

### Adding Entities to World
- Entities need to be added to a world so the can be interacted with.
````grace
def world = World

def entity = Entity(10, 10)
world.addEntity(entity)
```` 
### Running the Game
- You can run the game by using the `Run` button in the editor. Pressing the `Q` key will stop the game.

## Images
- Images must currently be uploaded to the root directory of the server. There are default images on both the `KittyWorld` and `KittyEntity` classes. Custom images can be set using `KittyWorld.setBackground(image)` and `KittyEntity.setImage(image)`.
````grace
def world = World
world.setBackground("doggo.jpg")

def entity = Entity(10, 10)
entity.setImage("realyee.png")
````

## Actions
- In order for an entity to complete a task, it must first be supplied with an action. Actions are created as objects which are parsed into an entity. *The action object must contain the method `update` for the action to be executed*. This is because the `KittyWorld` class will execute this method.
````grace
def entity = Entity(10, 10)

// Create an action
def action = object {
    method update {
        entity.move(10)
    }
}

// Assign action to entity
entity.setAction(action)
````
## Movement
- There are two functions that move entities, `KittyEntity.move(distance)` and `KittyEntity.strafe(distance)`. The first moves the entity that distance in the direction that it is currently facing. The second is the same as the first, but it moves the entity 90 degrees to the direction it is facing.
- To rotate the entity use `KittyEntity.turn(angle)`.
````grace
def entity = Entity(10, 10)

// Rotate forward
entity.turn(5)

// Rotate backwards
entity.turn(-5)

// Move forwards
entity.move(5)

// Move backwards
entity.move(-5)

// Strafe left
entity.strafe(5)

// Strafe right
entity.strafe(-5)
````

## Key Listener
- Users can listen for key presses using the `KittyWorld.isKeyDown(key)` method. *This method takes keycodes not characters*
````grace
def foo = World
def bar = Entity(10, 10)

def action = object {
    method update {
        if (foo.isKeyDown(87)) then {
            bar.moveUp(1)
        }
    }
}
bar.addAction(action)
foo.addEntity(bar)
````

## Examples
- Simple Movement:
````grace
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
````