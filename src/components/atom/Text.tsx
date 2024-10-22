import {Dimensions, PixelRatio, StyleProp, TextStyle} from 'react-native';
import capitalizeWord from 'src/utils/capitalizeWord';
import styled, {css} from 'styled-components/native';

const {width: screenWidth} = Dimensions.get('window');

interface IText {
  weight?: 'bold' | 'light' | 'regular' | 'medium';
  color?: string;
  size?: number;
  m?: string;
  textAlign?: 'left' | 'center' | 'right';
  textDecorationLine?: 'none' | 'underline' | 'line-through';
  textTransform?: 'none' | 'uppercase' | 'capitalize' | 'lowercase';
  flex?: number;
  lineHeight?: number;

  extraBold?: boolean;

  title?: boolean;

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;

  style?: StyleProp<TextStyle>;
}

export const pixelRatioNormalizer = (size: number): number => {
  const scale = screenWidth / 410;
  const newSize = size * scale;
  const calculatedSize = Math.round(PixelRatio.roundToNearestPixel(newSize));

  if (PixelRatio.get() < 3) {
    return calculatedSize - 0.5;
  }
  return calculatedSize;
};

export default styled.Text<IText>`
  color: ${({theme}) => theme.colors.white};
  font-family: ${props =>
    `Poppins-${capitalizeWord(props.weight || 'Regular')}`};
  font-size: ${({size}) => `${pixelRatioNormalizer(size || 16)}px`};
  margin: ${({m}) => m || '0'};
  text-align: ${({textAlign}) => textAlign || 'left'};
  text-decoration-line: ${({textDecorationLine}) =>
    textDecorationLine || 'none'};
  text-transform: ${({textTransform}) => textTransform || 'none'};

  ${({extraBold}) =>
    extraBold &&
    css`
      font-family: Poppins-ExtraBold;
    `};

  ${({flex}) =>
    flex &&
    css`
      flex: ${flex};
    `};

  ${({title}) =>
    title &&
    css`
      font-family: Poppins-ExtraBold;
    `};

  ${({lineHeight}) =>
    lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}

  ${({h1}) =>
    h1 &&
    css`
      font-size: ${pixelRatioNormalizer(42)}px;
      font-family: Poppins-ExtraBold;
      text-transform: uppercase;
    `};

  ${({h2}) =>
    h2 &&
    css`
      font-size: ${pixelRatioNormalizer(32)}px;
      font-family: Poppins-ExtraBold;
      text-transform: uppercase;
    `};

  ${({h3}) =>
    h3 &&
    css`
      font-size: ${pixelRatioNormalizer(26)}px;
      font-family: Poppins-ExtraBold;
      text-transform: uppercase;
    `};

  ${({h4}) =>
    h4 &&
    css`
      font-size: ${pixelRatioNormalizer(20)}px;
      font-family: Poppins-ExtraBold;
      text-transform: uppercase;
    `};

  ${({color}) =>
    color &&
    css`
      color: ${color};
    `}
`;
