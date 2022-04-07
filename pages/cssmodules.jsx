import styles from '../styles/Hoge.module.css'
import Link from 'next/link'

export default function Cssmodules() {
  return (
      <>
      <section className={styles.Wrapper}>
        <Link href="/">HOME</Link>
        <h1 className={styles.Title}>
          Cssinjs World!
        </h1>
      </section>
      <section className={styles.Wrapper}>
        <button className={`${styles.Button} ${styles.Primary}`}>test1</button>
        <button className={styles.Button}>test2</button>
        <button className={`${styles.Button} ${styles.Primary}`}>test3</button>
        <button className={styles.Button}>test4</button>
        <button className={`${styles.Button} ${styles.Primary}`}>test5</button>
        <button className={styles.Button}>test6</button>
        <button className={`${styles.Button} ${styles.Primary}`}>test7</button>
        <button className={styles.Button}>test8</button>
      </section>
      <section className={styles.Wrapper}>
        <div className={styles.HoverDivLightreen}>
          hover green
        </div>
        <div className={styles.HoverDivOrange}>
          hover orange
        </div>
      </section>
      <section className={styles.Wrapper}>
        <button className={styles.Button} style={{background: 'lightgreen' ,color: "yellow"}}>test1</button>
        <button className={styles.Button} style={{background: 'blue' ,color: "red"}}>test2</button>
        <button className={styles.Button} style={{background: 'gray' ,color: "brown"}}>test3</button>
        <button className={styles.Button} style={{ background: 'indigo' ,color: "orange"}}>test4</button>
        <button className={styles.Button} style={{background: 'yellow' ,color: "green"}}>test1</button>
        <button className={styles.Button} style={{background: 'brown' ,color: "gray"}}>test2</button>
        <button className={styles.Button} style={{background: 'red' ,color: "blue"}}>test3</button>
        <button className={styles.Button} style={{background: 'orange' ,color: "white"}}>test4</button>
      </section>
      <section className={styles.Wrapper}>
      <section className={styles.Wrapper}>
        <div className={styles.Thing}>test1</div>
        <div className={styles.Thing}>test2</div>
        <div className={styles.somediv}>The sun is shining...</div>
        <div className={styles.Thing}>test3</div>
        <div className={styles.Thing}>test4</div>
        <div className={styles.Thing}>test5</div>
        <div className={styles.someThingElse}>
          <div>test6</div>
        </div>
      </section>
      </section>
      <section className={styles.Wrapper}>
        <input className={styles.input}></input>
        <input className={styles.input}></input>
      </section>
      <section className={styles.Wrapper}>
        <label className={styles.Label}>
          test1
        </label>
        <label className={styles.Label}>
          test2
        </label>
      </section>
    </>
  )
}
