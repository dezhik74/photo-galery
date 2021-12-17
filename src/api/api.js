const PHOTO_URL = "https://jsonplaceholder.typicode.com/photos";
const ALBUM_NUMBER = 25

let photoData = [];

export default function getPhotoData() {
  return fetch(PHOTO_URL)
    .then(response => response.json())
    .then(json => {
      photoData = json.filter((item) => item.albumId === ALBUM_NUMBER)
      photoData[0].comments = ["Куку", "Гриня"]
      photoData[0].likes = 5
      photoData[1].likes = 2
      // photoData = photoData.slice(0, 4)
      
      return photoData
    })
}
