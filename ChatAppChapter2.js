//read only
setProperty("chat-area", "readonly", true);
setProperty("devlog_chat", "readonly", true);

//OnRecordEvent

onRecordEvent("ch", function() {
  playSound("sound://category_bell/notification_4.mp3");
});

onRecordEvent("Suggestions", function() {
  if (getUserId() === '/fcDOZo8PUxFTO85czWJTw2OFrg') {
    playSound("sound://category_notifications/lighthearted_notification_2.mp3");
  }
});

//setlogo

//timedLoop(0, function() {
  //setScreen("logo");
//});


//var
setProperty("dizzy", "hidden", true);
setProperty("adminn", "hidden", true);
setProperty("hmmE", "hidden", true);
setProperty("funE", "hidden", true);
setProperty("emojiadd", "hidden", false);
    setProperty("eback", "hidden", true);
    setProperty("HappyE", "hidden", true);
setProperty("eback", "hidden", true);
    setProperty("HappyE", "hidden", true);
setProperty("devclear", "hidden", true);
setProperty("devchat", "hidden", true);
    setProperty("devsend", "hidden", true);
setProperty("msg-type", "hidden", false);
setProperty("clearchat", "hidden", true);
setProperty("send", "hidden", false);

ost();

m();

var illuminati = 'n'; //? ? ? ?

var own = 'n';

var vname = 'n';

var resp = 'n';

var vreason = 'n';

var id = '0';

var music = 'false';

var str = "Hello World :| ";

var eun = 'n';

var eur = 'n';

var tfar = 'n';

var uname = 'n';

var uid = 'n';

var a = 'n';

var bID = '0';

var ads = 'n';

var tfaaa = 'n';

//checkforban
function checkforban() {
  var banloop = timedLoop(0, function() {
    readRecords("banlist", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (getUserId() === records[i].userid) {
          stopTimedLoop(banloop);
          setScreen("ban");
          setText("BanR", "You were banned for- " + records[i].reason);
          bID = records[i].id - 1;
        setText("BID", "Ban ID: #" + bID);
        }
      }
    });
    
  });
}


//start



var create = timedLoop(100, function() {
  readRecords("users", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (getUserId() === records[i].userid) {
        stopTimedLoop(create);
        setScreen("login");
        checkforban();
      } else {
        if (records[i].userid === 'holder') {
          stopTimedLoop(create);
          checkforban();
          setScreen("Start_SCREEN");
        }
      }
    }
  });
  
});


//create

onEvent("userID_get", "click", function() {
  prompt("Your userID is: " + getUserId() + " - Make sure to copy this down or you will lose access to your account");
  
  uid = getUserId();
  
  str = prompt("Choose a name. DO NOT USE YOUR REAL NAME | WARNING- THE NAME YOU SELECT IS NOT CHANGE-ABLE");
  str.toLowerCase();
  if (str != '') {
    if (str.length < 12 || str.length === 12) {
      if (str.length > 4 || str.length === 4) {
        if (str.includes(("." || " ") || "?" || "," || "=" || "+" || "-" || "/" || "[" || "]" || "(" || ")" || "{" || "}" || ":")) {
        prompt("Your username can not contain- \". or ? or , or = or + or - or / or [ or ] or ( or ) or { or } or :\". Please try again");
        } else {
          var agc = randomNumber(500, 100000);
    str.toLowerCase();
    
    prompt("Hello, " + str.toLowerCase() + "! Your AGC (Auto Generated Code) code is: " + agc + " . Make sure to copy this down somewhere because if you forget your userID this code is the only thing that can get it back without deleting your IN APP account");
    
    createRecord("users", {userid:uid, name:str.toLowerCase(), admin:'no', code:agc, res:'no', owner:'no'}, function(record) {
      prompt("Account created! Taking you to login screen");
      setScreen("login");
    });
    
        }
      } else {
        if (str.length < 4) {
          prompt("Your username must be over 4 characters. please try again");
        }
      }
    } else {
      if (str.length > 12) {
        prompt("Your username can not be over 12 characters. please try again");
      }
    }
  }
  
});

//login

onEvent("login-btn", "click", function() {
  var loginloop = timedLoop(100, function() {
    readRecords("users", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (getText("login-uid") === records[i].userid) {
          id = records[i].id - 1;
            stopTimedLoop(loginloop);
             tfar = records[i].code;
            uname = records[i].name;
          stopTimedLoop(loginloop);
          setText("name-D", uname);
          setText("uiddis", "ID: #" + id);
          setScreen("home");
          startchat();
          devload();
          ads = records[i].ads;
          if (records[i].admin === 'yes') {
            a = 'true';
            setProperty("adminn", "hidden", false);
            setText("adminn", 'YOU ARE AN ADMIN');
          
          } else {
            a = 'n';
            setProperty("adminn", "hidden", true);
            setText("adminn", 'YOU ARE AN ADMIN');
            
          }
          if (records[i].res === 'yes') {
            resp = 'true';
            setProperty("adminn", "hidden", false);
        setText("adminn", "YOU ARE RESPECTED");
          } else {
            resp = 'n';
            setProperty("adminn", "hidden", true);
            
          }
          if (records[i].owner === 'yes') {
            own = 'true';
            setProperty("adminn", "hidden", false);
        setText("adminn", "YOUR AN OWNER");
          } else {
            own = 'n';
            setProperty("adminn", "hidden", true);
            
          }
          
        } else {
          if (records[i].userid === 'holder') {
            stopTimedLoop(loginloop);
          
          }
          
        }
      }
    });
    
  });
});

//home

onEvent("web", "click", function() {
  prompt("Taking you (" + uname + ") to the website");
  open("https://codeprojects.org/LiMOV54nNBJtSiLP-wSJx9Kmwtbai-bhgcvGh2oNlk4");
});

//chat function


//loadchat
function startchat() {
  var chatloop = timedLoop(100, function() {
    readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("chat-area", records[i].ch);
      }
    });
    
  });
}




onEvent("send", "click", function() {
  if (getText("msg-type") != '') {
    Eopen = 'no';
    setProperty("dizzy", "hidden", true);
    setProperty("funE", "hidden", true);
    setProperty("emojiadd", "hidden", true);
    setProperty("eback", "hidden", true);
    setProperty("HappyE", "hidden", true);
    setProperty("hmmE", "hidden", true);
    setProperty("send", "hidden", true);
    setProperty("msg-type", "hidden", true);
    if (a === 'true') {
      readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{ADMIN} [ " + uname + " ]: " + getText("msg-type")}, function(record, success) {
          createRecord("chatlogs", {userid:getUserId(), name:uname, message:getText("msg-type")}, function(record) {
            setText("msg-type", '');
            setProperty("send", "hidden", false);
            setProperty("msg-type", "hidden", false);
            setProperty("emojiadd", "hidden", false);
          });
          
        });
        
      }
    });
    } else {
      if (a === 'n') {
      checkr();
      }
}
}
});
onEvent("openchat", "click", function() {
  
  setScreen("chatpage");
  startchat(); clearloop();
});

function clearloop() {
  if (a === 'true') {
    setProperty("clearchat", "hidden", false);
  } else if (own === 'true') {
    setProperty("clearchat", "hidden", false);
  } else if (own && a === 'n') {
    setProperty("clearchat", "hidden", true);
  }
}


onEvent("clearchat", "click", function() {
  updateRecord("ch", {id:1, ch:"{SERVER} " + uname + " Reset the chatpage" + "\n" + "{UPDATE} - Chapter 5 is out!!"}, function(record, success) {
    
      setText("msg-type", '');
    
    
  });
  
});


onEvent("homeBc", "click", function() {
  setScreen("home");
  setText("msg-type", '');
});


//dev log

onEvent("DEVlogsopen", "click", function() {
  if (own === 'true') {
    setScreen("devlog");
    setProperty("devchat", "hidden", false);
    setProperty("devsend", "hidden", false);
  } else {
    setScreen("devlog");
    setProperty("devchat", "hidden", true);
    setProperty("devsend", "hidden", true);
  }
});

onEvent("devsend", "click", function() {
  readRecords("dev", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("dev", {id:1, dev:records[i].dev + "\n" + "{OWNER} [ " + uname + " ]: " + getText("devchat")}, function(record, success) {
        setText("devchat", '');
      });
      
    }
  });
  
});


//loadlogs
function devload() {
  var devloop = timedLoop(100, function() {
    readRecords("dev", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("devlog_chat", records[i].dev);
      }
    });
    
  });
}

onEvent("backtohome", "click", function() {
  setScreen("home");
});

onEvent("DEVlogsopen", "click", function() {
  if (own === 'true') {
    setProperty("devclear", "hidden", false);
  } else {
    if (own === 'n') {
    setProperty("devclear", "hidden", true);
    }
  }
});

onEvent("devclear", "click", function() {
  updateRecord("dev", {id:1, dev:"{SERVER} Logs cleared"}, function(record, success) {
    
  });
  
});


//emoji


var Eopen = 'no';

onEvent("emojiadd", "click", function() {
  if (Eopen === 'no') {
    Eopen = 'yes';
    setProperty("dizzy", "hidden", false);
    setProperty("eback", "hidden", false);
    setProperty("HappyE", "hidden", false);
    setProperty("hmmE", "hidden", false);
    setProperty("funE", "hidden", false);
  } else {
    if (Eopen === 'yes') {
    Eopen = 'no';
    setProperty("dizzy", "hidden", true);
    setProperty("eback", "hidden", true);
    setProperty("HappyE", "hidden", true);
    setProperty("hmmE", "hidden", true);
    setProperty("funE", "hidden", true);
    }
  }
});

onEvent("HappyE", "click", function() {
  setText("msg-type", getText("msg-type") + '😀');
});

onEvent("hmmE", "click", function() {
  setText("msg-type", getText("msg-type") + '🤔');
});

onEvent("funE", "click", function() {
  setText("msg-type", getText("msg-type") + '😂');
});

onEvent("dizzy", "click", function() {
  setText("msg-type", getText("msg-type") + '😵');
});


//credits

onEvent("C-open", "click", function() {
  setScreen("Credits");
});

onEvent("Chome", "click", function() {
  setScreen("home");
});



onEvent("fuid", "click", function() {
 var loopedr = timedLoop(100, function() {
   readRecords("users", {}, function(records) {
     for (var i =0; i < records.length; i++) {
      if (getUserId() == records[i].userid) {
        stopTimedLoop(loopedr);
        stopTimedLoop(loopedr);
        uname = records[i].name;
        tfaaa = records[i].code;
        userr();
      } 
     }
   });
   
 }); 
});
//forgot uid
function userr() {
  setTimeout(function() {
   var pr =  prompt("Hello, " + uname + "! What is your AGC (Auto Generated Code) code?");
    if (pr == tfaaa) {
      prompt("Your userid is: " + getUserId());
    } else {
      if (pr != tfaaa) {
        prompt("OOPS- the AGC code you gave us does not match our records. Please try again");
      }
    }
  }, 1000);
}

//admin

onEvent("send", "click", function() {
  if (getText("msg-type") != '') {
    if (getText("msg-type") === '.cmds') {
      if (a || own === 'true') {
        prompt("The current commands for admin is: .cmds");
      } else {
        if (a || own === 'n') {
          prompt("You are not an admin.");
        }
      }
    } 
  }
});

//suggestions

onEvent("send", "click", function() {
  if (getText("msg-type") === '/suggest') {
    
    createRecord("Suggestions", {name:uname, suggestion:prompt("Suggestion here")}, function() {
      prompt("Suggestioin Recorded");
    });
    
  }
});




//login with AGC


onEvent("loginwtfa", "click", function() {
var tfaaaa = prompt("What is your auto generated code? (agc)");
 var loopedtfa = timedLoop(100, function() {
   readRecords("users", {}, function(records) {
     for (var i =0; i < records.length; i++) {
      if (tfaaaa == records[i].code) {
        if (records[i].code > 499) {
        stopTimedLoop(loopedtfa);
        stopTimedLoop(loopedtfa);
        uname = records[i].name;
        if (records[i].admin === 'yes') {
          setText("adminn", 'YOU ARE AN ADMIN');
          setProperty("adminn", "hidden", false);
         
          a = 'true';
        } else {
          setText("adminn", 'YOU ARE AN ADMIN');
          setProperty("adminn", "hidden", true);
          
          a = 'n';
        }
        if (records[i].res === 'yes') {
            resp = 'true';
            setProperty("adminn", "hidden", false);
        setText("adminn", "YOU ARE RESPECTED");
          } else {
            resp = 'n';
            setProperty("adminn", "hidden", true);
            
          }
          if (records[i].owner === 'yes') {
            own = 'true';
            setProperty("adminn", "hidden", false);
        setText("adminn", "YOUR AN OWNER");
          } else {
            own = 'n';
            setProperty("adminn", "hidden", true);
            
          }
        id = records[i].id - 1;
        tfaaa = records[i].code;
        userrr();
        } else {
        if (records[i].code === '0') {
          stopTimedLoop(loopedtfa);
        } 
      } 
      }
     }
   });
   
 }); 
});
//unknown
function userrr() {
  setTimeout(function() {
    pr =  prompt("Hello, " + uname + "!");
    setText("name-D", uname);
    setText("uiddis", "ID: #" + id);
    setScreen("home");
    if (a === 'true') {
      setProperty("adminn", "hidden", false);
    }
    devload();
    
  }, 1000);
}










//musicloop
function m() {
  var hugrhugdv = timedLoop(100, function() {
    if (music === 'false') {
      setText("mstats", "Music: OFF");
    } else {
      if (music === 'true') {
        setText("mstats", "Music: ON");
      }
  }
  });
}





//music 

onEvent("mtoggle", "click", function() {
  setScreen("music");
});


//report feature

onEvent("report_btn", "click", function() {
  setScreen("Report");
  report();
  violation();
});

onEvent("Rs_can", "click", function() {
  setText("Rs_name", '');
  setScreen("home");
  setText("Rs_other", '');
});

onEvent("Rs_don", "click", function() {
  if (getText("Rs_violation") === "Other") {
    if (getText("Rs_other") != '') {
      if (getText("Rs_name") != '') {
        vname = getText("Rs_name");
        vreason = getText("Rs_other");
        reportu();
      }
    }
  } else {
    if (getText("Rs_violation") != "Other") {
    
      if (getText("Rs_name") != '') {
        vname = getText("Rs_name");
        vreason = getText("Rs_violation");
        reportun();
      }
    
  }
  }
});
//rloop
function report() {
  var jfoi4hgf9fvdhewog = timedLoop(100, function() {
    if (getText("Rs_admin/non") === "Non-Admin") {
      setProperty("Rs_violation", "options", ["Cursing", "Emoji OVERLOAD", "Name calling", "Bad grammar", "Other"]);
    } else {
      if (getText("Rs_admin/non") === "Admin") {
        setProperty("Rs_violation", "options", ["Admin abuse", "Cursing", "Emoji OVERLOAD", "Name calling", "Bad grammar", "Other"]);
      }
    }
  });
}
//vio1
function violation() {
  var ty857h8grfsiogy8957e = timedLoop(0, function() {
    if (getText("Rs_violation") === "Other") {
      setProperty("Rs_other", "hidden", false);
    } else {
      if (getText("Rs_violation") != "Other") {
        setProperty("Rs_other", "hidden", true);
      }
    }
  });
}
//rep1
function reportu() {
  createRecord("Report", {Username:uname, ViolatorsName:vname, Reason:vreason}, function(record) {
    prompt("You reported: " + vname + ". For: " + vreason);
    setScreen("home");
    setText("Rs_name", '');
    setText("Rs_other", '');
  });
  
}
//rep2
function reportun() {
  createRecord("Report", {Username:uname, ViolatorsName:vname, Reason:vreason}, function(record) {
    prompt("You reported: " + vname + ". For: " + vreason);
    setScreen("home");
    setText("Rs_name", '');
    
  });
  
}













//chkr
function checkr() {
  if (getText("msg-type") != '') {
    Eopen = 'no';
    setProperty("dizzy", "hidden", true);
    setProperty("funE", "hidden", true);
    setProperty("emojiadd", "hidden", true);
    setProperty("eback", "hidden", true);
    setProperty("HappyE", "hidden", true);
    setProperty("hmmE", "hidden", true);
    setProperty("send", "hidden", true);
    setProperty("msg-type", "hidden", true);
    if (resp === 'true') {
      readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{RESPECTED} [ " + uname + " ]: " + getText("msg-type")}, function(record, success) {
          createRecord("chatlogs", {userid:getUserId(), name:uname, message:getText("msg-type")}, function(record) {
            setText("msg-type", '');
            setProperty("send", "hidden", false);
            setProperty("msg-type", "hidden", false);
            setProperty("emojiadd", "hidden", false);
            
            
          });
          
        });
        
      }
    });
    } else {
      if (resp === 'n') {
      checko();
      }
}
}
}

//res/own chk
function checko() {
  if (own === 'true') {
    readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{OWNER} [ " + uname + " ]: " + getText("msg-type")}, function(record, success) {
          createRecord("chatlogs", {userid:getUserId(), name:uname, message:getText("msg-type")}, function(record) {
            setText("msg-type", '');
            setProperty("send", "hidden", false);
            setProperty("msg-type", "hidden", false);
            setProperty("emojiadd", "hidden", false);
            
          });
          
        });
        
      }
    });
  } else {
    if (own === 'n') {
      checki();
    }
  }
}

function checki() {
  if (illuminati === 'true') {
    readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{(--illuminati--)} [ " + uname + " ]: " + getText("msg-type")}, function(record, success) {
          createRecord("chatlogs", {userid:getUserId(), name:uname, message:getText("msg-type")}, function(record) {
            setText("msg-type", '');
            setProperty("send", "hidden", false);
            setProperty("msg-type", "hidden", false);
            setProperty("emojiadd", "hidden", false);
            
          });
          
        });
        
      }
    });
  } else if (illuminati === 'n') {
   checkc();
  }
}

function checkc() {
  if (communist === 'true') {
     readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "{[SOVIET]} " + "[ " + uname + " ]: " + getText("msg-type")}, function(record, success) {
          createRecord("chatlogs", {userid:getUserId(), name:uname, message:getText("msg-type")}, function(record) {
            setText("msg-type", '');
            setProperty("send", "hidden", false);
            setProperty("msg-type", "hidden", false);
            setProperty("emojiadd", "hidden", false);
            
          });
          
        });
        
      }
    });
  } else if (communist === 'n') {
     readRecords("ch", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("ch", {id:1, ch:records[i].ch + "\n" + "[ " + uname + " ]: " + getText("msg-type")}, function(record, success) {
          createRecord("chatlogs", {userid:getUserId(), name:uname, message:getText("msg-type")}, function(record) {
            setText("msg-type", '');
            setProperty("send", "hidden", false);
            setProperty("msg-type", "hidden", false);
            setProperty("emojiadd", "hidden", false);
            
          });
          
        });
        
      }
    });
  }
}






onEvent("seerules", "click", function() {
  prompt("Not following these RULES WILL result in a ban - Do NOT bully other users and also DO NOT use swear words- doing so results in a ban.");
});








//new music


onEvent("utheme", "click", function() {
  
  
  setTimeout(function() {
    if (music === 'false') {
    music = 'true';
    prompt("Playing: Undertale-OST--090---His-Theme.mp3 - for: " + uname);
    setScreen("home");
    playSound("Undertale-OST--090---His-Theme.mp3", true);
    setTimeout(function() {
    
    }, 4000);
  } else {
    if (music === 'true') {
    music = 'false';
    prompt("Playing: nothing - for: " + uname);
    stopSound("Undertale-OST--090---His-Theme.mp3");
    
    }
  }
  }, 1000);
});


onEvent("tfc", "click", function() {
  setTimeout(function() {
    if (music === 'false') {
    music = 'true';
    prompt("Playing: Starwars-The-Imperial-March-(Darth-Vader's-Theme)---Star-Wars---The-Empire-Strikes-Back-Original-Soundtrack---01.mp3 - for: " + uname);
    setScreen("home");
    playSound("Starwars-The-Imperial-March-(Darth-Vader's-Theme)---Star-Wars---The-Empire-Strikes-Back-Original-Soundtrack---01.mp3", true);
    setTimeout(function() {
    
    }, 4000);
  } else {
    if (music === 'true') {
    music = 'false';
    prompt("Playing: nothing - for: " + uname);
    stopSound("Starwars-The-Imperial-March-(Darth-Vader's-Theme)---Star-Wars---The-Empire-Strikes-Back-Original-Soundtrack---01.mp3");
    
    }
  }
  }, 1000);
});



onEvent("HOME", "click", function() {
  setScreen("home");
});



onEvent("mp", "click", function() {
  setTimeout(function() {
    if (music === 'false') {
    music = 'true';
    prompt("Playing: Undertale-OST--100---Megalovania.mp3 - for: " + uname);
    setScreen("home");
    playSound("Undertale-OST--100---Megalovania.mp3", true);
    setTimeout(function() {
    
    }, 4000);
  } else {
    if (music === 'true') {
    music = 'false';
    prompt("Playing: nothing - for: " + uname);
    stopSound("Undertale-OST--100---Megalovania.mp3");
    
    }
  }
  }, 1000);
});


onEvent("cs1", "click", function() {
   setTimeout(function() {
    if (music === 'false') {
    music = 'true';
    prompt("Playing: 5731689193013248.mp3 - for: " + uname);
    setScreen("home");
    playSound("5731689193013248.mp3", true);
    setTimeout(function() {
    
    }, 4000);
  } else {
    if (music === 'true') {
    music = 'false';
    prompt("Playing: nothing - for: " + uname);
    stopSound("5731689193013248.mp3");
    
    }
  }
  }, 1000);
});

onEvent("newcustom", "click", function() {
   setTimeout(function() {
    if (music === 'false') {
    music = 'true';
    prompt("Playing: 5964179161743360.mp3 - for: " + uname);
    setScreen("home");
    playSound("5964179161743360.mp3", true);
    setTimeout(function() {
    
    }, 4000);
  } else {
    if (music === 'true') {
    music = 'false';
    prompt("Playing: nothing - for: " + uname);
    stopSound("5964179161743360.mp3");
    
    }
  }
  }, 1000);
});


onEvent("km", "click", function() {
   setTimeout(function() {
    if (music === 'false') {
    music = 'true';
    prompt("Playing: Space-Fighter-Loop.mp3 - for: " + uname);
    setScreen("home");
    playSound("Space-Fighter-Loop.mp3", true);
    setTimeout(function() {
    
    }, 4000);
  } else {
    if (music === 'true') {
    music = 'false';
    prompt("Playing: nothing - for: " + uname);
    stopSound("Space-Fighter-Loop.mp3");
    
    }
  }
  }, 1000);
});





//type-detector! (thx chx)

var detedeiikhhdibx = timedLoop(100, function() {
  if (getText("msg-type") != '') {
    updateRecord("typ", {id:1, typ:true}, function(record, success) {
      
    });
    
  } else {
    if (getText("msg-type") === '') {
      updateRecord("typ", {id:1, typ:false}, function(record, success) {
        
      });
      
    }
  }
});

var yvgvjknyfkgnnky = timedLoop(100, function() {
  readRecords("typ", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if (records[i].typ === true) {
        
        setProperty("st", "hidden", false);
        
      } else {
        if (records[i].typ === false) {
          
          setProperty("st", "hidden", true);
          
        } 
      }
    }
  });
  
});

//my status




onEvent("ost", "click", function() {
  setScreen("status");
});

function ost() {
  var jbfdkbhvgfd = timedLoop(100, function() {
    readRecords("stat", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("ostats", records[i].stat);
      }
    });
    
  });
}


onEvent("bcp", "click", function() {
  setScreen("chatpage");
});

onEvent("ostats", "click", function() {
  if (getUserId() === '/fcDOZo8PUxFTO85czWJTw2OFrg') {
  var  statusvar = prompt("Type your new status here:");
    updateRecord("stat", {id:1, stat:statusvar.toUpperCase()}, function(record, success) {
      prompt("Status set to: " + statusvar.toUpperCase());
    });
    
  }
    
  
});

//chapter 3!!!:

onEvent("c3", "click", function() {
  open("https://studio.code.org/projects/applab/fBpZ-JUc21swpSKIqfjU5Wm_bL-6B5dXGE93sjyUQ-I");
});

//chapter 4?

onEvent("c4", "click", function() {
  open("https://studio.code.org/projects/applab/-4DFmKIwFpAyCwJafDo0qBZaLgwmm9LnVjB2PIkGaN4");
});











































































































































































//????

onEvent("illu", "click", function() {
  setProperty("pyramid", "hidden", true);
  setScreen("black");
  stopSound("X---Files-Theme-Full-(Illuminati-Song).mp3");
  stopSound("5731689193013248.mp3");
  stopSound("5964179161743360.mp3");
  stopSound("Space-Fighter-Loop.mp3");
  stopSound("Starwars-The-Imperial-March-(Darth-Vader's-Theme)---Star-Wars---The-Empire-Strikes-Back-Original-Soundtrack---01.mp3");
  stopSound("Undertale-OST--090---His-Theme.mp3");
  stopSound("Undertale-OST--100---Megalovania.mp3");
  

  playSound("X---Files-Theme-Full-(Illuminati-Song).mp3", true);
setTimeout(function() {
  prompt("3.");
  prompt("A triangle has 3 sides.");
  prompt("A pyramid also has 3 sides.");
  prompt("Illuminati confirmed?");
  setTimeout(function() {
prompt("KFC has 3 letters.");
  prompt("Is KFC part of the Illuminati?");
  
 setTimeout(function() {
   setProperty("pyramid", "hidden", false);
   convert();
   setTimeout(function() {
     setScreen("home");
   }, 24000);
 }, 5000);
  }, 5000);
  


}, 8000);
});

function convert() {
  showElement("?");
  showElement("illi");
  setProperty("seerules", "background-color", "#257f3a");
  setProperty("mtoggle", "background-color", "#257f3a");
  setProperty("home", "background-color", "#000000");
  setProperty("mtoggle", "background-color", "#257f3a");
  setProperty("openchat", "background-color", "#257f3a");
  setProperty("c4", "background-color", "#257f3a");
  setProperty("c3", "background-color", "#257f3a");
  setProperty("report_btn", "background-color", "#257f3a");
  setProperty("C-open", "background-color", "#257f3a");
  setProperty("web", "background-color", "#257f3a");
  setProperty("name-D", "text-color", "#257f3a");
  setProperty("homeBc", "background-color", "#257f3a");
  setProperty("send", "background-color", "#257f3a");
  setProperty("emojiadd", "background-color", "#257f3a");
  setProperty("clearchat", "background-color", "#257f3a");
  setProperty("ost", "background-color", "#257f3a");
  setProperty("chatpage", "background-color", "#000000");
  setProperty("chat-area", "background-color", "#257f3a");
  setProperty("st", "text-color", "#257f3a");
  setProperty("devsend", "background-color", "#257f3a");
  setProperty("devlog_chat", "background-color", "#257f3a");
  setProperty("backtohome", "background-color", "#257f3a");
  setProperty("devclear", "background-color", "#257f3a");
  setProperty("devlog", "background-color", "#000000");
  setProperty("Chome", "background-color", "#257f3a");
  setProperty("Credits", "background-color", "#000000");
  setProperty("label14", "text-color", "#257f3a");
  setProperty("music", "background-color", "#000000");
  setProperty("HOME", "background-color", "#257f3a");
  setProperty("Rs_can", "background-color", "#257f3a");
  setProperty("Rs_don", "background-color", "#257f3a");
  setProperty("Report", "background-color", "#000000");
  setProperty("status", "background-color", "#000000");
  setProperty("C-open", "text-color", "#ffffff");
  setProperty("c3", "text-color", "#ffffff");
  setProperty("bcp", "background-color", "#257f3a");
  setProperty("DEVlogsopen", "background-color", "#257f3a");
  setProperty("chat-area", "text-color", "#ffffff");
  setProperty("devlog_chat", "text-color", "#ffffff");
  hideElement("mtoggle");
  hideElement("mstats");
  setProperty("hello", "text-color", "#257f3a");
  setProperty("adminn", "text-color", "#257f3a");
  setProperty("uiddis", "text-color", "#257f3a");
  setProperty("ostats", "text-color", "#257f3a");
  setProperty("label23", "text-color", "#257f3a");
  setProperty("label24", "text-color", "#257f3a");
  setProperty("label15", "text-color", "#257f3a");
  setProperty("label11", "text-color", "#257f3a");
  setProperty("label16", "text-color", "#257f3a");
  setProperty("label12", "text-color", "#257f3a");
  setProperty("label18", "text-color", "#257f3a");
  setProperty("label17", "text-color", "#257f3a");
  setProperty("label19", "text-color", "#257f3a");
  setProperty("label20", "text-color", "#257f3a");
  setTimeout(function() {
    
  
  illuminati = 'true';
  a = 'n';
  own = 'n';
  resp = 'n';
  }, 3000);
}


onEvent("send", "click", function() {
  if (getText("msg-type") === '/illuminati') {
    prompt("Illuminati mode can only be accessed in the music page");
  }
});

onEvent("send", "click", function() {
  if (getText("msg-type") === '/communist') {
    if (uname === 'dizzywig2000') {
  stopSound("X---Files-Theme-Full-(Illuminati-Song).mp3");
  stopSound("5731689193013248.mp3");
  stopSound("5964179161743360.mp3");
  stopSound("Space-Fighter-Loop.mp3");
  stopSound("Starwars-The-Imperial-March-(Darth-Vader's-Theme)---Star-Wars---The-Empire-Strikes-Back-Original-Soundtrack---01.mp3");
  stopSound("Undertale-OST--090---His-Theme.mp3");
  stopSound("Undertale-OST--100---Megalovania.mp3");
  transform2();
    } else {
      prompt("Communist mode can only be accessed in the music page");
    }
  }
});


onEvent("?", "click", function() {
  stopSound("X---Files-Theme-Full-(Illuminati-Song).mp3");
  prompt("? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ? ?");
  open("https://studio.code.org/projects/applab/DF-jl2e8QBH7xqq8IFAz-yVJAaeAukdmNfJRAU8zHpg");
});

onEvent("Communism", "click", function() {
  setScreen("loading");
  stopSound("X---Files-Theme-Full-(Illuminati-Song).mp3");
  stopSound("5731689193013248.mp3");
  stopSound("5964179161743360.mp3");
  stopSound("Space-Fighter-Loop.mp3");
  stopSound("Starwars-The-Imperial-March-(Darth-Vader's-Theme)---Star-Wars---The-Empire-Strikes-Back-Original-Soundtrack---01.mp3");
  stopSound("Undertale-OST--090---His-Theme.mp3");
  stopSound("Undertale-OST--100---Megalovania.mp3");
  transform2();
});
function transform2() {
  
  showElement("sl");
  setProperty("seerules", "background-color", "#ffff00");
  setProperty("mtoggle", "background-color", "#ffff00");
  setProperty("home", "background-color", "#ff0004");
  setProperty("mtoggle", "background-color", "#ffff00");
  setProperty("openchat", "background-color", "#ffff00");
  setProperty("c4", "background-color", "#ffff00");
  setProperty("c3", "background-color", "#ffff00");
  setProperty("report_btn", "background-color", "#ffff00");
  setProperty("C-open", "background-color", "#ffff00");
  setProperty("web", "background-color", "#ffff00");
  setProperty("name-D", "text-color", "#000000");
  setProperty("homeBc", "background-color", "#ffff00");
  setProperty("send", "background-color", "#ffff00");
  setProperty("emojiadd", "background-color", "#ffff00");
  setProperty("clearchat", "background-color", "#ffff00");
  setProperty("ost", "background-color", "#ffff00");
  setProperty("chatpage", "background-color", "#ff0004");
  setProperty("chat-area", "background-color", "#ffff00");
  setProperty("st", "text-color", "#000000");
  setProperty("devsend", "background-color", "#ffff00");
  setProperty("devlog_chat", "background-color", "#ffff00");
  setProperty("backtohome", "background-color", "#ffff00");
  setProperty("devclear", "background-color", "#ffff00");
  setProperty("devlog", "background-color", "#ff0004");
  setProperty("Chome", "background-color", "#ffff00");
  setProperty("Credits", "background-color", "#ff0004");
  setProperty("label14", "text-color", "#000000");
  setProperty("music", "background-color", "#ff0004");
  setProperty("HOME", "background-color", "#ffff00");
  setProperty("Rs_can", "background-color", "#ffff00");
  setProperty("Rs_don", "background-color", "#ffff00");
  setProperty("Rs_can", "text-color", "#000000");
  setProperty("Rs_don", "text-color", "#000000");
  setProperty("seerules", "text-color", "#000000");
  setProperty("Rs_admin/non", "background-color", "#ffff00");
  setProperty("Rs_name", "background-color", "#ffff00");
  setProperty("Rs_violation", "background-color", "#ffff00");
  setProperty("Rs_other", "background-color", "#ffff00");
  setProperty("Rs_admin/non", "text-color", "#000000");
  setProperty("Rs_name", "text-color", "#000000");
  setProperty("Rs_violation", "text-color", "#000000");
  setProperty("Rs_other", "text-color", "#000000");
  setProperty("Report", "background-color", "#ff0004");
  setProperty("status", "background-color", "#ff0004");
  setProperty("C-open", "text-color", "#000000");
  setProperty("c3", "text-color", "#000000");
  setProperty("c4", "text-color", "#000000");
  setProperty("report_btn", "text-color", "#000000");
  setProperty("DEVlogsopen", "text-color", "#000000");
  setProperty("web", "text-color", "#000000");
  setProperty("openchat", "text-color", "#000000");
  setProperty("ost", "text-color", "#000000");
  setProperty("homeBc", "text-color", "#000000");
  setProperty("send", "text-color", "#000000");
  setProperty("eback", "background-color", "#ff0004");
  setProperty("bcp", "text-color", "#000000");
  setProperty("backtohome", "text-color", "#000000");
  setProperty("bcp", "background-color", "#ffff00");
  setProperty("DEVlogsopen", "background-color", "#ffff00");
  setProperty("chat-area", "text-color", "#000000");
  setProperty("devlog_chat", "text-color", "#000000");
  hideElement("mtoggle");
  hideElement("mstats");
  setProperty("hello", "text-color", "#000000");
  setProperty("adminn", "text-color", "#000000");
  setProperty("uiddis", "text-color", "#000000");
  setProperty("ostats", "text-color", "#000000");
  setProperty("label23", "text-color", "#000000");
  setProperty("label24", "text-color", "#000000");
  setProperty("label15", "text-color", "#000000");
  setProperty("label11", "text-color", "#000000");
  setProperty("label16", "text-color", "#000000");
  setProperty("label12", "text-color", "#000000");
  setProperty("msg-type", "background-color", "#ffff00");
  setProperty("msg-type", "text-color", "#000000");
  setProperty("label18", "text-color", "#000000");
  setProperty("label17", "text-color", "#000000");
  setProperty("label19", "text-color", "#000000");
  setProperty("label20", "text-color", "#000000");
  setTimeout(function() {
    playSound("soviet-anthem1944.mp3", true);
  setScreen("home");
  communist = 'true';
  a = 'n';
  own = 'n';
  resp = 'n';
  }, 3000);
}
var communist = 'n';
