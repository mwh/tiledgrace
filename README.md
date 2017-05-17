# Simple Game Programming in Grace
Project for ENGR489 MMXVII. 

## Supervisors
- James Noble
- Michael Homer

## Live Sites
### Master
- The current master implementation is here:
https://cambis.github.io/tiledgrace/

### Dev
- Will be posting dev updates here:
https://immense-meadow-20220.herokuapp.com/

# Kitty Dialect
The kitty dialect contains the functions needed to make simple games in Grace.

## Usage
`dialect "kitty"`

## Classes
### KittyWorld
- Worlds represent the game world, each game needs one world to run.
- `def world = World`

### KittyEntity
- Entities reprent objects in the game world, they are assigned to a world. The constructor is fed the coordinates of the entity.
- `def entity = Entity(10, 10)`

## Examples
Below is a very basic example of usage:
````grace
// Import dialect
dialect "kitty"

// Create a new world
def foo = World
foo.setBackground("doggo.jpg")

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

// Start the game
foo.start
````

````
dialect "kitty"

def foo = World
foo.setBackground("doggo.jpg")

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
foo.start
````