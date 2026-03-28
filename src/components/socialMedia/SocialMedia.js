import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        const prefix = media.fontAwesomePrefix || "fab";
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={media.name}
          >
            <IconWrapper {...media} {...props}>
              {media.customSvg ? (
                <i
                  className="custom-svg-icon"
                  style={{ color: "white" }}
                  dangerouslySetInnerHTML={{ __html: media.customSvg }}
                />
              ) : (
                <i className={`${prefix} ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
          </a>
        );
      })}
    </div>
  );
}
