import { useEffect, useState } from "react";
import "./App.css";
import TableData from "./Components/TableData.js";
import tabData from "./tableData.json";

const serverName = "http://192.168.31.241";

function App() {
  var http = require('follow-redirects').http;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': '127.0.0.1',
  'port': 8000,
  'path': '/reciepts/',
  'headers': {
  },
  'maxRedirects': 20
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
  const [ReceiptData, setReceiptData] = useState(req);
  const Nav_bar: React.VFC = () => {
    return (
      <div className="nav--bar">
        <div className="backdrop" />
        <p className="text-1">Minshen</p>
        <div className="login-icon">
          <img src="" />
        </div>
        <p className="text-2">Digital Receipt System</p>
        <div className="logo" />
        <img src="" />
      </div>
    )
  }
  
  
  

  return (
    <div className="App">
      <div className="header">Digital Receipt System</div>
      {ReceiptData.map(({itemList, dateTime, total_price}) => (
          <div className="newRow">
          <ReceiptData name="itemList" data={itemList} />
          <ReceiptData name="dateTime" data={dateTime} />
          <ReceiptData name="total_price" data={total_price} />
          </div>
        ))}
    </div>
  );
}

export default App;
