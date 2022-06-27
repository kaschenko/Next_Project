import style from '../styles/CustomInput.module.css'

const CustomInput = (props) => {
    return (
        <input className={style.customInput} {...props}/>
    );
};

export default CustomInput;