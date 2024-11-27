export default function Profile() {
  document.addEventListener("DOMContentLoaded", function () {
    async function fetchUserProfile() {
      const endpoint =
        "https://asia-southeast2-awangga.cloudfunctions.net/jualin/get/user-profile";

      try {
        const response = await fetch(endpoint);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const result = await response.json();

        if (result.response && result.response.status === "Success") {
          const { name, email, phonenumber } = result.data;

          document.querySelector("#profile-name").textContent = name;
          document.querySelector("#full-name").textContent = name;
          document.querySelector("#email").textContent = email;
          document.querySelector("#phone").textContent = phonenumber;
        } else {
          console.error("Failed to fetch profile:", result.response.info);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error.message);
      }
    }

    fetchUserProfile();
  });
}
