import { Fragment } from "react";
import CoinInfo from "../CoinInfo/CoinInfo";
import classname from "classnames/bind";
import styles from "./TableChart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

const cx = classname.bind(styles);
const dataListCoin = [
  {
    name: "BTC",
    image: "~/asset/icon/btc.svg",
    price: "55,206.61",
    percentOneDayChange: "0.92",
    isOneDayUp: true,
    percentOneWeekChange: "15,56",
    isOneWeekChange: true,
    marketCap: "1,046,899,953,348",
    volumeOneDay: "1,046,899,953,348",
    btcSize: "653,452",
  },
  {
    name: "ETH",
    image: "~/asset/icon/eth.svg",
    price: "55,206.61",
    percentOneDayChange: "0.92",
    isOneDayUp: false,
    percentOneWeekChange: "15,56",
    isOneWeekChange: true,
    marketCap: "1,046,899,953,348",
    volumeOneDay: "1,046,899,953,348",
    btcSize: "653,452",
  },
  {
    name: "ADA",
    image: "~/asset/icon/ada.svg",
    price: "55,206.61",
    percentOneDayChange: "0.92",
    isOneDayUp: false,
    percentOneWeekChange: "15,56",
    isOneWeekChange: false,
    marketCap: "1,046,899,953,348",
    volumeOneDay: "1,046,899,953,348",
    btcSize: "653,452",
  },
];

function TableChart() {
  return (
    <div className={cx("table-chart")}>
        <div className={cx("nav-coin-info")}>
          <div className="nav-cl-icon">
            # <FontAwesomeIcon icon={faCaretUp} className="fa-xs" />
          </div>
          <div className="nav-cl-coin-info">Name</div>
          <div className="nav-cl-coin-info">24h %</div>
          <div className="nav-cl-coin-info">7d %</div>
          <div className="nav-cl-coin-info">Market Cap</div>
          <div className="nav-cl-coin-info">Volume(24h)</div>
          <div className="nav-cl-coin-info">Last 7 Days</div>
      </div>
      {
      dataListCoin.map((item, index) => {
        return (
          <CoinInfo key={index} data={item} />

        )
    })}
    </div>


  );
}

export default TableChart;
