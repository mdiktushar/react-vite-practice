import React from "react";
import { useLoaderData } from "react-router-dom";
import Friend from "./Friend/Friend";

const Home = () => {
  const friends = useLoaderData();
  // console.log(friends);
  return (
    <div>
      <h3>I have total: {friends.length} friends</h3>
      <dir>
        {friends.map((friend) => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </dir>
    </div>
  );
};

export default Home;
