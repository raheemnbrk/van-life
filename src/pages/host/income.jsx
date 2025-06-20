import img3 from "../../assets/images/income-graph.png"

export default function Income() {
  const transactionsData = [
    { amount: 720, date: "Jan 3, '23", id: "1" },
    { amount: 560, date: "Dec 12, '22", id: "2" },
    { amount: 980, date: "Dec 3, '22", id: "3" },
  ]
  return (
    <>
      <div className="bg-primary px-8 py-6 space-y-4 ">
        <h1 className="text-3xl font-bold capitalize">Income</h1>
        <p className="text-xl font-medium">Last 30 days</p>
        <h2 className="text-xl font-semibold">$2,260</h2>
        <img
          src={img3}
          alt="Income graph"
          className="w-[500px] mt-6"
        />
        <div className="">
          <h3 className="text-xl font-semibold">Your transactions (3)</h3>
          <p className="text-lg font-semibold">Last 30 days</p>
        </div>
        <div>
          {transactionsData.map((item) => (
            <div key={item.id} className="transaction">
              <h3 className="text-lg font-semibold">${item.amount}</h3>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}