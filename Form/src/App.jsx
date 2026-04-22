import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.name.trim()) err.name = "Name is required";

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      err.email = "Enter a valid email";
    }

    if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    if (!form.gender) err.gender = "Please select gender";

    if (!form.agree) err.agree = "You must accept terms";

    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Form submitted successfully");
    }
  };

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen flex items-center justify-center bg-[#111111] text-white dark:bg-[#000000]">

        <div className="w-96 p-6 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white">

          
          <button
            onClick={() => setDark(!dark)}
            className="mb-4 px-3 py-1 bg-blue-500 text-white rounded"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

          <h3 className="text-lg font-bold mb-3 text-center">
            Signup Form
          </h3>

         
          {success && (
            <div className="bg-green-100 text-green-700 p-2 rounded mb-3 text-sm">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-2">

            
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className={`p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white
              ${errors.name ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}

            
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white
              ${errors.email ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}

            
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={`p-2 border rounded bg-white text-black dark:bg-gray-700 dark:text-white
              ${errors.password ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}

           
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Male
              </label>

              <label className="flex items-center gap-2 mt-1">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                Female
              </label>

              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender}</span>
              )}
            </div>

            
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="accent-green-500"
              />
              I agree to terms
            </label>
            {errors.agree && (
              <span className="text-red-500 text-sm">{errors.agree}</span>
            )}

            
            <button className="bg-green-500 text-white py-2 rounded mt-2">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}