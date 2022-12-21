import React from "react";
import HomeWidgets from "./HomeWidgets";
import TweetCard from "./TweetCard";
import tweetData from "../data/tweets.json";

const HomeFeed = () => {
  const allTweets = tweetData.map((item) => {
    return <TweetCard key={item.id} tweetData={item} />;
  });
  
  return (
    <div className="h-screen overflow-scroll">
      <HomeWidgets />
      {allTweets}
    </div>
  );
};

export default HomeFeed;