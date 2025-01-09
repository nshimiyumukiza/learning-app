const courses=[

  {    "id":1,
    "name":"introduction",
    "overview":"this course introduce learns to the physiology of a human being",
    "instructor":"john deo",
    "price":"12.99",
    "currency":"USD",
    "tags":["biology","science","anatomy"]
},
{    "id":2,
    "name":"parctical aviation",
    "overview":"learn evry thing you need to know to be able to fly an ail plane",
    "instructor":"ishimwe gizere",
    "price":"192.99",
    "currency":"EUR",
    "tags":["airplane","plote"]

},
{    "id":3,
    "name":"accounting",
    "overview":"for better tommor learning for easy ways",
    "instructor":"nshimiyumukiza erneste",
    "price":"292.59",
    "currency":"uk",
    "tags":["html","react&jsx"]
}
]
import Course from "./Course";
const CousesList = () => {
  console.log(courses)
  return (
    <div className="flex mx-auto bg-gray-400 text-center pb-5 px-10 justify-between space-x-4 pt-5">
      {courses.map(Course =>
        <div className=" border border-black rounded-lg pt-5 space-x-4">
          {<div>
            <p className="text-2xl font-bold text-center">{Course.name}</p>
            <p className="text-lg pt-2">{Course.overview}</p>
            <p className="">{Course.instructor}</p>
            <p className="flex justify-end text-clip p-2">{Course.price}</p>
            <p className="flex justify-end pt-2 p-2">{Course.currency}</p>
            <ul className="flex space-x-4 p-4 ">{Course.tags.map(tag =>(
              <li className="border rounded-full bg-gradient-to-r from-pink-500 to-green-500 hover:text-white 
              p-4" key={tag}>{tag}</li>
            ))}</ul>
          </div>
          }
         <a href="" className="border rounded-xl text-center flex justify-center p-3 m-5 bg-gradient-to-r from-green-400 to-blue-400">read more</a>
        </div>
       
      )}


    </div>
  )
}

export default CousesList;
