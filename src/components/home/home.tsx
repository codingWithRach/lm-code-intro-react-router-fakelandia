import { useMisdemeanours } from "../../context/MisdemeanoursContext";

const Home: React.FC = () => {
  const misdemeanours = useMisdemeanours();

  return (
    <>
      <h1 className="pageHeading">Fakelandia Justice Department</h1>
      <div className="pageText">
        Welcome to the home of the Justice Department of Fakelandia
      </div>
      <div className="pageText">
        Here you can browse a list of recent misdemeanours committed by our
        citizens, or you can confess to your own misdemeanour
      </div>
      <h2 className="subHeading">Statistics</h2>
      <div className="pageText">
        Number of misdemeanours currently reported: {misdemeanours.length}
      </div>
    </>
  );
};

export default Home;
