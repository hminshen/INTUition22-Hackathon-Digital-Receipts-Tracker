# **Digital Receipts Tracker**

This project is a proof of concept that aims to tackle the problem of unwanted physical receipts with the following features:
- A POS system with the ability to record orders and generate digital receipts
- A website/app that displays each user's list of digital receipts, with the option of viewing details of each transaction.

To showcase the proof of concept, I made use of the following:
- Python to simulate a POS system with a basic CRUD interface
- Python FastAPI library to create the API interface and define routes for the API calls
- Python SQLite3 library to create a database to store the transaction details
- ReactJS to create a webpage to display the digital receipts and the details of each transaction, which simulates an app

## Notes:
### The following 3 need to be start up to simulate the full Digital Receipts Tracker System

1. POS System:
Run the pos.py file to start up the POS system

2. API Interface:
In the main project folder, run the following commands in the terminal:
- source env/bin/activate
- cd srcFiles
- uvicorn main:app --reload

This starts the API interface which would allow you to make API calls to it

3. Webpage Display:
Open the terminal and navigate to the reactpart folder before performing an "npm run start" to start the webpage


Also, possible additions/improvements to add more functionalities/style in future
