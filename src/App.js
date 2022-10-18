import './App.css';
import { Post } from './components/Posts.js'


let obj = [{
  name: "Jeni",
  fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZs0i2gN-lcm74BLaEyL-gzWxQnmwW0fl7Q&usqp=CAU',
  nickname: '@bin',
  content: "Я тебе не боюся, клятий вилупку",
  fotoContent: 'https://data-vyhoda.ru/wp-content/uploads/2019/02/Povorot-ne-tuda-7-data-vyhoda.jpg'
},
{
  name: "Ivan",
  fotoAuthor: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5OyONzCdE1yJOvtpxTCe1gQ8DcFxQchR7w&usqp=CAU',
  nickname: '@ill',
  content: "Хороша дівчинка)))",
  fotoContent: 'https://64.media.tumblr.com/tumblr_mc362p66zr1qkktc4o3_500.gifv'
}
]
function App() {
  return (
    <div className="App">
      {obj.map((p, i) => <Post key={i}{...p} />)}
    </div>
  );
}

export default App;
