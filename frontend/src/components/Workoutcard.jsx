import { BsFillTrash3Fill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
const Workoutcard = ({data}) => {
    return (
        <>
            <div className="bg-white shadow-md p-5 px-10 rounded-lg">
                <div className="flex">
                    {/* workouts */}
                    <div className="flex-1 flex-col inline-flex justify-center items-start">
                         <span className="font-semibold text-xl text-green-600">{data.title}</span>
                         <span>Weight(kg):{data.weight}</span>
                         <span>Reps:{data.reps} </span>
                         <span>Created:{data.createdAt}</span>
                    </div>
                    {/*delete button*/}
                    <div className="inline-flex flex-col items-center justify-center">
                    <button className="cursor-pointer bg-gray-100 p-2 rounded-full text-red-500 hover:text-red-600 hover:bg-gray-800"><BsFillTrash3Fill /></button>
                    <button className="cursor-pointer bg-gray-100 p-2 rounded-full text-green-500 hover:text-green-600 hover:bg-gray-800"><FaPencilAlt/></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Workoutcard;