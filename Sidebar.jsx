import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
      <aside className={styles.sidebar}>
        <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=170&q=80"/>

        <div className={styles.profile}>
          <Avatar src="https://github.com/maykbrito.png"/>
          <strong>Diego Fernandes</strong>
          <span>Web developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine />
            Editar seu perfil
          </a>
        </footer>

      </aside>
);
}
