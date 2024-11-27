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