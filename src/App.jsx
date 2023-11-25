import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
      </div>
    </div>
  );
}

export default App;

function FriendsList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
      {/* this condition for if the balance is negative */}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} &#8377; {Math.abs(friend.balance)}
        </p>
      )}

      {/* this condition for if the balance is not negative */}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you &#8377; {Math.abs(friend.balance)}
        </p>
      )}

      {/* this condition for if the balance = 0 */}
      {friend.balance === 0 && <p>You and {friend.name} are even.</p>}
    </li>
  );
}
