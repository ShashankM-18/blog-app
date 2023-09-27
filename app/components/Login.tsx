"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Login() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className="font-bold">Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div className="mr-1">
        <p className="my-2">Welcome {user.nickname}!</p>
        <a className="border-2 border-[#23A6F0] rounded-md p-1 hover:bg-[#23A6F0] hover:text-white font-bold" href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return <a className="border-2 border-[#23A6F0] rounded-md p-1 hover:bg-[#23A6F0] hover:text-white font-bold" href="/api/auth/login">Login / Register</a>;
}
