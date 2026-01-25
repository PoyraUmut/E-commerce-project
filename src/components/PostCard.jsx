const PostCard = ({
  image,
  title,
  description,
  date,
  comments,
  isNew = false,
}) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col">
      <div className="relative">
        {isNew && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded">
            NEW
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex gap-4 text-sm text-gray-500">
          <span className="text-blue-500">Google</span>
          <span>Trending</span>
          <span>New</span>
        </div>

        <h3 className="font-bold text-lg text-gray-900">
          {title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-auto flex justify-between items-center text-sm text-gray-500 pt-4">
          <div className="flex items-center gap-2">
            🕒
            <span>{date}</span>
          </div>

          <div className="flex items-center gap-2">
            📊
            <span>{comments} comments</span>
          </div>
        </div>

        <a
          href="#"
          className="mt-4 inline-flex items-center gap-2 text-blue-500 font-semibold text-sm"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default PostCard;
