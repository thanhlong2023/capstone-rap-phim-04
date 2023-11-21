import React from "react";

function LichChieuHeThongRap(props: Props) {
  // console.log(props, "1");
  return (
    <>
      <div className="col-5">
        {props.lichChieuHeThongRap.map((item, index) => {
          return (
            <div key={index} className="my-3 d-flex">
              <img
                style={{ width: "100px", height: "100px" }}
                src={item.hinhAnh}
                alt={index}
              />
              <div>
                <p>{item.tenCumRap}</p>
                <p>{item.diaChi}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="col-6">
        {props.lichChieuHeThongRap.map((item, index) => {
          return (
            <div key={index} className="my-3 d-flex">
              <img
                style={{ width: "100px", height: "100px" }}
                src={item.hinhAnh}
                alt={index}
              />
              <div>
                <p>{item.tenCumRap}</p>
                <p>{item.diaChi}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default LichChieuHeThongRap;
