import Section from './section'
import screenSizes from '../../lib/screen-sizes'

const Video = () => (
  <Section>
    <div className="split">
      <div className="video">
        <div className="overlay">
          <img
            src={require('../../static/images/play.svg')}
            className="play-icon"
          />
        </div>
        <img src="/static/images/video/preview.jpg" className="preview" />
      </div>
      <div className="text">
        <h3>More quality, less noise</h3>
        <p>
          Export as GIF, MP4, WebM or APNG with optional audio, highlight clicks
          and trimming.
        </p>
        <div className="line" />
        <a href="https://medium.com/wulkano-friends/from-idea-to-product-and-beyond-a12850403c38">
          <span>How Kap was built</span>
          <img src={require('../../static/images/arrow-right.svg')} />
        </a>
      </div>
    </div>

    <style jsx>{`
      .split {
        flex: 1;
        display: flex;
        overflow: hidden;
        margin-top: 228px;
        margin-bottom: -64px;
      }

      .video {
        width: 50%;
        z-index: 100;
        position: relative;
        cursor: pointer;
        border-radius: 4px 4px 4px 4px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        overflow: hidden;
      }

      .video > img {
        float: right;
        width: 1024px;
        height: 576px;
      }

      .video:hover .play-icon {
        transform: scale(1.2);
      }

      .video:hover .overlay {
        background-color: rgba(0, 0, 0, 0.1);
      }

      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        width: 100%;
        max-width: 1024px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 150ms ease;
      }

      .play-icon {
        width: 48px;
        height: 48px;
        transition: 150ms ease;
      }

      .text {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        max-width: 368px;
        margin-left: auto;
        margin-right: auto;
      }

      .line {
        height: 1px;
        display: block;
        border-bottom: solid 1px #f1f1f1;
        width: 100%;
        margin: 32px 0;
      }

      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
      }

      a img {
        animation: ease-out alternate infinite;
        animation-duration: 300ms;
        transition: all 1000ms ease;
        transform: translateX(0px);
        animation-fill-mode: forwards;
      }

      a:hover {
        text-decoration: underline;
      }

      a:hover img {
        animation-name: arrow;
      }
      h3 {
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 16px;
        line-height: 1.33;
      }

      img.preview {
        border-radius: 4px 4px 4px 4px;
        overflow: hidden;
      }

      @keyframes arrow {
        from {
          transform: translateX(0px);
        }
        to {
          transform: translateX(-10px);
        }
      }

      @media only screen and (max-width: ${screenSizes.tablet}) {
        .split {
          flex-direction: column-reverse;
          margin-top: 128px;
          margin-bottom: -64px;
          padding: 16px;
          padding-bottom: 0;
        }

        .text {
          margin-left: 0;
          margin-right: 0;
          max-width: none;
        }

        .video {
          width: 100%;
          z-index: 100;
          position: relative;
          cursor: pointer;
          margin-top: 32px;

          overflow: hidden;
        }

        .video > img {
          width: 100%;
          float: none;
          height: auto;
        }

        .overlay:hover {
          background-color: transparent;
        }
      }
    `}</style>
  </Section>
)

export default Video
