
import { Header } from './components/Header';

import styles from './App.module.css'

import './global.css';
import { Sidebar } from './components/Sidebar';
import { Post } from '../Post';

export function App() {
  return(
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author = "Diego Fernandes"
            content = "Lorem ipsum dolor sit amet consectetur adiplisicing elit."
          />
          
          <Post
            author = "Diego Fernandes"
            content = "Lorem ipsum dolor."
          />
        </main>
      </div>
    </div>    
  )  
}
