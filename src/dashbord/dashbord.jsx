import React from "react";
import axios from "axios";
import Tray from "./tray";
import { useState, useEffect } from "react";
export default function Dashbord() {
  const [item, setitem] = useState();
  const [count, setcount] = useState();
  // const [trayItems, setTrayItems] = useState(
  //   item.reduce((prev, curr) => {
  //     return {
  //       ...prev,
  //       [curr.user_id]: { item: curr.item, quantity: 0, price: curr.price },
  //     };
  //   }, {})
  // );

  // const handleCheckClick = (ele) => {
  //   setTrayItems((prev) => {
  //     return {
  //       ...prev,
  //       [ele.user_id]: {
  //         ...prev[ele.user_id],
  //         quantity: prev[ele.user_id].quantity + 1,
  //       },
  //     };
  //   });
  // };

  // function handleCheckClick(ele) {
  //   if (trayItems?.length > 0) {
  //     settrayItems(
  //       trayItems.map((item) => {
  //         return { ...item, qty: item.qty + 1 };
  //       })
  //     );
  //   } else {
  //     settrayItems([...trayItems, ele]);
  //   }
  // }
  // console.log(trayItems, trayPrice);
  useEffect(() => {
    axios.get(`http://localhost:8000/api/lost`).then((res) => {
      console.log(res.data);
      setitem(res.data);
      // let count= res.data.length;
      setcount(res.data.length);
    });
  }, [count]);
  return (
    <>
      <div className="flex-display ">
        {count}
        {item &&
          item
            .filter((person) => person.status == "0")
            .map((ele) => {
              return (
                <div
                  className="newmo-card"
                  style={styles.innerbox}
                  // onClick={(e) => handleCheckClick(ele)}
                >
                  {`${ele.item}`}
                  <br />
                  <span> {`${ele.total_price}`}</span>
                </div>
                // <tr>
                //   <td>{`${ele.item}`} </td>

                //   <td> null</td>
                //   {/* <td>
                //             <button>Notes</button>
                //           </td> */}
                // </tr>
              );
            })}
      </div>
      {/* <Tray trayItems={trayItems} /> */}
    </>
  );
}
const styles = {
  innerbox: {
    padding: "10px 0px",
    margin: "25px",
    float: "left",
    width: "140px",
    height: "118px",
  },
};
