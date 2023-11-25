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
        <FormAddFriend />
        <Button>Add Friend</Button>
        <Button>Close</Button>
      </div>
      <FormSplitBill />
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

      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🧑‍🤝‍🧑Friend name</label>
      <input type="text" />
      <label>🦸‍♀️Friend Image Url</label>
      <input type="text" />
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
