import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
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

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
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
const links = [
  {
    text: "Big Nature Gal",
    description:
      "11/61 National Parks. Badges coming soon. Let me guess - you're into photography, too?",
    color: "#E95800",
  },
  {
    text: "Amateur photographer - at your service.",
    url: "https://vsco.co/minimish/gallery",
    description:
      "Check out my vsco. How techie can you get?",
    color: "#1099A8",
  },
  {
    text: "I try to build things.",
    badge: true,
    description:
      "Starting a home reno journey soon. On the side, I have a bunch of unfinished tech projects, oops. Great, can you get nerdier?",
    color: "#BC027F",
  },
  {
    text: "I ~love~ spreadsheets.",
    description:
      "I have a 7-page sheet that tracks every possible thought/goal/project in my life. Okay, so...you're a planner?",
    color: "#0D96F2",
  },
  {
    text: "I plan things, or I used to.",
    description:
      "Wedding Anniversary Parties. Hackathons. Alternative Spring Break programs. Do you do any actual work?",
    color: "#8EB814",
  },
  {
    text: "My tech labels are: ",
    description:
      "Googler. Ex-Warmer. Techstars Boulder 2020. UT Austin Class of 2019.",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Meet Manisha</title>
      <h1 style={headingStyles}>
        Hi, I'm Manisha.
        <br />
        <span style={headingAccentStyles}>— software engineer by trade, dabbling in everything else. </span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              {link.text}
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  New!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
