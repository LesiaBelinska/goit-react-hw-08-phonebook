import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";

//import { changeFilter } from "redux/filterSlice";
import s from "./Filter.module.css";


const Filter = () => {

const id = useId();
const filter = useSelector(state => state.filter);
const dispatch = useDispatch();
    

    const onChangeFilter = (event) => console.log(filter);
// const onChangeFilter = (event) => dispatch(changeFilter(event.currentTarget.value));

    return (
        <div className={s.filter}>
            <label htmlFor={`${id}-filter`} className={s.label}>Find contacts by name</label>
            <input className={s.input} type="text"
                id={`${id}-filter`}
                value={filter}
                onChange={onChangeFilter}
            />
        </div>

    );
}

export default Filter;