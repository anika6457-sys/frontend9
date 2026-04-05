import { memo } from "react";

interface User { id: number; name: string; email: string; }

export const UserCard = memo(function UserCard({ user }: { user: User }) {
  console.log("UserCard render"); 
  return (
    <div className="card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});