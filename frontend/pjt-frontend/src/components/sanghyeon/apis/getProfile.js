import axios from "axios";

function getProfile(userId) {
  axios({
    method: "GET",
    url: `/profile/${userId}`,
    data: {
      userId,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default getProfile;