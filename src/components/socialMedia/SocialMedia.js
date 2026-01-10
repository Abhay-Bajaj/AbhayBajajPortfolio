import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button btn-like github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
          <span className="btn-text">GitHub</span>
        </a>
      )}

      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button btn-like linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
          <span className="btn-text">LinkedIn</span>
        </a>
      )}
    </div>
  );
}
