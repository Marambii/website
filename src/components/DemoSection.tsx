import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import demoVideo from "@/assets/6008775_African_American_Man_3840x2160.mp4";
import AnimatedCard from "./AnimatedCard";

const DemoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2)}`;
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const newTime = percentage * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('ended', () => setIsPlaying(false));
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  return (
    <AnimatedCard>
      <section id="demo" className="py-20 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Demo - Left Side */}
            <div className="relative">
              <div 
                className="relative aspect-video bg-primary/10 rounded-2xl overflow-hidden shadow-elegant cursor-pointer"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => setShowControls(false)}
                onClick={handleVideoClick}
              >
                {/* Video Element */}
                <video
                  ref={videoRef}
                  src={demoVideo}
                  className="w-full h-full object-cover"
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                
                {/* Play overlay when not playing */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 bg-gradient-hero rounded-full flex items-center justify-center mx-auto shadow-glow">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                      <p className="text-primary font-medium">Click to play demo</p>
                    </div>
                  </div>
                )}
                
                {/* Video controls overlay */}
                <div className={`absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 flex items-center justify-between transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex items-center space-x-3">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePlayPause();
                      }}
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <div 
                      className="flex-1 h-1 bg-muted rounded-full cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProgressClick(e);
                      }}
                    >
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-100"
                        style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-muted-foreground min-w-[3rem]">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVolumeToggle();
                      }}
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFullscreen();
                      }}
                    >
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Floating feature indicators */}
              <div className="absolute -top-4 -right-4 bg-gradient-hero rounded-full px-4 py-2 shadow-glow">
                <span className="text-primary-foreground font-medium text-sm">Live Demo</span>
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  See It In Action
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Watch our comprehensive demo showcasing how Instrumate Africa's technology 
                transforms communication accessibility. See real-time translations between 
                text, sign language, and speech in action.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Demo Highlights:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Real-time text to sign language conversion</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Sign language gesture recognition</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Voice to text transcription accuracy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span className="text-muted-foreground">Multi-platform compatibility</span>
                  </li>
                </ul>
              </div>
              
              <div className="pt-4">
                <Button variant="hero" size="lg">
                  Request Full Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedCard>
  );
};

export default DemoSection;