import { useState } from "react";
import { Heart, MessageCircle, Share2, Music2, Plus } from "lucide-react";

interface VideoCardProps {
  video: {
    id: number;
    username: string;
    userAvatar: string;
    description: string;
    song: string;
    likes: number;
    comments: number;
    shares: number;
    thumbnail: string;
  };
  isActive: boolean;
}

const VideoCard = ({ video, isActive }: VideoCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(video.likes);
  const [following, setFollowing] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const formatCount = (count: number) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + "M";
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + "K";
    }
    return count.toString();
  };

  return (
    <div className="relative h-full w-full bg-background">
      {/* Video/Image Background */}
      <div className="absolute inset-0">
        <img
          src={video.thumbnail}
          alt={video.description}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-overlay pointer-events-none" />

      {/* Right Side Actions */}
      <div className="absolute right-3 bottom-28 flex flex-col items-center gap-5">
        {/* User Avatar */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full border-2 border-foreground overflow-hidden">
            <img
              src={video.userAvatar}
              alt={video.username}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setFollowing(!following)}
            className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
              following ? "bg-muted" : "bg-primary"
            }`}
          >
            <Plus className={`w-3 h-3 ${following ? "rotate-45" : ""} transition-transform`} />
          </button>
        </div>

        {/* Like Button */}
        <button onClick={handleLike} className="flex flex-col items-center gap-1">
          <div
            className={`w-11 h-11 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center transition-all ${
              liked ? "animate-heart" : ""
            }`}
          >
            <Heart
              className={`w-6 h-6 transition-all ${
                liked ? "fill-primary text-primary action-button-glow" : "text-foreground"
              }`}
            />
          </div>
          <span className="text-xs font-semibold text-shadow">{formatCount(likeCount)}</span>
        </button>

        {/* Comment Button */}
        <button className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-foreground" />
          </div>
          <span className="text-xs font-semibold text-shadow">{formatCount(video.comments)}</span>
        </button>

        {/* Share Button */}
        <button className="flex flex-col items-center gap-1">
          <div className="w-11 h-11 rounded-full bg-secondary/50 backdrop-blur-sm flex items-center justify-center">
            <Share2 className="w-6 h-6 text-foreground" />
          </div>
          <span className="text-xs font-semibold text-shadow">{formatCount(video.shares)}</span>
        </button>

        {/* Music Disc */}
        <div 
          className={`w-10 h-10 rounded-full border-2 border-muted overflow-hidden ${isActive ? "animate-spin" : ""}`} 
          style={{ animationDuration: "3s" }}
        >
          <img
            src={video.userAvatar}
            alt="Music"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute left-4 right-20 bottom-24">
        <h3 className="font-bold text-base text-shadow mb-1">@{video.username}</h3>
        <p className="text-sm text-foreground/90 text-shadow line-clamp-2 mb-2">
          {video.description}
        </p>
        <div className="flex items-center gap-2">
          <Music2 className="w-4 h-4 animate-pulse" />
          <p className="text-xs text-foreground/80 text-shadow truncate">
            {video.song}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
