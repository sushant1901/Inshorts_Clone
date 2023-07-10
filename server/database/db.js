import mongoose from "mongoose";

const connection=async (username,password)=>{
    const URL=`mongodb+srv://${username}:${password}@news-app.dul3mna.mongodb.net/?retryWrites=true&w=majority`;
    try{

        await mongoose.connect(URL, {useNewUrlParser:true});
        console.log('DataBase connected successfully')

    }catch(error){
        console.log('Error while connecting to databse',error);
    }


}
export default connection;