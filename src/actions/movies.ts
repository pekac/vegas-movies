"use server";

import { revalidateTag } from "next/cache";

import { db } from "@lib/db";

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

export async function search() {}
