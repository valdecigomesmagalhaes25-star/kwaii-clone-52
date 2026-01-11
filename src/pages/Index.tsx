import VideoFeed from "@/components/VideoFeed";
import TopNavigation from "@/components/TopNavigation";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  return (
    <div className="h-screen w-full bg-background overflow-hidden">
      <TopNavigation />
      <VideoFeed />
      <BottomNavigation />
    </div>
  );
};

export default Index;
