var options = [
    "stone",
    "scissors",
    "paper"]
  
var player_1 = options[Math.floor(Math.random() * options.length)];
var player_2 = options[Math.floor(Math.random() * options.length)];

// switch(player_1, player_2){
//     case 1:
//         if ((player_1 == "paper"  & player_2 == "stone") || (player_1 == "stone"  & player_2 == "scissors") || (player_1 == "scissors"  & player_2 == "paper"))
//         console.log("Player 1 Win!")
//         break;
//     case 2:
//         if ((player_1 == "stone" & player_2 == "paper") || (player_1 == "paper" & player_2 == "scissors") || (player_1 == "scissors" & player_2 == "stone"))
//         console.log("Player 2 Win!")
//     default:
//         console.log("The Game is tied")                
//}

switch(options){
    case ((player_1 == "paper"  & player_2 == "stone") || (player_1 == "stone"  & player_2 == "scissors") || (player_1 == "scissors"  & player_2 == "paper")):
        console.log("Player 1 Win!")
        break;
    case ((player_1 == "stone" & player_2 == "paper") || (player_1 == "paper" & player_2 == "scissors") || (player_1 == "scissors" & player_2 == "stone")):
        console.log("Player 2 Win!")
    default:
        console.log("The Game is tied")                
}