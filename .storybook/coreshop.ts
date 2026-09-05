import { create } from "@storybook/theming/create";
// @ts-ignore
import Logo from '../stories/assets/img/coreshop.svg';

export default create({
  base: "light",
  brandTitle: "Coreshop",
  brandUrl: "https://enterprise.coreshop.dev/en/shop",
  brandImage: Logo,
  brandTarget: "_self",
});