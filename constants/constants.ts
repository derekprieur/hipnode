import {BsGoogle, BsDiscord, BsGithub} from 'react-icons/bs'

export const features = [
  {
    icon: "/assets/feature1.png",
    text: "Connect with other indie hackers running online businesses.",
  },
  {
    icon: "/assets/feature2.png",
    text: "Get feedback on your business ideas, landing pages, and more.",
  },
  {
    icon: "/assets/feature3.png",
    text: "Get the best new stories from founders in your inbox.",
  },
  {
    icon: "/assets/feature4.png",
    text: "Help us build the best community for people like you.",
  },
  {
    icon: "/assets/feature5.png",
    text: "See the best content and conversations, tailored to your interests.",
  },
  {
    icon: "/assets/feature6.png",
    text: "Choose your login information to finish signing up.",
  },
  {
    icon: "/assets/feature7.png",
    text: "Dive into the community. Your first days are the most important!",
  },
  {
    icon: "/assets/feature8.png",
    text: "Did you join before February 2017? You need to connect an email address to your username.",
  },
  {
    icon: "/assets/feature9.png",
    text: "Trouble logging in? Reset your password.",
  },
];

export const signupOptions = [
  {
    text: "Google",
    icon: BsGoogle,
  },
  {
    text: "Discord",
    icon: BsDiscord,
  },
  {
    text: "Github",
    icon: BsGithub,
  },
];

export const descriptions = [
  "Considering or planning to start a business",
  "Actively getting started on something new",
  "No interest in starting a business",
  "Earnings from my business fully support me",
  "Working on a business, no revenue yet",
  "No, coding is totally unfamiliar",
  "No, but I understand a few concepts",
  "Yes, and I'm a beginner",
  "Yes, and I'm an intermediate or a professional",
];

export const businessTypes = [
  "Advertising",
  "Task Management",
  "Crypto",
  "Email Marketing",
  "Design",
  "Finance",
  "Outdoors",
  "Sports",
  "Health & Fitness",
];

export const sortTypes = [
  {
    text: "Newest posts",
    icon: "/assets/newest-sort.png",
    subtext: 'Find the latest update'
  },
  {
    text: "Popular lately",
    icon: "/assets/popular-sort.png",
    subtext: 'Shots featured by curators'
  },
  {
    text: "Following",
    icon: "/assets/following-sort.png",
    subtext: 'Explore from your favorite person'
  },
];

export const posts = [
  {
    title:
      "Bitcoin has tumbled from its record high of $58,000 after words from three wise men and women...",
    tags: ["finance", "bitcoin", "crypto"],
    image: "/assets/post1.png",
    user: "/assets/user1.png",
    viewCount: 651324,
    likeCount: 36654,
    commentCount: 56,
    _id: "1",
  },
  {
    title:
      "The 4-step SEO framework that led to a 1000% increase in traffic. Let’s talk about blogging and SEO...",
    tags: ["seo", "blogging", "traffic"],
    image: "/assets/post2.png",
    user: "/assets/user2.png",
    viewCount: 244584,
    likeCount: 10920,
    commentCount: 184,
    _id: "2",
  },
  {
    title:
      "OnePay - Online Payment Processing Web App- Download from uihut.com",
    tags: ["payment", "webapp", "uikit"],
    image: "/assets/post3.png",
    user: "/assets/user3.png",
    viewCount: 601066,
    likeCount: 24753,
    commentCount: 209,
    _id: "3",
  },
  {
    title:
      "Designing User Interfaces - how I sold 1800 copies in a few months by Michal Malewicz",
    tags: ["design", "user interface", "designing"],
    image: "/assets/post4.png",
    user: "/assets/user1.png",
    viewCount: 964258,
    likeCount: 64755,
    commentCount: 44,
    _id: "4",
  },
];

export const meetups = [
  {
    title: "UIHUT - Crunchbase Company Profile...",
    tags: ["Remote", "Part-time", "Worldwide"],
    image: "/assets/meetup1.png",
    organizer: "UIHUT",
    location: "Sylhet, Bangladesh",
    date: "Feb 7",
  },
  {
    title: "Design Meetups USA | Dribbble",
    tags: ["Remote", "Part-time"],
    image: "/assets/meetup2.png",
    organizer: "Dribbble",
    location: "Austin, Texas, USA",
    date: "Feb 3",
  },
  {
    title: "Meetup Brand Identity Design - Beha...",
    tags: ["Full-time", "Contract", "Worldwide"],
    image: "/assets/meetup3.png",
    organizer: "Behance",
    location: "San Jose, California, USA",
    date: "Feb 5",
  },
];

export const podcasts = [
  {
    title: "Selling a Business and Scaling Another Amidst Tragedy.",
    image: "/assets/podcast1.png",
    author: "Michele Hansen",
  },
  {
    title: "Mental health as a founder and the importance of community...",
    image: "/assets/podcast2.png",
    author: "James McKinven",
  },
  {
    title: "Growing to $8.5k MRR in 1 year - Marie Martens, Tally.so",
    image: "/assets/podcast3.png",
    author: "Mahfuzul Nabil",
  },
  {
    title: "Mental Health and Bootstrapping in 2022 with Rob Walling of TinySe",
    image: "/assets/podcast4.png",
    author: "Dr. Jubed",
  },
  {
    title:
      "Money, Happiness, and Productivity as a Solo Founder with Pieter Levels",
    image: "/assets/podcast5.png",
    author: "Jesse Hanley",
  },
];

export const navOptions = [
  {
    type: "Home",
    icon: "/assets/nav-home.png",
    link: "/",
  },
  {
    type: "Calendar",
    icon: "/assets/nav-calendar.png",
    link: "/calendar",
  },
  {
    type: "Group",
    icon: "/assets/nav-group.png",
    link: "/groups",
  },
  {
    type: "Podcast",
    icon: "/assets/nav-podcasts.png",
    link: "/podcasts",
  },
  {
    type: "Interview",
    icon: "/assets/nav-interviews.png",
    link: "/interviews",
  },
];

export const popularTags = [
  {
    type: "javascript",
    image: "/assets/tag1.png",
    count: 82645,
    group: '/assets/group1.png'
  },
  {
    type: "bitcoin",
    image: "/assets/tag2.png",
    count: 65523,
    group: '/assets/group2.png'
  },
  {
    type: "design",
    image: "/assets/tag3.png",
    count: 51354,
    group: '/assets/group3.png'
  },
  {
    type: "blogging",
    image: "/assets/tag4.png",
    count: 48029,
    group: '/assets/group4.png'
  },
  {
    type: "tutorial",
    image: "/assets/tag5.png",
    count: 51354,
    group: '/assets/group1.png'
  },
  {
    type: "seo",
    image: "/assets/tag6.png",
    count: 82645,
    group: '/assets/group2.png'
  },
];

export const messages = [
  {
    name: "Wade Warren",
    image: "/assets/user1.png",
    message: "Congrats on your work anniversary!",
    time: "20 minutes ago",
  },
  {
    name: "Robert Fox",
    image: "/assets/user2.png",
    message: "Congrats on your work anniversary!",
    time: "3 days ago",
  },
  {
    name: "Marvin McKinney",
    image: "/assets/user3.png",
    message: "Congrats on your work anniversary!",
    time: "9 hours ago",
  },
  {
    name: "Cameron",
    image: "/assets/user1.png",
    message: "Congrats on your work anniversary!",
    time: "20 minutes ago",
  },
  {
    name: "Cameron",
    image: "/assets/user2.png",
    message: "Congrats on your work anniversary!",
    time: "3 days ago",
  }
]

export const notificationTypes = [
  {
    type: "All notifications",
  },
  {
    type: "Reactions",
    image: "/assets/reaction.png",
  },
  {
    type: "Comments",
    image: "/assets/comment.png",
  },
  {
    type: "Mentions",
    image: "/assets/mention.png",
  }
]

export const notifications = [
  {
    name: "Catalin Pit",
    image: "/assets/user1.png",
    type: 'comment',
    title: 'Hipnode. Book Giveaway: The Standout Developer by Randall Kanna',
    date: '22Feb, 3:26pm',
    message: 'Great ebook & giveaway!',
  },
  {
    name: "Jubed Ahmed",
    image: "/assets/user2.png",
    type: 'publish',
    title: 'Best Color Palette Generators For UI Designers And Developers',
    date: '17Feb, 10:48pm',
  },
  {
    name: "Tushar Srivastava",
    image: "/assets/user3.png",
    type: 'reaction',
    title: '5 Key UI Design Principles For Beginners',
    date: '13Feb, 1:54am',
  }
]