// Sunday, July 19th, 2020: This should be the last chat app I will make (its now November 12th 2020 and im thinking about chat app 5 lol)

//owners:

//Creator & OU- dizzywig2000

//Owner & OU & Friend of creator- Chxconilla

//Co-Owner- Sky

//ACT counter:
//3.6e+6
function startactcounter(funcVar) {
  funcVar = timedLoop(3.6e+6, function() {
   updateRecord("users", {id:rid, uid:getUserId(), name:uname, pass:pass, admin:a, creator:c, owner:o, image:pimage, active:"yes"}, function(record, success) {
     prompt("You have been in app for an hour! Congrats! You now have the \"[ACTIVE\" tag!");
    });
 });
}

//Vars:

var adminapps = "open";

var onclick;

var typl;

var typl2;

var a;

var c;

var rid;

var o;

var act;

var pimage;

var pmid;

var pass;

var eopen = 'n';

var pml;

var actcounter;

var uname;

var Tag;

var Tag2;

var today = new Date();
var date = ((today.getFullYear()+'/')+(today.getMonth()+1)+'/')+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = (date+' ')+time;

//Functions:

function cfr() {
  var vjv = timedLoop(100, function() {
    if (getText("ta").length > 3749) {
      reset();
    }
  });
}

function reset() {
  updateRecord("chat", {id:1, ch:"[AUTO CHAT RESET]"}, function(record, success) {
    
  });
  
}

function home() {
  setScreen("home");
}

function stop(lid) {
  stopTimedLoop(lid);
}

function tag2() {
  if (act === "yes") {
    Tag2 = "[A]";
  } else if (act === "no") {
    Tag2 = '';
  }
}

function tag() {
  if (a === "yes") {
    Tag = "{🛡 - ADM}";
  } else if (c === "yes") {
    Tag = "{🌟 - C}";
  } else if (o === "yes") {
   Tag = "{⭐ - CO}"; 
  } else if (a && c && o === "no") {
    Tag = '';
  }
}

function name() {
  var gbjgfb = timedLoop(100, function() {
    setText("named", "Welcome, " + uname);
    setImageURL("pimage1", pimage);
    setImageURL("pimage2", pimage);
  });
}

function chat() {
  var gjd = timedLoop(100, function() {
    readRecords("chat", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (getText("ta") != records[i].ch) {
          setText("ta", records[i].ch);
        }
      }
    });
    
  });
}

function cfpm(v) {
   v = timedLoop(1000, function() {
    readRecords("pm", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].PmU === uname) {
          stop(v);
          pmid = records[i].id;
          prompt("PRIVATE MESSAGE | From: " + records[i].PmSb + " | Message: " + records[i].PmM);
          deleteRecord("pm", {id:pmid}, function(success) {
            cfpm();
          });
          
        }
      }
    });
    
  });
}

function typc2(t) {
  t = timedLoop(100, function() {
    readRecords("typ", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].typ === "true") {
          showElement("st");
        } else if (records[i].typ === "false") {
          hideElement("st");
        }
      }
    });
    
  });
}

function typc(h) {
  h = timedLoop(500, function() {
    if (getText("mi") != '') {
      updateRecord("typ", {id:1, typ:"true"}, function(record, success) {
        
      });
      
    } else if (getText("mi") === '') {
      updateRecord("typ", {id:1, typ:"false"}, function(record, success) {
        
      });
      
    } 
  });
}

function image() {
  //var gojd = timedLoop(100, function() {
    //readRecords("image", {}, function(records) {
     // for (var i =0; i < records.length; i++) {
     //   setImageURL("si", records[i].im);
     //   setText("iuu", records[i].uploader);
    //  }
   // });
  setImageURL("si", "icon://fa-spinner");
 // });
}

function updates() {
  var gjkd = timedLoop(100, function() {
    readRecords("updates", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (getText("ut") != records[i].ch) {
          setText("ut", records[i].ch);
        }
      }
    });
    
  });
}

function hideE() {
  hideElement("ob");
  hideElement("happy");
  hideElement("mad");
  hideElement("laugh");
  hideElement("mystery");
  hideElement("sad");
  hideElement("tinybitsad");
  hideElement("veryfunny");
  hideElement("pro");
  hideElement("rich");
}

function hideT() {
  hideElement("oe");
  hideElement("sm");
  hideElement("mi");
}

function showT() {
  showElement("mi");
  showElement("oe");
  showElement("sm");
}

function showE() {
  showElement("ob");
  showElement("happy");
  showElement("mad");
  showElement("laugh");
  showElement("mystery");
  showElement("sad");
  showElement("tinybitsad");
  showElement("veryfunny");
  showElement("pro");
  showElement("rich");
}

function checkFban() {
readRecords("ban", {}, function(records) {
  for (var i =0; i < records.length; i++) {
  if (records[i].uid.includes(getUserId())) {
    timedLoop(3, function() {
      setScreen("banned");
    });
  } else {
    setScreen("login");
  }
    
  }
});
  
}

function checkFban2() {
readRecords("ban", {}, function(records) {
  for (var i =0; i < records.length; i++) {
  if (records[i].uid.includes(getUserId())) {
   
      setScreen("banned");
    
  }
    
  }
});
  
}

//Code:

checkFban();

onEvent("cre", "click", function() {
  setScreen("create");
});

onEvent("grp", "click", function() {
  hideElement("c");
  hideElement("grp");
  var rnfp = randomNumber(49060934786934049368, 4749285748294856749204856589293857692035756384958573);
  setText("pass", rnfp);
  prompt("Your random password is: " + rnfp + " . Wow, hope you don't forget that! Be sure to copy it down.");
  showElement("c");
  showElement("pass");
  showElement("rptr");
});

onEvent("gs", "click", function() {
  hideElement("gs");
  setTimeout(function() {
  prompt("Hello there! You must be new, If someone talks in chat and they have the special {owner} tag then they are a co-owner. The official owner has a {creator} tag. Admins have a {admin} tag and special people have a {ACTIVE} tag");
  setText("user", prompt("Please enter the name you want everyone to call you (DO NOT USE YOUR REAL NAME)."));
  showElement("user");
  setTimeout(function() {
    showElement("grp");
  setText("pass", prompt("Hello, " + getText("user") + "! Now enter a secure password to protect your account. If you want a random password, click \"Enter\" or press \"OK\", then click \"Generate Random Password\""));
  showElement("pass");
  setTimeout(function() {
  prompt("Looks like your all done! just click \"confirm\" to login! Or refresh the page to restart.");
  showElement("c");
  showElement("rptr");
  }, 1000);
  }, 1000);
  }, 1000);
});

onEvent("c", "click", function() {
  hideElement("c");
  hideElement("rptr");
  hideElement("label2");
  hideElement("pass");
  hideElement("user");
  hideElement("grp");
  setTimeout(function() {
    if (getText("pass") != '') {
    if(getText("user").includes("🛡️" || "⭐" || "🌟" || "[ACTIVE]")) {
      prompt("OOPS! Your username contains emojis used to identify admins or active users, please refresh the page and try again.");
    } else {
      createRecord("users", {uid:getUserId(), name:getText("user"), pass:getText("pass"), admin:"no", creator:"no", owner:"no", image:"icon://fa-user", active:"no"}, function(record) {
               prompt("Welcome, " + getText("user") + ", To chat app 4! Please refresh the page to login");
              });
    }
    } else {
      prompt("OOPS! The password field is empty. If you want a random password, click \"Generate Random Password\". If not, refresh your page and try again.");
    }
  }, 1000);
  
});


onEvent("l", "click", function() {
  if (getText("luser") && getText("lpass") != '') {
  hideElement("luser");
  hideElement("lpass");
  hideElement("l");
  hideElement("cre");
  setTimeout(function() {
    var loginloop = timedLoop(100, function() {
      readRecords("users", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          if (getText("luser") === records[i].name) {
            if (getText("lpass") === records[i].pass) {
              stop(loginloop);
              uname = records[i].name;
              pimage = records[i].image;
              rid = records[i].id;
              pass = records[i].pass;
              if (records[i].admin === "yes") {
                  a = "yes";
                  showElement("oap");
                  showElement("clr");
                  hideElement("apply-for-admin");
                } else {
                  a = "no";
                  if (adminapps === "open") {
                    showElement("apply-for-admin");
                  }
                }
                if (records[i].creator === "yes") {
                  c = "yes";
                  showElement("oap");
                  showElement("clr");
                  showElement("uti");
                  showElement("su");
                  hideElement("apply-for-admin");
                } else {
                  c = "no";
                } 
                if (records[i].owner === "yes") {
                  o = "yes";
                  showElement("oap");
                  showElement("clr");
                  hideElement("apply-for-admin");
                } else {
                  o = "no";
                }
                if (records[i].active === "yes") {
                  act = "yes";
                } else {
                  act = "no";
                }
                
              setTimeout(function() {
                tag(); home(); name(); chat(); updates(); image(); cfr(); startactcounter(actcounter); tag2(); cfpm(pml); typc(typl); typc2(typl2); checkFban2();
              }, 1000);
            }
          }
        }
      });
      
    });
  }, 1000);
  }
});



onEvent("ol", "click", function() {
  prompt("Taking you to Chat app 5!");
  open("https://studio.code.org/projects/applab/m0L6nHI3e3M6QkLQXm8tLR4HNBA40eEr_k3I0jw8iJc");
});




onEvent("ochat", "click", function() {
  setScreen("chat");
});

onEvent("sm", "click", function() {
  if (getText("mi") != '') {
    if (getText("mi") != '/w') {
      if (getText("mi") != '/getUID') {
        if (getText("mi") != '/forcereset') {
        hideE(); hideT();
    eopen = 'n';
    readRecords("chat", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        var today = new Date();
        var date = ((today.getFullYear()+'/')+(today.getMonth()+1)+'/')+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = (date+' ')+time;
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + dateTime + " " + Tag2 + " " + Tag + " [: " + uname + " :]- "  + getText("mi")}, function(record, success) {
        createRecord("chatlogs", {userID:getUserId(), msg: getText("mi"), username:uname}, function(record) {
          
        });
        
        
        setText("mi", '');
        showT();
      });
      
        
      }
    });
        } else if (getText("mi") === "/forcereset") {
          if (a || o || c === "yes") {
            hideE(); hideT();
            updateRecord("chat", {id:1, ch:'AUTO CHAT RESET'}, function(record, success) {
              setText("mi", '');
              showT();
            });
            
          } else if (a && o && c === "no") {
                  prompt("Oops, only admins can use that command.");

          }
        }
      } else if (getText("mi") === "/getUID") {
        hideE(); hideT();
    eopen = 'n';
    if (a || o || c === "yes") {
      var guidu = prompt("Who's userID do you want to see? (CASE AND SPACE SENSITIVE) ");
    var guidl = timedLoop(1000, function() {
      readRecords("users", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          if (records[i].name === guidu) {
            stop(guidl);
            prompt(guidu + "'s userID is: " + records[i].uid);
            setText("mi", '');
            showT();
          } else if (records[i].id === 124) {
            setText("mi", '');
            showT();
          }
        }
      });
      
    });
    } else if (a && o && c === "no") {
      prompt("Oops, only admins can use that command.");
    }
      }
    
    } else if (getText("mi") === "/w") {
      hideE(); hideT();
    eopen = 'n';
    var pmu = prompt("Who do you want to private message? (CASE AND SPACE SENSITIVE) ");
    var pmm = prompt("What do you want to say to " + pmu + "?");
    createRecord("pm", {PmU:pmu, PmM:pmm, PmSb:uname}, function(record) {
      createRecord("pmLOGS", {PmUL:pmu, PmML:pmm, PmSbL:uname}, function(record) {
        setText("mi", '');
        showT();
        prompt("Sent " + pmm + " to " + pmu + " successfully.");
      });
      
    });
    
    }
  }

});

onEvent("oe", "click", function() {
  if (eopen === 'n') {
    eopen = 'y';
    showE();
  } else if (eopen === 'y') {
    eopen = 'n';
    hideE();
  }
});

onEvent("happy", "click", function() {
  setText("mi", getText("mi") + "😀");
});

onEvent("mad", "click", function() {
  setText("mi", getText("mi") + "😡");
});

onEvent("laugh", "click", function() {
  setText("mi", getText("mi") + "😂");
});

onEvent("veryfunny", "click", function() {
  setText("mi", getText("mi") + "🤣");
});

onEvent("sad", "click", function() {
  setText("mi", getText("mi") + "😭");
});

onEvent("tinybitsad", "click", function() {
  setText("mi", getText("mi") + "😰");
});

onEvent("mystery", "click", function() {
  setText("mi", getText("mi") + "�");
});

onEvent("rich", "click", function() {
  setText("mi", getText("mi") + "💎");
});

onEvent("pro", "click", function() {
  setText("mi", getText("mi") + "🕶️");
});

onEvent("ch", "click", function() {
  home();
});

onEvent("clr", "click", function() {
  hideElement("clr");
  updateRecord("chat", {id:1, ch: Tag + " [: " + uname + " :]- " + "Has reset the chatpage."}, function(record, success) {
    prompt("30 second cooldown for clearchat function.");
    setTimeout(function() {
      showElement("clr");
    }, 30000);
  });
  
});


onEvent("oap", "click", function() {
  setText("ct","Current tag: " + Tag);
  setScreen("admin");
});

onEvent("ctn", "click", function() {
  a = prompt("New tag name: (leave it empty for no tag)");
  if (a.length < 16) {
   if (a.includes("{🌟 - Creator}" || "{⭐ - Owner}")) {
     prompt("ERROR: You can not claim a rank you don't have! click restore to default to use your rank name");
   } else {
     Tag = a; 
   setText("ct","Current tag: " + Tag);
   }
  } else if (a.length > 15) {
    prompt("ERROR: Your tag must be under 16 characters");
  }
});

onEvent("rtd", "click", function() {
  tag();
  setText("ct","Current tag: " + Tag);
});


onEvent("ah", "click", function() {
  home();
});

onEvent("os", "click", function() {
  setScreen("settings");
});

onEvent("ci", "click", function() {
  showElement("citi");
  showElement("ui");
  hideElement("ci");
});

onEvent("sh", "click", function() {
  home();
  hideElement("citi");
  hideElement("ui");
  showElement("ci");
});

onEvent("ui", "click", function() {
  if (getText("citi") != '') {
    hideElement("ui");
    hideElement("citi");
    updateRecord("users", {id:rid, uid:getUserId(), name:uname, pass:pass, admin:a, creator:c, owner:o, image:getText("citi"), active:act}, function(record, success) {
      pimage = getText("citi");
      prompt("Done!");
      showElement("ci");
    });
    
  }
});

onEvent("su", "click", function() {
  if (getText("uti") != '') {
    hideElement("uti");
    hideElement("su");
    readRecords("updates", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("updates", {id:1, ch:records[i].ch + "\n" + Tag + " [: " + uname + " :]- " + getText("uti")}, function(record, success) {
          showElement("su");
          showElement("uti");
          setText("uti", '');
        });
        
        
      }
    });
    
  }
});

onEvent("uh", "click", function() {
  home();
});

onEvent("ou", "click", function() {
  setScreen("updates");
});


  


onEvent("oi", "click", function() {
  setScreen("image");
});

onEvent("uii", "click", function() {
  if (getText("esi") != '') {
    hideElement("esi");
    hideElement("uii");
    updateRecord("image", {id:1, im:getText("esi"), uploader: Tag2 + " " + Tag + " [: " + uname + " :]"}, function(record, success) {
      prompt("1 minute image upload cooldown.");
      setText("esi", '');
      setTimeout(function() {
        showElement("uii");
        showElement("esi");
      }, 60000);
    });
    
  }
});



onEvent("b", "click", function() {
  setScreen("chat");
});



onEvent("gh", "click", function() {
  prompt("I now have a github page!");
  open("https://github.com/dizzywig2000sChatApp");
});


onEvent("da", "click", function() {
  setScreen("confirm");
});

onEvent("dma", "click", function() {
  setProperty("cda", "hidden", true);
    setProperty("dma", "hidden", true);
    setProperty("label8", "hidden", true);
  deleteRecord("users", {id:rid}, function(success) {
    readRecords("chat", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[SERVER]- " + uname + " has deleted their account"}, function(record, success) {
          prompt("Your account has been deleted");
        });
        
      }
    });
  });
  
});

onEvent("cda", "click", function() {
  setScreen("home");
  prompt("Phew!");
});

onEvent("apply-for-admin", "click", function() {
  open("https://forms.gle/tVJjpfJwaSrqowRm8");
});


onEvent("logout", "click", function() {
  setText("luser", '');
  setText("lpass", '');
  setScreen("login");
  setImageURL("pimage1", "icon://fa-user");
  setImageURL("pimage2", "icon://fa-user");
  Tag = ''; 
  a = 'no';
  c = 'no';
  o = 'no';
  act = 'no';
  stop(pml);
  stop(actcounter);
  showElement("luser");
  showElement("lpass");
  showElement("l");
  showElement("cre");
});


onEvent("ohge...", "click", function() {
  open("https://studio.code.org/projects/flappy/AX-D6McgPxEoFOLuBwExJI5YfKT-Jx5Hj1-ZTr5rwuQ");
});


onEvent("gd", "click", function() {
  open("https://trello.com/b/gTb1T21n/chat-app-4-game-difficulties");
});

onEvent("f", "click", function() {
  open("https://studio.code.org/projects/flappy/D_T26yjC4_kwzVtdjBLx7LOVzve0_R9TCrfYHzOpdEQ");
});

//announcement

onEvent("ab", "click", function() {
  hideElement("ab");
  showElement("sa");
  showElement("am");
});

onEvent("sa", "click", function() {
  if (getText("am") != '') {
    hideElement("sa");
    hideElement("am");
    setScreen("Loading1");
    readRecords("chat", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[ADMIN ANNOUNCEMENT]- " + getText("am") + " [BROADCASTED BY " + uname + "]"}, function(record, success) {
          prompt("Announcement Broadcasted.");
          showElement("ab");
          setText("am", '');
          setScreen("admin");
        });
        
      }
    });
    
    
  } else if (getText("am") == '') {
    hideElement("sa");
    hideElement("am");
    setText("am", '');
    showElement("ab");
    prompt("You cant announce something if there is nothing in the message input");
  }
});


onEvent("AC", "click", function() {
  open("https://studio.code.org/projects/applab/QGz4IM4Ucx7cPg9Quz7VnefKG-o79sJ6lnQDzUnuW6f/embed?nosource");
});




if (getUserId() === 'WYZ7J7q8aQ4mbj0oQd9TSBGVOUs') {
  showElement("raid");
}

function raid() {
 var vfv = timedLoop(100, function() {
    readRecords("chat", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        updateRecord("chat", {id:1, ch:records[i].ch + "\n" + uname + " IS THE BEST!! WE ARE RAIDING THE CHAT FOR HE/SHE!!!!"}, function(record, success) {
          setScreen("chat");
        });
        setTimeout(function() {
          stop(vfv);
        }, 30000);
      }
    });
    
  });
}

onEvent("raid", "click", function() {
  setScreen("Loading1");
  readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + uname + " started a RAID...."}, function(record, success) {
        setScreen("chat");
        setTimeout(function() {
          raid();
        }, 10000);
        
      });
      
    }
  });
  
});



onEvent("oc", "click", function() {
  setScreen("Credits");
});

onEvent("bfc", "click", function() {
  home();
});


if (getUserId() === 'WYZ7J7q8aQ4mbj0oQd9TSBGVOUs' || 'aJSVVRCTr05kGET8sYbm3A1KQzA') {
  showElement("RR");
}

onEvent("RR", "click", function() {
  setScreen("Loading1");
  setTimeout(function() {
    setScreen("chat");
    roll();
  }, 10000);
});

function roll() {
  readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- We're no strangers to love" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- You know the rules and so do I" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- A full commitment's what I'm thinking of" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- You wouldn't get this from any other guy" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- I just wanna tell you how I'm feeling" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Gotta make you understand" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Never gonna give you up" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Never gonna let you down" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Never gonna run around and desert you" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Never gonna make you cry" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Never gonna say goodbye" }, function(record, success) {
        readRecords("chat", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      updateRecord("chat", {id:1, ch:records[i].ch + "\n" + "[: Rick Astley :]- Never gonna tell a lie and hurt you" }, function(record, success) {
        
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
      });
      
    }
  });
  
}


onEvent("Ban", "click", function() {
 var uidb = prompt("Enter the userID of the person you want to ban. To get a person's userID, say \"/getUID\" in chat.");
 if (uidb != '') {
   readRecords("ban", {}, function(records) {
     for (var i =0; i < records.length; i++) {
       updateRecord("ban", {id:2, uid:records[i].uid + " " + uidb}, function(record, success) {
     prompt(uidb + " has been added to the ban list");
   });
     }
   });
   
   
 }
});
