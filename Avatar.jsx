import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, src }) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
        />
    )
}

/* também dava para fazer desta forma e também funcionaria:


 import styles from './Avatar.module.css';

export function Avatar(props) {
    return (
        <img
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src} />
    )
*/
