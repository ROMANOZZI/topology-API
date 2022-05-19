const fs =require('fs');
const component = require('./Component');

const top =require('./electronic_topolgy');



//requiring fs module which is useful to interact with  files
class API{
 //creating API class
  constructor(){ this.memorytopolgies=[];}

/**
 * readJSon file is to read toplogies from JSON file and push it into array which allocated in memory
 * @param {String} file //json file path to be read 
 */
 readJSonfile(file){
     let input;
     let str;  
             try{
                str=fs.readFileSync(file,'utf-8');}
             catch(err){
                 console.log(err);
                }
             try{   
                 input=JSON.parse(str);
                }
             catch(err){
                 console.log(err);
             }   
                 
                 let toplogy;
                  toplogy=new top();
                  toplogy.components=input.components;
                  toplogy.set_id(input.id);
                  this.memorytopolgies.push(toplogy);
    
     return this.memorytopolgies;
    }
 
 /**
  * to query for given topolgy id 
  * @param {string} id 
  * @returns the required topolgy if found
  */
 queryForGivenTopolgy=(id)=>{
     try{
         
         
     if(this.memorytopolgies.filter(x=>x.get_id()==id).length!=0){
         return this.memorytopolgies.filter(x=>x.get_id()==id)[0];

     }
     else{
           console.log("toplogy not found ");
           return "toplogy not found";
     }}
     catch(err){
         console.log(err);
         return "error";
     }
     
    
}
/**
 * write topology to JSON file
 * @param {string} id 
 * 
 */

 addToJSONFile(id){
     try{
     if(this.queryForGivenTopolgy(id)=="toplogy not found"){
        console.log("toplogy already exist"); 
        return "toplogy already exist";
     }
     let requiredToplogy=this.queryForGivenTopolgy(id);
     let str = JSON.stringify(requiredToplogy);
     fs.writeFile('../written topolgies',str,err=>{
         if(err) console.log("Error writing file");
         else {//console.log("topology added successfully");
         return "topology added successfully";}
         
     });
    } catch(err){
        console.log(err);
        return "error";
    }

 }
/**
 * Delete a given topology from memory.
 * @param {string} id for given topology to be deleted
 */
 deleteTopology=(id)=>{
     try{
         this .memorytopolgies =this.memorytopolgies.filter(x=>x.get_id()!=id);
         //console.log('topology deleted');
         return'topology deleted'
        }
     catch(err){
         console.log(err);
     }
     }

 

/**
 * to show all topolgies in memory
 * 
 */
showToplogies=()=>this.memorytopolgies;
/**
 * show all devices in given topology
 * @param {string} id 
 * @returns devices in given topology
 */
queryDevices=(id)=>{
    try{
        if(this.queryForGivenTopolgy(id)){
            return this.queryForGivenTopolgy(id).components
        }
        else console.log("toplogy not found");
    }
    catch(err){
        console.log(err);
    }
}
/**
 * 
 * @param {string} id toplogy id 
 * @param {*} node node to be checked
 * @returns the connected devices to given node
 */
queryConnectedDevices(id,node){
    let devices=[];
 try{
     if(this.queryForGivenTopolgy(id)){
         let components=this.queryDevices(id);
         for(let x of components){
         
           let properties =  Object.keys(x);
            let name =properties.filter(x=>x!="type"&&x!="id" && x!="netlist");
            let device= new component(name[0]);
           device[name[0]]=x[name[0]];
            device.setid(x['id']);
            device.setnetList(x['netlist']);
            device.settype(x['type']); 
            
             if(device.connectionChecker(node))
             {devices.push(x['id'])};
         }
       }
     else{
        console.log("required topology not found");
         }
 
     
 }catch(err){
     console.log(err);
 }
 return devices;
}

}
module.exports=API;

//let test= new API();
//test.readJSonfile('../topology.json');
//console.log(test.memorytopolgies);
//test.deleteTopology('top1');
//console.log(test.memorytopolgies);

//console.log(test.showToplogies());
//console.log(test.queryConnectedDevices('top1','n1'));
//console.log(test.queryDevices('top1'))
//console.log(test.queryForGivenTopolgy('top1')?true:false);
//console.log(test.memorytopolgies);

