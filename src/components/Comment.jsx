
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';
export function Comment(){
    return (
        
        <div className={styles.comment}>
             <Avatar hasBorder={false}
              src="https://github.com/CarlosDanielMoura.png"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Carlos Daniel</strong>
                            <time title='04 de julho ás 10:55' dateTime="2022-07-04 10:54:32"> Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar cometário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>Muito Bom Devon, Parabéns!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

                
            </div>
        </div>   
    );
}