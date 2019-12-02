import React from 'react';
import './AvatarComment.scss';

type Props = {
  way: 'left'|'right';
  comment: string;
  commentColor: string;
  userName: string;
  userImg: string;
};

const AvatarComment: React.SFC<Props> = ({ way, comment, commentColor, userName, userImg }) => {
  return (
    <div className={'AvatarComment-container'}>
      <div className={'AvatarComment'}>
        <div className={'AvatarComment-speak'}>
          <div
            style={{ backgroundColor: commentColor }} 
            className={'AvatarComment-speak-area'}>
            {comment}
          </div>
          <div className={`AvatarComment-speak-tip-${way}`}>
              <div 
                style={{ borderBottomColor: commentColor }}
                className={`AvatarComment-speak-tip-square`}></div>
            </div>
        </div>

        <div className={`AvatarComment-user-${way}`}>
          <div className={`AvatarComment-user-${way}-name`}>
            {userName}
          </div>
          <div className={`AvatarComment-user-${way}-img`}>
            <img src={userImg} alt="user image"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarComment;