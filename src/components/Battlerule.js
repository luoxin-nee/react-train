import React from "react";
import styles from "./Battlerule.css";
import Battlegame from "./Battlegame";

class Battlerule extends React.Component {

  render() {
    const {
     
      playone,
      playtwo,
      onecom,
      twocom,
      changone,
      changtwo,
      handelChange1,
      handelChange2,
      handleClick1,
      handleClick2,
      returnClick1,
      returnClick2
    } = this.props;
    return (
      <div className={styles.contentbox}>
        <h1 className={styles.h1style}>Instructions</h1>
        <ul className={styles.ulstyle}>
          <li className={styles.listyle}>
            <p className={styles.pstyle}>Enter two Github users</p>
            <i
              className="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: "150px", color: "orange" }}
            />
          </li>
          <li className={styles.listyle}>
            <p className={styles.pstyle}>Battle</p>
            <i
              className="fa fa-fighter-jet"
              aria-hidden="true"
              style={{ fontSize: "150px" ,color:"red"}}
            />
          </li>
          <li className={styles.listyle}>
            <p className={styles.pstyle}>See the winner</p>
            <i
              className="fa fa-trophy"
              aria-hidden="true"
              style={{ fontSize: "150px", color: "yellow" }}
            />
          </li>
        </ul>
        <h1 style={{ textAlign: "center", marginTop: "150px",fontWeight: "300" }}>Player</h1>
        <div className={styles.playerbox}>
          <Battlegame
            
            playone={playone}
            playtwo={playtwo}
            onecom={onecom}
            twocom={twocom}
            changone={changone}
            changtwo={changtwo}
            handelChange1={handelChange1}
            handelChange2={handelChange2}
            handleClick1={handleClick1}
            handleClick2={handleClick2}
            returnClick1={returnClick1}
            returnClick2={returnClick2}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}
export default Battlerule;
