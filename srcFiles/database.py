from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, sessionmaker

# Database configuration -- creating a database within python

# Database Setup
SQLALCHEMY_DATABASE_URL = 'sqlite:///db.sqlite3'
engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True, future=True)

# Initialize Session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Construct Base Class
Base = declarative_base()