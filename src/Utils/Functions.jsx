export function calculateTotalDuration(course) {
  let totalSeconds = 0;

  course.chapters.forEach((chapter) => {
    chapter.videos.forEach((video) => {
      const [minutes, seconds] = video.duration.split(":");
      totalSeconds += parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
    });
  });

  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);

  return `${hours}h ${minutes}min`;
}

export function totalVideosInChapter(course) {
 const t= course.chapters.reduce((count, chapter) => {
    if (chapter.videos) {
      count += chapter.videos.length;
    }
    return count;
  }, 0)
  return t;
}


export function formatTime(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = Math.floor(time % 60);

  var formattedTime = "";

  if (hours > 0) {
    formattedTime += hours + ":";
  }

  formattedTime += (minutes < 10 ? "0" : "") + minutes + ":";
  formattedTime += (seconds < 10 ? "0" : "") + seconds;

  return formattedTime;
}