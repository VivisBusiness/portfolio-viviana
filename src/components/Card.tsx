import { CardProps } from "../types/Card.types";

const Card = ({ title, description, url, buttonText }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold text-purple-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-700 mb-4">
        {description}
      </p>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;