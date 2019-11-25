# Self-signed SSL Certificate Request

This demo is to show how to set up a Machine to Machine client -> server API request where the Server is using a Self-Signed Certificate.

## Folders
* Certificate: contains the Certificate and key
* client: Client app that requests data from the API 
* server: API which uses a self signed SSL cert

## To Run

1. Git clone this repo
1. Run install the dependencies for the `client` and `server` folders
3. In a terminal start the Server:   
     
       cd server
       yarn start
4. In another terminal tab, run the client

       cd client
       yarn start

5. There are 3 requests to the API
    * First as a normal http request
    * Second as a `https` request
    * Third as a `https` request with the SSL certificate attached to the request options.
    
References: 
* [Node.js and Self-signed SSL Certificates](https://community.apigee.com/articles/28041/nodejs-and-self-signed-ssl-certificates.html)
* [Create A Self-Signed Certificate For Node.js On MacOS](https://www.thepolyglotdeveloper.com/2018/11/create-self-signed-certificate-nodejs-macos/)
