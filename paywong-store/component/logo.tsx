import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

interface LogoProps extends HTMLChakraProps<"svg"> {}
const Logo = ({ ...rest }: LogoProps) => {
  const color = useColorModeValue("#170000", "white");
  return (
    <chakra.svg viewBox="0 0 149 39" fill="none" {...rest}>
      <path
        d="M52.652 27.749v-6.777a5.359 5.359 0 0 0 3.942 1.73c3.54 0 6.08-2.607 6.08-6.114 0-3.318-2.66-6.067-6.175-6.067-3.515 0-6.198 2.607-6.198 6.067v11.16h2.351Zm3.847-7.251c-2.184 0-3.847-1.778-3.847-3.887 0-2.132 1.663-3.862 3.847-3.862 2.161 0 3.824 1.73 3.824 3.862 0 2.11-1.663 3.887-3.824 3.887ZM69.249 22.701c1.9 0 3.443-.9 4.322-2.322v2.038h2.233v-5.83c0-3.459-2.684-6.066-6.2-6.066-3.538 0-6.198 2.75-6.198 6.067 0 3.365 2.47 6.113 5.843 6.113Zm.356-2.227c-2.161 0-3.848-1.754-3.848-3.863 0-2.132 1.687-3.886 3.848-3.886 2.185 0 3.847 1.754 3.847 3.886 0 2.11-1.662 3.863-3.847 3.863ZM83.303 28.058c3.777 0 6.057-2.678 6.057-6.564V10.807h-2.375v5.734c0 2.133-1.33 3.839-3.373 3.839-2.113 0-3.253-1.493-3.253-3.673v-5.9H78.03v6.019c0 3.412 1.734 5.758 5.296 5.758 1.758 0 2.993-.782 3.681-2.085v1.018c0 2.512-1.282 4.36-3.752 4.36-1.591 0-2.897-.734-3.562-1.99l-1.948 1.066c1.045 2.062 3.088 3.105 5.558 3.105ZM95.483 22.725c1.21 0 2.018-.71 2.35-2.109l1.924-7.678c.048-.236.167-.379.38-.379.238 0 .357.143.428.38l1.9 7.677c.332 1.398 1.14 2.11 2.351 2.11 1.164 0 2.138-.712 2.47-2.133l2.209-9.787h-2.185l-2.066 9.336c-.072.285-.19.427-.404.427-.238 0-.356-.142-.428-.38l-1.876-7.582c-.356-1.422-1.14-2.085-2.375-2.085s-2.042.687-2.398 2.108l-1.9 7.56c-.048.213-.19.379-.38.379-.262 0-.357-.142-.428-.427l-2.137-9.336h-2.209l2.28 9.787c.332 1.421 1.33 2.132 2.493 2.132ZM115.908 22.701c3.491 0 6.175-2.748 6.175-6.113 0-3.318-2.66-6.067-6.175-6.067-3.491 0-6.222 2.726-6.222 6.067 0 3.365 2.707 6.113 6.222 6.113Zm0-2.227a3.852 3.852 0 0 1-3.871-3.863c0-2.132 1.686-3.886 3.871-3.886 2.161 0 3.824 1.754 3.824 3.886 0 2.11-1.663 3.863-3.824 3.863ZM129.293 12.773c2.327 0 3.515 1.872 3.515 4.052v5.592h2.351V16.54c0-3.364-2.067-6.018-5.866-6.018-3.753 0-5.772 2.653-5.772 6.042v5.853h2.352v-5.616c0-2.156 1.14-4.028 3.42-4.028ZM142.586 28.033c3.705 0 6.413-2.63 6.413-6.659v-4.786c0-3.46-2.684-6.067-6.199-6.067-3.538 0-6.198 2.726-6.198 6.043 0 3.412 2.612 6.019 5.913 6.019 1.948 0 3.373-.9 4.133-2.109v.924c0 2.725-1.663 4.479-4.109 4.479-1.686 0-2.969-.806-3.658-2.062l-1.971 1.066c1.069 2.062 3.159 3.152 5.676 3.152Zm.19-7.654a3.842 3.842 0 0 1-3.847-3.839c0-2.132 1.734-3.791 3.847-3.791 2.138 0 3.848 1.659 3.848 3.791a3.827 3.827 0 0 1-3.848 3.84Z"
        fill={color}
      />
      <path
        d="M4.032 30.528v-8.396a6.72 6.72 0 0 1 6.72-6.72v-3.626C4.812 11.786 0 16.599 0 22.536v7.701a7.84 7.84 0 0 0 15.679 0V4.308h8.614c2.008 0 4.062.265 5.684 1.45 1.88 1.372 4.068 3.832 4.068 7.842 0 3.467-1.636 5.775-3.293 7.224-2.007 1.753-4.785 2.068-7.45 2.068h-1.217a1.927 1.927 0 0 0 0 3.854h2.804c1.77 0 3.558-.133 5.175-.852 3.114-1.384 8.013-4.79 8.013-12.52 0-8.453-5.856-11.736-8.833-12.859C28.14.098 26.956 0 25.776 0H14.662a3.24 3.24 0 0 0-3.239 3.24v27.288a3.696 3.696 0 0 1-7.391 0Z"
        fill="#8548FF"
      />
      <path
        d="M16.352 15.413v-3.626h5.354a1.813 1.813 0 1 1 0 3.626h-5.354Z"
        fill="#8548FF"
      />
    </chakra.svg>
  );
};

export default Logo;
