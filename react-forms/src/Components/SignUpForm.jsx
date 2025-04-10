import { useState } from 'react';


export default function SignUpForm({ token, setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null)


    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
                {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({ username, password })
                })

            const result = await response.json();
            setSuccessMessage(result.message)
            setToken(result.token)

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>
            }

            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        name="username"
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                </label>
                <label>
                    Password
                    <input
                        name="password"
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}