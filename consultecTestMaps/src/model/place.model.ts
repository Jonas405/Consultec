export class Place {
    public titulo : string;
    public lat: number;
    public lng: number;

    constructor ( titulo: string, lat: number, lng: number) {
        this.titulo = titulo;
        this.lat = lat;
        this.lng = lng;
    }
}