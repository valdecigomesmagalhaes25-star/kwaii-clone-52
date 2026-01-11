import { useState, useRef, useEffect } from "react";
import VideoCard from "./VideoCard";
import videoBg1 from "@/assets/video-bg-1.jpg";
import videoBg2 from "@/assets/video-bg-2.jpg";
import videoBg3 from "@/assets/video-bg-3.jpg";
import videoBg4 from "@/assets/video-bg-4.jpg";
import videoBg5 from "@/assets/video-bg-5.jpg";

const mockVideos = [
  {
    id: 1,
    username: "maria_silva",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    description: "Dançando ao som do novo hit! 💃🔥 #dança #viral #fyp",
    song: "Música Original - artista_oficial",
    likes: 125400,
    comments: 3420,
    shares: 890,
    thumbnail: videoBg1,
  },
  {
    id: 2,
    username: "chef_joao",
    userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    description: "Receita rápida de 1 minuto! 🍝 Salva pra depois 📌",
    song: "som trending - viral hits",
    likes: 89200,
    comments: 1890,
    shares: 4500,
    thumbnail: videoBg2,
  },
  {
    id: 3,
    username: "fitness_carol",
    userAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    description: "Treino de 5 minutos em casa 💪 Sem equipamento!",
    song: "Workout Mix - DJ Fitness",
    likes: 234000,
    comments: 5600,
    shares: 12300,
    thumbnail: videoBg3,
  },
  {
    id: 4,
    username: "pedro_games",
    userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    description: "Gameplay insano! 🎮 Quem consegue fazer igual?",
    song: "Epic Gaming Music - Beats",
    likes: 67800,
    comments: 2340,
    shares: 780,
    thumbnail: videoBg4,
  },
  {
    id: 5,
    username: "pets_fofos",
    userAvatar: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=150&h=150&fit=crop",
    description: "Meu cachorro aprendeu um truque novo! 🐕❤️",
    song: "Cute Animals - Happy Tune",
    likes: 456000,
    comments: 8900,
    shares: 23400,
    thumbnail: videoBg5,
  },
];

const VideoFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const itemHeight = container.clientHeight;
      const newIndex = Math.round(scrollTop / itemHeight);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < mockVideos.length) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
    >
      {mockVideos.map((video, index) => (
        <div
          key={video.id}
          className="h-screen w-full snap-start snap-always"
        >
          <VideoCard video={video} isActive={index === currentIndex} />
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
