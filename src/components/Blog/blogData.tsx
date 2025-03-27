import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "How Visual Guides Boost Independence for Down Syndrome Learners",
    paragraph:
      "Discover how Stepwise’s AI-powered visual instructions help individuals with Down syndrome master daily tasks like cooking or dressing, reducing reliance on caregivers and building confidence.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Dr. Emily Hart",
      image: "/images/blog/author-01.png",
      designation: "Special Education Expert",
    },
    tags: ["independence", "visual learning"],
    publishDate: "March 15, 2025",
  },
  {
    id: 2,
    title: "5 Ways Caregivers Can Use Stepwise to Support Autism Growth",
    paragraph:
      "From tracking progress to creating custom task guides, learn how Stepwise’s guardian dashboard empowers caregivers to support individuals with autism in achieving greater autonomy.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Lisa Patel",
      image: "/images/blog/author-02.png",
      designation: "Caregiver & Advocate",
    },
    tags: ["autism", "caregiving"],
    publishDate: "March 20, 2025",
  },
  {
    id: 3,
    title: "The Future of Special Education: AI Tools Like Stepwise",
    paragraph:
      "Explore how Stepwise is revolutionizing special education by integrating into classrooms and therapy centers, offering scalable solutions for students with cognitive challenges.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Mark Thompson",
      image: "/images/blog/author-03.png",
      designation: "Assistive Technology Specialist",
    },
    tags: ["education", "technology"],
    publishDate: "March 25, 2025",
  },
];
export default blogData;
