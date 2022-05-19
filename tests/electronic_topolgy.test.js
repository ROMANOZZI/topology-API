const topology=require("../modules/electronic_topolgy");
top=new topology();

  top.set_id("top1");
 test ("encapsulating id",()=>{
     expect(top.get_id()).toEqual("top1");
 });
 let x=
 {
     type: "resistor",
     id: "res1",
     resistance: {
       "default": 100,
       "min": 10,
       "max": 1000
     },
     netlist: {
       "t1": "vdd",
       "t2": "n1"
     }
   };
   test("adding device",()=>{
       top.addDevice(x);
       expect(top.components[0]).toEqual(x)
   })
  