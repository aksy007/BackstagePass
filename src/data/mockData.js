// Mock data for Header component

export const user = {
  name: "Current User",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=user",
  flameCount: 30,
};

export const challengeInfo = {
  title: "9-Day Fitness Challenge",
  currentDay: 1,
  totalDays: 9,
};

export const subscriberPost = {
  id: 1,
  type: "subscriber",
  user: {
    name: "Ashraf Idrishi",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ashraf",
  },
  timestamp: "1s",
  content: "Today's challenge workout completed - feeling stronger already",
  media: {
    type: "video",
    url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
    thumbnail:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
  },
};

export const feedPosts = [
  {
    id: 2,
    type: "pinned",
    user: {
      name: "Russell Brunson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=russell",
    },
    timestamp: "3 hrs ago",
    content:
      "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
    tasks: [
      { id: 1, text: "Minimum 20 minutes of sit-up" },
      { id: 2, text: "Mention Intensity" },
      { id: 3, text: "Upload Media (Optional)" },
    ],
    media: null,
  },
  {
    id: 3,
    type: "subscriber",
    user: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    timestamp: "5 hrs ago",
    content: "Day 1 complete! Feeling energized and ready for tomorrow.",
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
      thumbnail:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
    },
  },
];
