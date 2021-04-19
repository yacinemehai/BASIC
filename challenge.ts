const prettyPrintWilder = (users : wilder[]) :void => {
    console.log("########################");
    users.map((el) => {
      console.log(`${el.name} is ${el.age} years old`);
    });
    console.log("########################");
  };

  export interface wilder {
      name: string,
      age?: number,
      birthday?: string
  }

  const wilders : wilder[] = [];
  const user1 : wilder = { name: "Pierre", age: 23 };
  const user2 : wilder  = { name: "Paul", birthday: "10/02/1990" };
  const user3  : wilder = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);

 