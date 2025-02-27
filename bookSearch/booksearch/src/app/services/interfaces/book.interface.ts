export interface BookRes {
  kind: string;
  totalItems: number;
  items: ItemsEntity[];
}
export interface ItemsEntity {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo?: SearchInfo | null;
}
export interface VolumeInfo {
  title: string;
  authors?: string[] | null;
  publisher?: string | null;
  publishedDate: string;
  description?: string | null;
  industryIdentifiers?: IndustryIdentifiersEntity[] | null;
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories?: string[] | null;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  averageRating?: number | null;
  ratingsCount?: number | null;
  subtitle?: string | null;
}
export interface IndustryIdentifiersEntity {
  type: string;
  identifier: string;
}
export interface ReadingModes {
  text: boolean;
  image: boolean;
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}
export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
export interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: ListPriceOrRetailPrice | null;
  retailPrice?: ListPriceOrRetailPrice1 | null;
  buyLink?: string | null;
  offers?: OffersEntity[] | null;
}
export interface ListPriceOrRetailPrice {
  amount: number;
  currencyCode: string;
}
export interface ListPriceOrRetailPrice1 {
  amount: number;
  currencyCode: string;
}
export interface OffersEntity {
  finskyOfferType: number;
  listPrice: ListPriceOrRetailPrice2;
  retailPrice: ListPriceOrRetailPrice2;
  giftable?: boolean | null;
  rentalDuration?: RentalDuration | null;
}
export interface ListPriceOrRetailPrice2 {
  amountInMicros: number;
  currencyCode: string;
}
export interface RentalDuration {
  unit: string;
  count: number;
}
export interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: EpubOrPdf;
  pdf: EpubOrPdf;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}
export interface EpubOrPdf {
  isAvailable: boolean;
  acsTokenLink?: string | null;
  downloadLink?: string | null;
}
export interface SearchInfo {
  textSnippet: string;
}

export interface ExpectBook {
  bookName: string;
  bookPic?: string;
  publisher?: string;
  publishDate?: string;
  descriptioin?: string;
}
