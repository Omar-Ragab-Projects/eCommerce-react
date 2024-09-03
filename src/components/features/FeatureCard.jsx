import React from "react";

function FeatureCard(props) {
  return (
    <div className="feature-card flex items-center gap-4 dark:text-brandWhite flex-1 min-w-[300px] mobile:flex-col text-center">
      <div className="icon text-primary text-[40px]">{props.icon}</div>
      <div className="content">
        <h3 className="font-bold text-xl">{props.title}</h3>
        <p className="text-gray-500 text-sm">{props.content}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
