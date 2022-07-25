import styles from "../../styles/Characters.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://anapioficeandfire.com/api/books/1");
  const data = await response.json();

  return {
    props: { data: data.characters },
  };
};

const Characters = ({ data }) => {
  const mapData = () => {
    return data.map((el, index) => {
      let text = el
      let position = text.search(/characters/);
      let idValue = text.substr(position + 11);
  
      return (
        <ul key={index} className={styles.characterLink}>
          <Link href={"/characters/" + idValue}>{el}</Link>
        </ul>
      );
    });
  };
  return <div>{mapData()}</div>;
};

export default Characters;
