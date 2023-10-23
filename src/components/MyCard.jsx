import React, { useState } from "react"

const MyCard = ({data,loading}) => {

  const [selectedCard,setselectedCard] = useState(0)

  return (
    <div className={`bg-white w-max flex-1 flex flex-col gap-5 p-6 rounded-xl shadow-lg max-xl:p-5 max-lg:p-4 max-lg:gap-4 ${loading && 'animate-pulse'}`}>
      <h1 className="text-xl font-semibold text-dark-blue // max-lg:text-lg">My Card</h1>

      {/* cards */}
      <div className=" border-b-2">

        <div className="w-full rounded-xl px-7 py-5 flex flex-col gap-12 bg-cover bg-center // max-lg:p-4" style={{backgroundImage:'url(/icon/blob.svg)'}}>
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-base text-white // max-lg:text-sm">Name Card</h2>
              <h1 className="text-xl font-medium text-white // max-lg:text-lg">{data && data[selectedCard]?.name}</h1>
            </div>
            <img src="/icon/gallery.svg" alt="" className="w-6" />
          </div>
          <div className="flex flex-col items-end">
            <p className="text-2xl font-semibold text-white // max-lg:text-xl">{data && data[selectedCard]?.number}</p>
            <p className="text-base text-white // max-lg:text-sm">{data && data[selectedCard]?.exp}</p>
          </div>
        </div>

        {/* nav */}

        <ul className="flex flex-row gap-2 my-5 // max-lg:my-4">
          {data?.map((value,index) => {
            return (
              <li 
                className={selectedCard == index ? "w-12 h-4 bg-primary-blue rounded-2xl cursor-pointer" : "w-4 h-4 bg-slate-300 hover:bg-slate-400 rounded-full cursor-pointer" }
                key={index}
                onClick={()=>setselectedCard(index)}
              />
            )
          })}
        </ul>

      </div>

      <div className="flex flex-row justify-between">
        <div>
          <h1 className="text-xl font-semibold text-dark-blue // max-lg:text-lg">Transaction History</h1>
          <p className="text-base font-medium text-[#aaa] // max-lg:text-sm">{data && data[selectedCard]?.current_month} {data && data[selectedCard]?.current_year}</p>
        </div>
        <button className="text-base font-medium text-primary-blue cursor-pointer // max-lg:text-sm ">See All</button>
      </div>

      <div className="flex flex-col gap-3">
      {data && data[selectedCard]?.history_monthly?.length > 0 ? (
        data[selectedCard]?.history_monthly.map((value, index) => (
          <div className="flex flex-row justify-between p-4 rounded-xl bg-[#f0f0f0] items-center" key={index}>
            <div>
              <h2 className="text-base font-semibold text-dark-blue // max-lg:text-sm">{value.description}</h2>
              <p className="text-base text-[#aaa] // max-lg:text-sm">{value.date}</p>
            </div>
            <div>
              <h1
                className={
                  value.category === 'income'
                    ? "text-xl text-[#7DD97B] font-semibold // max-lg:text-lg"
                    : "text-xl text-[#F3735E] font-semibold // max-lg:text-lg"
                }
              >
                ${value.amount}
              </h1>
            </div>
          </div>
        ))
        ) : (
        <p className="text-center mt-4">No Transaction</p>
      )}
      </div>

    </div>
  )
};

export default MyCard;
