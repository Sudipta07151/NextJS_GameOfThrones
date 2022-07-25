export const getStaticPaths = async () => {
  const response = await fetch("https://anapioficeandfire.com/api/books/1");
  let data = await response.json();
  data = data.characters;
  const paths = data.map((character) => {
    let text = character;
    let position = text.search(/characters/);
    let idValue = text.substr(position + 11);
    return {
      params: {
        id: idValue.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://anapioficeandfire.com/api/characters/" + id
  );
  const data = await response.json();
  return {
    props: {
      characterData: data,
    },
  };
};

const Details = ({ characterData }) => {
  const mapData = () => {
    return Object.values(characterData).map((data) => {
      return <ul>{data}</ul>;
    });
  };
  return <div>{mapData()}</div>;
};

export default Details;
