const Component=require("./Component.js")
class top{
    //A topology is a set of electronic components that are connected together.
    /*every topolg has the followin attributes:
    topolgy id
    components within the topolgy

    */ 
   constructor(){
        var top_id;
        this.components=[];
    }
    get_id=()=>this.top_id;
    set_id=(id)=>this.top_id=id;
    get_components=()=>this.components;
    set_components=(c)=>{this.components=c
    for(const x of c){
      this.addDevice(x);
    }
    };
    /**
     * add device to the list of the list of topolgy components 
     * if it has valid properties
     * @param {string} component 
     * 
     */
    addDevice(component){
    let properties =  Object.keys(component);
    let name =properties.filter(x=>x!="type"&&x!="id" && x!="netlist"); 
    
    let components=this.get_components();
    let device= new Component(name[0]);
    try{
       device[name[0]]=component[name[0]];
       device.setid(component['id']);
       device.setnetList(component['netlist']);
       device.settype(component['type']);
       let str=`{"type":"${device.gettype()}",\n "id":"${device.getid()}",\n "${name[0]}":${JSON.stringify(device[name[0]],null,' ')},\n"netlist":${JSON.stringify(device.getnetlist(),null,'  ')}}`
         /**this two lines is to push the required attributes of the component without pushing it's setters and getters
          *  */                   
       components.push(JSON.parse(str));
       console.log(components)
       
    }
    catch(err){
        console.log(err);
    }
   
}
    querydevices=()=>this.components;
}

 
module.exports=top;