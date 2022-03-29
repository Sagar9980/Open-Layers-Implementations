import React from "react";
import "./Location.css";
import { ReactComponent as Flag } from "Assets/Icons/flag.svg";
const Location = (props: any) => {
  console.log(props.data, "location");
  return (
    <div className="location__container">
      {props?.data &&
        props?.data.map((coordinate: number[], index: number) => {
          return (
            <div className="location__one">
              <div className="location__heading__section">
                <Flag />
                <p className="location__title">Location {index + 1}</p>
              </div>
              <div className="location__detail__section">
                <div className="location__lat">
                  <p className="lattitude">Lat</p>
                  <p className="lat__value">{coordinate[0]}</p>
                </div>
                <div className="location__long">
                  <p className="longitude">Long</p>
                  <p className="long__value">{coordinate[1]}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default Location;
// {/* <div className="location__container">
//       <div className="location__one">
//         <div className="location__heading__section">
//           <Flag />
//           <p className="location__title">Location 1</p>
//         </div>
//         <div className="location__detail__section">
//           <div className="location__lat">
//             <p className="lattitude">Lat</p>
//             <p className="lat__value">37.56755685</p>
//           </div>
//           <div className="location__long">
//             <p className="longitude">Long</p>
//             <p className="long__value">126.97328373</p>
//           </div>
//         </div>
//       </div>
//       <hr />
//     </div> */}
