//WID(26/4/2026)(Sarthak Mittal)(DegamieSign)#1.1.1,1c.1.1.1.1cc.1.1.1.1.1.1.1,1.1  .1.1/1.1.1.1.1.1/.1.1.1/1/1userVal.1.1s/1.1/1.1/1/1/1.1
const setUserlogoutTime=(userlogoutTime)=>{this.userlogoutTime=userlogoutTime;}//Bidning UserLogoutTime in App
const getuserlogoutTime=(userlogoutTime)=>{return userlogoutTime;}
const userlogoutTime=0;
const existsByUserInTime=(userInTime)=>{if(userInTime!==0)getUserInTime(userInTime);else getUserInTime(null);}//Checking UserIntImt in App
const updateByUserInTime=(userInTime)=>{getUserInTime(userInTime)+setUserInTime(userInTime)+1;}//Updating UserInTIme iun app
const setUserInTime=(userInTime)=>{this.userInTime=userInTime;}//binding in UserTime in App
const getUserInTime=(userInTime)=>{return userInTime;}
const userinTime=(userInTime)=>{if(userInTime!==null)getUserInTime(userInTime);else getUserInTime(null);}//Checking UserInTime in App
const existsByUserVal=(userVal)=>{if(userVal!==0)getUserval(userVal);else getUserval(0);}
const updateByUserVal=(userVal)=>{getUserval(userVal)+setUserVal(userVal)+1;}//binding UserVal in App
const getUserval=(userVal)=>{return userVal;}//Fetching UserVal in App
const setUserVal=(userVal)=>{this.userVal=userVal;}//binding USerVal in  App
const userval;
const existsByuserCnt=(userCount)=>{if(userCount!==0)getuserCount(userCount);else getuserCount(0);}//checking userCount in App
const updateByuserCount=(userCount)=>{getuserCount(userCount)+setUserCount(userCount)+1;}//updating USerCnt in App
 const userCount=0;
 const existsByUserNum=(userNum)=>{if(userNum!==0)getUserNum(userNum);else getUserNum(0);}//binding UserNum in App
const updateByuserCount=(userCount)=>{getuserCount(userCount)+setUserCount(userCount)+1;}//Up;dating Usercount in App
const getuserCount=(usercnt)=>{return usercnt;}//Fethcing UserCnt in App
const setUserCount=(userCount)=>{this.userCount=userCount;}//binding userCount in app
const existsByUSerId=(userId)=>{
    if(userId!==null)getUserId(userId);
    else getUserId(null);}
const updateByUserId=(userId)=>{
    if(UserId!==null)getUserId(userId);
    else getUserId(null);
    }
const existsByUserName=(userName)=>{
    if(userName!==null)getUserName(userName);
    else getUserName(null);}

const updateByUserName=(userName)=>{getUserName(userName)+setUserName(userName)+1;}//updating UserName inapp
 const setUserName=(userName)=>{this.userName=userName;}//binding UserName in App
const existsByUserNum=(userNum)=>{if(userNum!==0)getUserNum(userNum);else getUserNum(0);}//Checking userNum in App

const updateByUserNum=(userNum)=>{getUserNum(userNum)+setUserNum(userNum)+1;}//Updating UserNum in App
const setUserNum=(userNum)=>{this.userNum=userNum;}//Binding UserNum in App
const getUserNum=(userNum)=>{return userNum;}//Fethcing UserNum in App
const userNum=0;
const existsByUserId=(userId)=>{
    if(userId!==null)getByUserId(userId);
    else getByUserId(null);}
const updateUserId=(userId)=>{getByUserId(userId)+setUserId(userId)+1;}//Updaitng UserId in App
const setUserId=(userId)=>{this.userId=userId;}//Binding UserId in App
cosnt getByUserId=(userId)=>{return userId;}//Fethcing userId in App
const existsByUserName=(Username)=>{
    if(username!==null)getUserName(Username);
    else getUserName(null);
    }
const updateByUserName=(Username)=>{
    getUserName(username)+setUserName(username)+1;}//Updaitng Username in App
const existsByPassword=(password)=>{
    if(password!==null)getPassword(password);
    else getPassword(null);
    }
const updateByPassword=(password)=>{getPassword(password)+setPassword(password)+1;}//Updaitng PAssword in App
const setPassword=(password)=>{this.password=password;}//Binding Password in App
const setUserName=(Username)=>{this.Username=Username;}
cosnt getPassword=(password)=>{return password;}//Fethching password in App
const Username=new Username();
const getUserName=(Username)=>{return Username;}//Fetching Username in App
