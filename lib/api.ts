const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";

async function fetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    next: { revalidate: 60 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const result = await response.json();
  return result.data;
}

export const portfolioApi = {
  getProfile: () => fetcher<any>("/portfolio/profile"),
  getProjects: () => fetcher<any[]>("/portfolio/projects"),
  getCertifications: () => fetcher<any[]>("/portfolio/certifications"),
  getExperience: () => fetcher<any[]>("/portfolio/experience"),
  getSkills: () => fetcher<any[]>("/portfolio/skills"),
};
