import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

const NAPSTER_IMAGE_URL = "https://api.napster.com/imageserver/v2";
const KEY = process.env.REACT_APP_NAPSTER_API_KEY;
const NAPSTER_API = "https://api.napster.com/v2.2";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export const albumImageUrl = (album: any) =>
  `${NAPSTER_IMAGE_URL}/albums/${album.id}/images/300x300.jpg`;

export const fullTextSearch = async (text: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?query=${text}&apikey=${KEY}`
  );
  return response.data;
};

export const getAlbumDetails = async (albumId: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${KEY}`
  );
  return response.data.albums[0];
};

export const getAlbumTracks = async (albumId: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${KEY}`
  );
  return response.data.tracks;
};

export const getTrackDetails = async (trackId: string) => {
  const response = await axios.get(
    `${NAPSTER_API}/tracks/${trackId}?apikey=${KEY}`
  );
  return response.data.tracks[0];
};

export const userLikesAlbum = async (album: any) => {
  const response = await axiosWithCredentials.post(
    `${REMOTE_SERVER}/api/likes`,
    album
  );
  return response.data;
};

export const getAlbumsLikedByUser = async () => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/likes`);
  return response.data;
};
