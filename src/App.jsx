import { useState } from "react";
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

// reusable component
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

// main app component
function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;

function FriendsList({ friends }) {
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

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    // form validation
    if (!name || !image) return "";

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑Friend name</label>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <label>🦸‍♀️ Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with</h2>
      <label>💰 Bill value</label>
      <input type="text" />

      <label>🕴️ Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 Clarks expense</label>
      <input type="text" disabled />

      <label>🦸‍♀️ Who is paying the bill?</label>
      <select>
        <option>You</option>
        <option>Clark</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
