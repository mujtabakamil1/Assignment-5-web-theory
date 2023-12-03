
const express =require("express");
const mongoose=require("mongoose");
const {createplayer,getAll,deleteplayer,updateplayer}=require("./operation");
const app =express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/playerLIst")
.then(async ()=>{
    console.log('connected to the database');

    create 
    let player=await createplayer("rehman","FCB",85000);
    console.log(player);

    // update 
    // let player=await getAll();
    // console.log(player);
     
    Delete
     let deleteItem =await deleteplayer("66c84fe66e1f0aa51");
     console.log(deleteItem);

    // Update
    let updatedData= await updateplayer("66c854508b025cab005","master","BVB",45000);
    console.log(updatedData);

}).catch((error)=>{
    console.log(`couldn't connect ${error}`);
})

app.listen(3000);