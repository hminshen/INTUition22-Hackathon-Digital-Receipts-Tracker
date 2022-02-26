# Importing Database
from database import Base, engine
from sqlalchemy import Column, String, Integer, Float, JSON

#representing the database table in python
#creating a table within the database
class DBMember(Base):
    __tablename__ = 'members'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    school = Column(String)
    graduation_year = Column(Integer)

#Creating a table for reciepts in the database
class DBReciept(Base):
    __tablename__ = 'reciepts'

    id = Column(Integer, primary_key=True, index=True)
    itemList = Column(JSON)
    dateTime = Column(String)
    total_price = Column(Float)

# Create the table
Base.metadata.create_all(bind=engine)