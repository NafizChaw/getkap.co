import styles from './footer.module.css'

const Links = () => (
  <ul className={styles.links}>
    <li>
      <a target="_blank" rel="noopener" href="/api/download/arm64" download>
        Download for Apple (M1)
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener" href="/api/download/x64" download>
        Download for Apple (Intel)
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener" href="https://github.com/wulkano/kap/issues">
        Issues
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener" href="https://github.com/wulkano/kap/blob/master/LICENSE.md">
        License
      </a>
    </li>
  </ul>
)

export default Links
