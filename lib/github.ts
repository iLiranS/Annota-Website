export async function getGithubStars() {
  try {
    const response = await fetch("https://api.github.com/repos/ilirans/annota", {
      next: {
        revalidate: 300, // 5 minutes
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.stargazers_count as number;
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
    return null;
  }
}
