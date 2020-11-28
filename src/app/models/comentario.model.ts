export class ComentarioModel {

    postId: number;
    id: number;
    body: string;
    name: string;
    email: string;
    
    constructor() {
        this.postId = 0;
        this.id = 0;
        this.body = '';
        this.name = '';
        this.email = '';
    }
}       