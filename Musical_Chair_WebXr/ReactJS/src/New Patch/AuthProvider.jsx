//WID(28/05/2026)(Sarthak Mittal)(DegamieSign)#1,1s1.1.1.1s.1.1.1
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
export class AuthProvider({children}){
    const [(state,setUseState)]=useState(null);
    const [(component,setUseComponent)]=useComponent(true);
    useEffect(()=>{
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
        setresponse(respone){this.respone=respone;}//binding Respons in App

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
