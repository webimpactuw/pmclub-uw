import React from 'react';
import './Resources.css';

// Import images from assets
import productManagementImage from '../assets/Resources_ProductManagement.jpg'; 
import interviewingImage from '../assets/Resources_Interviews.jpg';
import prdImage from '../assets/Resources_ProjectRequirements.jpg';
import youtubeChannelsImage from '../assets/Resources_Youtube.jpg';

const resourcesData = [
  {
    title: "Product Management",
    imageUrl: productManagementImage,
    links: [
      { label: "Product Plan's Guide", url: "https://www.productplan.com/learn/what-is-product-management/" },
      { label: "The Product Manager's Guide", url: "https://theproductmanager.com/topics/what-is-product-management/" },
      { label: "Product School Guide", url: "https://productschool.com/blog/product-fundamentals/what-is-product-management" },
    ],
    reverse: false,
  },
  {
    title: "Interviewing",
    imageUrl: interviewingImage,
    links: [
      { label: "Chloe Shih’s Guide to Interviews", url: "https://www.youtube.com/watch?v=IduMcOC1NPM" },
      { label: "Cracking the PM Interview", url: "https://www.amazon.com/Cracking-PM-Interview-Product-Technology/dp/0984782818" },
    ],
    reverse: true,
  },
  {
    title: "Product Requirements Doc (PRD)",
    imageUrl: prdImage,
    links: [
      { label: "What is a PRD?", url: "https://www.atlassian.com/agile/product-management/requirements" },
      { label: "PRD Template", url: "https://sophiasun.substack.com/p/product-requirements-document-prd?r=3fer5&utm_medium=ios&fbclid=PAZXh0bgNhZW0CMTEAAaYuy84K-ie-6AmrPUSlTyp4MsjNeLiL3xblnhj5Lstw6Essj8AAQVJxQ2Y_aem_0VkjGagAJ9Top6W3nr0cvA&triedRedirect=true" },
      { label: "More Examples and Templates", url: "https://www.hustlebadger.com/what-do-product-teams-do/prd-template-examples/" },
    ],
    reverse: false,
  },
  {
    title: "YouTube Channels",
    imageUrl: youtubeChannelsImage,
    links: [
      { label: "Product School", url: "https://www.youtube.com/@ProductSchoolSanFrancisco" },
      { label: "Mind The Product", url: "https://www.youtube.com/channel/UCiT1BmYvOBsEvU9iw0076Sw/featured" },
      { label: "Dan Olsen", url: "https://www.youtube.com/@DanOlsen" },
    ],
    reverse: true,
  },
];

const Resources = () => {
  return (
    <div className="resources-container">
      <div className="resources-header">
        <h2>Resources</h2>
        <p className="resources-subtitle">
          Here are some resources to get you started on your Product Management Journey. <br/>
          This is by no means an exhaustive list; feel free to explore more!
        </p>
      </div>

      {/* Add alternating gradient containers for each resource section */}
      {resourcesData.map((resource, index) => (
        <div
          key={index}
          className={`resource-section ${index % 2 === 0 ? 'gradient-yellow' : 'gradient-purple'}`} // Apply gradient classes here
        >
          <div className={`resource-box ${resource.reverse ? 'reverse' : ''}`}>
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
        </div>
      ))}
    </div>
  );
};

export default Resources;
