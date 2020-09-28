// Numeric Enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)

enum UserResponse {
    No = 0,
    Yes = 1
}

function respone(message: string, respone: UserResponse){
    console.log(message, UserResponse.Yes);
}

respone("Hello", UserResponse)

// String Enums

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction.Left)
console.log(Direction.Right)

// Hetrogenous Enums
enum Weekend {
    Friday ="FRIDAY",
    Saturday =1,
    Sunday =2
}

console.log(Weekend.Friday)
console.log(Weekend.Saturday)
console.log(Weekend.Sunday)