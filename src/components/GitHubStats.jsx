import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiCode } from "react-icons/fi";

const MotionDiv = motion.div;

function GitHubStats({ username = "Aayush-Raj-Singh" }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const profileUrl = `https://github.com/${username}`;
  const cacheKey = `github-stats:${username}`;

  useEffect(() => {
    async function fetchStats() {
      try {
        const cachedStats = sessionStorage.getItem(cacheKey);
        if (cachedStats) {
          setStats(JSON.parse(cachedStats));
        }

        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
          throw new Error("GitHub user fetch failed");
        }
        const user = await res.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        if (!reposRes.ok) {
          throw new Error("GitHub repos fetch failed");
        }
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos)
          ? repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0)
          : 0;

        const languages = Array.isArray(repos)
          ? [...new Set(repos.filter((r) => r.language).map((r) => r.language))]
          : [];

        setStats({
          publicRepos: user.public_repos || 0,
          followers: user.followers || 0,
          totalStars,
          languages: languages.slice(0, 5),
          avatarUrl: user.avatar_url,
          profileUrl: user.html_url,
        });
        sessionStorage.setItem(
          cacheKey,
          JSON.stringify({
            publicRepos: user.public_repos || 0,
            followers: user.followers || 0,
            totalStars,
            languages: languages.slice(0, 5),
            avatarUrl: user.avatar_url,
            profileUrl: user.html_url,
          })
        );
      } catch {
        setStats((prev) => prev ?? null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username, cacheKey]);

  if (loading) {
    return (
      <div className="github-stats-loading">
        <div className="loading-spinner" />
        <span>Loading GitHub stats...</span>
      </div>
    );
  }

  const statItems = [
    {
      icon: <FiCode size={22} />,
      value: stats?.publicRepos ?? "--",
      label: "Repositories",
    },
    {
      icon: <FiStar size={22} />,
      value: stats?.totalStars ?? "--",
      label: "Stars Earned",
    },
    {
      icon: <FiGitBranch size={22} />,
      value: stats?.followers ?? "--",
      label: "Followers",
    },
  ];

  return (
    <div className="github-stats">
      <a
        href={stats?.profileUrl || profileUrl}
        target="_blank"
        rel="noreferrer"
        className="github-profile-link"
      >
        <FiGithub size={20} />
        <span>@{username}</span>
      </a>
      <div className="github-stat-cards">
        {statItems.map((item, i) => (
          <MotionDiv
            key={item.label}
            className="github-stat-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className="stat-icon">{item.icon}</span>
            <span className="stat-value">{item.value}</span>
            <span className="stat-label">{item.label}</span>
          </MotionDiv>
        ))}
      </div>
      {stats?.languages?.length > 0 && (
        <div className="github-languages">
          {stats.languages.map((lang) => (
            <span key={lang} className="lang-tag">
              {lang}
            </span>
          ))}
        </div>
      )}
      {!stats && (
        <div className="github-stats-fallback">
          GitHub stats are unavailable right now. Open the profile above for the
          full repository list.
        </div>
      )}
    </div>
  );
}

export default GitHubStats;
