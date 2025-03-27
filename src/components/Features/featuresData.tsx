import { Feature } from "@/types/feature";

const featuresData = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 30C14.5 30 10 25.5 10 20C10 14.5 14.5 10 20 10C25.5 10 30 14.5 30 20C30 25.5 25.5 30 20 30Z" />
        <path
          opacity="0.5"
          d="M20 15C17.25 15 15 17.25 15 20C15 22.75 17.25 25 20 25C22.75 25 25 22.75 25 20C25 17.25 22.75 15 20 15Z"
        />
      </svg>
    ),
    title: "AI-Powered Visual Guidance",
    paragraph:
      "Snap a picture of any task, and our advanced AI generates personalized, step-by-step visual instructions tailored to individual learning needs.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10Z"
        />
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 35C10.6 35 3 27.4 3 20C3 12.6 10.6 5 20 5C29.4 5 37 12.6 37 20C37 27.4 29.4 35 20 35Z" />
        <path opacity="0.5" d="M22 14H18V22H26V18C26 15.8 24.2 14 22 14Z" />
      </svg>
    ),
    title: "Progress Tracking",
    paragraph:
      "The guardian dashboard allows caregivers and therapists to monitor user progress, create custom task guides, and track skill development over time.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 15C17.25 15 15 17.25 15 20C15 22.75 17.25 25 20 25C22.75 25 25 22.75 25 20C25 17.25 22.75 15 20 15Z"
        />
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM10 20C10 14.5 14.5 10 20 10C25.5 10 30 14.5 30 20C30 25.5 25.5 30 20 30C14.5 30 10 25.5 10 20ZM22 14H18V22H26V18C26 15.8 24.2 14 22 14Z" />
        <path opacity="0.5" d="M26 26L22 22L26 18V26Z" />
      </svg>
    ),
    title: "Personalized Learning",
    paragraph:
      "Our adaptive AI learns from user interactions, creating increasingly tailored and effective visual guides that evolve with individual learning styles.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 35C10.6 35 3 27.4 3 20C3 12.6 10.6 5 20 5C29.4 5 37 12.6 37 20C37 27.4 29.4 35 20 35Z" />
        <path
          opacity="0.5"
          d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10ZM15 25V15L25 20L15 25Z"
        />
      </svg>
    ),
    title: "Inclusive Design",
    paragraph:
      "Developed with special education experts, Stepwise is designed to support individuals with cognitive disabilities, including those with autism and Down syndrome.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 35C10.6 35 3 27.4 3 20C3 12.6 10.6 5 20 5C29.4 5 37 12.6 37 20C37 27.4 29.4 35 20 35Z" />
        <path
          opacity="0.5"
          d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10ZM16 24V16H24V24H16Z"
        />
        <path d="M20 15C17.25 15 15 17.25 15 20C15 22.75 17.25 25 20 25C22.75 25 25 22.75 25 20C25 17.25 22.75 15 20 15Z" />
      </svg>
    ),
    title: "Flexible & Scalable",
    paragraph:
      "From special education to workplace training, Stepwise adapts to various environments, supporting learning across different contexts and skill levels.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 0C8.95 0 0 8.95 0 20C0 31.05 8.95 40 20 40C31.05 40 40 31.05 40 20C40 8.95 31.05 0 20 0ZM20 35C10.6 35 3 27.4 3 20C3 12.6 10.6 5 20 5C29.4 5 37 12.6 37 20C37 27.4 29.4 35 20 35Z" />
        <path
          opacity="0.5"
          d="M20 10C14.5 10 10 14.5 10 20C10 25.5 14.5 30 20 30C25.5 30 30 25.5 30 20C30 14.5 25.5 10 20 10ZM15 25L20 15L25 25H15Z"
        />
      </svg>
    ),
    title: "Free & Premium Options",
    paragraph:
      "Start with our free basic guidance, then upgrade to premium features like advanced task flows, detailed progress tracking, and specialized learning guides.",
  },
];
export default featuresData;
