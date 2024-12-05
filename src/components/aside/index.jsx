import React from 'react'
import style from "./style.module.scss";

const AsidePage = () => {
  return (
    <aside className={`${style.aside} ${style.item2} `}>
      <div className={`${style.aside_asideOne} ${style.aside_first}`}>
        
        <div className="container_spacing">
          <div className={`${style.aside_asideOne_content}`}>

          <div>
            <h2>Most selling products</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
          <div>
            <h2>Recent Orders</h2>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h3></h3>
                <p></p>
              </div>
              <div>
                <span>$850</span>
              </div>
            </div>
          </div>
          </div>

        </div>
        
        <div></div>
        one
      </div>
      <div className={`${style.aside_asideTwo} ${style.aside_sec}`}>two</div>
      <div className={`${style.aside_asideThree} ${style.aside_third}`}>three</div>
    </aside>
  )
}

export default AsidePage