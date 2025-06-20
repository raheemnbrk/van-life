import { BsStarFill } from "react-icons/bs"
import img4 from '../../assets/images/reviews-graph.png'

export default function Review() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
  ]

  return (
    <>
      <div className="px-8 py-6 sapce-y-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your reviews</h2>
          <p className="text-lg font-semibold">Last 30 days</p>
        </div>
        <img
          className="w-[500px] mt-8"
          src={img4}
          alt="Review graph"
        />
        <h3 className="text-xl font-bold mt-4">Reviews (2)</h3>
        {reviewsData.map((review) => (
          <div key={review.id}>
            <div className="space-y-8">
              <div className="flex mt-4">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </div>
              <div>
                <p>{review.name}</p>
                <p>{review.date}</p>
              </div>
              <p>{review.text}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </>
  )
}