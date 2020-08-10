export type DeliveryNoteType = {
  id: number;
  deliverynote_status: DeliverynoteStatusType;
  jdata: any;
  serial: number;
  created_at: string;
  updated_at: string;
};

export type DeliverynoteStatusType = {
  id: number;
  status_name: string;
  hexcode: string;
  status_arname: string;
};

export type DeliverynoteDetailsType = {
  id: number;
  quantity: number;
  product: ProductType;
};

export type ProductType = {
  id: number;
  barcode: string;
  cover_img: string;
  name: string;
};

export type UserType = {
  id: number;
  serial: number;
  arname: string;
  user_type: UsertypeType;
};

export type UsertypeType = {
  id: number;
  stype: number;
  arname: string;
  name: string;
};
