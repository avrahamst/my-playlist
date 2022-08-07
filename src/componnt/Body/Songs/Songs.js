import Song from "./Song/Song";
import { SongContext } from "../../../context/SongContext";
import { useContext } from "react";

export default function Songs() {
  const { songs, setSongs } = useContext(SongContext);
  songs?.map((v) => {
    return <Song song={v} />;
  });
}
