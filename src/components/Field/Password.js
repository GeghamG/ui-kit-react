import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Icon } from '../Icon';
import { color } from '../../shared/styles';
import { StyledBase } from './Input';

const StyledIcon = styled.span`
   position: absolute;
   line-height: 0;
   width: 36px;
   text-align: center;
   color: ${color.mediumdark};

   ${props => props.onClick && css`
      cursor: pointer;
   `}
`

const StyledInputWrapper = styled.div`
   position: relative;

   ${StyledIcon} {
      top: 50%;
      transform: translateY(-50%);

      &:first-child {
         left: 0;
      }

      &:last-child {
         right: 0;
      }
   }

   ${StyledBase} {
      ${props => props.iconLeft && css`
         padding-left: 36px;
      `}

      ${props => props.iconRight && css`
         padding-right: 36px;
      `}
   }
`

export const Password = (props) => {
   const [visible, setVisible] = useState(false)

   const getVisibilityIcon = () => {
      if (visible) {
         return (
            <StyledIcon onClick={() => setVisible(!visible)}>
               <Icon icon={'eyeclose'} />
            </StyledIcon>
         )
      }
      else {
         return (
            <StyledIcon onClick={() => setVisible(!visible)}>
               <Icon icon={'eye'} />
            </StyledIcon>
         )
      }
   }

   const getIconLeft = () =>
      props.iconLeft ? (
         <StyledIcon>
            <Icon icon={props.iconLeft} />
         </StyledIcon>
      ) : null;

   const getIconRight = () =>
      props.iconRight ? (
         <StyledIcon>
            <Icon icon={props.iconRight} />
         </StyledIcon>
      ) : getVisibilityIcon();

   return (
      <StyledInputWrapper {...props}>
         {getIconLeft()}
         <StyledBase {...props} type={visible?'text':'password'} defaultValue={props.value} />
         {getIconRight()}
      </StyledInputWrapper>
   )
}