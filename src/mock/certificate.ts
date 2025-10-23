export interface Certificate {
  id: number;
  title: string;
  description: string;
  images: string[];
  pdfURL?: string;
type: 'image' | 'pdf';
}
