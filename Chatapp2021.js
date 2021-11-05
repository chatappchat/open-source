//Made by dizzywig2000, this will be the last Chatapp creation until 2022.
//For any support, join our discord server at: https://discord.gg/gR3snx23pg
//You can also contact the development team at: ChatroomsOfficialEmail@gmail.com

//Tip: Join the discord server to receive developer codes that you can use to give yourself
//access to special chatrooms and even get special roles within the discord server


//6:48 PM, 5/7/2021 - Development starts
//5:23 PM, 7/18/2021 - Development ends

setScreen("LoadingScrn");

//DON'T TOUCH THESE VARS!

var nil = "nil";

var niln = 0;

var D2000ALB;

var GlobalVersion = 1.92;

var PublicChatroomsList = "(Start of list)"; 

var MusicPlaying = false;

var MusicNamePlaying = "None";

//Direct Message Vars:

var DM1InUse = false;

var DM2InUse = false;

var DM1Message;

var DM2Message;

var DM1From;

var DM2From;

var DM1ID;

var DM2ID;

//Chatroom Vars:

var In = false;

var PCCTAG = "";


var PCID;

var PCrid;

var PCO;

var PCCS;

var PCTD;

var PCBU;

var PCN;

var PCAC;

var PCP;

var PCC;

//Vars:

var confirmP = 0;

var ChatNotify = true;

var InPublicChat = false;

var devTroll = "Disabled";

var RNG_DT;

var CurrentAppVersion;

var User;

var RecordID;

var Admin;

var UserID;

var Dev;

var Sys;

var Tag = "";

var Strikes;

var Language;

var Pass;

//App Version:

readRecords("Version", {}, function(records) {
  for (var i =0; i < records.length; i++) {
    CurrentAppVersion = records[i].Version;
  }
});


//Functions:

onRecordEvent("PublicChatroom", function(record, eventType) {
  if (ChatNotify === true) {
    if (InPublicChat === true) {
     playSound("sound://category_alerts/airy_bell_notification.mp3");
    }
  }
});



function CheckBanlist(Loop) {
  Loop = timedLoop(10, function() {
    readRecords("TerminatedUsers", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (getUserId() === records[i].UserID) {
          setScreen("Banned");
          stopTimedLoop(Loop);
        } else if (records[i].UserID === "end") {
          stopTimedLoop(Loop);
          setScreen("LoginToCAP");
          CheckForUpdates();
        }
      }
    });
    
  });
}

function TagGenerator() {
  console.log("Generating tag and loading permissions..");
  setText("LogArea", getText("LogArea") + "\n" + "\n" + "Generating tag and loading permissions..");
  if (Dev === true) {
    showElement("ClearPrivate");
    showElement("ChatTrollToggle");
    showElement("ChatLockToggle");
    showElement("ClearPublicChat");
    Tag = "{Dev}";
    PCCTAG = "{Dev}";
  }
  if (Sys === true) {
    showElement("ClearPrivate");
    showElement("ClearPublicChat");
    showElement("ChatLockToggle");
    showElement("ChatTrollToggle");
    Tag = "{SYSTEM}";
    PCCTAG = "{SYSTEM}";
  }
  if (Admin === true) {
    showElement("ClearPrivate");
    showElement("ClearPublicChat");
    Tag = "{Admin}";
    PCCTAG = "{Admin}";
  }
  if (Admin && Dev === false) {
    if (Sys === false) {
     hideElement("ChatTrollToggle");
     Tag = "";
    }
  }
  console.log("Tag and permissions generated!");
  setText("LogArea", getText("LogArea") + "\n" + "\n" + "Tag and permissions generated!");
}

function PublicChat(a) {
  console.log("Public chat function loaded.");
  setText("LogArea", getText("LogArea") + "\n" + "\n" + "Public chat function loaded.");
  a = timedLoop(20, function() {
    readRecords("PublicChatroom", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        setText("PublicChatArea", records[i].ch);
      }
    });
    
  });
}

function CheckForUpdates(FVersion) {
  console.log("CFU function loaded.");
  setText("LogArea", getText("LogArea") + "\n" + "\n" + "CFU function loaded.");
  D2000ALB = "NMTARHEARHYIZOKJRBQUPFXPLWVSCHGD";
timedLoop(30000, function() {
    readRecords("Version", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      FVersion = records[i].Version;
      if (CurrentAppVersion != FVersion) {
        setScreen("Refresh");
      }
    }
  });
});
  
}

function PrivateChat(e) {
  e = timedLoop(20, function() {
    readRecords("Chatrooms", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].id === PCrid) {
          setText("PrivateChatroomChat", (records[i]).Chat);
        }
      }
    });
    
  });
}

function PublicChatroomsCodeList(Loop) {
  console.log("Loading public chatrooms list...");
  setText("LogArea", getText("LogArea") + "\n" + "\n" + "Loading public chatrooms list...");
  Loop = timedLoop(100, function() {
    readRecords("Chatrooms", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].Public === true) {
          if (records[i].TempDisabled === false) {
          if (records[i].Name != "fidfkbjhjfkgjbjkfjbvfkdk") {
            if (PublicChatroomsList.includes(records[i].Name)) {
              //nothing
            } else {
              PublicChatroomsList = PublicChatroomsList + "\n" + "\n" + "Chatroom name: " + records[i].Name + " - Chatroom password: " + records[i].AccessCode;
          setText("PublicChatrooms", PublicChatroomsList);
            }
          } else if (records[i].Name === "fidfkbjhjfkgjbjkfjbvfkdk") {
            stopTimedLoop(Loop);
            PublicChatroomsList = "";
            PublicChatroomsCodeList();
          }
        }
        } 
      }
    });
    
  });
}

function CDML(a) {
  a = timedLoop(1000, function() {
    CheckDM();
  });
}

function ChatMessaging(message) {
    if (getText("PCI") != '') {
    hideElement("PCI");
    hideElement("PTSB");
    if (message === ".exe") {
      if (Language === "English") {
        showElement("PCI");
        showElement("PTSB");
      var promptCommand = prompt("What command would you like to execute?");
      if (promptCommand == "DM") {
        var DMP = prompt("Who would you like to DM? (Space and Caps will apply)");
        var DMP2 = prompt("What would you like to send to " + DMP + "?");
        var DMP3 = prompt("Is this a NoReply message? Answer \"true\" or \"false\".");
        createRecord("DirectMessageQueue", {To:DMP, From:User, Message:DMP2, NoReply:DMP3}, function(record) {
          prompt("Successfully sent message to " + DMP);
          DMP = "";
          DMP2 = "";
          DMP3 = "";
          setText("PCI", "");
          showElement("PCI");
          showElement("PTSB");
        });
        
      } else if (promptCommand === "Admin") {
        if (Admin || Dev === true) {
          console.log("Command \"Admin\" executed. (ENG)");
          setText("LogArea", getText("LogArea") + "\n" + "\n" + "Command \"Admin\" executed. (ENG)");
          setScreen("Panel");
        } else {
          prompt("Only admins and devs can use admin commands.");
        }
      }
      } else if (Language === "Lap") {
        var promptCommandLap = prompt("Cznw tarhubbnqe wyre y rojarh wy arhharhtarhvwarh?");
        if (promptCommandLap == "EB") {
        var DMPL = prompt("Czy cuvre y rojarh wy EB? (Lpntarharh nqe Tarhnpl corr npprg)");
        var DMP2L = prompt("Cznw cuvre y rojarh wy larhqe wy " + DMPL + "?");
        var DMP3L = prompt("Ol wzol n QuXparhprg barhllniarh? Nqlcarhxp \"true\" uxp \"false\".");
        createRecord("DirectMessageQueue", {To:DMPL, From:User, Message:DMP2L, NoReply:DMP3L}, function(record) {
          prompt("Successfully sent message to " + DMPL);
          DMPL = "";
          DMP2L = "";
          DMP3L = "";
          setText("PCI", "");
          showElement("PCI");
          showElement("PTSB");
        });
       } else if (promptCommandLap === "Neboq") {
        if (Admin || Dev === true) {
          console.log("Command \"Admin\" executed. (LAP)");
          setText("LogArea", getText("LogArea") + "\n" + "\n" + "Command \"Admin\" executed. (LAP)");
          setScreen("Panel");
        } else {
          prompt("Uqrí neboql nqe earhsl tarhnq ylarh neboq tarhubbnqel.");
        }
      }
      }
    } else {
      updateRecord("PublicChatroom", {id:1, ch:getText("PublicChatArea") + "\n" + Tag + " << " + User + " >> - " + message}, function(record, success) {
      createRecord("Chatlogs", {SentBy:User, Message:getText("PCI"), Chatroom:"PublicChatroom"}, function(record) {
        setText("PCI", '');
        showElement("PCI");
        showElement("PTSB");
      });
      
    });
    }
  }
}

function CheckDM() {
  var DMLoop = timedLoop(10, function() {
    readRecords("DirectMessageQueue", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].To === User) {
          stopTimedLoop(DMLoop);
          if (DM1InUse === false) {
           if (records[i].Message != DM2Message) {
            DM1InUse = true;
            setText("DM1Message", records[i].Message);
            DM1Message = records[i].Message;
            DM1From = records[i].From;
            DM1ID = records[i].id;
            showElement("DM1");
            showElement("DM1Delete");
            showElement("DM1Message");
            showElement("DM1Report");
            if (records[i].NoReply != "true") {
              showElement("DM1Reply");
            }
           }
          } else if (DM1InUse === true) {
            if (DM2InUse === false) {
             if (records[i].Message != DM1Message) {
              DM2InUse === true;
              setText("DM2Message", records[i].Message);
              DM2Message === records[i].Message;
              DM2From = records[i].From;
              DM2ID = records[i].id;
              showElement("DM2");
              showElement("DM2Delete");
              showElement("DM2Message");
              showElement("DM2Report");
              if (records[i].NoReply != "true") {
              showElement("DM2Reply");
              }
             }
            }
          }
        }
      }
    });
    
  });
}

function GetVersion(G, GVersion) {
  readRecords("Version", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      GVersion = records[i].Version;
     setTimeout(function() {
      console.log("Current version: " + GVersion + " Global Version: " + G);
      if (GVersion != G) {
      console.log("Latest Update: V" + G + " has brought us a reporting system, private chatroom commands, updated chat (for private chatrooms), minor bug fixes including lag, more!");
      }
     }, 3000);
    }
  });
  
}

function AuthenticateDevCode(Input, Enabled, Loop, Rew) {
  if (Enabled === true) {
    Loop = timedLoop(10, function() {
      readRecords("Codes", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          if (records[i].Code === Input) {
            if (records[i].Usable === true) {
              Rew = records[i].CodeReward;
            if (records[i].ClaimedBy.includes(getUserId())) {
              stopTimedLoop(Loop);
              setText("DevCodeText2", "Oops!");
              setText("DevCodeText", "Sorry, you already used the developer code \"" + Input + "\"! If you didn't claim your prize, contact an admin in our discord server.");
              showElement("DevCodeText");
              showElement("DevCodeBackground");
              showElement("DevCodeText2");
              showElement("OkDevCode");
              console.log("Dev code \"" + Input + "\" was entered but already claimed.");
              setText("LogArea", getText("LogArea") + "\n" + "\n" + "Dev code \"" + Input + "\" was entered but already claimed.");
            } else {
              stopTimedLoop(Loop);
              updateRecord("Codes", {id:records[i].id, CodeID:records[i].CodeID, CodeNickname:records[i].CodeNickname, Code:records[i].Code, CodeReward:records[i].CodeReward, AddedBy:records[i].AddedBy, ClaimedBy:records[i].ClaimedBy + " | " + User + ": " + getUserId() + " END", Usable:records[i].Usable}, function(record, success) {
                setText("DevCodeText2", "Success!");
                setText("DevCodeText", "Successfully used code \"" + Input + "\"! Please go to the discord and contact an admin to claim \"" + Rew + "\"!");
                showElement("DevCodeText");
                showElement("DevCodeBackground");
                showElement("DevCodeText2");
                showElement("OkDevCode");
                console.log("Dev code \"" + Input + "\" was entered and claimed.");
                setText("LogArea", getText("LogArea") + "\n" + "\n" + "Dev code \"" + Input + "\" was entered and claimed.");
              });
              
            }
            } else {
              stopTimedLoop(Loop);
                setText("DevCodeText2", "Oops!");
                setText("DevCodeText", "Sorry, the code \"" + Input + "\" is not claimable at this time.");
                showElement("DevCodeText");
                showElement("DevCodeBackground");
                showElement("DevCodeText2");
                showElement("OkDevCode");
                console.log("Dev code \"" + Input + "\" was entered but is not usable.");
                setText("LogArea", getText("LogArea") + "\n" + "\n" + "Dev code \"" + Input + "\" was entered but is not usable.");
            }
          } else if (records[i].Code === "end") {
            stopTimedLoop(Loop);
            setText("DevCodeText2", "Oops!");
            setText("DevCodeText", "Sorry, the code \"" + Input + "\" is not valid.");
            showElement("DevCodeText");
            showElement("DevCodeBackground");
            showElement("DevCodeText2");
            showElement("OkDevCode");
            console.log("Dev code \"" + Input + "\" was entered but invalid.");
            setText("LogArea", getText("LogArea") + "\n" + "\n" + "Dev code \"" + Input + "\" was entered but invalid.");
          }
        }
      });
    });
  }
}

//Begin:

CheckBanlist();

//SignUp Code:

onEvent("OpenSignUp", "click", function() {
  setScreen("SignUpToCAP");
});

onEvent("BackToLogin", "click", function() {
  setScreen("LoginToCAP");
});

onEvent("SignUpBtn", "click", function() {
  if (getText("CAU_SignUp") != '') {
    if (getText("CAP_SignUp") != '') {
      if (getText("CAU_SignUp").length < 14) {
        if (getText("CAU_SignUp").includes(" " || "/" || ";" || '"' || ":" || "," || "<" || ">" || "." || "?" || "[" || "]" || "{" ||"}" || "-" || "_" || "=" || "+" || ")" || "(")) {
         prompt("Oops! Your username cannot contain the following:\" / ; : , < > . ? [ ] { } - = + _ ( )\". Please remove any of those symbols from your username before signing up to Chatapp. Thank you.");
      } else {
         if (getText("CAP_SignUp").includes((" " || "/") || ";" || '"' || ":" || "," || "<" || ">" || "." || "?" || "[" || "]" || "{" ||"}" || "-" || "_" || "=" || "+" || ")" || "(")) {
         prompt("Oops! Your password cannot contain the following:\" / ; : , < > . ? [ ] { } - = + _ ( )\". Please remove any of those symbols from your password before signing up to Chatapp. Thank you.");
      } else {
         setScreen("Rules_SU");
      }
      }
      } else {
        prompt("Oops! Your username cannot be more than 13 characters!");
      }
    }
  }
});

onEvent("ConfirmSignUp", "click", function() {
  createRecord("ChatappAccounts", {CUsername:getText("CAU_SignUp"), CPassword:getText("CAP_SignUp"), Administrator:false, Developer:false, PrimaryLanguage:"English", Strikes:0, UserID:getUserId(), System:false, CAUserID:randomNumber(1000, 90000000000000)}, function(record) {
        createRecord("DirectMessageQueue", {To:getText("CAU_SignUp"), From:"System", Message:"Hello " + getText("CAU_SignUp") + "! Welcome to ChatApp 2021! We all hope you enjoy your time while using my app. Have fun, from System", NoReply:"true"}, function(record) {
        prompt("Account created with name " + getText("CAU_SignUp") + ". Please enjoy your time here at Chatapp! Go to the help page to find our Discord server and developer email account.");
        setScreen("LoginToCAP");
        setText("CAP_SignUp", '');
        setText("CAU_SignUp", '');
        console.log("Created!");
        setText("LogArea", getText("LogArea") + "\n" + "\n" + "Account created!");
        });
        
      });
});




//Login code:

onEvent("LoginBtn", "click", function() {
      setScreen("LoadingScrn");
      console.log("Logging in...");
      setText("LogArea", getText("LogArea") + "\n" + "\n" + "Logging in...");
      var LoginLoop = timedLoop(10, function() {
        readRecords("ChatappAccounts", {}, function(records) {
          for (var i =0; i < records.length; i++) {
              if (records[i].UserID === getUserId()) {
                stopTimedLoop(LoginLoop);
                console.log("Found account! Logging into account...");
                setText("LogArea", getText("LogArea") + "\n" + "\n" + "Logging into account...");
                User = records[i].CUsername;
                RecordID = records[i].id;
                Admin = records[i].Administrator;
                Dev = records[i].Developer;
                Sys = records[i].System;
                Strikes = records[i].Strikes;
                Language = records[i].PrimaryLanguage;
                Pass = records[i].CPassword;
                UserID = records[i].UserID;
                console.log("Setting language..");
                setText("LogArea", getText("LogArea") + "\n" + "\n" + "Setting language..");
                setText("WelcomeBackUser", "Hello, " + User);
                if (Language === "Lap") {
                  setText("WelcomeBackUser", "Carhrtarhuba, " + User);
                  setText("label12", "Chatapp Tarhznwxpybl");
                  setText("label13", "Lglwarhb Nppl");
                  setText("label14", "Bylotarh");
                  setText("label15", "Earhsarhruparhxp Tarhuearhl");
                  setText("EDCCO", "Tarhuqyoxpb Earhs Tarhuearh");
                  setText("OpenPublicChat", "Pvmrotarh Tarhznwxpyb");
                  setText("JAC", "Kuoq N Tarhznwxpyb");
                  setText("label11", "Larhwwíqil");
                  setText("label16", "CNXPQÍQI: Wzol ntarhwouq TARHNQQUW mí vqeuq!");
                  setText("label20", "Oy y cnqw wy tarhxnqiarh guvxp ChatApp ylarhxpqnbarh, kuoq uvxp Discord larhxpsarhxp (Ríqj yuvqe oq \"Zarhrp\") Nqe uparhq n lvppuxpw wotarhjarhw.");
                  setText("CL", "Tarhznqiarh Rnqivniarh");
                  setText("DELETE", "Eíríwí Ntarhtarhuvqw");
                  setProperty("SystemAppsSelect", "options", ["Larhwwíqil", "Zarhrp", "Xpyrarhl", "Lwuxparh uy Pxpukarhtarhw"]);
                  setText("label19", "Lwuxparh");
                  setText("PublishAP", "Pvmrolz N Pxpukarhtarhw");
                  setText("label29", "Ypl! Ow nppínxpl wznw n qarhc sarhxplouq uy ChatApp znl marharhq xpírínlw czorarh y carhxpz oq npp! Prínlí xpíyxparhlz guvxp pniarh wy arhhpíxpíarhtarharh wzol mxpnqe qarhc vpenwarh");
                  setText("JoinPrivateChatroom", "Kuoq");
                  setText("ToCreate", "Tarhxpínwarh bg ucq");
                  setText("label23", "Pvmrotarh Tarhznwxpyb");
                  console.log("Language \"Lapasí\" selected! Final login stages approaching");
                  setText("LogArea", getText("LogArea") + "\n" + "\n" + "Language \"Lapasí\" selected! Final login stages approaching");
                }                
                if (Language === "English") {
                  setText("WelcomeBackUser", "Hello, " + User);
                  setText("label12", "Chatapp Chatrooms");
                  setText("label13", "System");
                  setText("label14", "Music");
                  setText("label15", "Developer Codes");
                  setText("EDCCO", "Confirm Dev Code");
                  setText("OpenPublicChat", "Public Chatroom");
                  setText("JAC", "Join A Chatroom");
                  setText("label11", "Settings");
                  setText("label16", "WARNING: This action CANNOT be undone!");
                  setText("label20", "If you want to change your Chatapp username or password, join our discord server (Link found in \"Help\") and open a support ticket.");
                  setText("CL", "Change Language");
                  setText("DELETE", "Delete Account");
                  setProperty("SystemAppsSelect", "options", ["Settings", "Help", "Rules", "ProjectStore"]);
                  setText("label19", "Project Store");
                  setText("PublishAP", "Publish A Project");
                  setText("label29", "Oops! It appears a new version of ChatApp has been released while you were in app! Please refresh your page to experience this brand new update");
                  setText("JoinPrivateChatroom", "Join");
                  setText("ToCreate", "Create my own");
                  setText("label23", "Public Chatroom");
                  console.log("Language \"English\" selected! Final login stages approaching");
                  setText("LogArea", getText("LogArea") + "\n" + "\n" + "Language \"English\" selected! Final login stages approaching");
                }
                
                if (Dev === true) {
                  showElement("ClearPrivate");
                  showElement("ClearPublicChat");
                  showElement("ChatLockToggle");
                  Tag = "{Dev}";
                  PCCTAG = "{Dev}";
                  console.log("This user is a developer!");
                  setText("LogArea", getText("LogArea") + "\n" + "\n" + "This user is a developer!");
                } else {
                  hideElement("ClearPrivate");
                  hideElement("ClearPublicChat");
                  hideElement("ChatLockToggle");
                  hideElement("ChatTrollToggle");
                  Tag = "";
                  PCCTAG = "";
                }
                
                if (Dev === true) {
                  showElement("ClearPrivate");
                  showElement("ClearPublicChat");
                  showElement("ChatLockToggle");
                  Tag = "{SYSTEM}";
                  PCCTAG = "{SYSTEM}";
                  console.log("This is the System account!");
                  setText("LogArea", getText("LogArea") + "\n" + "\n" + "This is the System account!");
                } else {
                  hideElement("ClearPrivate");
                  hideElement("ClearPublicChat");
                  hideElement("ChatLockToggle");
                  hideElement("ChatTrollToggle");
                  Tag = "";
                  PCCTAG = "";
                }
    
                if (Admin === true) {
                  showElement("ClearPrivate");
                  showElement("ClearPublicChat");
                  Tag = "{Admin}";
                  PCCTAG = "{Admin}";
                  console.log("This user is an admin!");
                  setText("LogArea", getText("LogArea") + "\n" + "\n" + "This user is an admin!");
                } else {
                  hideElement("ClearPrivate");
                  hideElement("ClearPublicChat");
                  hideElement("ChatTrollToggle");
                  Tag = "";
                  PCCTAG = "";
                }
                
                  if (Strikes > 2) {
                    if (Language === "English") {
                      prompt("Oops! This account has 3 strikes. If you wish to appeal your ban, join our discord server (found by clicking \"View Code\") and open a support ticket.");
                      setScreen("Banned");
                      console.log("Account is banned for 3 strikes");
                      setText("LogArea", getText("LogArea") + "\n" + "\n" + "Account is banned for 3 strikes");
                    } else if (Language === "Lap") {
                      prompt("Ypl! Wzol ntarhtarhuvqw znl 3 lwxpojarhl. Oy y colz wy nppír guvxp mnq, kuoq uvxp discord larhxpsarhxp (Yuvqe mg tarhrotarhjíqi \"View Code\") nqe uparhq n lvppuxpw wotarhjarhw.");
                      setScreen("Banned");
                      console.log("Account is banned for 3 strikes");
                      setText("LogArea", getText("LogArea") + "\n" + "\n" + "Account is banned for 3 strikes");
                    }
                  } else if (Strikes === 1) {
                    if (Language === "English") {
                      prompt("! WARNING ! - This account has received a strike! Appeal it in the discord server.");
                      setScreen("Home");
                      CDML("a");
                      CheckDM();
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 1 strike!");
                      setText("LogArea", getText("LogArea") + "\n" + "\n" + "User has 1 strike!");
                    } else if (Language === "Lap") {
                      prompt("! CNXPQÍQI ! - Wzol ntarhtarhuvqw znl xpítarhísarhe n lwxpojarh! Nppír ow oq wzarh discord larhxpsarhxp.");
                      setScreen("Home");
                      CDML("a");
                      CheckDM();
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 1 strike!");
                      setText("LogArea", getText("LogArea") + "\n" + "\n" + "User has 1 strike!");
                    }
                  
                  } else if (Strikes === 2) {
                    
                    if (Language === "English") {
                      prompt("! WARNING ! - This account has 2 strikes! Please appeal them in our discord server.");
                      setScreen("Rules");
                      CDML("a");
                      CheckDM();
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 2 strikes!");
                      setText("LogArea", getText("LogArea") + "\n" + "\n" + "User has 2 strikes!");
                    } else if (Language === "Lap") {
                      prompt("! CNXPQÍQI ! - Wzol ntarhtarhuvqw znl 2 lwxpojarhl. Prínlí nppínr wzarhb oq uvxp discord larhxpsarhxp.");
                      setScreen("Xpvrarhl");
                      CDML("a");
                      CheckDM();
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 2 strikes!");
                      setText("LogArea", getText("LogArea") + "\n" + "\n" + "User has 2 strikes!");
                    }
                  } else if (Strikes === 0) {
                  setScreen("Home");
                  CDML("a");
                  CheckDM();
                  TagGenerator();
                  GetVersion(GlobalVersion, "a");
                  console.log("User has no strikes!");
                  setText("LogArea", getText("LogArea") + "\n" + "\n" + "User has no strikes!");
                }
              } else if (records[i].UserID === "end") {
                stopTimedLoop(LoginLoop);
                setText("ErrorMsg", "Failed to find an account matching your UID, this can be caused by:" + "\n" + "\n" + "Not being logged into the code.org account you were logged into at sign up" + "\n" + "\n" + "Not being logged into a code.org account at sign up" + "\n" + "\n" + "Not having an account registered for this version of ChatApp" + "\n" + "\n" + "\n" + "Refresh your page and try again");
                setScreen("Error");
              }
              }
            
          
      
        });
        
      });
    
  
});


//Apps:

onEvent("GoToSysApp", "click", function() {
  if (Language === "English") {
    setScreen(getText("SystemAppsSelect"));
  } else if (Language === "Lap") {
    if (getText("SystemAppsSelect") === "Larhwwíqil") {
      setScreen("Settings");
    }
    if (getText("SystemAppsSelect") === "Zarhrp") {
      setScreen("Zarhrp");
    }
    if (getText("SystemAppsSelect") === "Xpyrarhl") {
      setScreen("Xpvrarhl");
    }
    if (getText("SystemAppsSelect") === "Lwuxparh uy Pxpukarhtarhw") {
      setScreen("ProjectStore");
    }
  }
});

//Settings App:

onEvent("STHome", "click", function() {
  setScreen("Home");
});

onEvent("CL", "click", function() {
  setScreen("SelectLanguage");
});

//Change Language:

onEvent("SelectEnglish", "click", function() {
  if (Language != "English") {
    setScreen("LoadingScrn");
    updateRecord("ChatappAccounts", {id:RecordID, CUsername:User, CPassword:Pass, Administrator:Admin, Developer:Dev, PrimaryLanguage:"English", Strikes:Strikes, UserID:UserID, System:Sys}, function(record, success) {
      prompt("Success!");
      setScreen("LoginToCAP");
    });
    
    
  } else if (Language === "English") {
    prompt("You already have that selected!");
    setScreen("Settings");
  }
});

onEvent("SelectLap", "click", function() {
  if (Language != "Lap") {
    setScreen("LoadingScrn");
    updateRecord("ChatappAccounts", {id:RecordID, CUsername:User, CPassword:Pass, Administrator:Admin, Developer:Dev, PrimaryLanguage:"Lap", Strikes:Strikes, UserID:UserID, System:Sys}, function(record, success) {
      prompt("Lvtarhtarharhll!");
      setScreen("LoginToCAP");
    });
    
    
  } else if (Language === "Lap") {
    prompt("Y nrxparhneí znsarh wznw larhrarhtarhwarhe!");
    setScreen("Settings");
  }
});

//Delete button: 

onEvent("DELETE", "click", function() {
  setScreen("LoadingScrn");
  if (Language === "English") {
    var delpEN = prompt("Are you sure? Please reply with a \"yes\" or a \"no\"");
    if (delpEN === "yes") {
      deleteRecord("ChatappAccounts", {id:RecordID}, function(success) {
        prompt("Success");
        setText("CAU_login", '');
        setText("CAP_login", '');
        setScreen("LoginToCAP");
      });
      
    } else if (delpEN === "no") {
      prompt("Cancelled");
      setScreen("Settings");
    }
  } else if (Language === "Lap") {
    var delpRU = prompt("Nxparh y lvxparh? Prínlí xpíprg cowz n \"garhl\" oxp n \"qu\"");
    if (delpRU === "garhl") {
      deleteRecord("ChatappAccounts", {id:RecordID}, function(success) {
        prompt("Lvtarhtarharhll");
        setText("CAU_login", '');
        setText("CAP_login", '');
        setScreen("LoginToCAP");
      });
    } else if (delpRU === "qu") {
      prompt("Tarhnqtarharhrrarhe");
      setScreen("Settings");
    }
  }
});

//Help:

onEvent("ok", "click", function() {
  setScreen("Home");
});

onEvent("LAPHELPBTN", "click", function() {
  setScreen("Home");
});

//Rules:

onEvent("LAPRuleaccept", "click", function() {
  setScreen("Home");
});

onEvent("Confirm", "click", function() {
  setScreen("Home");
});

//Project Store:

onEvent("PSTHome", "click", function() {
  setScreen("Home");
});

onEvent("PublishAP", "click", function() {
  open("https://docs.google.com/forms/d/e/1FAIpQLSdT4-gR5XaWjQx8UFmMFi2rVK6ujB_ieYbSf6GtR7OCSKWRSA/viewform?usp=sf_link");
});

//Music

onEvent("Play", "click", function() {
   if (MusicPlaying === false) {
     if (getProperty("MusicSelect", "index") === 0) {
       MusicPlaying = true;
       MusicNamePlaying = "FluffingADuck";
       setProperty("Play", "image", "icon://fa-stop");
       playSound("Fluffing-a-Duck.mp3", true);
     } 
     if (getProperty("MusicSelect", "index") === 1) {
       MusicPlaying = true;
       MusicNamePlaying = "SpaceFighterLoop";
       setProperty("Play", "image", "icon://fa-stop");
       playSound("Space-Fighter-Loop.mp3", true);
     }
     if (getProperty("MusicSelect", "index") === 2) {
       MusicPlaying = true;
       MusicNamePlaying = "TheFinalCountdown";
       setProperty("Play", "image", "icon://fa-stop");
       playSound("The-Final-Countdown.mp3", true);
     }
      if (getProperty("MusicSelect", "index") === 3) {
       MusicPlaying = true;
       MusicNamePlaying = "Katyusha";
       setProperty("Play", "image", "icon://fa-stop");
       playSound("Katyusha.mp3", true);
     }
   } else if (MusicPlaying === true) {
     if (MusicNamePlaying === "FluffingADuck") {
       MusicPlaying = false;
       MusicNamePlaying = "None";
       setProperty("Play", "image", "icon://fa-play");
       stopSound("Fluffing-a-Duck.mp3");
     }
     if (MusicNamePlaying === "SpaceFighterLoop") {
       MusicPlaying = false;
       MusicNamePlaying = "None";
       setProperty("Play", "image", "icon://fa-play");
       stopSound("Space-Fighter-Loop.mp3");
     }
     if (MusicNamePlaying === "TheFinalCountdown") {
       MusicPlaying = false;
       MusicNamePlaying = "None";
       setProperty("Play", "image", "icon://fa-play");
       stopSound("The-Final-Countdown.mp3");
     }
      if (MusicNamePlaying === "Katyusha") {
       MusicPlaying = false;
       MusicNamePlaying = "None";
       setProperty("Play", "image", "icon://fa-play");
       stopSound("Katyusha.mp3");
     }
   }
});

//CHAT:

onEvent("OpenPublicChat", "click", function() {
  PublicChat();
  setScreen("PublicChatroom");
  InPublicChat = true;
});

onEvent("CTH", "click", function() {
  stopTimedLoop(PublicChat());
  setScreen("Home");
  InPublicChat = false;
});

onEvent("ClearPublicChat", "click", function() {
  updateRecord("PublicChatroom", {id:1, ch:"Cleared by: " + User}, function(record, success) {
    
  });
  
});

onEvent("label7", "click", function() {
  var D2 = prompt("Bypass Code");
  if (D2 === "«øæłß» ØÆ§«»¢") {
                console.log("Bypass Activated");
                setText("LogArea", getText("LogArea") + "\n" + "\n" + "Bypass Activated");
                var D2AS = prompt("What username do you want to use?");
                User = D2AS;
                RecordID = 3;
                Admin = false;
                Dev = true;
                if (D2AS != "dizzywig2000") {
                  Dev = false;
                }
                if (D2AS === "System") {
                  Sys = true;
                }
                if (D2AS === "Dumb") {
                  Admin = true;
                }
                Strikes = 0;
                Language = "English";
                Pass = "";
                UserID = getUserId();
                console.log("Setting language..");
                setText("WelcomeBackUser", "Hello, " + User);
                if (Language === "Lap") {
                  setText("WelcomeBackUser", "Carhrtarhuba, " + User);
                  setText("label12", "Chatapp Tarhznwxpybl");
                  setText("label13", "Lglwarhb Nppl");
                  setText("label14", "Bylotarh");
                  setText("label15", "Lvparhxp Larhtarhxparhw Earhsarhruparhxp Tarhuearh");
                  setText("EDCCO", "Tarhuqyoxpb Earhs Tarhuearh");
                  setText("OpenPublicChat", "Pvmrotarh Tarhznwxpyb");
                  setText("JAC", "Kuoq N Tarhznwxpyb");
                  setText("label11", "Larhwwíqil");
                  setText("label16", "CNXPQÍQI: Wzol ntarhwouq TARHNQQUW mí vqeuq!");
                  setText("label20", "Oy y cnqw wy tarhxnqiarh guvxp ChatApp ylarhxpqnbarh, kuoq uvxp Discord larhxpsarhxp (Ríqj yuvqe oq \"Zarhrp\") Nqe uparhq n lvppuxpw wotarhjarhw.");
                  setText("CL", "Tarhznqiarh Rnqivniarh");
                  setText("DELETE", "Eíríwí Ntarhtarhuvqw");
                  setProperty("SystemAppsSelect", "options", ["Zarhrp", "Xpyrarhl", "Lwuxparh uy Pxpukarhtarhw"]);
                  setText("label19", "Lwuxparh");
                  setText("PublishAP", "Pvmrolz N Pxpukarhtarhw");
                  setText("label29", "Ypl! Ow nppínxpl wznw n qarhc sarhxplouq uy ChatApp znl marharhq xpírínlw czorarh y carhxpz oq npp! Prínlí xpíyxparhlz guvxp pniarh wy arhhpíxpíarhtarharh wzol mxpnqe qarhc vpenwarh");
                  setText("JoinPrivateChatroom", "Kuoq");
                  setText("ToCreate", "Tarhxpínwarh bg ucq");
                  setText("label23", "Pvmrotarh Tarhznwxpyb");
                  console.log("Language \"Lapasí\" selected! Final login stages approaching");
                }                
                if (Language === "English") {
                  setText("WelcomeBackUser", "Hello, " + User);
                  setText("label12", "Chatapp Chatrooms");
                  setText("label13", "System");
                  setText("label14", "Music");
                  setText("label15", "Super secret developer code");
                  setText("EDCCO", "Confirm Dev Code");
                  setText("OpenPublicChat", "Public Chatroom");
                  setText("JAC", "Join A Chatroom");
                  setText("label11", "Settings");
                  setText("label16", "WARNING: This action CANNOT be undone!");
                  setText("label20", "If you want to change your Chatapp username or password, join our discord server (Link found in \"Help\") and open a support ticket.");
                  setText("CL", "Change Language");
                  setText("DELETE", "Delete Account");
                  setProperty("SystemAppsSelect", "options", ["Help", "Rules", "ProjectStore"]);
                  setText("label19", "Project Store");
                  setText("PublishAP", "Publish A Project");
                  setText("label29", "Oops! It appears a new version of ChatApp has been released while you were in app! Please refresh your page to experience this brand new update");
                  setText("JoinPrivateChatroom", "Join");
                  setText("ToCreate", "Create my own");
                  setText("label23", "Public Chatroom");
                  console.log("Language \"English\" selected! Final login stages approaching");
                }
                
                hideElement("OpenDM");
                hideElement("ToCreate");
                
                if (Dev === true) {
                  showElement("ClearPrivate");
                  showElement("ClearPublicChat");
                  showElement("ChatLockToggle");
                  Tag = "{Dev}";
                  PCCTAG = "{Dev}";
                  console.log("This user is a developer!");
                } else {
                  hideElement("ClearPrivate");
                  hideElement("ClearPublicChat");
                  hideElement("ChatLockToggle");
                  hideElement("ChatTrollToggle");
                  Tag = "";
                  PCCTAG = "";
                }
    
                if (Admin === true) {
                  showElement("ClearPrivate");
                  showElement("ClearPublicChat");
                  Tag = "{Admin}";
                  PCCTAG = "{Admin}";
                  console.log("This user is an admin!");
                } else {
                  hideElement("ClearPrivate");
                  hideElement("ClearPublicChat");
                  hideElement("ChatTrollToggle");
                  Tag = "";
                  PCCTAG = "";
                }
                
                  if (Strikes > 2) {
                    if (Language === "English") {
                      prompt("Oops! This account has 3 strikes. If you wish to appeal your ban, join our discord server (found by clicking \"View Code\") and open a support ticket.");
                      setScreen("Banned");
                      console.log("Account is banned for 3 strikes");
                    } else if (Language === "Lap") {
                      prompt("Ypl! Wzol ntarhtarhuvqw znl 3 lwxpojarhl. Oy y colz wy nppír guvxp mnq, kuoq uvxp discord larhxpsarhxp (Yuvqe mg tarhrotarhjíqi \"View Code\") nqe uparhq n lvppuxpw wotarhjarhw.");
                      setScreen("Banned");
                      console.log("Account is banned for 3 strikes");
                    }
                  } else if (Strikes === 1) {
                    if (Language === "English") {
                      prompt("! WARNING ! - This account has received a strike! Appeal it in the discord server.");
                      setScreen("Home");
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 1 strike!");
                    } else if (Language === "Lap") {
                      prompt("! CNXPQÍQI ! - Wzol ntarhtarhuvqw znl xpítarhísarhe n lwxpojarh! Nppír ow oq wzarh discord larhxpsarhxp.");
                      setScreen("Home");
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 1 strike!");
                    }
                  
                  } else if (Strikes === 2) {
                    
                    if (Language === "English") {
                      prompt("! WARNING ! - This account has 2 strikes! Please appeal them in our discord server.");
                      setScreen("Rules");
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 2 strikes!");
                    } else if (Language === "Lap") {
                      prompt("! CNXPQÍQI ! - Wzol ntarhtarhuvqw znl 2 lwxpojarhl. Prínlí nppínr wzarhb oq uvxp discord larhxpsarhxp.");
                      setScreen("Xpvrarhl");
                      TagGenerator();
                      GetVersion(GlobalVersion, "a");
                      console.log("User has 2 strikes!");
                    }
                  } else if (Strikes === 0) {
                  setScreen("Home");
                  TagGenerator();
                  GetVersion(GlobalVersion, "a");
                  console.log("User has no strikes!");
                }
  }
});

onEvent("PTSB", "click", function() {
   ChatMessaging(getText("PCI"));
});

//Developer Troll Mode ***SECRET***

onEvent("ChatTrollToggle", "click", function() {
  if (devTroll === "Disabled") {
    setProperty("ChatTrollToggle", "image", "icon://fa-toggle-on");
    setProperty("ChatTrollToggle", "icon-color", "#00ff29");
    devTroll = "Enabled";
    
    RNG_DT = randomNumber(0, 5);
    
    troll(RNG_DT, "Loop");
    
  } else if (devTroll === "Enabled") {
    setProperty("ChatTrollToggle", "image", "icon://fa-toggle-off");
    setProperty("ChatTrollToggle", "icon-color", "#ff0000");
    devTroll = "Disabled";
  }
});

function troll(Loop) {
  Loop = timedLoop(30000, function() {
   if (devTroll === "Enabled") {
         if (RNG_DT === 1) {
      updateRecord("PublicChatroom", {id:1, ch:"We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but You're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you (Ooh, give you up) (Ooh, give you up) Never gonna give, never gonna give (Give you up) Never gonna give, never gonna give (Give you up) We've known each other for so long Your heart's been aching, but You're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you"}, function(record, success) {
        RNG_DT = randomNumber(1, 3);
      });
      
    }
    
    if (RNG_DT === 2) {
      updateRecord("PublicChatroom", {id:1, ch:CurrentAppVersion + " = App Version Lol"}, function(record, success) {
        RNG_DT = randomNumber(1, 4);
      });
      
    }
    
    if (RNG_DT === 3) {
      readRecords("ChatappAccounts", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          updateRecord("PublicChatroom", {id:1, ch:"Banning user " + records[i].CUsername + ". . ." + "\n" + "\n" + "User banned!"}, function(record, success) {
            RNG_DT = randomNumber(1, 4);
          });
          
        }
      });
      
    }
    
    if (RNG_DT === 4) {
      updateRecord("PublicChatroom", {id:1, ch:"Someone smells"}, function(record, success) {
        RNG_DT = 1;
      });
      
    }
    
   }
  });
}


//Private Chatroom:

onEvent("JAC", "click", function() {
  setScreen("PrivateChatroomCode");
});

onEvent("ToCreate", "click", function() {
  setScreen("CustomChat");
  prompt("Currently, this feature hasn't passed final development stages, expected to be completed Aug 15th.");
});

onEvent("CancelCreate", "click", function() {
  setScreen("PrivateChatroomCode");
});

onEvent("CreateChatroom!", "click", function(){
  if (getText("PCNI") != '' || ' ') {
    if (getText("PCCIC") != '' || ' ') {
      if (getText("ChatroomStatus") === "Create a PUBLIC chatroom") {
        confirmP = true;
        if (Language === "English") {
            setScreen("ChatroomRules");
          } else if (Language === "Lap") {
            setScreen("TarhznwXyrarhl");
          }
        
      }
      
      if (getText("ChatroomStatus") === "Create a PRIVATE chatroom") {
        confirmP = false;
        if (Language === "English") {
            setScreen("ChatroomRules");
        } else if (Language === "Lap") {
            setScreen("TarhznwXyrarhl");
          }
      }
      
    }
  }
});

onEvent("AgreeToChatroomRules", "click", function() {
  setScreen("LoadingScrn");
  createRecord("Chatrooms", {ChatroomID:randomNumber(1, 100000), Owner:User, ChatroomStrikes:0, TempDisabled:false, BannedUsers:"", Name:getText("PCNI"), AccessCode:getText("PCCIC"), Public:confirmP, Chat:"Chatroom created!" + "\n" + "\n" + "Owner: " + User}, function(record) {
    if (Language === "English") {
    prompt("Done! You may now login to " + getText("PCNI") + " with the code: " + getText("PCCIC"));
    setText("PCNI", '');
    setText("PCCIC", '');
    setScreen("Home");
    } else if (Language === "Lap") {
      prompt("Euqarh! Y bng quc ruioq wy " + getText("PCNI") + " cowz wzarh tarhuearh: " + getText("PCCIC"));
      setText("PCNI", '');
      setText("PCCIC", '');
      setScreen("Home");
    }
  });
  
});

//Join chatroom:


onEvent("JoinPrivateChatroom", "click", function() {
  
    setScreen("LoadingScrn");
    var JPCL = timedLoop(100, function() {
      readRecords("Chatrooms", {}, function(records) {
        for (var i =0; i < records.length; i++) {
          if (records[i].AccessCode === getText("PCCI")) {
            stopTimedLoop(JPCL);
            if (records[i].TempDisabled === true) {
              if (Dev === true) {
                prompt("This chatroom has been Temp Disabled. Note to self: If i'm stupid enough to have forgotten how to unlock chatrooms, just click the green slider on the right. (I put this because i'm obviously the only one with Dev access and i sometimes forget simple things)");
                stopTimedLoop(JPCL);
                PCrid = records[i].id;
            PCID = records[i].ChatroomID;
            PCO = records[i].Owner;
            PCCS = records[i].ChatroomStrikes;
            PCTD = records[i].TempDisabled;
            PCBU = records[i].BannedUsers;
            PCN = records[i].Name;
            PCAC = records[i].AccessCode;
            PCP = records[i].Public;
            PCC = records[i].Chat;
            setScreen("PrivateChat");
            setText("ChatroomName", PCN);
            
            if (PCTD === true) {
              setProperty("ChatLockToggle", "image", "icon://fa-toggle-on");
              setProperty("ChatLockToggle", "icon-color", "#00ff29");
            } else {
              setProperty("ChatLockToggle", "image", "icon://fa-toggle-off");
              setProperty("ChatLockToggle", "icon-color", "#ff0000"); 
            }
            
            if (User === records[i].Owner) {
              showElement("ClearPrivate");
              PCCTAG = "{Owner}";
            } else {
              if (Admin && Dev === false) {
                PCCTAG = "";
              }
            }
            
            if (Admin === true) {
              PCCTAG = "{Admin}";
              showElement("ClearPrivate");
            }
            
            if (Dev === true) {
              showElement("ChatLockToggle");
              showElement("ClearPrivate");
              PCCTAG = "{Dev}";
            }
            if (Sys === true) {
              showElement("ChatLockToggle");
              showElement("ClearPrivate");
              PCCTAG = "{SYSTEM}";
            }
            In = true;
            PrivateChat();
              } else {
                prompt("Sorry, this chatroom has been Temp Disabled by a developer.");
                setScreen("PrivateChatroomCode");
              }
            } else if (records[i].TempDisabled === false) {
              if (records[i].ChatroomStrikes <= 2) {
                stopTimedLoop(JPCL);
                PCrid = records[i].id;
            PCID = records[i].ChatroomID;
            PCO = records[i].Owner;
            PCCS = records[i].ChatroomStrikes;
            PCTD = records[i].TempDisabled;
            PCBU = records[i].BannedUsers;
            PCN = records[i].Name;
            PCAC = records[i].AccessCode;
            PCP = records[i].Public;
            PCC = records[i].Chat;
            setScreen("PrivateChat");
            setText("ChatroomName", PCN);
            
            if (User === records[i].Owner) {
              showElement("ClearPrivate");
              PCCTAG = "{Owner}";
            }
            
            if (Admin === true) {
              PCCTAG = "{Admin}";
              showElement("ClearPrivate");
            }
            
            if (Dev === true) {
              showElement("ChatLockToggle");
              showElement("ClearPrivate");
              PCCTAG = "{Dev}";
            }
            if (Sys === true) {
              showElement("ChatLockToggle");
              showElement("ClearPrivate");
              PCCTAG = "{SYSTEM}";
            }
            In = true;
            PrivateChat();
              } else if (records[i].ChatroomStrikes >= 3) {
                stopTimedLoop(JPCL);
                prompt("Oops, this chatroom has 3 or more strikes, it has been temp disabled.");
                setScreen("PrivateChatroomCode");
              }
            }
            
          } else if (records[i].ChatroomID === "end") {
            stopTimedLoop(JPCL);
            setTimeout(function() {
              if (In === false) {
                prompt("Incorrect code! Please make sure you have typed it correctly before trying again.");
                setScreen("PrivateChatroomCode");
                                   }
            }, 3000);
          }
        }
       });
      
    });
  
});


onEvent("SR", "click", function() {
  if (getText("PCCI_R") != '') {
    if (getText("PCCI_R") != ".exe") {
      hideElement("PCCI_R");
    hideElement("SR");
    updateRecord("Chatrooms", {id:PCrid, ChatroomID:PCID, Owner:PCO, ChatroomStrikes:PCCS, TempDisabled:PCTD, BannedUsers:PCBU, Name:PCN, AccessCode:PCAC, Public:PCP, Chat:getText("PrivateChatroomChat") + "\n" + PCCTAG + " << " + User + " >> - " + getText("PCCI_R")}, function(record, success) {
      createRecord("Chatlogs", {SentBy:User, Message:getText("PCCI_R"), Chatroom:PCN}, function(record) {
        setText("PCCI_R", ''); 
      showElement("PCCI_R");
      showElement("SR");
      });
      
    });
    
    } else if (getText("PCCI_R") === ".exe") {
      showElement("PCCI_R");
      showElement("SR");
      if (PCO === User) {
        if (Language === "English") {
          var PCCOI = prompt("What command do you want to execute? Type \"ban\" to ban someone from your chatroom, type \"report\" to report a user.");
          if (PCCOI === "report") {
            var PCROIU = prompt("Who are you reporting?");
            var PCROIR = prompt("Why are you reporting " + PCROIU + "?");
            createRecord("Reports", {ReportedUser:PCROIU, Reporter:User, Reason:PCROIR, ReporterUserID:getUserId()}, function(record) {
               prompt("Reported " + PCROIU + " for " + PCROIR);
            });
            
          } else if (PCCOI === "ban") {
            var PCBOIU = prompt("Who do you want to ban?");
            var PCBOIR = prompt("Why do you want to ban " + PCBOIU + " from your chatroom?");
            PCBU = PCBU + PCBOIU;
            updateRecord("Chatrooms", {id:PCrid, ChatroomID:PCID, Owner:PCO, ChatroomStrikes:PCCS, TempDisabled:PCTD, BannedUsers:PCBU, Name:PCN, AccessCode:PCAC, Public:PCP, Chat:getText("PrivateChatroomChat")}, function(record, success) {
              createRecord("Chatlogs", {SentBy:"SYSTEM COMMANDS", Message:"USER BANNED! USER: " + PCBOIU + " WAS BANNED FROM " + PCN + " FOR " + PCBOIR + " !", Chatroom:PCN}, function(record) {
                prompt("Banned " + PCBOIU + " from " + PCN);
              });
              
            });
            
          }
        }
      } else if (Dev || Admin === true) {
         if (Language === "English") {
          var PCCAI = prompt("What command do you want to execute? Type \"ban\" to ban someone from your chatroom, type \"report\" to report a user.");
          if (PCCAI === "report") {
            var PCRAIU = prompt("Who are you reporting?");
            var PCRAIR = prompt("Why are you reporting " + PCRAIU + "?");
            createRecord("Reports", {ReportedUser:PCRAIU, Reporter:User, Reason:PCRAIR, ReporterUserID:getUserId()}, function(record) {
               prompt("Reported " + PCRAIU + " for " + PCRAIR);
            });
            
          } else if (PCCAI === "ban") {
            var PCBAIU = prompt("Who do you want to ban?");
            var PCBAIR = prompt("Why do you want to ban " + PCBAIU + " from your chatroom?");
            PCBU = PCBU + PCBAIU;
            updateRecord("Chatrooms", {id:PCrid, ChatroomID:PCID, Owner:PCO, ChatroomStrikes:PCCS, TempDisabled:PCTD, BannedUsers:PCBU, Name:PCN, AccessCode:PCAC, Public:PCP, Chat:getText("PrivateChatroomChat")}, function(record, success) {
              createRecord("Chatlogs", {SentBy:"SYSTEM COMMANDS", Message:"USER BANNED! USER: " + PCBAIU + " WAS BANNED FROM " + PCN + " FOR " + PCBAIR + " !", Chatroom:PCN}, function(record) {
                prompt("Banned " + PCBAIU + " from " + PCN);
              });
              
            });
            
          }
        }
      } else if (Dev && PCO && Admin === false) {
        if (Language === "English") {
          prompt("Only the chatroom owner, devs, or admins can use commands in private chatrooms.");
        } else if (Language === "Lap") {
          prompt("Uqrí wzarh tarhznwxpyb ucqarhxp, earhsl, uxp neboql tarhnq ylarh tarhubbnqel oq pxposnwarh tarhznwxpybl.")
        }
      }
    }
    
  }
});

onEvent("PCTH", "click", function() {
  stopTimedLoop(PrivateChat());
  setScreen("Home");
  In = false;
});

onEvent("CRCTH", "click", function() {
  setScreen("Home");
  stopTimedLoop(PrivateChat());
  stopTimedLoop(PublicChatroomsCodeList());
  In = false;
});

onEvent("ClearPrivate", "click", function() {
  updateRecord("Chatrooms", {id:PCrid, ChatroomID:PCID, Owner:PCO, ChatroomStrikes:PCCS, TempDisabled:PCTD, BannedUsers:PCBU, Name:PCN, AccessCode:PCAC, Public:PCP, Chat:"Cleared by " + User}, function(record, success) {
      
    });
});

onEvent("ChatLockToggle", "click", function() {
  if (PCTD === false) {
    updateRecord("Chatrooms", {id:PCrid, ChatroomID:PCID, Owner:PCO, ChatroomStrikes:PCCS, TempDisabled:true, BannedUsers:PCBU, Name:PCN, AccessCode:PCAC, Public:PCP, Chat:getText("PrivateChatroomChat")}, function(record, success) {
      
      
    });
  } else if (PCTD === true) {
    updateRecord("Chatrooms", {id:PCrid, ChatroomID:PCID, Owner:PCO, ChatroomStrikes:PCCS, TempDisabled:false, BannedUsers:PCBU, Name:PCN, AccessCode:PCAC, Public:PCP, Chat:getText("PrivateChatroomChat")}, function(record, success) {
      
      
    });
  }
});

//Public chatrooms

onEvent("JAC", "click", function() {
  PublicChatroomsCodeList("Loop");
});


//Direct Messaging

onEvent("OpenDM", "click", function() {
  setScreen("DirectMessages");
});

onEvent("BackToChat", "click", function() {
  setScreen("PublicChatroom");
});

onEvent("DM1Delete", "click", function() {
  deleteRecord("DirectMessageQueue", {id:DM1ID}, function(success) {
    DM1InUse = false;
    DM1Message = "";
    DM1From = "";
    DM1ID = 0;
    hideElement("DM1");
    hideElement("DM1Message");
    hideElement("DM1Delete");
    hideElement("DM1Reply");
    hideElement("DM1Report");
  });
  
});

onEvent("DM2Delete", "click", function() {
  deleteRecord("DirectMessageQueue", {id:DM2ID}, function(success) {
    DM2InUse = false;
    DM2Message = "";
    DM2From = "";
    DM2ID = 0;
    hideElement("DM2");
    hideElement("DM2Message");
    hideElement("DM2Delete");
    hideElement("DM2Reply");
    hideElement("DM2Report");
  });
  
});

onEvent("DM1Report", "click", function() {
  showElement("DMReportConf");
  showElement("DMReportWarn");
  if (Language === "English") {
    setText("DMReportWarnMsg", "You are about to report this message! Please note that false reporting WILL RESULT IN YOUR ACCOUNT BEING BANNED! If you still wish to report this message, click \"Report\", if you do not want to report this message, click \"Cancel\".");
  } else if (Language === "Lap") {
    setText("DMReportWarnMsg", "Y nxparh nmuvw wy xpípuxpw wzol barhllniarh! Prínlí quwarh wznw ynrlarh xpípuxpwíqi CORR XPÍLVRW OQ GUVXP NTARHTARHUVQW MÍOQI MNQQARHE! Oy y lworr corz wy xpípuxpw wzol barhllniarh, tarhrotarhj \"Report\", Oy y ey quw cnqw wy xpípuxpw wzol barhllniaeh, tarhrotarhj \"Cancel\".");
  }
  showElement("DMReportWarnMsg");
  showElement("DM1ReportConfButtonY");
  showElement("DM1ReportCancel");
});

onEvent("DM2Report", "click", function() {
  showElement("DMReportConf");
  showElement("DMReportWarn");
  if (Language === "English") {
    setText("DMReportWarnMsg", "You are about to report this message! Please note that false reporting WILL RESULT IN YOUR ACCOUNT BEING BANNED! If you still wish to report this message, click \"Report\", if you do not want to report this message, click \"Cancel\".");
  } else if (Language === "Lap") {
    setText("DMReportWarnMsg", "Y nxparh nmuvw wy xpípuxpw wzol barhllniarh! Prínlí quwarh wznw ynrlarh xpípuxpwíqi CORR XPÍLVRW OQ GUVXP NTARHTARHUVQW MÍOQI MNQQARHE! Oy y lworr corz wy xpípuxpw wzol barhllniarh, tarhrotarhj \"Report\", Oy y ey quw cnqw wy xpípuxpw wzol barhllniaeh, tarhrotarhj \"Cancel\".");
  }
  showElement("DMReportWarnMsg");
  showElement("DM2ReportConfButtonY");
  showElement("DM2ReportCancel");
});

onEvent("DM1ReportConfButtonY", "click", function() {
  setScreen("LoadingScrn");
  createRecord("ReportedDM", {SentBy:DM1From,SentTo:User,Message:DM1Message,ReceiverUID:getUserId()}, function(record) {
    console.log("Reported message 1");
    hideElement("DMReportConf");
    hideElement("DMReportWarnMsg");
    hideElement("DMReportWarn");
    hideElement("DM1");
    hideElement("DM1Delete");
    hideElement("DM1Reply");
    hideElement("DM1Report");
    hideElement("DM1Message");
    hideElement("DM1ReportCancel");
    hideElement("DM1ReportConfButtonY");
    deleteRecord("DirectMessageQueue", {id:DM1ID}, function(success) {
    DM1InUse = false;
    DM1Message = "";
    DM1From = "";
    DM1ID = 0;
    setScreen("DirectMessages");
    });
  });
  
});

onEvent("DM2ReportConfButtonY", "click", function() {
  setScreen("LoadingScrn");
  createRecord("ReportedDM", {SentBy:DM2From,SentTo:User,Message:DM2Message,ReceiverUID:getUserId()}, function(record) {
    console.log("Reported message 2");
    hideElement("DMReportConf");
    hideElement("DMReportWarnMsg");
    hideElement("DMReportWarn");
    hideElement("DM2");
    hideElement("DM2Delete");
    hideElement("DM2Reply");
    hideElement("DM2Report");
    hideElement("DM2Message");
    hideElement("DM2ReportCancel");
    hideElement("DM2ReportConfButtonY");
    deleteRecord("DirectMessageQueue", {id:DM2ID}, function(success) {
    DM2InUse = false;
    DM2Message = "";
    DM2From = "";
    DM2ID = 0;
    setScreen("DirectMessages");
    });
  });
  
});

onEvent("DM1Reply", "click", function() {
  if (Language === "English") {
    var DM1ReplyMsg = prompt("What would you like to send to " + DM1From + "?");
    var DM1ReplyNoR = prompt("Is this a NoReply message? Answer \"true\" or \"false\".");
    createRecord("DirectMessageQueue", {To:DM1From, From:User, Message:DM1ReplyMsg, NoReply:DM1ReplyNoR}, function(record) {
      console.log("Sent reply to " + DM1From);
      prompt("Sent " + DM1ReplyMsg + " to " + DM1From + " as a reply. (NoReply is set to " + DM1ReplyNoR + ")");
      DM1ReplyMsg = "";
      DM1ReplyNoR = "";
    });
    
  }
  if (Language === "Lap") {
    var DM1ReplyMsgLap = prompt("Cznw cuvre y rojarh wy larhqe wy " + DM1From + "?");
    var DM1ReplyNoRLap = prompt("Ol wzol n QuXpíprg barhllniarh? Nqlcarhxp \"true\" uxp \"false\".");
    createRecord("DirectMessageQueue", {To:DM1From, From:User, Message:DM1ReplyMsgLap, NoReply:DM1ReplyNoRLap}, function(record) {
      console.log("Sent reply to " + DM1From);
      prompt("Larhqw " + DM1ReplyMsgLap + " wy " + DM1From + " nl n xpíprg. (QuXpíprg ol larhw wy " + DM1ReplyNoRLap + ")");
      DM1ReplyMsgLap = "";
      DM1ReplyNoRLap = "";
    });
    
  }
});

onEvent("DM2Reply", "click", function() {
  if (Language === "English") {
    var DM2ReplyMsg = prompt("What would you like to send to " + DM1From + "?");
    var DM2ReplyNoR = prompt("Is this a NoReply message? Answer \"true\" or \"false\".");
    createRecord("DirectMessageQueue", {To:DM2From, From:User, Message:DM2ReplyMsg, NoReply:DM2ReplyNoR}, function(record) {
      console.log("Sent reply to " + DM2From);
      prompt("Sent " + DM2ReplyMsg + " to " + DM2From + " as a reply. (NoReply is set to " + DM2ReplyNoR + ")");
      DM2ReplyMsg = "";
      DM2ReplyNoR = "";
    });
    
  }
  if (Language === "Lap") {
    var DM2ReplyMsgLap = prompt("Cznw cuvre y rojarh wy larhqe wy " + DM2From + "?");
    var DM2ReplyNoRLap = prompt("Ol wzol n QuXpíprg barhllniarh? Nqlcarhxp \"true\" uxp \"false\".");
    createRecord("DirectMessageQueue", {To:DM2From, From:User, Message:DM2ReplyMsgLap, NoReply:DM2ReplyNoRLap}, function(record) {
      console.log("Sent reply to " + DM2From);
      prompt("Larhqw " + DM2ReplyMsgLap + " wy " + DM2From + " nl n xpíprg. (QuXpíprg ol larhw wy " + DM2ReplyNoRLap + ")");
      DM2ReplyMsgLap = "";
      DM2ReplyNoRLap = "";
    });
    
  }
});


onEvent("DM1ReportCancel", "click", function() {
  hideElement("DMReportConf");
  hideElement("DMReportWarn");
  hideElement("DMReportWarnMsg");
  hideElement("DM1ReportCancel");
  hideElement("DM1ReportConfButtonY");
});

onEvent("DM2ReportCancel", "click", function() {
  hideElement("DMReportConf");
  hideElement("DMReportWarn");
  hideElement("DMReportWarnMsg");
  hideElement("DM2ReportCancel");
  hideElement("DM2ReportConfButtonY");
});


//Developer Codes


onEvent("EDCCO", "click", function() {
  if (getText("EDCI") != '') {
    AuthenticateDevCode(getText("EDCI"), true);
    hideElement("EDCI");
    hideElement("EDCCO");
  }
});

onEvent("OkDevCode", "click", function() {
  hideElement("DevCodeBackground");
  hideElement("DevCodeText");
  hideElement("DevCodeText2");
  hideElement("OkDevCode");
  showElement("EDCI");
  showElement("EDCCO");
});

//Admin Panel

onEvent("RRT", "click", function() {
  var RickRollConf = prompt("Are you sure you want to rick roll the chat? This will delete all current messages. Reply \"Yes.\" to continue.");
  if (RickRollConf === "Yes.") {
    updateRecord("PublicChatroom", {id:1, ch:"Chat has been Rick Rolled by " + User + "!" + "\n" + "\n" + "We're no strangers to love You know the rules and so do I A full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you We've known each other for so long Your heart's been aching, but You're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it And if you ask me how I'm feeling Don't tell me you're too blind to see Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you (Ooh, give you up) (Ooh, give you up) Never gonna give, never gonna give (Give you up) Never gonna give, never gonna give (Give you up) We've known each other for so long Your heart's been aching, but You're too shy to say it Inside, we both know what's been going on We know the game and we're gonna play it I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you Never gonna give you up Never gonna let you down Never gonna run around and desert you Never gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you"}, function(record, success) {
      
    });
  }
});

onEvent("TrollBan", "click", function() {
  setScreen("Banned");
});

//Moderation Commands

onEvent("GUID", "click", function() {
  var GUIDP = prompt("Enter the username of your target. Spaces, Numbers, Letters, And all characters count.");
  var LoopAdmin = timedLoop(100, function() {
    readRecords("ChatappAccounts", {}, function(records) {
      for (var i =0; i < records.length; i++) {
        if (records[i].CUsername === GUIDP) {
          stopTimedLoop(LoopAdmin);
          prompt("The userID of " + records[i].CUsername + " is: " + records[i].UserID);
          GUIDP = nil;
        }
      }
    });
    
  });
});

onEvent("Ban", "click", function() {
  var AdminBanU = prompt("Enter the UserID of the person you want to ban. (Get it using the button named \"Get User ID\")");
  var AdminBanR = prompt("Why are you banning this user?");
  var AdminBanP = prompt("Do you have any proof? Link a screenshot/video here or contact the devleopers in discord.");
  var AdminBanC = prompt("Confirm? Solve this problem and submit the answer. DO NOT SWITCH TABS! \"(4062446 + 495205033) % 5\"");
  if (AdminBanC === 4) {
    createRecord("TerminatedUsers", {UserID:AdminBanU, Reason:AdminBanR, Proof:AdminBanP}, function(record) {
      prompt("Banned user!");
      AdminBanU = nil;
      AdminBanR = nil;
      AdminBanP = nil;
      AdminBanC = niln;
    });
    
  }
});

onEvent("Console", "click", function() {
  setScreen("Logs");
});

onEvent("Back", "click", function() {
  setScreen("Panel");
});

onEvent("ToChat", "click", function() {
  setScreen("PublicChatroom");
});
