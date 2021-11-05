//early functions:

function stop(loop) {
  stopTimedLoop(loop);
}

function play(sound) {
  playSound(sound);
}

function start(func) {
  func();
}



//var:


var tag = '';
var admin = 'n';
var leg = 'n';
var own = 'n';
var uname = 'n';
var ban = 'n';
var rid;

//StartCode:

var fjdij = timedLoop(100, function() {
  
readRecords("ban", {}, function(records) {
  for (var i =0; i - records.length; i++) {
    if (records[i].uid === getUserId()) {
      stop(fjdij);
      ban = 'yes';
      setScreen("ban");
      setText("banr", records[i].reason);
    } else if (records[i].uid === 'holder') {
      stop(fjdij);
      ban = 'n';
      setTimeout(function() {
  
 var fvgdfjh = timedLoop(100, function() {
  readRecords("users", {}, function(records) {
    for (var i =0; i - records.length; i++) {
      if (records[i].uid === getUserId()) {
        
        rid = records[i].id;
        stop(fvgdfjh);
        uname = records[i].uname;
        setText("name", "Welcome back- " + uname);
        if (records[i].admin === "yes") {
          admin = 'true';
        } else {
          admin = 'n';
        }
        if (records[i].legacy === "yes") {
          leg = 'true';
        } else {
          leg = 'n';
        }
        if (records[i].owner === "yes") {
          own = 'true';
        } else {
          own = 'n';
        }
        
        setScreen("home");
        rank();
        
      } else if (records[i].uid === 'holder') {
        if (ban === 'n') {
        stop(fvgdfjh);
        setScreen("signup");
        }
        
      }
    }
  });
  
});

}, 5000);
    
    }
  }
});



});


//signup:

onEvent("create", "click", function() {
var  u = prompt("username?");
  create(u);
});

function create(u) {

    createRecord("users", {uid:getUserId(), uname:u, admin:"no", legacy:"no", owner:"no"}, function(record) {
      prompt("Created: " + u);
      setScreen("refresh(c)");
    });
    
  
  
}


//chat:

onEvent("openC", "click", function() {
  setScreen("chat");
  setTimeout(function() {
    startup(); start(cfa);
  }, 500);
});

function cfa() {
  var fijdfvn = timedLoop(100, function() {
    if (admin === 'true') {
    setProperty("clear", "hidden", false);
  } else if (own === 'true') {
    setProperty("clear", "hidden", false);
  } else if (own && admin === 'n') {
    setProperty("clear", "hidden", true);
  }
    
  });
}

function startup() {
  var vfivs = timedLoop(100, function() {
    readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("chatarea", records[i].ch);
      }
    });
    
  });
}

onEvent("send", "click", function() {
  if (getText("text") != '') {
    hideElement("text");
    hideElement("send");
    readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + tag + " [- " + uname + " -] " + getText("text")}, function(record, success) {
          createRecord("logs", {uid:getUserId(), name:uname, message:getText("text")}, function(record) {
            setText("text", '');
          showElement("send");
          showElement("text");
          });
          
        });
        
      }
    });
    
  } else if (getText("text") === '') {
    prompt("Please type something before sending a message.");
  }
});

onEvent("clear", "click", function() {
  setScreen("loading3");
  updateRecord("ch", {id:1, ch:"{S} - chat cleared by " + uname}, function(record, success) {
    prompt("Chat cleared.");
    setScreen("chat");
  });
  
});

//settings:

onEvent("openS", "click", function() {
  setScreen("settings");
});

function rank() {
  var jkfdn = timedLoop(100, function() {
    if (admin === 'true') {
      setProperty("adminp", "image", "icon://fa-unlock");
      tag = 'ADMIN';
    } else if (leg === 'true') {
      setProperty("adminp", "image", "icon://fa-lock");
      tag = 'O.U';
    } else if (own === 'true') {
     setProperty("adminp", "image", "icon://fa-unlock");
      tag = 'OWNER';
    } else if (admin && own && leg === 'n') {
      setProperty("adminp", "image", "icon://fa-lock");
      tag = '';
    }
  });
}


onEvent("Shome", "click", function() {
  setScreen("home");
});

onEvent("chome", "click", function() {
  setScreen("home");
});




//Image feature:

onEvent("oip", "click", function() {
  iload();
  setScreen("image");
});

function iload() {
  var vvifo = timedLoop(100, function() {
    readRecords("image", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setImageURL("imagee", records[i].url);
        setText("label9", records[i].name + " sent this image");
      }
    });
    
  });
}



onEvent("si", "click", function() {
  if (getText("iurl") != '') {
  updateRecord("image", {id:1, url:getText("iurl"), name:uname}, function(record, success) {
    prompt(getText("iurl") + " has been set as the image");
    setText("iurl", '');
  });
  } else if (getText("iurl") === '') {
    prompt("You cant leave that empty!");
  }
});

onEvent("Iback", "click", function() {
  setScreen("chat");
});

//delete:

onEvent("da", "click", function() {
  deleteRecord("users", {id:rid}, function(success) {
    setScreen("refresh(D)");
    prompt("Account deleted.");
  });
  
});


//status:

onEvent("ostats", "click", function() {
  setScreen("status");
  start(st);
});

function st() {
  var ifdhv = timedLoop(100, function() {
    readRecords("st", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("ostat", records[i].st);
      }
    });
    
  });
}

onEvent("ostat", "click", function() {
  if (getUserId() === 'T9ogk9ZHWdPtuKTWAZvuf+toj/g') {
  updateRecord("st", {id:1, st:prompt("New Status").toUpperCase()}, function(record, success) {
  
  });
  
  }
});


onEvent("backo", "click", function() {
  setScreen("chat");
});

//credits:

onEvent("openCr", "click", function() {
  setScreen("credits");
});

onEvent("bca", "click", function() {
  open("https://studio.code.org/projects/applab/bWw2ye9mNKTquyzZLzIFuXfgyzWzKrUbg_S9sUgUVeU");
});

onEvent("homee", "click", function() {
  setScreen("home");
});


//guest:

onEvent("guest", "click", function() {
  uname = "Guest" + randomNumber(500, 500000);
  prompt("Signing in as " + uname);
  hideElement("openS");
  setProperty("openCr", "y", 315);
  setText("name", uname);
  setScreen("home");
});

//admin:

onEvent("adminp", "click", function() {
  if (getProperty("adminp", "image") === "icon://fa-lock") {
    prompt("Only admins can use this");
  } else if (getProperty("adminp", "image") === "icon://fa-unlock") {
    setScreen("admin");
  }
});

onEvent("homeee", "click", function() {
  setScreen("chat");
});

onEvent("MA", "click", function() {
  setScreen("loading2");
  readRecords("ch", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{{" + uname + " ANNOUNCES}} - " + prompt("What is your announcement?")}, function(record, success) {
        prompt("Announcement made.");
        setScreen("admin");
      });
      
    }
  });
  
});


onEvent("MSA", "click", function() {
  setScreen("loading2");
  readRecords("ch", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{{SERVER ANNOUNCEMENT}} - " + prompt("What is your announcement?")}, function(record, success) {
        prompt("Server Announcement made.");
        setScreen("admin");
      });
      
    }
  });
  
});

onEvent("banbtn", "click", function() {
  setScreen("loading4");
  var bun = prompt("Other user's username");
  var br = prompt("Reason");
  createRecord("banr", {name:bun, reason:br, admin:uname, auid:getUserId()}, function(record) {
    prompt("Banning: " + bun + " for " + br);
    setScreen("admin");
  });
  
});

onEvent("shut", "click", function() {
  setScreen("loading5");
  var vfdk = timedLoop(100, function() {
    updateRecord("ch", {id:1, ch:"{SHUTDOWN} - THE CHAT HAS BEEN SHUTDOWN BY " + uname + "! THEY MUST REFRESH THEIR PAGE TO END THE SHUTDOWN"}, function(record, success) {
      setScreen("chat");
      showElement("refresh");
    });
    
  });
});

onEvent("araid", "click", function() {
  setScreen("loading6");
  readRecords("ch", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("ch", {id:1, ch:records[i].ch + "\n" + uname + " started a RAID...."}, function(record, success) {
        raid();
      });
      
    }
  });
  
});

function raid() {
 var vfv = timedLoop(100, function() {
    readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + uname + " IS THE BEST!! WE ARE RAIDING THE CHAT FOR HE/SHE!!!!"}, function(record, success) {
          setScreen("chat");
        });
        setTimeout(function() {
          stop(vfv);
        }, 30000);
      }
    });
    
  });
}

onEvent("AC", "click", function() {
  open("https://studio.code.org/projects/applab/Rm9uaTujnUqnls8Rx9qLEHQPm-Oq8oNcZERr9jExCcQ");
});


timedLoop(100,function() {
  showElement("araid");
});
