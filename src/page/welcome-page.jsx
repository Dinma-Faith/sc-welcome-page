import styles from "../css/welcome-page.module.css";

const WelcomePage = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to SpeedCheck</h1>
          <p className={styles.subtext}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrup"
          </p>
          <button className={styles.cta}>Install</button>
        </div>
      </section>

      {/* Why Section */}
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

      <section className={styles.installSection}>
  <h2 className={styles.installTitle}>How to Install SpeedCheck Extension: Developer Guide</h2>

  {/* Prerequisites Section */}
  <div className={styles.installRow}>
    <div className={styles.installImage}></div>
    <div className={styles.installText}>
      <h3>1. Prerequisites</h3>
      <ul>
        <li>Google Chrome browser installed</li>
        <li>Node.js and npm installed</li>
        <li>Git installed on your system</li>
        <li>Basic understanding of terminal commands</li>
      </ul>
    </div>
  </div>

  {/* Setup Project Section */}
  <div className={`${styles.installRow} ${styles.reverse}`}>
    <div className={styles.installImage}></div>
    <div className={styles.installText}>
      <h3>2. Set Up the Project Locally</h3>
      <ul>
        <li>Clone the repository:
          <code>git clone https://github.com/your-username/speedcheck.git</code>
        </li>
        <li>Navigate to the project folder:
          <code>cd speedcheck</code>
        </li>
        <li>Install dependencies:
          <code>npm install</code>
        </li>
        <li>Build the project:
          <code>npm run build</code>
        </li>
        <li>Compile TypeScript files :
          <code>npx tsc</code>
        </li>
      </ul>
    </div>
  </div>

  {/* Load Extension in Chrome Section */}
  <div className={styles.installRow}>
    <div className={styles.installImage}></div>
    <div className={styles.installText}>
      <h3>3. Load Extension into Chrome</h3>
      <ul>
        <li>Open Chrome and go to:
          <code>chrome://extensions/</code>
        </li>
        <li>Enable <strong>Developer mode</strong> (top-right corner)</li>
        <li>Click <strong>Load Unpacked</strong></li>
        <li>Select the <code>dist</code> folder from the project directory</li>
        <li>The SpeedCheck Extension should now appear in your browser extensions</li>
      </ul>
    </div>
  </div>
</section>


    </div>
  );
};

export default WelcomePage;
