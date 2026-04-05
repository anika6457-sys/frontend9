import { useCallback, useState } from "react";
import { UserCard } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
    console.log("Dashboard render");
  const [count, setCount] = useState(0);
  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  });
  const [items] = useState(["item1", "item2", "item3"]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <h1>Dashboard (count: {count})</h1>
      <button onClick={increment}>Increment</button>
      <UserCard user={user} />
      <AnalyticsChart items={items} />
      <ActivityFeed />
    </div>
  );
}