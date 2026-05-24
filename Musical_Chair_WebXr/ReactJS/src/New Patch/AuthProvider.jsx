//WID(24/05/2026)(Sarthak Mittal)(DegamieSign)#1,1s1.1
import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
export class AuthProvider({children}){
    const [(state,setUseState)]=useState(null);
    const [(component,setUseComponent)]=useComponent(true);
    useEffect(()=>{
            const autId=Symbol('autId');
            console.log(autId);
            const authname=new AuthName();
            setAurhName(authName){this.authName=authName;}//binding AuthName in App
const refreshCurrentTokenSession=async ()=>{
    try{

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
