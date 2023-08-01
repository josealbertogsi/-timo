import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(props) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder= {false} src="https://github.com/albertojosegsi.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                             <time title="11 de maio às 08:13" dateTime="2023-05-11 08:13:30">Cerca de uma 1h</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                     <button>
                        <ThumbsUp />
                        Aplaudir<span>20</span>
                     </button>
                </footer>
            </div>
        </div>
    )
}
