import React from 'react'
import { graphql } from 'gatsby'

export const FooterTemplate = ({ socialIconData, designedBy, designLink }) => {
  const socialIcon = socialIconData.socialIcons
  return (
    <div className="inner">
      <ul className="icons">
        {socialIcon[0].socialEnabled && (
          <li>
            <a
              href={`${socialIcon[0].socialLink}`}
              className="icon alt fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
        )}

        {socialIcon[1].socialEnabled && (
          <li>
            <a
              href={`${socialIcon[1].socialLink}`}
              className="icon alt fa-facebook"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        )}

        {socialIcon[2].socialEnabled && (
          <li>
            <a
              href={`${socialIcon[2].socialLink}`}
              className="icon alt fa-instagram"
            >
              <span className="label">Instagram</span>
            </a>
          </li>
        )}

        {socialIcon[3].socialEnabled && (
          <li>
            <a
              href={`${socialIcon[3].socialLink}`}
              className="icon alt fa-github"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        )}

        {socialIcon[4].socialEnabled && (
          <li>
            <a
              href={`${socialIcon[4].socialLink}`}
              className="icon alt fa-linkedin"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
        )}
      </ul>
      <ul className="copyright">
        <li>&copy; Untitled</li>
        <li>
          Design: {''}
          <a href={`${designLink}`}>{`${designedBy}`}</a>
        </li>
      </ul>
    </div>
  )
}

const Footer = ({ footerData, designedBy, designLink }) => {
  return (
    <footer id="footer">
      <FooterTemplate
        socialIconData={footerData}
        designedBy={designedBy}
        designLink={designLink}
      />
    </footer>
  )
}

export { Footer }
