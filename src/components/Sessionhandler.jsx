import React,{Component} from 'react';
import cookie from 'react-cookies';

export function sessionHandle(response){
    console.log(response, "response");
    debugger;

    cookie.save('auth',response["x-user-auth-token"]);
    cookie.save('jwt',response["x-user-jwt-token"]);


}

export function header(){

return{

    "X-USER-AUTH-TOKEN": cookie.load('auth'),
    "X-USER-JWT-TOKEN" : cookie.load('jwt')
};

}