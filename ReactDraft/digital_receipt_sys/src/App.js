import Nav_bar from './components/layout';
import ReceiptSummaryBox from './components/receipt';
import './App.css';
import {useState, useEffect} from 'react';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [LoadedReceipts, setLoadedReceipts] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://127.0.0.1:8000/reciepts').then((response) =>
        response.json().then((data) => {
          setLoadedReceipts(data);
        })
      );
    }, 750);
    return () => clearInterval(interval);
  });
  /*
  useEffect(() => {
    setIsLoading(true);
    fetch('http://127.0.0.1:8000/reciepts/')
    .then((response) => {
      return response.json();
    })
    .then((json )=> setLoadedReceipts(json))
    .catch((error) => console.error(error))
    .finally(() => setIsLoading(false));
  },[]);
  if (isLoading){
    return(
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  */
  return (
    <div>
      <div className = 'new-row'>
        <ReceiptSummaryBox no = '1' item={LoadedReceipts.itemList} date = {LoadedReceipts.dateTime} price = {LoadedReceipts.total_price}/>
        <ReceiptSummaryBox no = '2' item={LoadedReceipts.itemList} date = {LoadedReceipts.dateTime} price = {LoadedReceipts.total_price}/>
        <ReceiptSummaryBox no = '3' item={LoadedReceipts.itemList} date = {LoadedReceipts.dateTime} price = {LoadedReceipts.total_price}/>
      </div>
    </div>
  );
}

export default App;
