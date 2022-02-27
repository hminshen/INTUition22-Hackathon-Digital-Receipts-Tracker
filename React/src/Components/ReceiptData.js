import "./TableData.css";

function ReceiptData(props) {
  var unit = "";
  var dcolour = "black";
  return (
    <div className="box">
      <label className="title">{props.itemList}</label>
      <div className="valuebox">
        <label className="val " style={{color: dcolour}}>{props.total_price}</label>
      </div>
    </div>
  );
}

export default TableData;
