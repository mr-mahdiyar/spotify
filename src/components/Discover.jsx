import React from "react";
import { genres } from "../utils/constants";
import { SongCart } from "../";



const Discover = () => {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover</h2>
        <select
          onChange={() => {}}
          value=""
          className="bg-black rounded-lg text-gray-300 text-sm p-3 outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => (
            <option key={genre.value} value="{genre.value}">
              {genre.title}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((song, idx) => (
          <SongCart key={song.key} song={song} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
