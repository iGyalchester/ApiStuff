export function fetchCat() {
  return fetch("https://thatcopy.pw/catapi/rest/", {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  }).then((response) => response.json());
}
