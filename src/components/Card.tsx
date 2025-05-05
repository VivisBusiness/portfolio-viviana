import { CardProps } from "../types/Card.types";

const Card = ({ title, description, url, buttonText }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-xl font-bold text-purple-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-700 mb-4 min-h-28">
        {description}
      </p>
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="border rounded px-4 py-2 text-sm transition border-purple-800 text-purple-800 hover:bg-purple-50"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
