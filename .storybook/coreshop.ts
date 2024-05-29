import { create } from "@storybook/theming/create";
// @ts-ignore
import Logo from '../stories/assets/img/coreshop.svg';

export default create({
  base: "light",
  brandTitle: "Coreshop",
  brandUrl: "https://demo4.coreshop.org/en/shop",
  brandImage: Logo,
  brandTarget: "_self",
});