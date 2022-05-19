const COMPONENT= require('../modules/Component');
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
  }


device=new COMPONENT("resistance");
device.setid(x.id);
device.settype(x.type);
device.setnetList(x.netlist);
device['resistance']=x.resistance;
test("encapsulating id",()=>{
    expect(device.getid()).toBe("res1")
})
test('enacpsulating type',()=>{
    expect(device.gettype()).toEqual(x.type)
}
);
test('encapsulating resistance',()=>{
    expect(device["resistance"]).toEqual(x.resistance)
}
);
test('encapsulating netlist',()=>{
    expect(device.getnetlist()).toEqual(x.netlist)
}
);
test('connection Check 1',()=>{
    expect(device.connectionChecker('vdd')).toBe(true);
});
test('connection Check 2',()=>{
    expect(device.connectionChecker('n1')).toBe(true);
});
test('connection Check 3',()=>{
    expect(device.connectionChecker('n2')).toBe(false);
});
test('connection Check 4',()=>{
    expect(device.connectionChecker('vss')).toBe(false);
});