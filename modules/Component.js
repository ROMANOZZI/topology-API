


class component{
    /*
    each component has the following attributes
    type of the component
    id of the component
    name of the component
    default
    min 
    max
    netlist(the nodes that the component connected with within topolgy)
    the attributes are defined with constructor scope to not allow accessing it directly
       */ 
      /**
       * 
       * @param {string} definition is the name of the device parameters definition 
       */
    
  constructor(definition){
       var type;
       var id;
      
       this[definition]={};
       var netlist

    }
    // here is some setters and getters to access the component attributes
   gettype= ()=>this.type;settype= (type)=>this.type=type;
   getid= ()=>this.id;setid= (id)=>this.id=id;

   getnetlist=()=>this.netlist;
   setnetList=(netlist)=> this.netlist=netlist;
   /**
    * connection checker job is to check whether the component 
    * is connected to the given node or not
    * @param {string} node the given node to be checked
    * @return whether the connection is (true,false)
    */
   connectionChecker(node){
      
       let netlist=this.getnetlist();
       let keys=Object.keys(this.getnetlist());
       for (const x of keys){
       
           if(this.netlist[x]==node){
               return true;
           }
        
       
       } 
      return false;
   }
   
 




}
module.exports= component;
/*let x={
    type: "resistor",
    id: "res1",
    resistance: {
      default: 100,
      min: 10,
      max: 1000
    },
    netlist: {
      t1: "vdd",
      t2: "n1"
    }
  };
let device = new component("resistanse");
device.setid(x['id']);
device.settype(x['type']);
device.setnetList(x.netlist);
device.resistance=x['resistance'];
console.log(device.connectionChecker('vdd'));*/