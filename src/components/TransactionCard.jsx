import React from "react"

const TransactionCard = ({ name, email }) => {
  return (
    <div className="min-w-fit p-3 flex flex-row items-center justify-between gap-3 rounded-lg bg-[#f0f0f0] max-lg:p-2 max-lg:gap-2">
      <img src="/icon/default-profile.svg" alt="" className="w-8" />
      <div className="flex flex-col ">
        <h1 className="text-base font-semibold text-[#064061] max-lg:text-sm">{name}</h1>
        <h2 className="text-[#aaa] text-xs max-lg:text-[10px]">{email}</h2>
      </div>
    </div>
  );
};

export default TransactionCard;
