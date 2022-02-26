#POS file that performs the following functions:
# - Collect order from the customer
# - Collate the order into a reciept, to store into a database via post
import requests
import json
from datetime import datetime


url = "http://127.0.0.1:8000/reciepts/" #place to make the api calls
flagToDo = ""

while flagToDo.upper() != "E":
    flagToDo = input("""\nWhat do you want to do? Choose from the following option:
        E - Exit
        A - Add
        S - Show List in Database
        D - Delete an entry
        U - Update an entry
    >> """)
    if flagToDo.upper() == "A": 
        order = {} 
        total_price = 0
        flagOrder = "N"
        while flagOrder.upper() != "Y":
            item_Name = input("What item would you like to order? ")
            itemQty = int(input("Quantity to purchase? "))
            itemPrice = float(input("What is the price of your item? "))
            item_list = [itemQty, itemPrice]
            order[item_Name] = item_list
            total_price = total_price + (itemPrice*itemQty)
            flagOrder = input("Do you want to proceed to payment? If yes, press Y, else press any other key ")

        # datetime object containing current date and time
        now = datetime.now()
        # dd/mm/YY H:M:S
        dt_string = now.strftime("%d/%m/%Y %H:%M:%S")
        total_price = round(total_price,2)
        payload = json.dumps({
            "itemList": order,
            "dateTime": dt_string,
            "total_price": total_price
        })
        headers = {
            'Content-Type': 'application/json'
        }

        response = requests.request("POST", url, headers=headers, data=payload)

        print(response.text)
    elif flagToDo.upper() == "S":
        headers = {
            'Content-Type': 'application/json'
        }

        response = requests.request("GET", url, headers=headers, data=payload)

        print(response.text)