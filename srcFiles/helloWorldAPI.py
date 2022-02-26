from fastapi import FastAPI #importing the lib

app = FastAPI() #Creating an instance of FastAPI

@app.get("/") #decorator --> 
              #calling the http method "get", and indicate the endpoint (in this case it is empty)
async def root(): #creating a function tha returns a json message "hello world"
    return {"Message": "Hello World"}

