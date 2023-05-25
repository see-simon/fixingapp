import React from "react";

class Picture {
  images = [
    { src: require("../images/house2.png"), description: "Polokwane" },
    { src: require("../images/house.png"), description: "Mokopane" },
    { src: require("../images/house2.png"), description: "Moletlane" },
    { src: require("../images/house.png"), description: "Leboakgomo" },
  ];

  availableRooms = [
    { room: require("../images/rooms1.jpg"), id: 1, price: "R100" },
    { room: require("../images/rooms1.jpg"), id: 2 , price: "R500"},
    { room: require("../images/house.png"), id: 3 , price: "R500"},
    { room: require("../images/rooms1.jpg"), id: 4, price: "R100" },
    { room: require("../images/house2.png"), id: 5 , price: "R500"},
  ];

  roomPrice = [
    { price: "R100" },
    { price: "R500" },
    { price: "R500" },
    { price: "R100" },
    { price: "R500" },
  ];

}
export default new Picture();
