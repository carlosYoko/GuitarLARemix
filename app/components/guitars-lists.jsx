import Guitar from "./guitar";

const GuitarLists = ({ guitars }) => {
  return (
    <>
      <h2 className="heading">Coleción</h2>
      {guitars?.length && (
        <div className="guitars-grid">
          {guitars.map((guitar) => (
            <Guitar key={guitar?.id} guitar={guitar.attributes} />
          ))}
        </div>
      )}
    </>
  );
};

export default GuitarLists;
