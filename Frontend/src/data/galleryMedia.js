const imageDetails = [
  ["Studio Connections", "Academy Life"],
  ["Training Together", "Academy Life"],
  ["On The Big Stage", "Performances"],
  ["Practice in Progress", "Studio Moments"],
  ["Achievement Unlocked", "Student Success"],
  ["Creative Connections", "Academy Memories"],
  ["Roots in Rhythm", "Cultural Celebration"],
  ["A Memorable Meeting", "Academy Memories"],
  ["Proud Academy Moment", "Student Success"],
  ["Celebrating Progress", "Student Success"],
  ["Confidence Earned", "Student Success"],
  ["Another Step Forward", "Student Success"],
  ["Training Milestone", "Student Success"],
  ["Lights, Stage, Action", "Live Performance"],
  ["Festival Expressions", "Cultural Celebration"],
  ["Move With Energy", "Academy Life"],
  ["Special Academy Memory", "Academy Memories"],
  ["Creative Exchange", "Academy Memories"],
  ["Young Dancers Together", "Kids Class"],
  ["Celebrating as One", "Kids Class"],
  ["Little Groovers in Motion", "Kids Training"],
];

const videoDetails = [
  ["Hip Hop Session", "Class Energy"],
  ["Bollywood Expression", "Choreography"],
  ["Performance Choreography", "Performances"],
  ["Rhythm in Motion", "Dance Session"],
  ["Training Showcase", "Dance Session"],
  ["Studio in Motion", "Dance Session"],
  ["Performance Practice", "Choreography"],
  ["Dance Showcase", "Performances"],
  ["Classroom Energy", "Class Energy"],
  ["Movement and Musicality", "Dance Session"],
  ["Performance Pulse", "Choreography"],
];

const images = imageDetails.map(([title, category], index) => ({
  id: index + 1,
  type: "image",
  src: `/g${index + 1}.jpeg`,
  title,
  category,
  description: "An original moment from Unique Dance Academy.",
}));

const videos = videoDetails.map(([title, category], index) => ({
  id: imageDetails.length + index + 1,
  type: "video",
  src: `/v${index + 1}.mp4`,
  title,
  category,
  description: "Original video footage from Unique Dance Academy.",
}));

export const galleryMedia = [...images, ...videos];

const homeGalleryIds = [14, 27, 7, 32, 18];

export const homeGalleryMedia = homeGalleryIds.map((id) =>
  galleryMedia.find((item) => item.id === id),
);
