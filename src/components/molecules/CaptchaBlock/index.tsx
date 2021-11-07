import React, { useCallback, useEffect, useState } from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../ButtonIcon';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { Spinner } from '../Spinner';

import './captchaBlock.scss';
import { fetchApi } from '../../../services/api';

export const CaptchaBlock = (): React.ReactElement => {
  const [captchaURL, setCaptchaURL] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handlerCaptchaURL = useCallback(() => {
    fetchApi.fetchCaptcha(setCaptchaURL, setIsLoaded);
  }, []);

  useEffect(() => {
    handlerCaptchaURL();
  }, [handlerCaptchaURL]);

  return (
    <Wrapper flex align="center" className="captcha-block">
      {isLoaded ? (
        !captchaURL ? (
          <span>Failed to fetch captcha</span>
        ) : (
          <img src={`${captchaURL}`} alt="captcha" />
        )
      ) : (
        <Spinner className="captcha-block__spinner" />
      )}

      <ButtonIcon
        className="captcha-block__button"
        iconName={IconName.updateIcon}
        color={ColorType.primary}
        type={ButtonType.button}
        onClick={handlerCaptchaURL}
      />
    </Wrapper>
  );
};
