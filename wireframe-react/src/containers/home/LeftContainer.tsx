import React, { useState, FC } from "react";

const LeftContainer: FC = () => {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const handleClick = () => {
    setIsClosed(!isClosed);
  };

  return (
    <div
      className={`${
        isClosed ? "w-20" : "w-72"
      } h-full bg-neutral-900 flex justify-center transition-all duration-200`}
    >
      <div className="cursor-pointer" onClick={handleClick}>
        {isClosed ? "Open" : "Close"}
      </div>
    </div>
  );
};

export default LeftContainer;
