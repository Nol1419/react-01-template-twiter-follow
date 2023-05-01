import "./App.css";
import TwiterFollowCard from "./components/TwiterFollowCard";

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true,
  },
  {
    userName: "pheralb",
    name: "Pablo H.",
    isFollowing: false,
  },
  {
    userName: "PacoHdezs",
    name: "Paco Hdez",
    isFollowing: true,
  },
  {
    userName: "TMChein",
    name: "Tomas",
    isFollowing: false,
  },
];

function App() {
  return (
    <section className="app">
      {users.map(({ userName, name, isFollowing }) => (
        <TwiterFollowCard
          key={name}
          userName={userName}
          initialIsFollowing={isFollowing}
        >
          {name}
        </TwiterFollowCard>
      ))}
    </section>
  );
}

export default App;
