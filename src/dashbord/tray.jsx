import React from "react";

function Tray({ trayItems }) {
  return (
    <>
      {/* {console.log(trayItems2, trayItems1)} */}
      <div className="foo">
        {/* {trayItems} */}
        <table>
          {/* trayItems */}
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Qty</th>
          </tr>
          <tr>
            {trayItems &&
              trayItems.map((ele, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>{ele.item}</td>
                      <td>{ele.total_price}</td>
                      <td>{ele.qty}</td>
                    </tr>
                  </>
                );
              })}

            {/* <td>{trayItems1}</td> */}
          </tr>
          {/* <tr>
            <td>dsd</td>
            <td>dsds</td>
          </tr> */}
        </table>
      </div>
    </>
  );
}

export default Tray;
