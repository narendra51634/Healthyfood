import style from './Listitem.module.css';
const Listitem = ({ healthiFood ,getfooditem, active}) => {   

  return (
    <div className={style.nkItems}>      
        <>
        <li  key={healthiFood} className={`${style.nkList} list-group-item ${active && 'active'}`}>{healthiFood}</li>
        <button name={active?'remove':'Buy'} onClick={getfooditem} className={`${style.nkButton} btn btn-primary`}>{active?'remove':'Buy'}</button>
        </>
    
    </div>
  );
};

export default Listitem;
