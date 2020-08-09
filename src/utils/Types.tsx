export type DeliveryNote = {
  id: number;
  deliverynote_status: DeliverynoteStatus;
  jdata: any;
  serial: number;
  created_at: String;
  updated_at: String;
};

export type DeliverynoteStatus = {
  id: number;
  status_name: String;
  hexcode: String;
  status_arname: String;
};
