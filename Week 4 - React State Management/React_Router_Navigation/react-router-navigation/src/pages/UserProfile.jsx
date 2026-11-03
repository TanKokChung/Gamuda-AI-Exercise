// import React, { useState } from "react";

// function UserProfile() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents page reload
//     console.log("Submitted Data:", { username, password });
//     alert(`Logged in as: ${username}`);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.box}>
//         <h2 style={styles.title}>Sign In</h2>

//         <form onSubmit={handleSubmit} style={styles.form}>
//           {/* Username Input */}
//           <div style={styles.inputGroup}>
//             <label htmlFor="username" style={styles.label}>
//               Username
//             </label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Enter your username"
//               required
//               style={styles.input}
//             />
//           </div>

//           {/* Password Input */}
//           <div style={styles.inputGroup}>
//             <label htmlFor="password" style={styles.label}>
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               required
//               style={styles.input}
//             />
//           </div>

//           {/* Submit Button */}
//           <button type="submit" style={styles.button}>
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     minHeight: "100vh",
//     backgroundColor: "#f4f6f8",
//     fontFamily: "Arial, sans-serif",
//   },
//   box: {
//     width: "100%",
//     maxWidth: "380px",
//     padding: "30px",
//     backgroundColor: "#ffffff",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//   },
//   title: {
//     margin: "0 0 20px 0",
//     textAlign: "center",
//     color: "#333333",
//     fontSize: "24px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   inputGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "5px",
//   },
//   label: {
//     fontSize: "14px",
//     fontWeight: "bold",
//     color: "#555555",
//   },
//   input: {
//     padding: "10px 12px",
//     fontSize: "14px",
//     borderRadius: "5px",
//     border: "1px solid #cccccc",
//     outline: "none",
//     transition: "border-color 0.2s",
//   },
//   button: {
//     marginTop: "10px",
//     padding: "12px",
//     fontSize: "16px",
//     fontWeight: "bold",
//     color: "#ffffff",
//     backgroundColor: "#007bff",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     transition: "background-color 0.2s",
//   },
// };






import {useParams} from "react-router-dom";

const users = {
    1: { name: "Louis", age: 30, status: "Single"},
    2: { name: "Eli", age: 22, status: "Single"},
    3: { name: "Syed", age: 45, status: "Married"},
};

function UserProfile() {
    const { id } = useParams();
    const user = users[id];

    if (!user) return <p>User not found!</p>;

    return (
        <>
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Status: {user.status}</p>
        </>
    );
}

export default UserProfile;
