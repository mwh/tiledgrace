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
- Images must currently be uploaded to the root directory of the server. 
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
        entity.moveUp(1)
        entity.moveRight(2)
    }
}

// Assign action to entity
entity.setAction(action)
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
- Below is a very basic example of usage:
````grace
// Import dialect
dialect "kitty"

// Create a new world
def foo = World
foo.setBackground("doggo.jpg")

// Set the world
setWorld(foo)

// Create an entity
def bar = Entity(10, 10)
bar.setImage("realyee.png")

// Create an action for the entity
def barAction = object {
    method update {
        print "UPDATING ENTITY..."
        bar.moveUp(1)   
        bar.moveRight(2)
    }
}
bar.setAction(barAction)

// Add entity to the world
foo.addEntity(bar)
````
- Example using the key listener:
````grace
dialect "kitty"

def foo = World
foo.setBackground("doggo.jpg")
setWorld(foo)

def bar = Entity(10, 10)
bar.setImage("realyee.png")

def barAction = object {
    method update {
        if (foo.isKeyDown(87)) then {
            bar.moveUp(1)
        } elseif {foo.isKeyDown(65)} then {
            bar.moveLeft(1)
        } elseif {foo.isKeyDown(83)} then {
            bar.moveDown(1)   
        } elseif {foo.isKeyDown(68)} then {
            bar.moveRight(1)
        }
    }
}
bar.setAction(barAction)
foo.addEntity(bar)
````