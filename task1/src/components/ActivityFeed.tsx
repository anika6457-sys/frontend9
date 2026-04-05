import { memo } from "react";

export const ActivityFeed = memo(function ActivityFeed() {
  console.log("ActivityFeed render");
  return (
    <div>
      <h3>Activity Feed</h3>
      <p>No activity yet.</p>
    </div>
  );
});