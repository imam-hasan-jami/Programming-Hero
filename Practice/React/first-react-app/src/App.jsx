import Student from './Student'
import ToDo from './ToDo';
import Superstar from './Superstar';
import Library from './Library';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import Players from './Players';
import { Suspense } from 'react';

  // Users component
  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json());

  // Friends component
  const fetchFriends = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  }

  // Posts component
  const fetchPosts = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    return response.json();
  }

function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  const time = 10;

  const superstars = [
    {id:1, name:"Ronaldo", age: 40},
    {id:2, name:"Palmer", age: 20},
    {id:3, name:"Bellingham", age: 21}
  ];

  const books = [
    {id: 1, name: "Harry Potter", price: 300},
    {id: 2, name: "Game of Thrones", price: 700},
    {id: 3, name: "Lord of Rings", price: 450},
    {id: 4, name: "AOT Manga", price: 1050}
  ];

    return (
      <>
        {/* <Student name="Sadi" age={23} isStudent={true} /> */}
        {/* using default values provided in the parameter */}
        {/* <Student /> */}
        {/* uses only jamal for name and default parameter value for rest of the values */}
        {/* <Student name="Jamal" /> */}

        {/* calling components declared in the same file */}
        {/* <Sport name="Cricket" format="T20" />
        <Sport name="Football" format="90min" />
        <Pet />
        <Device name="iPhone" /> */}

        {/* using array destructuring */}
        {/* <Player name="Cristiano Ronaldo" goals="930" /> */}

        {/* <ToDo task="Pray Tahajjud" time={time} isDone={false} />
        <ToDo task="Eat Seheri" time={30} isDone={true} /> */}

        {/* {
          superstars.map(superstar => <Superstar key={superstar.id} superstar={superstar}/>)
        } */}

        {/* <Library books={books}/> */}

        {/* <Counter/> */}
        {/* <Batsman/> */}

        {/* <Suspense fallback={<h4>Users Are Loading</h4>}>
          <Users fetchUsers={fetchUsers} />
        </Suspense> */}

        {/* <Suspense fallback={<h4>Friends Are Loading</h4>}>
          <Friends friendsPromise={friendsPromise} />
        </Suspense> */}

        {/* <Suspense fallback={<h4>Posts Are Loading</h4>}>
          <Posts postsPromise={postsPromise} />
        </Suspense> */}

        <Players/>
      </>
    )
}

function Sport(props) {
  return(
    <>
      <ul>
        <li>{props.name}, {props.format}</li>
      </ul>
    </>
  )
}

function Pet() {
  const petName = "Mimi";
  return(
    <p>I have a pet named {petName}</p>
  )
}

function Device(props) {
  return(
    <>
      <p>My primary device is {props.name}</p>
    </>
  )
}

// using array destructuring instead of props object
function Player({name, goals}) {
  return(
    <div>
      <h3>Player Name: {name}</h3>
      <p>Goals Scored: {goals}</p>
    </div>
  )
}

export default App
