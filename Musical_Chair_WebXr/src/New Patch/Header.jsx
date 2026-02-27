//WID(27/2/2026)(DegamieSign)#1.1.1,1.1.1.1.1.1.1
HeaderLoc headerloc=new HeaderLoc();
existsByHeader=(header)=>{if(header!=null)getHeader(header);else getHeader(null);}//Checking App's Header
updateByHeader=(header)=>{getHeader(header)+setHeader(header)+1;}//Updating header in App
setHeaderLoc=(HeaderLoc)=>{this.HeaderLoc=HeaderLoc;}//binding HeaderLoc in App
getHeaderLoc=(HeaderLoc)=>{return HeaderLoc;}//Fetching HeaderLoc in App
Header header=new Header();
existsByHeader(header){if(header.length!=null)getHeader(header);else getHeader(null);}//Checking Header's Existence in App #1
updatebyHeader=(header)=>{getHeader(header)+setHeader(header)+1;}////Updating Header in App
setHeader=(header)=>{this.header=header;}//binding Header in App
getHeader=(header)=>{return header;}//Fetching Header in APp
Header(initial,transition,whileInView){
    const headerId=null;
    const headerName=null;
    const initial=0;
    const transition=1;
    const whileInView=1;
    this.headerId=headerId;
    intial=0;
    this.initial=initial;
    this.transition=transition;
    this.whileInView=whileInView;
    }
const setHeaderId=(headerId)=>{this.headerId=headerId;}//Binding HeaderId In App
const getheaderId=(headerId)=>{return headerId;}
const updateByheaderId=(headerId)=>{getheaderId(headerId)+setHeaderId(headerId)+1;}//UpdatingHeaderId in App
const setheaderName=(headerName)=>{this.headerName=headerName;}//binding HeaderName in App
const getHeaderName=(headerName)=>{return headerName;}//Fetching HeaderName in App
const getTransition=(transition)=>{return transition;}//Fetching Transition in Server
const updateByheaderName=(headerName)=>{getHeaderName(headerName)+setheaderName(headerName)+1;}//Updating headerName in App
const existsByheaderName=(headerName)=>{getHeaderName(headerName)+setheaderName(headerName)+1;}//Checking HeaderName's Existence in App
const setWhileInView(whileInView){
     this.whileInView=whileInView;}
         const setTransition=(transition)=>{this.transition=transition;}
const getWhileInView(whileInView){
    return whileInView;}
    const updateAllByWhileInView=(WhileInView)=>{getWhileInView(whileInView)+setWhileInView(whileInView)+1;}//updateAllByWhileInView method declare
        }
    const updateAllBytransition=(transition)=>{getTransition(transition)+setTransition(transition)+1;}//updating Transition in App
    const existsBytransition=(transition)=>{if(transition>0)getTransition(transition);else getTransition(0);}
    const existsByWhileInView=(whileInView)=>{if(whileInView>0)getWhileInView(whileInView);else getWhileInView(0);}//Checking WhileInView in App
const getTransition(transition){
    Header.transition=useState(true)+AboutUs.getCardsToShow(ProductsData.length); }
        const updateAllBytransition= (transition)=>{getTransition(transition)+setTransition(transition)+1;}//Updating All Transition in App
        return Header.transition;}
        const getInitial(initial){return initial;}
        const setInitial(Initial initial){this.initial;}
        const updateByInitial=(Initial)=>{getInitial(Initial)+setInitial(Initial)+1;}//Updating Initial In App
        const updateAllBytransition=(Transition transition)=>{getTransition(transition)+setTransition(transition)+1;}//Updating Transition in app
        const existsByInitial=(intial)=>{if(initial>0)getInitial(initial);else getInitial(0);}//Checking Initial's Existence in App
    <div>
        <motion.div
            initial={{opacity:0,y:100}}
            transition={{duration:1.53}}
            whileInView={{opacity:0,y:1.0}}
            ></motion.div></div>

//     const setTransition=(transition)=>{
//         Header.transition=useState(true)+AboutUs.setCardsToShow(ProductsData.length);//binding Transition in App
//         }
