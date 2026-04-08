import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiCode } from "react-icons/fi";

function GitHubStats({ username = "Aayush-Raj-Singh" }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const user = await res.json();

        const reposRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
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
      } catch {
        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [username]);

  if (loading) {
    return (
      <div className="github-stats-loading">
        <div className="loading-spinner" />
        <span>Loading GitHub stats...</span>
      </div>
    );
  }

  if (!stats) return null;

  const statItems = [
    { icon: <FiCode size={22} />, value: stats.publicRepos, label: "Repositories" },
    { icon: <FiStar size={22} />, value: stats.totalStars, label: "Stars Earned" },
    { icon: <FiGitBranch size={22} />, value: stats.followers, label: "Followers" },
  ];

  return (
    <div className="github-stats">
      <a
        href={stats.profileUrl}
        target="_blank"
        rel="noreferrer"
        className="github-profile-link"
      >
        <FiGithub size={20} />
        <span>@{username}</span>
      </a>
      <div className="github-stat-cards">
        {statItems.map((item, i) => (
          <motion.div
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
          </motion.div>
        ))}
      </div>
      {stats.languages.length > 0 && (
        <div className="github-languages">
          {stats.languages.map((lang) => (
            <span key={lang} className="lang-tag">
              {lang}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default GitHubStats;
