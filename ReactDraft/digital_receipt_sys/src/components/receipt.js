import CaretIcon from './Caret.svg';
import './receipt.css';
const  ReceiptSummaryBox: React.VFC = (props) => {
    return (
      <div className="receipt-summary-box">
          <p className="text-3">Invoice no: {props.no}</p>
          <div className="right">
            <p className="text-4">Date/time: {props.date}</p>
            <p className="text-5">total:{props.price}</p>
        </div>
        <div className='img-4'>
            <img src={CaretIcon} />
        </div>
      </div>
    )
  }

  export default ReceiptSummaryBox /* So that others files can use this*/