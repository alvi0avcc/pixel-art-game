import styles from './About.module.css';

const About = () => {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.aboutContent}>
        <h2>About Page</h2>
        <br />
        <p>About the Labyrinth project</p>
        <p>
          Welcome to a minimalist labyrinth! Your goal is
          simple: find the exit. What awaits you: Random
          generation: Each new labyrinth is unique.
          Atmospheric immersion: Sounds of footsteps,
          echoes, and mysterious music (not yet
          implemented). Just you and the walls: No enemies,
          just your attention and spatial memory. Controls:
          Arrow keys or WASD. This project is a small
          experiment in creating atmosphere using simple
          tools, built on React. Thanks for stopping by!
          Enjoy your exploration.
        </p>
        <br />
        <a
          className={styles.info}
          href="https://github.com/alvi0avcc/pixel-art-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
      </section>
    </main>
  );
};

export default About;
