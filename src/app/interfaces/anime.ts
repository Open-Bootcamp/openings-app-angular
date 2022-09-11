export interface Anime {
  id: string;
  name: string;
  opName: string;
  imageSrc: string;
  openings: Opening[];

}

 export interface Opening {
  title: string,
  op: string
}
