// src/pages/Resources.js
import React from 'react';
import './Resources.css';

const resourcesData = [
  {
    title: "Product Management",
    imageUrl: "https://via.placeholder.com/400x300",
    links: [
      { label: "Product Plan's Guide", url: "https://example.com/plan-guide" },
      { label: "The Product Manager's Guide", url: "https://example.com/pm-guide" },
      { label: "Product School Guide", url: "https://example.com/school-guide" },
    ],
    reverse: false,
  },
  {
    title: "Interviewing",
    imageUrl: "https://via.placeholder.com/400x300",
    links: [
      { label: "Chloe Shih’s Guide to Interviews", url: "https://example.com/chloe-interview" },
      { label: "Cracking the PM Interview", url: "https://example.com/pm-interview" },
    ],
    reverse: true,
  },
  {
    title: "Product Requirements Doc (PRD)",
    imageUrl: "https://via.placeholder.com/400x300",
    links: [
      { label: "What is a PRD?", url: "https://example.com/what-is-prd" },
      { label: "PRD Template", url: "https://example.com/prd-template" },
      { label: "More Examples and Templates", url: "https://example.com/prd-examples" },
    ],
    reverse: false,
  },
  {
    title: "YouTube Channels",
    imageUrl: "https://via.placeholder.com/400x300",
    links: [
      { label: "Product School", url: "https://example.com/product-school" },
      { label: "Mind The Product", url: "https://example.com/mind-product" },
      { label: "Dan Olsen", url: "https://example.com/dan-olsen" },
    ],
    reverse: true,
  },
];

const Resources = () => {
  return (
    <div className="resources-container">

      {/* Top Header */}
      <div className="resources-header">
        <h1 className="resources-title">Resources</h1>
        <p className="resources-subtitle">
          Here are some resources to get you started on your Product Management Journey.
          <br />
          This is by no means an exhaustive list; feel free to explore more!
        </p>
      </div>

      {/* Resource Boxes */}
      {resourcesData.map((resource, index) => (
        <div
          key={index}
          className={`resource-box ${resource.reverse ? 'reverse' : ''} ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
        >
          <div
            className="stock-image"
            style={{ backgroundImage: `url('${resource.imageUrl}')` }}
          ></div>

          <div className="resource-content">
            <div className="resource-title-main">{resource.title}</div>

            {resource.links.map((link, linkIndex) => (
              <a
                key={linkIndex}
                href={link.url}
                className="resource-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{link.label}</span>
                <div className="arrow"></div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
