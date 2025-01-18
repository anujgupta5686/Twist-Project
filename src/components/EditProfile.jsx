import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    photoUrl: user.photoUrl || "",
    age: user.age || "",
    gender: user.gender || "",
    about: user.about || "",
  });
  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const saveProfile = async () => {
    setError("");

    const { firstName, lastName, photoUrl, age } = formData;

    if (!firstName || !lastName || !photoUrl || !age) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      const res = await axios.patch(
        BASE_URL + "/api/v1/profile/edit",
        formData,
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
          },
        }
      );

      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      <div className="flex justify-center my-10">
        <div className="card bg-base-300 w-96 shadow-xl max-w-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Edit Profile</h2>
          <div className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your last name"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Photo URL <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your photo URL"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Enter your age"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input input-bordered w-full"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* About */}
            <div>
              <label className="block text-sm font-medium mb-1">About</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="input input-bordered w-full"
                placeholder="Tell us about yourself"
                rows={3}
              ></textarea>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Save Button */}
            <div className="text-center">
              <button
                onClick={saveProfile}
                className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-max p-4 bg-green-500 text-white rounded-md shadow-lg">
          Profile saved successfully.
        </div>
      )}
    </>
  );
};

export default EditProfile;
