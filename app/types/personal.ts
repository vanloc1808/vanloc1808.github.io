export interface PersonalData {
  profile: string;
  description: string;
  about: {
    title: string;
    description: string;
  };
  name: string;
  fullName: string;
  designation: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  googleScholar: string;
  linkedIn: string;
  facebook: string;
  leetcode: string;
  resume: string;
  twitter?: string;
  stackOverflow: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface CoderProfile {
  name: string;
  skills: string[];
  hardWorker: boolean;
  quickLearner: boolean;
  problemSolver: boolean;
  hireable: () => boolean;
}

export interface ContactFormData extends Record<string, unknown> {
  name: string;
  email: string;
  message: string;
}