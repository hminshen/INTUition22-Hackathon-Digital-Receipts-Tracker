# Imports
from fastapi import FastAPI, Depends
from pydantic import BaseModel
from typing import List, Optional
from database import SessionLocal
from schema import DBMember, DBReciept
from sqlalchemy import desc, asc
from sqlalchemy.orm import Session
#from datetime import datetime

# Create a FastAPI Instance
app = FastAPI()

# Database Dependency
# Create a session for a request.
# Creating a session so that we can connect to the database for every request
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
        

# Pydantic library is used to perform data validation and data object creation
# Data validation and settings management using python type annotations.
# Can use this to store the reciept classes and members unique ID
class Member(BaseModel):
    name: str
    school: str
    graduation_year: int
    
    # Allow ORM fetch
    class Config:
        orm_mode = True

class Reciept(BaseModel):
    itemList: dict
    dateTime : str
    total_price: float
    

    # Allow ORM fetch
    class Config:
        orm_mode = True


#Methods for interacting with reciepts in the SQLite Database (functions used to manipulate the database)
def get_reciept(db: Session, reciept_id: int):
    return db.query(DBReciept).where(DBReciept.id == reciept_id).first()

def get_reciepts(db: Session, sort_by: str):
    if(sort_by == 'desc'):
        return db.query(DBReciept).all() #order_by(desc(DBReciept.itemName)).all() # no need to sort reciepts
    elif(sort_by == 'asc'):
        return db.query(DBReciept).all() #order_by(asc(DBReciept.itemName)).all()
    else:
        return db.query(DBReciept).all()

def create_reciept(db: Session, reciept: Reciept): #Helper func to add to database --> can just make use of a list as well (ie. list.append)
    db_reciept = DBReciept(**reciept.dict())
    db.add(db_reciept)
    db.commit()
    db.refresh(db_reciept)

    return db_reciept

#API Routes for reciepts

@app.post('/reciepts/', response_model=Reciept) #Post request to add a reciept, Response type: Reciept
def create_reciepts_view(reciept: Reciept, db: Session = Depends(get_db)): #Create a function that takes in member to add and the database to add to
    db_reciept = create_reciept(db, reciept)
    return db_reciept #response is the member that you added

@app.get('/reciepts/', response_model=List[Reciept])
def get_reciepts_view(db: Session = Depends(get_db), sort_by: Optional[str] = None):
    return get_reciepts(db, sort_by)

@app.get('/reciept/{reciept_id}')
def get_reciept_view(reciept_id: int, db: Session = Depends(get_db)):
    return get_reciept(db, reciept_id)
# --------------------------------------------------------------

# Methods for interacting with the SQLite Database (functions used to manipulate the database)
# ------------------------------------------------
def get_member(db: Session, member_id: int):
    return db.query(DBMember).where(DBMember.id == member_id).first()

def get_members(db: Session, sort_by: str):
    if(sort_by == 'desc'):
        return db.query(DBMember).order_by(desc(DBMember.name)).all()
    elif(sort_by == 'asc'):
        return db.query(DBMember).order_by(asc(DBMember.name)).all()
    else:
        return db.query(DBMember).all()

def create_member(db: Session, member: Member): #Helper func to add to database --> can just make use of a list as well (ie. list.append)
    db_member = DBMember(**member.dict())
    db.add(db_member)
    db.commit()
    db.refresh(db_member)

    return db_member
# ------------------------------------------------

# API Routes for members
# ------------------------------------------------
@app.post('/members/', response_model=Member) #Post request to add a member, Response type: Member
def create_members_view(member: Member, db: Session = Depends(get_db)): #Create a function that takes in member to add and database to add to
    db_member = create_member(db, member)
    return db_member #Response is the added member

@app.get('/members/', response_model=List[Member])
def get_members_view(db: Session = Depends(get_db), sort_by: Optional[str] = "desc"):
    return get_members(db, sort_by)

@app.get('/member/{member_id}')
def get_member_view(member_id: int, db: Session = Depends(get_db)):
    return get_member(db, member_id)
# ------------------------------------------------