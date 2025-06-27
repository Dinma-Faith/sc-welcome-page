import styles from "../css/welcome-page.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      {/* Welcome Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to SpeedCheck</h1>
          <p className={styles.subtext}>Your Internet Speed Companion</p>
          <button className={styles.cta}>Check Speed</button>
        </div>
      </section>

      {/* Why SpeedCheck Section */}
      <section className={styles.why}>
        <h2>Why SpeedCheck</h2>
        <p>
          SpeedCheck helps you test, track, and compare internet speeds across
          different service providers - all in one place.
          <br />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam aut
          rem ab obcaecati neque, quod sunt aperiam nostrum? Doloribus itaque
          dolores unde sunt consequatur magnam porro esse fugit ad quod.
        </p>
      </section>

      {/* About SpeedCheck Section */}
      <section className={styles.about}>
        <div className={styles.row}>
          <div className={styles.text}>
            <h3>Track Your Speed</h3>
            <p>
              Get accurate real-time results of your download, upload, and ping
              speeds whenever you need it.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              aut rem ab obcaecati neque, quod sunt aperiam nostrum? Doloribus
              itaque dolores unde sunt consequatur magnam porro esse fugit ad
              quod.
            </p>
          </div>
          <div className={styles.image}></div>
        </div>

        <div className={`${styles.row} ${styles.reverse}`}>
          <div className={styles.text}>
            <h3>Compare ISPs</h3>
            <p>
              SpeedCheck allows you to compare internet speed performance across
              multiple providers in your area.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              aut rem ab obcaecati neque, quod sunt aperiam nostrum? Doloribus
              itaque dolores unde sunt consequatur magnam porro esse fugit ad
              quod.
            </p>
          </div>

          <div className={styles.image}></div>
        </div>

        <div className={styles.row}>
          <div className={styles.text}>
            <h3>Stay Informed</h3>
            <p>
              Analyze your speed history, discover patterns, and make smarter
              decisions about your internet connection.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              aut rem ab obcaecati neque, quod sunt aperiam nostrum? Doloribus
              itaque dolores unde sunt consequatur magnam porro esse fugit ad
              quod.
            </p>
          </div>
          <div className={styles.image}></div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
