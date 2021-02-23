import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer} >
      <img src="https://github.com/miguel018.png" alt="Miguel Moura"/>
      <div>
        <strong>Miguel Moura</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          Level 1
        </p>
      </div>
    </div>
  )
}
