import React from 'react';
import Button from '../../atoms/Button';
import { ButtonSize } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { IButton } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';

import './buttonIcon.scss';

interface IButtonIcon extends Omit<IButton, 'size' | 'variant' | 'children'> {
  iconName: IconName;
  color: ColorType;
}

export const ButtonIcon: React.FC<IButtonIcon> = ({
  iconName,
  type,
  color,
  onClick,
  isDisabled,
  className,
}) => {
  return (
    <Button
      type={type}
      size={ButtonSize.small}
      isDisabled={isDisabled}
      onClick={onClick}
      className={className}
    >
      <Icon name={iconName} color={color} className="button__icon" />
    </Button>
  );
};

export default ButtonIcon;