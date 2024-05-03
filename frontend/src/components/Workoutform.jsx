const Workoutform = () => {
    return (
        <>
            <div>
                <h3>Add work out</h3>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm text-gray-900 dark:text-white">Exercise name</label>
                        <input type="text" id="title" className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Push up" required />
                    </div>
                    <div>
                        <label htmlFor="reps" className="block mb-2 text-sm text-gray-900 dark:text-white">Reps</label>
                        <input type="number" id="reps" className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="10" required />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block mb-2 text-sm text-gray-900 dark:text-white">Weight(kg)</label>
                        <input type="number" id="weight" className="border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="10" required />
                    </div>
                    <div className="flex justify-end">
                    <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add workout</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Workoutform;