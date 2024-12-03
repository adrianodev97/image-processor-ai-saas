export const navLinks = [
  {
    label: "Início",
    route: "/",
    icon: "/assets/icons/home.svg",
  },
  {
    label: "Restaurar Imagem",
    route: "/transformations/add/restore",
    icon: "/assets/icons/image.svg",
  },
  {
    label: "Preencher Imagem",
    route: "/transformations/add/fill",
    icon: "/assets/icons/stars.svg",
  },
  {
    label: "Remover Objeto",
    route: "/transformations/add/remove",
    icon: "/assets/icons/scan.svg",
  },
  {
    label: "Recolorir Objeto",
    route: "/transformations/add/recolor",
    icon: "/assets/icons/filter.svg",
  },
  {
    label: "Remover Fundo",
    route: "/transformations/add/removeBackground",
    icon: "/assets/icons/camera.svg",
  },
];

export const transformationTypes = {
  restore: {
    type: "restore",
    title: "Restaurar Imagem",
    subTitle: "Refine imagens removendo ruídos e imperfeições",
    config: { restore: true },
    icon: "image.svg",
  },
  removeBackground: {
    type: "removeBackground",
    title: "Remover Fundo",
    subTitle: "Remove o fundo da imagem usando IA",
    config: { removeBackground: true },
    icon: "camera.svg",
  },
  fill: {
    type: "fill",
    title: "Preenchimento Generativo",
    subTitle: "Aumente as dimensões de uma imagem usando IA",
    config: { fillBackground: true },
    icon: "stars.svg",
  },
  remove: {
    type: "remove",
    title: "Remover Objeto",
    subTitle: "Identifique e elimine objetos das imagens",
    config: {
      remove: { prompt: "", removeShadow: true, multiple: true },
    },
    icon: "scan.svg",
  },
  recolor: {
    type: "recolor",
    title: "Recolorir Objeto",
    subTitle: "Identifique e recolorize objetos da imagem",
    config: {
      recolor: { prompt: "", to: "", multiple: true },
    },
    icon: "filter.svg",
  },
};

export const aspectRatioOptions = {
  "1:1": {
    aspectRatio: "1:1",
    label: "Quadrado (1:1)",
    width: 1000,
    height: 1000,
  },
  "3:4": {
    aspectRatio: "3:4",
    label: "Retrato Padrão (3:4)",
    width: 1000,
    height: 1334,
  },
  "9:16": {
    aspectRatio: "9:16",
    label: "Retrato de Telefone (9:16)",
    width: 1000,
    height: 1778,
  },
};

export const defaultValues = {
  title: "",
  aspectRatio: "",
  color: "",
  prompt: "",
  publicId: "",
};
