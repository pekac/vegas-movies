export interface IMovieContent {
  overview: string;
  rating: number;
  releaseDate: string;
  title: string;
}

const MAX_LENGTH = 217;

export function MovieContent({
  overview,
  rating,
  releaseDate,
  title,
}: IMovieContent) {
  const summary =
    overview.length < MAX_LENGTH
      ? overview
      : `${overview.substring(0, MAX_LENGTH - 3)}...`;
  return (
    <>
      <h1 className="pt-2 text-lg font-normal text-gray-100 text-ellipsis overflow-hidden">
        {title}
      </h1>
      <p className="my-1 text-xs font-bold text-gray-400 float-left">
        Release date: {releaseDate}
      </p>
      <div className="w-full flex justify-between items-center">
        <h5 className="text-xs text-gray-100">SUMMARY</h5>
        <div className="text-base font-bold text-red-400 float-right">
          {rating}/10
        </div>
      </div>
      <p className="max-h-[4rem] leading-4 text-xs text-gray-300 text-justify text-ellipsis overflow-x-hidden overflow-y-hidden">
        {summary}
      </p>
    </>
  );
}
