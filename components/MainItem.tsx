import React from "react";

type Props = {
  icon: React.ReactNode;
  title: String;
  infoList: String[];
};

const MainItem = ({ title, infoList, icon }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-5">
        {icon}
        <h2>{title}</h2>
      </div>
      <div className="space-y-2 ">
        {infoList.map((item, index) => (
          <div key={index} className="infoText">
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainItem;
