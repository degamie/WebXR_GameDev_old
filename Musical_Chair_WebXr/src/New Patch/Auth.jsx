//WID(16/4/2026)(Sarthak Mittal)(DegamieSign)#1.1.1,1c.1.1.1.1cc.1.1.1.1.1.1.1,1
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
