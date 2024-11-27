// if you hover on AISLE you will see  that, by default AISLE will be assigend value as 0 by ts
// by default AISLE will be assigend value as 1 by ts, and so on
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
// if you want to change the default value of AISLE or any other enum
// you can do as below
// if you gave MIDDLE as 2 then you will see that default value of WINDOW will be 3 (hover on WINDOW)
var SeatChoice2;
(function (SeatChoice2) {
    SeatChoice2["AISLE"] = "mayur";
    SeatChoice2[SeatChoice2["MIDDLE"] = 2] = "MIDDLE";
    SeatChoice2[SeatChoice2["WINDOW"] = 3] = "WINDOW";
})(SeatChoice2 || (SeatChoice2 = {}));
var userSeat = SeatChoice.AISLE;
var userSeat2 = SeatChoice2.WINDOW;
var userSeat3 = SeatChoice2.WINDOW;
