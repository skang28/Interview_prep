/*Object merging
Write a function that takes two objects as parameters and returns an object with the key/values of both objects.

Do not reference the fields of the objects directly, use Object.keys instead and iterate over the arrays of keys.
*/

function merge(object1,object2){
    /*Write your code here to return an object*/
    let mergedObject = {};
    let keysObject1 = Object.keys(object1);
    let keysObject2 = Object.keys(object2);
    for (var i=0; i<keysObject1.length; i++) {
        mergedObject[keysObject1[i]] = object1[keysObject1[i]];
    }
    for (var i=0; i<keysObject2.length; i++) {
        mergedObject[keysObject2[i]] = object2[keysObject2[i]];
    }
    return mergedObject;

  }
  function test(){
    let object1={
      key1:9,
      key2:5,
      key3:50
    }
    let object2={
      anotherKey:9001,
      yetAnotherKey:16,
      yetAnotherAnotherKey:3
    }
    console.log(merge(object1,object2));
  }
  
  test();