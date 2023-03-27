import React from 'react';
import { LoginResponse } from '../Models/LoginResponse'
import axios from 'axios';
import ApiRoute from '../Services/Routes'


export const handleReject = async (user,friend) => {
    
    try {
        const response = await axios.post(`${api}Friends/DeclineRequest`,{
            Requester: friend,
            Requested: user
          });
        if (response.data.success) {
            const result = new LoginResponse(response.data.success,response.data.message);
            return result;
        } else {
            const result = new LoginResponse(response.data.success,response.data.message);
            return result;
        };
        
    } catch (error) {
        const result = new LoginResponse(false, "Ocurrio un problema en la peticion");
        return result;
    }
    
}

export const handleAccept = async (user,friend) => {
    
    try {
        const response = await axios.post(`${api}Friends/AcceptFriend`,{
            Requester: friend,
            Requested: user
          });
        if (response.data.success) {
            const result = new LoginResponse(response.data.success,response.data.message);
            return result;
        } else {
            const result = new LoginResponse(response.data.success,response.data.message);
            return result;
        };
        
    } catch (error) {
        const result = new LoginResponse(false, "Ocurrio un problema en la peticion");
        return result;
    }
    
}

const api = ApiRoute;
