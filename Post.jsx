import { Avatar } from './Avatar'
import { Comment } from './Comment';
import styles from './Post.module.css';
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/albertojosegsi.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Digego Fernandes</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de maio às 08:13" dateTime="2023-05-11 08:13:30">Publicado há uma 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Lorem ipsum diam est iaculis cubilia litora lorem lacinia euismod netus molestie malesuada rutrum donec aliquet quisque nisi, ultrices torquent justo cubilia aliquam euismod accumsan vel aliquet tempor.</p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>
                <textarea placeholder="Deixe um comentário"/>
                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}
