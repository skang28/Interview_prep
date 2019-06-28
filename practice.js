const myData = [
    {
      name: "Tom",
      age: 22,
      favoriteFood: "pizza"
    },
    {
      name: "Jane",
      age: 42,
      favoriteFood: "sushi"
    },
    {
      name: "Fred",
      age: 34,
      favoriteFood: "lettuce"
    }
  ];

function searchName(name) {
    for (var i=0; i<myData.length; i++) {
        if (myData[i].name === name) {
            return myData[i];
        }
    }
    return 'Unsuccessful';
}

console.log(searchName('Jane'));