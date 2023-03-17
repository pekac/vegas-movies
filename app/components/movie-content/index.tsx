export interface Props {
  overview: string;
  rating: number;
  releaseDate: string;
  title: string;
}

function MovieContent({ overview, rating, releaseDate, title }: Props) {
  return (
    <>
      <h1 className="text-xl font-normal text-grey-100 text-ellipsis overflow-hidden">
        {title}
      </h1>
      <p className="my-1 mr-2 text-xs font-bold text-grey-400 float-left">
        Release date: {releaseDate}
      </p>
      <div className="w-full flex justify-between items-center">
        <h5 className="text-xs text-grey-100">SUMMARY</h5>
        <div className="mr-2 text-base font-bold text-red-400 float-right">
          {rating}/10
        </div>
      </div>
      <p className="text-xs text-grey-300 text-justify text-ellipsis overflow-hidden">
        {overview}
      </p>
    </>
  );
}

export default MovieContent;
