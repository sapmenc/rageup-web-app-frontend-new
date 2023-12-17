import { useEffect, useState } from "react";

interface TimerProps {
  startTime: string; // ISO format
  duration: number; // duration in minutes
  onEndTimeReached: () => void; // function to invoke when end time is reached
}

const Timer: React.FC<TimerProps> = ({
  startTime,
  duration,
  onEndTimeReached,
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const endTime = new Date(new Date(startTime).getTime() + duration * 60000);
  let interval: NodeJS.Timer | null = null;
  useEffect(() => {
    interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    if (currentTime >= endTime && interval) {
      onEndTimeReached();

      clearInterval(interval);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentTime]);

  const getRemainingTime = () => {
    const difference = endTime.getTime() - currentTime.getTime();
    if (difference <= 0) {
      return "00:00:00";
    }
    let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((difference / 1000 / 60) % 60);
    let seconds = Math.floor((difference / 1000) % 60);

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      {currentTime < endTime ? (
        <p>Time remaining: {getRemainingTime()}</p>
      ) : (
        <p>Time's up!</p>
      )}
    </div>
  );
};

export default Timer;
