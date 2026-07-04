/* eslint-disable @typescript-eslint/no-explicit-any */
import { GitBranch, Star, Users, GitFork, GitCommit, Activity } from "lucide-react";

async function getGithubStats() {
  const GITHUB_USERNAME = "PreranRai";
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (GITHUB_TOKEN) {
    headers.Authorization = `token ${GITHUB_TOKEN}`;
  }

  try {
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, { headers, next: { revalidate: 3600 } });
    if (!userRes.ok) throw new Error("Failed to fetch user");
    const user = await userRes.json();

    const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`, { headers, next: { revalidate: 3600 } });
    if (!reposRes.ok) throw new Error("Failed to fetch repos");
    const repos = await reposRes.json();

    const stars = repos.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);
    const topRepos = repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);

    return {
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      stars,
      topRepos,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function GithubDashboard() {
  const stats = await getGithubStats();

  if (!stats) {
    return null;
  }

  return (
    <section id="github" className="py-24 relative bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-16 md:mb-24 flex items-center justify-between">
          <div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-purple">Activity</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full" />
          </div>
          <a
            href="https://github.com/PreranRai"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all duration-300 font-medium"
          >
            <GitBranch size={18} /> @PreranRai
          </a>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
            <GitCommit className="text-brand-blue mb-3" size={24} />
            <h3 className="text-3xl font-heading font-bold text-foreground">{stats.publicRepos}</h3>
            <p className="text-sm text-muted-foreground font-medium">Repositories</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
            <Star className="text-brand-purple mb-3" size={24} />
            <h3 className="text-3xl font-heading font-bold text-foreground">{stats.stars}</h3>
            <p className="text-sm text-muted-foreground font-medium">Total Stars</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
            <Users className="text-brand-green mb-3" size={24} />
            <h3 className="text-3xl font-heading font-bold text-foreground">{stats.followers}</h3>
            <p className="text-sm text-muted-foreground font-medium">Followers</p>
          </div>
          <div className="glass rounded-2xl p-6 border border-white/10 flex flex-col items-center justify-center text-center">
            <Activity className="text-brand-blue mb-3" size={24} />
            <h3 className="text-3xl font-heading font-bold text-foreground">{stats.following}</h3>
            <p className="text-sm text-muted-foreground font-medium">Following</p>
          </div>
        </div>

        {/* Top Repositories */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">Top Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.topRepos.map((repo: any) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-6 border border-white/10 hover:border-brand-blue/50 transition-colors duration-300 flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-heading font-bold text-brand-blue group-hover:text-brand-purple transition-colors truncate">
                    {repo.name}
                  </h4>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Star size={14} />
                    <span>{repo.stargazers_count}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground flex-grow mb-4 line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-brand-green" />
                    <span className="text-xs font-medium text-foreground">{repo.language || "Unknown"}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs">
                    <GitFork size={14} />
                    <span>{repo.forks_count}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
