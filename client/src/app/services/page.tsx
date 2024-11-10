
let serviceCount = 2;

export default function Services() {
    return (
        <div className="">
            <h1>{`Great job! You have registered ${serviceCount} services`}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add Service
            </button>
        </div>
    )
}