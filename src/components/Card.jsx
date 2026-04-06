export default function Card({ image, title, description }) {
    return (
        <div className="w-[300px] bg-white rounded-xl shadow-xl text-center overflow-hidden">
            <img
                src={image}
                alt={title}
                className="w-full h-[200px] object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">{title}</h2>

            <p className="text-gray-600 px-4 pb-6">
                {description}
            </p>
        </div>
    )
}
