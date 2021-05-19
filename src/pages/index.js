import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  width: 1200,
  marginTop: 0,
  marginLeft: 0,
  padding: 96,
  paddingTop: 30,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 375,
}
const logoStyles = {
  marginLeft: -22,
  marginBottom: 20,
}
const headingAccentStyles = {
  color: "#663399",
}
const underConstruction = {
  color: "#969696",
  fontSize: 21,
  fontWeight: 200,
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const instaLink = {
  text: "Наш инстаграм",
  url: "https://www.instagram.com/neoshowofficial",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const siteTitle = [
  {
    text: "БУМАЖНОЕ шоу в Киеве | заказать в Event агентстве NeoShow | NeoShow Киев",
  }
]
const links = [
  {
    text: "",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "Хотите сделать ЯРКИМ свой праздник? Закажите на свою вечеринку БУМАЖНОЕ ШОУ. Бумажное шоу - это отличная развлекательная программа для проведения разных событий. У нас вы можете заказать спецэффекты  на ВАШ праздник и ПОДАРИТЬ детское бумажное шоу для Ваших детей.",
    color: "#E95800",
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>{siteTitle.text}</title>

      <h1 style={headingStyles}>
      <img
      style={logoStyles}
        alt="NeoShow Logo"
        src="https://web.archive.org/web/20181130180324im_/http://neoshow.com.ua/plugins/widcard/system/userdata/CorporateLogo.png"
        width="180"
      />
        <br />
        <span style={headingAccentStyles}>Праздник – это яркое событие! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <span style={underConstruction}>Сайт в разработке, извините за временные неудобства </span>
      {/*
       <p style={paragraphStyles}>
        Edit <code style={codeStyles}>src/pages/index.js</code> to see this page
        update in real-time.{" "}
        <span role="img" aria-label="Sunglasses smiley emoji">
          😎
        </span>
      </p>
      */}
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${instaLink.url}`}
            target="_blank"
          >
            {instaLink.text}
          </a>
        </li>
        <li style={docLinkStyle}>
          <a style={linkStyle}href="tel:+380664782777"> (066) 478 27 77 </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      {/*<img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />*/}
    </main>
  )
}

export default IndexPage
