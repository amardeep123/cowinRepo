function Setmap() {
  console.log("Welcome to Set and Map tutorial");

  const obj1 = {
    name: "Guru",
  };

  const obj2 = {
    name: "Pallavi",
  };

  const map = new Map();
  map.set("name1", obj1);
  map.set("name2", obj2);

  console.log("iterating map with for..of");
  for (const [key, value] of map) {
    console.log(key + " = ", value);
  }

  console.log("iterating map.entries() with for..of");
  for (const [key, value] of map.entries()) {
    console.log(key + " == ", value);
  }

  console.log("iterating map with forEach");
  map.forEach((value, key) => {
    console.log(key + " = ", value);
  });

  console.log("logging all keys now");
  for (const key of map.keys()) {
    console.log(key);
  }

  console.log("logging all values now");
  for (const value of map.values()) {
    console.log(value);
  }

  console.log(`cloning of map and iterating over new map`);
  const newMap = new Map(map);
  for (const [key, value] of newMap) {
    console.log(key + " = ", value);
  }

  console.log(`converting map to 2D array`, Array.from(map));

  console.log("getting name2", map.get("name2"));
  console.log(`size of map is ${map.size}`);

  map.delete("name1");
  console.log(`map after deleting name1 is`, map);
  console.log("new map after deleting name1 from map", newMap);
  console.log(`is map has name1`, map.has("name1"));
  console.log(`is map has name2`, map.has("name2"));
  map.clear();
  console.log(`after clearing the map, size is ${map.size}`);

  let wrongMap = new Map();
  wrongMap["bla"] = "blaa";
  wrongMap["bla2"] = "blaaa2";

  console.log(`wrong map is`, wrongMap);

  //    Starting with set
  //    The Set object lets you store unique values of any type

  const set = new Set();
  set.add(obj1);
  set.add(obj2);

  console.log("initial set is ", set);

  console.log("iterating over set using forEach");
  //    iteration will always be in insertion order
  set.forEach((value) => {
    console.log(value);
  });

  console.log("iterating over keys of set");
  for (const key of set.keys()) {
    console.log(key);
  }

  console.log("iterating over values of set");
  for (const value of set.values()) {
    console.log(value);
  }

  //    keys and values are same for set
  console.log("adding same object again in set");
  set.add(obj1);
  console.log(set.entries()); //  returns SetIterator
  console.log(`size of set is ${set.size}`);

  set.delete(obj1);
  console.log("set after deleting obj1 is", set);
  console.log("is obj1 present", set.has(obj1));

  //    Relation with Array objects
  const arr = [1, 2, 2, 3, 3, 3];
  const arrSet = new Set(arr);
  console.log(`set from array is`, arrSet);

  //    converting set to array
  //    can be used to remove duplicates from array

  const newArr = [...arrSet];
  console.log(`array from set is`, newArr);

  return <div />;
}

export default Setmap;
