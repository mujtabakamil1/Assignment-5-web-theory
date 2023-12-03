const players=require("./players");

const createplayer=async(Name,Club,contractSalary)=>{
console.log("player created");
let player=new players();
player.Name=Name;
player.Club=Club;
player.contractSalary=contractSalary;
  await player.save();
  return player;
}
const getAll=async()=>{
    console.log("getall");
    let playerList=await players.find();
    return playerList;

}
const deleteplayer=async(id)=>{
    console.log("getall");
    let playerList=await players.findByIdAndDelete(id);
    return playerList;
    }
    const updateplayer=async(id,Name,Club,contractSalary)=>{
        
        let player=await players.findByIdAndUpdate(id);
        player.Name=Name;
        player.Club=Club;
        player.contractSalary=contractSalary;
          await player.save();
          return player;
        }
module.exports.createplayer=createplayer;
module.exports.getAll=getAll;
module.exports.deleteplayer=deleteplayer;
module.exports.updateplayer=updateplayer;