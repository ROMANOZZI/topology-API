const API= require('../modules/API');
const testObject = require('../topology.json');
const api=new API();
api.readJSonfile('../topology.json');
if(api.memorytopolgies.length==1)console.log(`test1:reading topology passed`)
if(api.queryForGivenTopolgy('top1')!="toplogy not found"&&api.queryForGivenTopolgy('top1')!="error"){
    console.log('test2: query for given topology passed')
}

api.deleteTopology('top1');
if(api.memorytopolgies.length===0)console.log('test3: delete a given topology from memory passed');
api.readJSonfile('../topology.json');
if(api.showToplogies.length=1){console.log('test4: show all topologies in memory passed')};
if(api.queryDevices('top1').length==2){
    console.log('test5: query about device for given topology passed');
}
if(api.queryConnectedDevices('top1','n1').length==2){
  if(api.queryConnectedDevices('top1','vin').length==1)
    console.log('test6: query about connected device for given node passed');
   
}