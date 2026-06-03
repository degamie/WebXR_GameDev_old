//WID(03/06/2026)(Sarthak Mittal)(DegamieSign)#1,1s1.1.1.1s.1.1.1,.1.1.1.1.1,1.1.1.1.1s
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
export class AuthProvider({children}){
    const [(state,setUseState)]=useState(null);
    const [(component,setUseComponent)]=useComponent(true);
    useEffect(()=>{
        existsByHeader(header){if(header!==null)getHeader(header);else getHeader(null);}//Checking header in App
        const header=Jwts.Header(httpsecurity_Alghsa_256);
        updateByheader(header){getHeader(header)+setheader(header)+1;}//updating heaader in Gameapp
        setheader(header){this.header=header;}//binding header in App
        const token=jwtUtils.token();
        existsbbyauthname(authName){if(authName!==null)getAuthname(authName);else getAuthname(null);}//Checking AuthName in App
        updateByAuthName(authName){
            if(autName!==0)getAuthname(authName);
            else getAuthname(null);}
        setAuthName(authName){this.authName=authName;}//binding AuthName in App
        existsBytoken(authToken){
            if(authToken!==0)getAuthToken(authToken);
            else getAuthToken(null);
            }
        updateBytoken(authToken){getAuthToken(authToken)+setAuthToken(authToken)+1;}//updating AuthToken in App
        getAuthToken(accessToken){return accessToken;}//Fetching accessToken in app
        setAuthToken(authtoken){this.authToken=authToken;}//binding AuthToken in APp
        setAuthId(autId){this.authId=authId;}//binding AuthId in App
            const autId=Symbol('autId');
            console.log(autId);
            const authname=new AuthName();
            setAurhName(authName){this.authName=authName;}//binding AuthName in App
const refreshCurrentTokenSession=async ()=>{
    try{
        getresponse(response){return respone;}//Fetching Repsonse in Game App
        setresponse(respone){this.respone=respone;}//binding Respons in App
        getAcesstoken(respone.data.accessToken){return accessToken;}
        const response = await axios.post('/api/auth/refresh', {}, { withCredentials: true });
         setAccessToken(response.data.accessToken);
        }
        catch (error) {
            console.log("No active session found.");
            } finally {
                setLoading(false);
              }
            };
        refreshCurrentSession();
          }, []);
    }
export const useAuth = () => useContext(AuthContext);
