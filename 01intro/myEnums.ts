// if you hover on AISLE you will see  that, by default AISLE will be assigend value as 0 by ts
// by default AISLE will be assigend value as 1 by ts, and so on
enum SeatChoice{
    AISLE, 
    MIDDLE, 
    WINDOW
}

// if you want to change the default value of AISLE or any other enum
// you can do as below
// if you gave MIDDLE as 2 then you will see that default value of WINDOW will be 3 (hover on WINDOW)
enum SeatChoice2{
    AISLE = "mayur",
    MIDDLE = 2,
    WINDOW
}

const userSeat = SeatChoice.AISLE
const userSeat2 = SeatChoice2.WINDOW

// above code generates too much js code which is ugly & hard to understand
// if you want a clear and short code try the below version
// by just adding const changes your code
const enum SeatChoice3{
    AISLE, 
    MIDDLE, 
    WINDOW
}

// now in js you will see only this code -> var userSeat3 = SeatChoice2.WINDOW as compared to other 2 above cases
const userSeat3 = SeatChoice2.WINDOW