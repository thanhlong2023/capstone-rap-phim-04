import React from "react";
type Rap = {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
};
type Props = {
  heThongRap: Rap[];
};
function HeThongRap(props: Props) {
  return (
    <div>
      {props.heThongRap.map((item, index) => {
        return (
          <div key={index} className="my-3">
            <img src={item.logo} alt={item.tenHeThongRap} />
          </div>
        );
      })}
    </div>
  );
}

export default HeThongRap;
