//Code Start

//Var:

var UID = "";
var Uname = "";
var Pass = "";
var Granted = false;
var PImage = "";
var AccountID = 0;
var RecordID = 0;
var Description = "";
var Name = "";
var Tag = "";

var friend1 = "";
var friend2 = "";
var friend3 = "";
var friend4 = "";

var pfriend1 = "";
var pfriend2 = "";
var pfriend3 = "";
var pfriend4 = "";
var pname = "";
var puid = "";
var ppass = "";
var pPImage = "";
var pAccountID = "";
var pRecordID = "";
var pDesc = "";
var pDis = "";

//CHAT MODERATION LIST
var list = "fat";
//--

var found = false;
//Func:

function _Error(a,b) {
  setText("ErrorMsg", a + " | Error code #" + b);
  setScreen("ErrorScrn");
}

function load(a,b) {
  setText("LoadingTxt", getText("LoadingTxt") + "\n" + "Scanning for account");
  b = timedLoop(20, function() {
    readRecords("Users", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].UserId === UID) {
          stopTimedLoop(b);
          setText("LoadingTxt", getText("LoadingTxt") + "\n" + "Account Found" + "\n" + "Loading Username and Passcode");
          Uname = records[i].Username;
          Name = records[i].Display;
          Pass = records[i].Code;
          PImage = records[i].ProfileImage;
          AccountID = records[i].AccountId;
          RecordID = records[i].id;
          Description = records[i].Desc;
          friend1 = records[i].F1;
          friend2 = records[i].F2;
          friend3 = records[i].F3;
          friend4 = records[i].F4;
          if (records[i].Activated === true) {
            Granted = true;
          } else {
            Granted = false;
            _Error("Forbidden - Your account has been deactivated. Please contact an administrator for more information.", 1);
          }
          if (Granted === true) {
            setText("Name", "Hello " + Uname);
            setProperty("HomeImg", "image", PImage);
            setProperty("ProfileImage", "image", PImage);
            setText("ProfileDesc", Description);
            setText("ProfileName", Name + " (@" + Uname + ")");
            hideElement("AddFriend");
            hideElement("ProfileReport");
            setScreen("Home");
          }
          setText("LoadingTxt", getText("LoadingTxt") + "\n" + "Username and Passcode Loaded");
        } else if (records[i].UserId === "end") {
          stopTimedLoop(b);
          setText("LoadingTxt", "Loading UID" + "\n" + "UID Loaded" + "\n" + "Scanning for account" + "\n" + "Please sign up");
          showElement("GoToSignUp");
        }
      }
    });
  });
}

//Load:
setText("LoadingTxt", "Loading UID");
UID = getUserId();
setText("LoadingTxt", getText("LoadingTxt") + "\n" + "UID Loaded");
load(UID);

//Sign Up:
onEvent("GoToSignUp", "click", function() {
  setScreen("SignUp");
});

onEvent("SignUpBtn", "click", function() {
  if (getText("SignUpBtn") === "Check") {
    if (getText("SUUsername") != "") {
      if (getText("SUUsername").includes(" ")) {
        setProperty("SUUsername", "background-color", rgb(255,0,0));
        setText("SUError", "Username cannot contain spaces.");
        setText("SignUpBtn", "Check");
      } else {
        
        if (getText("SUUsername").length > 3) {
          if (getText("SUUsername").length < 14) {
            setProperty("SUUsername", "background-color", rgb(0,255,0));
            setText("SUError", "");
            
            
            if (getText("SUPassword") != "") {
      if (getText("SUPassword").includes(" ")) {
        setProperty("SUPassword", "background-color", rgb(255,0,0));
        setText("SUError", "Password cannot contain spaces.");
        setText("SignUpBtn", "Check");
      } else {
        
        if (getText("SUPassword").length > 7) {
          if (getText("SUPassword").length < 21) {
            setProperty("SUPassword", "background-color", rgb(0,255,0));
            setText("SUError", "");
            
            
            
            if (getText("SUDisplay") != "") {
      //if (getText("SUDisplay").includes(" ")) {
        //setProperty("SUDisplay", "background-color", rgb(255,0,0));
        //setText("SUError", "Display name cannot contain spaces.");
      //} else {
        
        if (getText("SUDisplay").length > 3) {
          if (getText("SUDisplay").length < 14) {
            setProperty("SUDisplay", "background-color", rgb(0,255,0));
            setText("SUError", "");
            
            
            setText("SignUpBtn", "Sign Up");
            
            
          } else {
            setProperty("SUDisplay", "background-color", rgb(255,0,0));
            setText("SUError", "Your display name cannot be more than 13 characters.");
            setText("SignUpBtn", "Check");
          }
        } else {
          setProperty("SUDisplay", "background-color", rgb(255,0,0));
          setText("SUError", "Your display name must be more than 3 characters.");
          setText("SignUpBtn", "Check");
        }
        
      //}
    } else {
      setProperty("SUDisplay", "background-color", rgb(255,0,0));
      setText("SUError", "Your display name cannot be empty.");
      setText("SignUpBtn", "Check");
    }
            
            
            
            if (getText("SUPassword2") === getText("SUPassword")) {
              setProperty("SUPassword2", "background-color", rgb(0,255,0));
              setText("SUError", "");
              
            } else {
              setProperty("SUPassword2", "background-color", rgb(255,0,0));
              setText("SUError", "Passwords do not match.");
              setText("SignUpBtn", "Check");
            }
            
          } else {
            setProperty("SUPassword", "background-color", rgb(255,0,0));
            setText("SUError", "Your password cannot be more than 20 characters.");
            setText("SignUpBtn", "Check");
          }
        } else {
          setProperty("SUPassword", "background-color", rgb(255,0,0));
          setText("SUError", "Your password must be at least 8 characters.");
          setText("SignUpBtn", "Check");
        }
        
      }
    } else {
      setProperty("SUPassword", "background-color", rgb(255,0,0));
      setText("SUError", "Your password cannot be empty.");
      setText("SignUpBtn", "Check");
    }
            
            
          } else {
            setProperty("SUUsername", "background-color", rgb(255,0,0));
            setText("SUError", "Your username cannot be more than 13 characters.");
            setText("SignUpBtn", "Check");
          }
        } else {
          setProperty("SUUsername", "background-color", rgb(255,0,0));
          setText("SUError", "Your username must be more than 3 characters.");
          setText("SignUpBtn", "Check");
        }
        
      }
    } else {
      setProperty("SUUsername", "background-color", rgb(255,0,0));
      setText("SUError", "Your username cannot be empty.");
      setText("SignUpBtn", "Check");
    }
  } else {
    if (getText("SignUpBtn") === "Sign Up") {
      if (getText("SUUsername") != "") {
      if (getText("SUUsername").includes(" ")) {
        setProperty("SUUsername", "background-color", rgb(255,0,0));
        setText("SUError", "Username cannot contain spaces.");
        setText("SignUpBtn", "Check");
      } else {
        
        if (getText("SUUsername").length > 3) {
          if (getText("SUUsername").length < 14) {
            setProperty("SUUsername", "background-color", rgb(0,255,0));
            setText("SUError", "");
            
            
            if (getText("SUPassword") != "") {
      if (getText("SUPassword").includes(" ")) {
        setProperty("SUPassword", "background-color", rgb(255,0,0));
        setText("SUError", "Password cannot contain spaces.");
        setText("SignUpBtn", "Check");
      } else {
        
        if (getText("SUPassword").length > 7) {
          if (getText("SUPassword").length < 21) {
            setProperty("SUPassword", "background-color", rgb(0,255,0));
            setText("SUError", "");
            
            
            
            if (getText("SUDisplay") != "") {
      //if (getText("SUDisplay").includes(" ")) {
        //setProperty("SUDisplay", "background-color", rgb(255,0,0));
        //setText("SUError", "Display name cannot contain spaces.");
      //} else {
        
        if (getText("SUDisplay").length > 3) {
          if (getText("SUDisplay").length < 14) {
            setProperty("SUDisplay", "background-color", rgb(0,255,0));
            setText("SUError", "");
            
            
            hideElement("GoToSignUp");
            setText("LoadingTxt", "");
            setScreen("LoadingStart");
            setText("LoadingTxt", "Adding record");
            createRecord("Users", {Username: getText("SUUsername"), Code: getText("SUPassword"), ProfileImage: "https://lh3.googleusercontent.com/proxy/smpM_jskOsmesWl1wwqq0Q_EpK2E5xOGACYaZg5w---Q8WgtRkVSnSYlxpgWFB-2JNIl8eOdqUmXAJrpflI1Diap", Desc: "I am a user!", Activated: true, AccountId: randomNumber(1, 999999999), UserId: UID, Display: getText("SUDisplay"), Admin: false, F1: "", F2: "", F3: "", F4: ""}, function(record) {
              setText("LoadingTxt", "\n" + "Created Account" + "\n" + "Refresh to sign in");
            });
            
            
            
          } else {
            setProperty("SUDisplay", "background-color", rgb(255,0,0));
            setText("SUError", "Your display name cannot be more than 13 characters.");
            setText("SignUpBtn", "Check");
          }
        } else {
          setProperty("SUDisplay", "background-color", rgb(255,0,0));
          setText("SUError", "Your display name must be more than 3 characters.");
          setText("SignUpBtn", "Check");
        }
        
      //}
    } else {
      setProperty("SUDisplay", "background-color", rgb(255,0,0));
      setText("SUError", "Your display name cannot be empty.");
      setText("SignUpBtn", "Check");
    }
            
            
            
            if (getText("SUPassword2") === getText("SUPassword")) {
              setProperty("SUPassword2", "background-color", rgb(0,255,0));
              setText("SUError", "");
              
            } else {
              setProperty("SUPassword2", "background-color", rgb(255,0,0));
              setText("SUError", "Passwords do not match.");
              setText("SignUpBtn", "Check");
            }
            
          } else {
            setProperty("SUPassword", "background-color", rgb(255,0,0));
            setText("SUError", "Your password cannot be more than 20 characters.");
            setText("SignUpBtn", "Check");
          }
        } else {
          setProperty("SUPassword", "background-color", rgb(255,0,0));
          setText("SUError", "Your password must be at least 8 characters.");
          setText("SignUpBtn", "Check");
        }
        
      }
    } else {
      setProperty("SUPassword", "background-color", rgb(255,0,0));
      setText("SUError", "Your password cannot be empty.");
      setText("SignUpBtn", "Check");
    }
            
            
          } else {
            setProperty("SUUsername", "background-color", rgb(255,0,0));
            setText("SUError", "Your username cannot be more than 13 characters.");
            setText("SignUpBtn", "Check");
          }
        } else {
          setProperty("SUUsername", "background-color", rgb(255,0,0));
          setText("SUError", "Your username must be more than 3 characters.");
          setText("SignUpBtn", "Check");
        }
        
      }
    } else {
      setProperty("SUUsername", "background-color", rgb(255,0,0));
      setText("SUError", "Your username cannot be empty.");
      setText("SignUpBtn", "Check");
    }
    }
  }
});

//Profile:

onEvent("GoToProfile", "click", function() {
  setScreen("Profile");
});

onEvent("BackFromProfile", "click", function() {
  setScreen("Home");
});

onEvent("ProfileSearchStart", "click", function() {
  if (getText("ProfileSearch") != "") {
    var bgjdk = timedLoop(20, function() {
      readRecords("Users", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          if (records[i].Display == getText("ProfileSearch")) {
            found = true;
            stopTimedLoop(bgjdk);
            pDis = records[i].Display;
            pname = records[i].Username;
            ppass = records[i].Code;
            pAccountID = records[i].AccountId;
            pRecordID = records[i].id;
            pPImage = records[i].ProfileImage;
            pDesc = records[i].Desc;
            puid = records[i].UserId;
            pfriend1 = records[i].f1;
            pfriend2 = records[i].f2;
            pfriend3 = records[i].f3;
            pfriend4 = records[i].f4;
            
            setText("ProfileName", pDis + " (@" + pname + ")");
            setProperty("ProfileImage", "image", pPImage);
            setText("ProfileDesc", pDesc);
            if (pname != Uname) {
              showElement("ProfileReport");
              if (pfriend1 === Uname) {
                hideElement("AddFriend");
              } else {
                if (pfriend2 === Uname) {
                hideElement("AddFriend");
              } else {
                if (pfriend3 === Uname) {
                hideElement("AddFriend");
              } else {
                if (pfriend4 === Uname) {
                hideElement("AddFriend");
              } else {
                showElement("AddFriend");
              }
              }
              }
              }
            } else {
              hideElement("AddFriend");
              hideElement("ProfileReport");
            }
            setScreen("Profile");
          }
        }
      });
    });
  }
});

//Chat:

onEvent("GoToChat", "click", function() {
  setScreen("Chat");
  console.log(list);
});

onEvent("ToHomeFromChat", "click", function() {
  setScreen("Home");
});

onRecordEvent("Chat", function(record, eventType) {
  if (eventType === 'update') {
    setText("ChatArea", record.Chat);
  } 
});

onEvent("Send", "click", function() {
  if (getText("ChatInput") != "") {
    hideElement("ChatInput");
    hideElement("Send");
    hideElement("ToHomeFromChat");
    hideElement("SendAnnouncement");
    hideElement("ShutdownChat");
    hideElement("ClearChat");
    
    if (getText("ChatInput").indexOf(list)) {
      readRecords("Chat", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          updateRecord("Chat", {id:1, Chat:records[i].Chat + "\n" + Tag + "{ " + Uname + " }: " + "< Moderated >"}, function(record, success) {
            setText("ChatInput", "");
            showElement("ChatInput");
            showElement("Send");
            showElement("ToHomeFromChat");
          });
        }
      });
    } else {
      readRecords("Chat", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          updateRecord("Chat", {id:1, Chat:records[i].Chat + "\n" + Tag + "{ " + Uname + " }: " + getText("ChatInput")}, function(record, success) {
            setText("ChatInput", "");
            showElement("ChatInput");
            showElement("Send");
            showElement("ToHomeFromChat");
          });
        }
      });
    }
  }
});
