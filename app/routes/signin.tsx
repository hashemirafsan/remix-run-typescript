import {Form, Link} from "@remix-run/react";

export default function Signin() {
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <Form method="POST">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </div>
                </Form>
                <p className="mt-4 text-gray-600 text-center cursor-pointer">
                    Don't have an account? <Link to="/signup">Create one</Link>
                </p>
            </div>
        </div>
    );
}
