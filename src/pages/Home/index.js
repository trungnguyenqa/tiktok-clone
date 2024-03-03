import classname from "classnames/bind";
import { Fragment } from "react";
import TableChart from "~/components/TableChart/TableChart";
import styles from './Home.module.scss'
const cx = classname.bind(styles)

function Home() {
    return (
         <Fragment>
             <h3 className={cx("text-h3")}>Today's Cryptocurrency Prices</h3>
             <TableChart></TableChart>
         </Fragment>
         );
}

export default Home;