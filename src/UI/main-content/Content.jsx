import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { FaUserLock } from "react-icons/fa";
import { wikipediaDetails } from "../../fakeData";

function Content() {
  const [showScreenshot, setShowScreenshot] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        left: "18rem",
        top: "11.6rem",
        width: "56rem",
      }}
    >
      <Stack direction={"row"} spacing={78}>
        <p style={{ fontSize: "14px" }}>
          From Wikipedia, the free encyclopedia
        </p>
        <FaUserLock />
      </Stack>
      <br />
      <div style={{ paddingLeft: "2rem" }}>
        <span className="italic">
          This article is about the online encyclopedia. For Wikipedia's home
          page, see Main Page. For the primary English-language Wikipedia, see
          English Wikipedia. For other uses, see Wikipedia (disambiguation).
        </span>
      </div>
      <br />
      <Stack direction={"row"}>
        <div>
          <p className="detailPara">
            <span style={{ fontWeight: 700 }}>Wikipedia</span>
            <sup className="supLink">[note 3]</sup> is a free-content online
            encyclopedia, written and maintained by a community of volunteers,
            collectively known as Wikipedians, through open collaboration and
            using a wiki-based editing system called MediaWiki. Wikipedia is the
            largest and most-read reference work in history.{" "}
            <sup className="supLink">[3][4] </sup> It has been ranked
            consistently one of the 10 most popular websites in the world, and,
            as of 2023, ranks as the 4th most viewed website by Semrush.{" "}
            <sup className="supLink">[5][6]</sup> Founded by Jimmy Wales and
            Larry Sanger, on January 15, 2001, it is hosted by the Wikimedia
            Foundation, an American nonprofit organization that by October 2023,
            employed a staff of over 700 people.{" "}
            <sup className="supLink">[7]</sup>
            <br />
            <br />
            Initially only available in English, editions in other languages
            were quickly developed. Wikipedia's editions, when combined,
            comprise more than 62 million articles, attracting around 2 billion
            unique device visits per month and more than 14 million edits per
            month (about 5.2 edits per second on average) as of November 2023.{" "}
            <sup className="supLink">[8][W 1]</sup> 26% of Wikipedia's traffic
            is from the United States, followed by Japan at 5.9%, the United
            Kingdom at 5.4%, Germany at 5%, Russia at 4.8%, and the remaining
            54% split among other countries, according to data provided by
            Similarweb. <sup className="supLink">[9]</sup>
            <br />
            <br />
            Wikipedia has been praised for its enablement of the democratization
            of knowledge, extent of coverage, unique structure, and culture. It
            has been criticized for exhibiting systemic bias, particularly
            gender bias against women and geographical bias against the Global
            South (Eurocentrism).<sup className="supLink">[10][11] </sup> While
            the reliability of Wikipedia was frequently criticized in the 2000s,
            it has improved over time, receiving greater praise in the late
            2010s and early 2020s,{" "}
            <sup className="supLink">[3][10][12][note 4]</sup> having become an
            important fact-checking site.{" "}
            <sup className="supLink">[13][14]</sup>
            <br />
            <br />
            Wikipedia has been censored by some national governments, ranging
            from specific pages to the entire site.{" "}
            <sup className="supLink">[15][16]</sup> Articles on breaking news
            are often accessed as sources for frequently updated information
            about those events. <sup className="supLink">[17][18]</sup>
          </p>
        </div>

        <div className="bioData">
          <h4 style={{ textAlign: "center" }}>Wikipedia</h4>
          <Box
            sx={{
              border: "1px solid #a2a9b1",
              bgcolor: "#f8f9fa",
              width: 280,
              padding: "8px 0",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/225px-Wikipedia-logo-v2.svg.png"
              alt="logo"
              width={150}
              style={{
                marginLeft: "4rem",
              }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Wikipedia-logo-textonly.svg/300px-Wikipedia-logo-textonly.svg.png"
              alt="logo"
              width={190}
              style={{
                marginLeft: "3rem",
              }}
            />
            <br />
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                lineHeight: 1.5,
                padding: "0 5px",
              }}
            >
              The logo of Wikipedia, a globe featuring glyphs from various
              writing systems such as English, Greek, Hindu, Chinese, Arabic,
              etc
            </p>
            <br />
            <p
              style={{
                backgroundColor: "#dcdcdc",
                fontSize: "13px",
                fontWeight: 700,
                padding: "2px  6rem",
                marginLeft: "8px",
                width: 60,
              }}
            >
              Screenshot
              <span
                style={{
                  fontWeight: 400,
                  fontSize: "12px",
                  cursor: "pointer",
                  color: "#3366cc",
                  marginLeft: "3rem",
                }}
                onClick={() => setShowScreenshot((prev) => !prev)}
              >
                {showScreenshot ? "[hide]" : "[show]"}
              </span>
            </p>
            {showScreenshot && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Wikipedia_Portal_Screenshot_%282022%29.svg/450px-Wikipedia_Portal_Screenshot_%282022%29.svg.png"
                alt="screenShotImg"
                width={250}
                style={{ marginLeft: "1rem", padding: "10px 0" }}
              />
            )}

            <div className="bio">
              <Stack
                sx={{
                  fontSize: "12px",
                  marginLeft: "12px",
                  paddingTop: "8px",
                }}
              >
                {wikipediaDetails.map((item, index) => {
                  return (
                    <>
                      <Stack direction={"row"} key={index} sx={{ width: 250 }}>
                        <p className="bioDataTitle" style={{ width: 125 }}>
                          {item.name}
                        </p>
                        <p
                          className={item.link ? "bioDataLink" : ""}
                          style={{ marginLeft: "2rem", width: 125 }}
                        >
                          {item.detail}
                        </p>
                      </Stack>
                      <br />
                    </>
                  );
                })}
              </Stack>
            </div>
          </Box>
        </div>
      </Stack>
    </div>
  );
}

export default Content;
