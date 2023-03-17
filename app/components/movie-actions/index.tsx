import WatchLaterBtn from "@/app/components/watch-later-btn";
import TrailerBtn from "@/app/components/trailer-btn";

export interface Props {
  id: number;
  onWatchlist: boolean;
}

function MovieActions({ id, onWatchlist }: Props) {
  return (
    <div className="pt-7 flex justify-between items-center">
      <TrailerBtn />
      <WatchLaterBtn movieId={id} onWatchlist={onWatchlist} />
    </div>
  );
}

export default MovieActions;
