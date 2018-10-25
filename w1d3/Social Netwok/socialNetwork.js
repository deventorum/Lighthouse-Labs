var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const mostFollowed = () => {
  let followedPeople = []
  // Checks for one of the persons who is being followed the most
  const followedPerson = Object.keys(data).reduce((thePerson, key) => {
    let counterPerson = 0
    let counterKey = 0;
    
    for (dataset in data) {
      if (data[dataset].follows.indexOf(thePerson) !== -1) {
        counterPerson++;
      }
      if (data[dataset].follows.indexOf(key) !== -1) {
        counterKey++
      }
    }

    if (counterPerson > counterKey) {
      followedPeople = [data[thePerson].name];
      return thePerson;
    } else if (counterPerson === counterKey) {
      followedPeople.push(data[key].name);
      return thePerson;
    } else {
      followedPeople = [data[key].name];
      return key
    }
  })
  console.log(`People who are most followed are ${followedPeople.join(', ')}`);
}

// mostFollowed();

const followsMost = () => {
  const person = Object.keys(data).reduce((thePerson, key) => {
    return data[thePerson].follows.length > data[key].follows.length ? thePerson : key;
  })
  console.log(`${data[person].name} follows the most people`);
}
// followsMost();

const listPeople = () => {
  for (dataset in data) {
    const path = data[dataset];
    let friends = []
    path.follows.forEach(element => {
      friends.push(data[element].name) 
    })
    friends = friends.join(', ');
    let followers = [];
    for (person in data) {
      if (data[person].follows.indexOf(dataset) !== -1) {
        followers.push(data[person].name)
      }
    }
    followers = followers.join(', ')
    console.log(`${path.name} follows ${friends} and being followed by ${followers}`);
  }
}
// listPeople();

const listPeopleTwo = () => {

  let personWithFollowers = '';
  let numOfFollowers = 0;

  for (dataset in data) {
    const path = data[dataset];
    let followers = [];
    for (person in data) {
      if (data[person].follows.indexOf(dataset) !== -1) {
        followers.push(data[person].name)
      }
    }

    if (followers.length > numOfFollowers) {
      numOfFollowers = followers.length;
      personWithFollowers = path.name;
    } else if (followers.length = numOfFollowers) {
      personWithFollowers =+ " " + path.name;
    }
    console.log(personWithFollowers);
  }
}
// listPeopleTwo()




/* List everyone and for each of them, list the names of who they follow and who follows them - DONE
Identify who follows the most people - DONE
Identify who has the most followers
Identify who has the most followers over 30
Identify who follows the most people over 30
List those who follow someone that doesn't follow them back
List everyone and their reach (sum of # of followers and # of followers of followers) */