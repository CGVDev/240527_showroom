export class TagState{
    constructor(){
        this.tags = [];
    }

    addTag(tag){
        this.tags = [tag];
        return this.recycle();
    }

    cleanTags(){
        this.tags = [];
        return this.recycle();
    }

    recycle(){
        let state = { ...this }
        Object.setPrototypeOf(state, TagState.prototype);
        return state;
    }
}

export class Tag{
    constructor(label, posX, posY){
        this.label = label;
        this.posX = posX;
        this.posY = posY;
    }
}