import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/mguibtech.png" alt="" />

                    <div className={styles.authorInfo}>
                        <strong>Marcos Guibson</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='11 de Maio as 08:13h' dateTime='2022-05-11 08:13:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href='#'>jane.design/doctorcare</a> </p>

                <p>
                    <a href='#'>#novoprojeto </a>
                    <a href='#'>#nlw </a>{' '}
                    <a href='#'>#rocketseat</a>
                </p>
            </div>
            
            <form className={styles.comentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                >

                </textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
                
            </form>
        </article>
    )
}

