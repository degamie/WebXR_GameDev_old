//WID(9/4/2026)(Sarthak Mittal)(DegamieSign)#1.1.1,1c.1.1
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
