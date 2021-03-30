import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types';
import { FaBookmark,FaRegBookmark } from "react-icons/fa";
import {useGlobalContext} from '../../common/context';
import DetailScss from './detailCard.module.scss';
import defaultImage from '../../assets/KM_logo.svg'
import Error404 from '../../common/Error_404';


const DetailCard = ({volumeInfo,id}) => {
  const {user,addWhish,removeWhish,whishList,setShowToast} = useGlobalContext();
  const [toggle,setToggle] = useState(false)
  const links = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;
  const authors = volumeInfo.authors && volumeInfo.authors.toString();

  const AddItem = () => {
    if(user){
      addWhish({id,volumeInfo,addItem:!toggle});
    }else{
      setShowToast(true);
    };
  }
  const RemoveItem = () => {
    if(user){
      removeWhish({id,volumeInfo,addItem:toggle});
      setToggle(!toggle);
    }else{
      setShowToast(true);
    };
  }

  useEffect(()=>{
    if(user){
      whishList.forEach(res=>{
        if(res.id===id){
          setToggle(res.addItem);
        }
      })
    }else{
      setToggle(false);
    }
  },[whishList, id, user])

  return (
    <>
    {
      id!=='' ? (
        <div className={DetailScss['detail']}>
      <div className={DetailScss['img-thumbnail']}>
        <img src={links || defaultImage} alt={volumeInfo.title} />
        {
        toggle ? (
          <button onClick={RemoveItem} className="text-primary"><FaBookmark /></button>
        ) : ( 
          <button onClick={AddItem} className="text-primary"><FaRegBookmark /></button>
        )
      }
      </div>
      <div className={DetailScss['view-details']}>
        <h1>{volumeInfo.title || 'Senza titolo'}</h1>
        <p className="mb-0">
          Autore: <span className="text-primary">{authors || 'Sconosciuto'}</span>
        </p>
        <p>
          Casa Editrice: {volumeInfo.publisher ? <span className="text-primary">{volumeInfo.publisher}</span> : ''}
        </p>
        <p>
          Descrizione <br/> 
          <span className="text-info">{volumeInfo.description || 'Questo libro non ha una descrizione'}</span>
        </p>
      </div>
    </div>
      ) : ( <Error404 />)
    }
    </>
  )
}

DetailCard.propTypes = {
  volumeInfo: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired
}
DetailCard.defaultProps = {
  volumeInfo: {},
  id:''
}

export default DetailCard;
