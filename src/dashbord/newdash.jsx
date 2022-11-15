import axios from "axios";
import React from "react";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { maxWidth } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";

// function Tray({ trayItems }) {
//   return (
//     <>
//       <div className="foo">
//         <table>
//           <tbody>
//             {trayItems &&
//               trayItems.map((ele, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{ele.item}</td>
//                     <td>{ele.price}</td>
//                     <td>{ele.qty}</td>
//                   </tr>
//                 );
//               })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// }

export default function App() {
  const [item, setitem] = useState([]);
  const [trayItems, settrayItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/lost`).then((res) => {
      console.log(res.data);
      setitem(res.data);
      // let count= res.data.length;
      //   setcount(res.data.length);
    });
  }, []);

  console.log(trayItems);
  const handleCheckClick = (ele) => {
    const dupe = trayItems.find((obj) => obj.user_id === ele.user_id);
    settrayItems(
      dupe
        ? trayItems.map((item) => {
            if (item.qty > 0) return item;
            return {
              ...item,
              qty: item.qty + 1,
            };
          })
        : [...trayItems, { ...ele, qty: (ele.qty = 1) }]
    );
  };

  const incre = (idd) => {
    settrayItems(
      trayItems.map((stat) =>
        stat.user_id === idd ? { ...stat, qty: stat.qty + 1 } : stat
      )
    );
  };

  const handleTotal = () => {
    // reduce will add all of your price and set a default value in case the items is empty
    return trayItems.reduce(
      (acc, curr) => Number(acc) + curr.qty * Number(curr.price),
      0
    );
  };

  const decre = (idd) => {
    settrayItems(
      trayItems.map((stat) =>
        stat.user_id === idd
          ? {
              ...stat,
              qty: stat.qty !== 1 ? stat.qty - 1 : (stat.qty = 0),
            }
          : stat
      )
    );
  };

  function Tray({ trayItems }) {
    return (
      <>
        <div className="foo">
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Price</th>

                <th>Quantity</th>
                <th>Total price</th>
              </tr>
              {trayItems &&
                trayItems.map((ele, index) => {
                  if (ele.qty > 0) {
                    return (
                      <tr key={index}>
                        <td>
                          <p style={{ cursor: "pointer", maxWidth: "174px" }}>
                            {" "}
                            {ele.item}
                          </p>
                        </td>
                        <td>{ele.price}</td>
                        <td>
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => incre(ele.user_id)}
                          >
                            +
                          </Button>

                          {ele.qty}
                          <Button
                            variant="contained"
                            size="small"
                            onClick={() => decre(ele.user_id)}
                          >
                            -
                          </Button>
                        </td>
                        <td>&nbsp;&nbsp; {ele.qty * ele.price}&nbsp;&nbsp;</td>
                      </tr>
                    );
                  }
                })}
            </tbody>
          </table>
          <h3>
            {`Total Amount  ${handleTotal()}`}&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" size="medium" endIcon={<SendIcon />}>
              {" "}
              Print Bill
            </Button>
          </h3>{" "}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="rowgrid">
        {item &&
          item
            .filter((person) => person.status === 0)
            .map((ele, index) => {
              return (
                <div
                  style={{ cursor: "pointer" }}
                  key={index}
                  className="newmo-card"
                  onClick={() => handleCheckClick(ele)}
                >
                  {ele.item}
                  <br />
                  <br />
                  <span> {ele.price}</span>
                </div>
              );
            })}
      </div>
      <Tray trayItems={trayItems} />
    </>
  );
}
