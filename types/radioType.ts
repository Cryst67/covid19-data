export type radioType = {
  id: string;
  label: string;
  childRadio?: any[];
};

export type radioButtonsType = {
  [key: string]: radioType[];
};
