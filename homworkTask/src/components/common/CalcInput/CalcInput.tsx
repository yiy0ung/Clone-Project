import React from 'react';
import './CalcInput.scss';
import Button from '../Button';

type Props = {
  placeholder?: string;
  title: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const CalcInput: React.SFC<Props> = ({
  title,
  value,
  onChange,
  onSubmit,
  placeholder,
}) => {
  return (
    <div className={'CalcInput'}>
      <div className={'CalcInput-title'}>
        {title}
      </div>
      <div className={'CalcInput-form'}>
        <div className={'CalcInput-form-input'}>
          <input
            className={`CalcInput-form-input-area`}
            onChange={onChange}
            placeholder={placeholder}
            value={value} />
          <div className={`CalcInput-form-input-text`}>만원</div>
        </div>

        <div className={'CalcInput-form-btn'}>
          <Button
            size={'small'}
            type={'button'}
            content={'계산하기'}
            display={'outline'}
            onClick={onSubmit}
          />
          {/* <button>계산하기</button> */}
        </div>
      </div>
    </div>
  );
};

CalcInput.defaultProps = {
  placeholder: '',
}

export default CalcInput;