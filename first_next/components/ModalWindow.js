import style from '../styles/ModalWindow.module.css'
import AuthForm from "./AuthForm";

const ModalWindow = ({children, visible, setVisible}) => {

    const rootStyles = [style.modal]
    if (visible) {
        rootStyles.push(style.active)
    }

    return (
        <div className={rootStyles.join(' ')} onClick={() => setVisible(false)}>
            <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                <AuthForm setModal={setVisible}></AuthForm>
            </div>
        </div>
    );
};

export default ModalWindow;