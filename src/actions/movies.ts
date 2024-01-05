"use server";

import { revalidateTag } from "next/cache";
/* lib */
import { db } from "@lib/db";
/* queries */
import { UpdateWatchlistMutation } from "@queries/movies";

export async function updateWatchlistStatus(
  id: number,
  onWatchlist: boolean
): Promise<void> {
  try {
    await db({
      query: UpdateWatchlistMutation,
      variables: {
        id,
        onWatchlist: !onWatchlist,
      },
    });
    revalidateTag("home");
    revalidateTag("watchlist");
  } catch (e) {}
}
