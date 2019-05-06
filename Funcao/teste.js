let user = {
    name: "John",
    hi() { console.log(this.name); },
    bye() { console.log("Bye"); }
  };
  
  user.hi(); // John (the simple call works)
  
  // now let's call user.hi or user.bye depending on the name
  (user.name == "John" ? user.hi : user.bye)(); // Error!
