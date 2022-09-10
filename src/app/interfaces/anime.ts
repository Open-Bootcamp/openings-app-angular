export interface Anime {
  id: string;
  name: string;
  opName: string;
  imageSrc: string;
  openings: Opening[];

}

interface Opening {
  title: string,
  op: string
}
