export class Reference {
    id: number;
    client: string;
    location: string;
    description: string;
    area: string;

    constructor(id: number, client: string, location: string, description: string, area: string) {
        this.id = id;
        this.client = client;
        this.location = location;
        this.description = description;
        this.area = area;
    }
}