
function main(){
  
  var statusCodes = [
    [101, "change direction. everyone drinks!"],
    [200, "everyone drinks!"],
    [201, "create a rule. then drink"],
    [300, "choose several people to drink"],
    [301, "choose someone to drink with. its then their turn"],
    [305, "someone else feeds you a drink"],
    [307, "choose someone to drink"],
    [401, "everyone but you drinks"],
    [406, "drink twice"],
    [410, "remove a rule (if one has been created)"],
    [411, "take a long drink"],
    [413, "thats what she said! everyone drinks"],
    [417, "last person to put their hand over thir eye drinks"],
    [418, "sing I'm a little teapot then drink if people liked it"],
    [500, "Arrrrrrrrrrrrrr drink."]
  ];

  var num = Math.floor(Math.random() * statusCodes.length);
  var resp = statusCodes[num]
  
  return [  resp[0], ["Task", resp[1]], "To play the game, view your header\n"];
}

