import classname from "classnames/bind";
import styles from "./CoinInfoStyle.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const cx = classname.bind(styles);

function CoinInfo(props) {
    console.log(props.data)
    let color = "#000000"
    if(props.data.isOneDayUp == false){
      color = "red"
    }
  return (
    
    <div className={cx("coin-info")} >
        <div ><FontAwesomeIcon icon={faStar} className="fa-solid fa-xs icon-with-border"/></div>
       <h1 style = {{color:color}}>{props.data.name} </h1>
    </div>
  );
}

export default CoinInfo;
