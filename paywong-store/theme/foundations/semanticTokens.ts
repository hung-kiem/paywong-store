import { ColorMix } from '../types';

type Values = {
  default?: string | number;
  _dark?: string | number;
};
type SemanticToken = Record<'colors', Record<ColorMix, Values>>;

const semanticTokens: SemanticToken = {
  colors: {
    bgContent: {
      default: 'gray.50',
      _dark: 'gray.700',
    },
    bgItem: {
      default: 'white',
      _dark: 'gray.800',
    },
    nav: {
      default: 'gray.700',
      _dark: 'gray.100',
    },
    textHint: {
      default: 'gray.700',
      _dark: 'gray.400',
    },
    textSub: {
      default: 'gray.600',
      _dark: 'gray.200',
    },
    border: {
      default: 'gray.200',
      _dark: 'gray.600',
    },
    hover: {
      default: 'gray.50',
      _dark: 'gray.900',
    },
    textTitle: {
      default: 'gray.800',
      _dark: 'gray.100',
    },
    bgHint: {
      default: 'gray.100',
      _dark: 'gray.600',
    },
    textHelper: {
      default: 'gray.400',
      _dark: 'gray.300',
    },
    bgSummary: {
      default: 'gray.100',
      _dark: 'gray.600',
    },
    selected: {
      default: 'purple.500',
      _dark: 'purple.500',
    },
    bgSelected: {
      default: 'purple.50',
      _dark: 'purple.900',
    },
    grayMiddle: {
      default: 'gray.500',
      _dark: 'gray.400',
    },
    textImpotant: {
      default: 'gray.900',
      _dark: 'gray.50',
    },
  },
};

export default semanticTokens;
