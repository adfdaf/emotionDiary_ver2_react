import React from 'react';
import { getEmotionImgById } from '../util';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from './Button';
import './DiaryItem.css';

const DiaryItem = ({ id, date, emotionId, content }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/diary/${id}`);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={['img_section', `img_section_${emotionId}`].join(' ')}
      >
        <img src={getEmotionImgById(emotionId)} alt={`emotion${emotionId}`} />
      </div>
      <div onClick={goDetail} className="info_section">
        <div className="date_wrapper">
          {new Date(parseInt(date)).toLocaleDateString()}
        </div>
        <div className="content_wrapper">{content.slice(0, 25)}</div>
      </div>
      <div className="button_section">
        <Button text={'수정하기'} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
